# Konek Web - Preview Site for Deep Linking

This is the web preview site for Konek app sharing. It provides preview pages for activities, teams, and profiles that work with universal links/app links.

## Features

- 🔗 Universal Links (iOS) and App Links (Android) support
- 📱 Smart deep linking - opens in app if installed
- 🖼️ Rich preview pages with OpenGraph tags for social media
- 🎯 Activity, Team, and Profile preview pages
- 📲 Download instructions for TestFlight and APK

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp .env.local.example .env.local
```

3. Fill in your Supabase credentials in `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Configuration

### Apple App Site Association
Edit `public/.well-known/apple-app-site-association`:
- Replace `YOUR_TEAM_ID` with your Apple Developer Team ID

### Android Asset Links
Edit `public/.well-known/assetlinks.json`:
- Replace `YOUR_SHA256_FINGERPRINT_HERE` with your app's SHA256 certificate fingerprint

To get your Android SHA256 fingerprint:
```bash
keytool -list -v -keystore your-release-key.keystore
```

## Deployment to Vercel

1. Push this repository to GitHub
2. Import to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Important Vercel Configuration

Make sure your domain is properly configured:
- Main domain: konek.app (or your domain)
- SSL certificate active
- DNS properly configured

## How It Works

1. User shares a link like `https://konek.app/activity/123`
2. If app is installed:
   - iOS/Android intercepts the URL
   - Opens directly in the app
3. If app is not installed:
   - Opens this web preview
   - Shows activity details
   - Provides "Open in App" button
   - Shows download instructions

## Project Structure

```
konek-web/
├── app/
│   ├── activity/[id]/   # Activity preview pages
│   ├── team/[id]/       # Team preview pages
│   ├── profile/[id]/    # Profile preview pages
│   └── layout.tsx       # Root layout with metadata
├── components/
│   ├── ActivityPreview.tsx    # Activity preview component
│   ├── DeepLinkButton.tsx     # Smart "Open in App" button
│   └── AppDownloadBanner.tsx  # Download instructions
├── lib/
│   └── supabase.ts      # Supabase client
└── public/
    └── .well-known/     # Universal links configuration
```

## Testing Deep Links

### iOS Simulator
```bash
xcrun simctl openurl booted "https://konek.app/activity/123"
```

### Android Emulator
```bash
adb shell am start -W -a android.intent.action.VIEW -d "https://konek.app/activity/123"
```

### Physical Device
Simply click on a shared link or scan a QR code with the URL.

## Troubleshooting

### Links not opening in app
1. Ensure app is installed
2. Check universal links configuration
3. Verify domain SSL certificate
4. Check app entitlements (iOS) or intent filters (Android)

### Preview not loading
1. Check Supabase credentials
2. Verify database permissions
3. Check console for errors

## Support

For issues or questions, contact the Konek development team.