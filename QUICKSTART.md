# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd portfolio-main/next-portfolio
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Customize Your Portfolio

#### Update Personal Information

**Hero Section** (`src/components/Hero.tsx`):
- Line 60-62: Update your name
- Line 68-76: Modify typewriter animation text
- Line 82: Update subtitle/roles
- Line 86: Update additional roles
- Line 107-119: Update social media links (GitHub, LinkedIn)

**About Section** (`src/components/About.tsx`):
- Line 42-56: Update your bio and story
- Line 77-82: Update education details
- Line 99-106: Update "What I Do" items

**Projects** (`src/components/Projects.tsx`):
- Line 8-28: Update FASTPARK project details
- Line 30-51: Update other projects
- Replace images in `/public/assets/`

**Skills** (`src/components/Skills.tsx`):
- Line 7-56: Update skill categories and proficiency levels

**Achievements** (`src/components/Achievements.tsx`):
- Line 7-12: Update metrics (certifications, hackathons, etc.)
- Line 14-32: Update hackathon achievements

**Contact** (`src/components/Contact.tsx`):
- Line 51: Update email address
- Line 63: Update location
- Line 73 & 85: Update social links

#### Replace Assets

Place your files in `/public/assets/`:
- `holographic-bg.png` - Background image for hero section
- `project-fastpark.png` - FASTPARK project screenshot
- `project-election.png` - Election Assistant screenshot
- `Koushik_S_Resume.docx` - Your resume file

## 🎨 Color Customization

Edit `src/app/globals.css` to change colors:
- `--color-primary`: Main cyan color (#00d4ff)
- `--color-secondary`: Purple accent (#7b2ff7)
- `--color-accent`: Pink accent (#ff006e)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
Build the project and deploy the `.next` folder.

## 🎯 Features Included

✅ Loading screen with progress bar
✅ Custom cursor
✅ Scroll progress indicator
✅ Particle background
✅ Smooth animations
✅ Glassmorphism design
✅ Responsive mobile design
✅ SEO optimized
✅ Fast performance

## 📝 Notes

- Update social links with your actual profiles
- Replace placeholder email with your real email
- Add your actual resume file
- Update project images and descriptions
- Customize colors to match your brand

## 🆘 Need Help?

Check the main README.md for detailed documentation.

---

**Built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion**
