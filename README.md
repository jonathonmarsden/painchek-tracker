# PainChek Tracker

A private, secure stock tracking application for monitoring PainChek (ASX:PCK) portfolio holdings.

## 🔒 Privacy First

- **100% Local Storage** - All your portfolio data stays on your device
- **No Data Sharing** - Nothing is sent to servers or third parties
- **No Tracking** - No analytics or user monitoring
- **Your Data, Your Device** - Complete privacy guaranteed

## 📊 Features

- Real-time stock price tracking (15-20 min delayed per ASX requirements)
- Multi-tranche portfolio management
- Historical price lookup for purchase dates
- Automatic gain/loss calculations
- Price history charts (1 year)
- ASX announcements feed
- Mobile-optimized for iPad and iPhone

## 🚀 Deployment

This project is configured for Netlify deployment:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
netlify deploy --prod
```

## 📱 iOS Home Screen

Once deployed:
1. Open Safari on your iPhone/iPad
2. Navigate to your Netlify URL
3. Tap Share → "Add to Home Screen"
4. Enjoy a native app-like experience!

## 🛠️ Tech Stack

- React 18
- Recharts for data visualization
- Tailwind CSS for styling
- Yahoo Finance API for stock data
- Local Storage for data persistence

## 📖 Data Sources

- **Stock Prices**: Yahoo Finance API (industry standard, 15-20 min delay)
- **Historical Data**: Yahoo Finance historical price lookup
- **News**: ASX announcements from PainChek Investor Relations
- **No estimates or simulated data** - real data only

## 🔧 Development

Open in VS Code and use Claude Code for easy updates:

```bash
code /Users/jonathonmarsden/Projects/painchek-tracker
```

Ask Claude Code to add features like:
- Dark mode
- Export to CSV
- Additional technical indicators
- Price alerts

## 📄 License

Private use only - for tracking personal PainChek holdings.

---

**Built with privacy and accuracy in mind.**
