# Collect Form Data From Next.js Web Application

**DISCLAIMER: This project is created for EDUCATIONAL PURPOSES ONLY. The author does not endorse or encourage any malicious use of this code. Use responsibly and ethically.**

This template demonstrates how to collect form data and send it to a Telegram bot through a Next.js application. It's designed as a learning tool for understanding:
- Next.js API routes
- Form handling in React
- Integration with external APIs (Telegram)
- Centralized configuration management

## Features

- Multiple form collection endpoints
- Centralized Telegram bot configuration
- Responsive UI components
- IP and timestamp tracking
- Error handling

## Configuration

Add your telegram bot details in `app/assets/assets.js`:

```js
export const tgBotData = {
    BOT_TOKEN: 'your_bot_token',
    CHAT_ID: 'your_chat_id'
}
```

Simply replace these values with your own Telegram bot credentials to receive data.

## Deployment on Vercel (Recommended)

The easiest way to deploy this project is using Vercel:

1. **Create a Vercel Account**: Sign up at [vercel.com](https://vercel.com) if you don't have an account

2. **Connect Your GitHub Repository**:
   - Fork this template to your GitHub account
   - In Vercel dashboard, click "New Project"
   - Select your repository from the list
   - Vercel will detect Next.js automatically

3. **Configure Project**:
   - Keep the default settings
   - Add any environment variables if needed
   - Click "Deploy"

Your project will be live at `https://your-project-name.vercel.app`

## Deployment on Your Own Machine

First, clone the repository:

```bash
git clone https://github.com/asrbd-army/phish-tamplate.git
cd phish-tamplate
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## How It Works

1. User submits form data
2. Next.js API route processes the submission
3. Data is formatted with IP address and timestamp
4. Formatted message is sent to your Telegram bot
5. User receives a success response

## Customization

You can easily customize:
- Form fields and validation
- UI design and components
- Message format sent to Telegram
- Success/error responses

## Educational Resources

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Telegram Bot API Documentation](https://core.telegram.org/bots/api)
- [React Forms Guide](https://reactjs.org/docs/forms.html)

## License

This project is shared for educational purposes only. By using this code, you agree to use it responsibly and legally.

## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. The author takes no responsibility for any misuse of this software. This project should be used only for learning and understanding web technologies in an ethical manner.

## Credit
- [ASRBD](https://asrbd.pages.dev)
