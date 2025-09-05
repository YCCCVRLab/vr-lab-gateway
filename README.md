# 🥽 YCCC VR Lab Gateway

**A nostalgic Windows Vista/XP themed portal for the York County Community College VR Lab**

## 🎨 Retro Theme Features

This VR Lab Gateway features authentic Windows Vista and XP themes with:

### Windows XP Theme
- Classic "Bliss" inspired blue-green gradient background
- Authentic XP taskbar with blue gradient styling
- XP-style buttons with orange gradient effects
- Classic "start" button styling
- Retro desktop icons with proper spacing
- Tahoma font family for that authentic feel

### Windows Vista Theme
- Elegant dark gradient backgrounds with aurora effects
- Glass Aero effects with backdrop blur
- Vista-style translucent taskbar
- Modern circular start button (⊞)
- Segoe UI font family
- Sophisticated glass window styling

### Interactive Elements
- **Theme Toggle**: Switch between XP and Vista themes in real-time
- **Desktop Icons**: Click to launch VR Lab applications
- **Taskbar**: Functional start button, quick launch, and system tray
- **Live Clock**: Real-time system clock in the taskbar
- **Modal Windows**: Authentic window chrome with proper headers

## 🚀 Getting Started

### Use Lovable (Recommended)
Simply visit the [Lovable Project](https://lovable.dev/projects/9279a73f-1999-4d81-bf5e-ea48c6fbcab1) and start prompting.

### Local Development
```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd vr-lab-gateway

# Install dependencies
npm i

# Start development server
npm run dev
```

## 🛠️ Tech Stack

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI framework
- **shadcn-ui** - Modern component library
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Retro CSS** - Authentic Windows styling

## 📁 Project Structure

```
src/
├── components/
│   ├── RetroDesktop.tsx     # Main desktop component
│   ├── ThemeToggle.tsx      # XP/Vista theme switcher
│   ├── VRLabLauncher.tsx    # VR Lab application launcher
│   └── ui/                  # shadcn-ui components
├── styles/
│   └── retro-theme.css      # Windows XP/Vista styling
├── pages/
│   └── Index.tsx            # Main page
└── assets/                  # Images and resources
```

## 🎯 Features

- **Authentic Retro Styling**: Pixel-perfect recreation of Windows XP and Vista aesthetics
- **Theme Switching**: Toggle between XP and Vista themes instantly
- **Responsive Design**: Works on desktop and mobile devices
- **VR Lab Integration**: Portal for accessing VR Lab resources
- **Interactive Desktop**: Clickable icons and functional taskbar
- **Real-time Elements**: Live clock and interactive components

## 🎨 Customization

The retro themes are fully customizable through CSS variables and component props. Modify colors, gradients, and effects in `src/styles/retro-theme.css`.

## 📱 Deployment

Deploy instantly via [Lovable](https://lovable.dev/projects/9279a73f-1999-4d81-bf5e-ea48c6fbcab1) by clicking Share → Publish.

## 🌐 Custom Domain

Connect your own domain through Project > Settings > Domains in Lovable.

---

**Built with ❤️ for the YCCC VR Lab community**