# SafeStories AI Agent

A responsive therapy booking platform with AI voice integration, built with React and Vite.

## 🌟 Features

- **AI Voice Assistant** - Talk directly with ElevenLabs integration
- **Responsive Design** - Automatic mobile/desktop detection
- **Therapist Booking** - Individual, Couples, and Adolescent therapy
- **Real-time Conversations** - Voice-based therapy sessions

## 🚀 Quick Start

### Development
```bash
# Install dependencies
npm install

# Run desktop version
npm run dev

# Run mobile version
cd mobile && npm install && npm run dev

# Run responsive version (auto-detects device)
npm run dev-responsive
```

### Production Build
```bash
# Build responsive version
npm run build-responsive

# Preview build
npm run preview
```

## 📱 Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Set build settings:
   - **Build Command**: `npm run build-responsive`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Manual Deployment
```bash
npm run build-responsive
# Deploy dist/ folder to your hosting provider
```

## 🏗️ Project Structure

```
├── src/                    # Desktop version
├── mobile/src/            # Mobile version  
├── public/                # Static assets
├── ResponsiveApp.jsx      # Device detection logic
└── vite.config.responsive.js # Responsive build config
```

## 🔧 Configuration

### Environment Variables
- ElevenLabs Agent ID: `agent_0701kazhwzywftzbf33rq27eaa36`
- Image URLs: Configured in `imageConfig.js`

### Therapist Links
- Individual Therapy: Anjali Pillai, Ishika Mahajan
- Couples Therapy: Ishika Mahajan  
- Adolescent Therapy: Anjali Pillai, Ishika Mahajan

## 📞 External Integrations

- **ElevenLabs**: AI voice conversations
- **DaySchedule**: Therapist booking system
- **Google Cloud Storage**: Image hosting

## 🛠️ Tech Stack

- React 19.2.0
- Vite 7.2.4
- ElevenLabs React SDK
- Styled Components
- Responsive CSS

## 📄 License

All Rights Reserved. 2025 SafeStories.

---

**Live Demo**: Deploy to get your live URL
**Support**: Contact SafeStories team for assistance