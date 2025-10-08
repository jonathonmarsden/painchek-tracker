# 📊 PainChek Tracker - Project Context

> **Registry Entry:** `/Users/jonathonmarsden/Projects/PROJECT_REGISTRY.md` (Entry #1)  
> **Last Updated:** October 7, 2025  
> **Status:** 📦 Ready for deployment (Phase 1 - HIGH priority)

---

## 🎯 PROJECT IDENTITY

**Name:** PainChek Tracker  
**Folder:** `/Users/jonathonmarsden/Projects/painchek-tracker/`  
**Type:** React SPA (single HTML file with CDN imports)  
**Category:** Portfolio Project

---

## 🌟 PURPOSE & VISION

### What It Is:
A private stock portfolio tracker specifically for PainChek (ASX:PCK) shares. Helps investors track multiple purchases, calculate average buy price, and monitor current value with real-time price updates.

### Why It Exists:
- **Primary Goal:** Portfolio piece to demonstrate React proficiency to employers
- **Use Case:** Functional tool for PCK investors to track their holdings privately
- **Showcase Value:** Shows clean React code, component design, state management, and practical problem-solving

### Target Audience:
- Potential employers reviewing portfolio (primary)
- PainChek investors needing a simple tracker (secondary)

---

## 🔗 URLS & DEPLOYMENT

### Live URLs:
- **Primary App:** https://painchek.jonathonmarsden.com (NEW - added Oct 7, 2025)
- **Legacy URL:** https://painchek-tracker.netlify.app (ORIGINAL - still active)
- **Showcase Page:** https://jonathonmarsden.com/projects/painchek (pending)
- **GitHub Repo:** https://github.com/jonathonmarsden/painchek-tracker

### ⚠️ IMPORTANT: localStorage Migration Issue
**Problem:** Both URLs are live, but localStorage is domain-specific. Users who had data at the Netlify URL won't see it at the custom domain URL.

**Impact:** Users reported missing tranches after visiting the new domain (Oct 8, 2025).

**Root Cause:**
- `painchek-tracker.netlify.app` localStorage ≠ `painchek.jonathonmarsden.com` localStorage
- Data doesn't automatically transfer between domains
- Users need to export from old URL and import to new URL

**Solution Options:**
1. Add migration helper banner in app
2. Redirect old domain to new (users must export first)
3. Document manual export/import process
4. Keep both URLs active (users choose)

### Deployment:
- **Platform:** Netlify
- **Connected to:** GitHub (auto-deploy on push)
- **Custom Domain:** painchek.jonathonmarsden.com (via Cloudflare DNS)
- **HTTPS:** Automatic (Netlify SSL)
- **Status:** ✅ Deployed (Oct 7, 2025)

---

## 📦 TECH STACK

**Core Technologies:**
- **Framework:** React 18 (via CDN - unpkg.com)
- **Styling:** Tailwind CSS (via CDN)
- **Icons:** Lucide React (via CDN)
- **State Management:** React hooks (useState, useEffect)
- **Data Persistence:** Browser Local Storage
- **Build Tool:** None (single HTML file)

**Why This Stack:**
- Single file deployment (simplicity)
- No build process needed
- Easy to understand code structure
- Shows React fundamentals clearly
- Perfect for portfolio demonstration

---

## 🎨 SHOWCASE STRATEGY

### Visibility:
- **Showcase Tier:** Featured
- **Listed On:**
  - jonathonmarsden.com (main portfolio - featured project)
  - jonathonmarsden.com/projects (projects hub)
  - apps.jonathonmarsden.com (apps collection hub)

### Showcase Page Content:

**Should Highlight:**
1. **Problem:** PCK investors need a simple, private way to track their holdings across multiple purchases without spreadsheets or complex tools
2. **Solution:** Clean React web app that calculates average buy price, tracks current value, and persists data locally (no account needed)
3. **Key Features:**
   - Track multiple stock purchases
   - Calculate weighted average buy price
   - Show current value with profit/loss
   - Local storage (privacy-first)
   - Responsive design (works on mobile)
   - No sign-up required
4. **Technical Skills Demonstrated:**
   - React hooks (useState, useEffect, useMemo)
   - Component architecture and composition
   - Local storage management
   - Financial calculations (weighted averages)
   - Responsive design with Tailwind
   - Clean, maintainable code structure
   - User-friendly interface design

**Include on Showcase Page:**
- Large screenshot of the app in use
- GIF showing add/remove holdings flow
- Code snippet showing clean React patterns
- Link to live app
- Link to GitHub repo
- "What I learned" section

---

## 🔐 GITHUB STRATEGY

### Repository:
- **Visibility:** Public
- **URL:** https://github.com/jonathonmarsden/painchek-tracker
- **License:** MIT

### Why Public:
- Portfolio project - I want employers to see the code
- Demonstrates clean coding practices and React proficiency
- Shows ability to structure a complete, functional app
- No sensitive data (uses client-side local storage only)
- Could be useful to other PCK investors
- Showcases problem-solving approach

### Repository README Should Include:
```markdown
# PainChek Tracker

Private stock portfolio tracker for PainChek (ASX:PCK) shares.

## 🎯 What It Does
Track multiple PCK purchases, calculate your average buy price, 
and monitor current value - all stored privately in your browser.

## 🚀 Live Demo
[https://painchek.jonathonmarsden.com](https://painchek.jonathonmarsden.com)

## 💡 Why I Built This
As a PCK investor, I wanted a simple way to track my holdings 
without spreadsheets. Built with React to demonstrate clean 
component architecture and practical problem-solving.

## 🛠️ Tech Stack
- React 18
- Tailwind CSS
- Local Storage API
- Single HTML file (no build process)

## 🏃 Run Locally
```bash
# Clone the repo
git clone https://github.com/jonathonmarsden/painchek-tracker.git

# Open in browser
open index.html
```

No dependencies, no build process - just open index.html!

## 📝 Features
- ✅ Track multiple purchases
- ✅ Calculate weighted average price
- ✅ Real-time profit/loss tracking
- ✅ Persistent local storage
- ✅ Mobile responsive
- ✅ Privacy-first (no account needed)

## 👨‍💻 About
Built by [Jonathon Marsden](https://jonathonmarsden.com)

Part of my portfolio demonstrating React development skills.
```

---

## 🚀 DEVELOPMENT WORKFLOW

### Project Setup:
```bash
# Navigate to project
cd /Users/jonathonmarsden/Projects/painchek-tracker

# No dependencies to install! Single HTML file.

# Test locally
open index.html
# or
python3 -m http.server 8000
# then open http://localhost:8000
```

### Git Workflow:
```bash
# Check status
git status

# Make changes to index.html
# Test by opening index.html in browser

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Add: Delete individual holdings feature"

# Push to GitHub
git push

# Result: Automatically deploys to Netlify ✨
# Check: https://painchek.jonathonmarsden.com
```

---

## 💡 FUTURE ENHANCEMENTS

**Ideas for v2:**
- ✅ Add price chart visualization (Chart.js) - DONE (Oct 2025)
- ✅ Add export to CSV feature - DONE (Oct 2025)
- Add dividend tracking
- Add support for multiple stocks (not just PCK)
- Add currency conversion (AUD to other currencies)
- Add dark mode toggle
- Add import CSV feature (restore from export)

**Technical Improvements:**
- Add TypeScript for type safety
- Convert to proper build process (Vite)
- Add unit tests (Vitest)
- Add PWA features (offline support)
- Improve accessibility (ARIA labels, keyboard navigation)

---

## 📊 PROJECT STATUS

### Current State:
- [x] Project files created (index.html exists)
- [x] Core functionality complete
- [x] Tested locally
- [x] Git repo initialized
- [x] GitHub repo created (public)
- [x] Pushed to GitHub
- [x] Deployed to Netlify
- [x] Custom domain configured (painchek.jonathonmarsden.com)
- [x] Auto-deploy working
- [ ] Showcase page created
- [ ] Listed on portfolio

### Recent Updates (Oct 8, 2025):
- Harmonized Quick Stats styling (removed gradient)
- Reorganized card layout (Tranches above Charts)
- Changed chart timeframe from 1 year to 3 months
- Fixed localStorage URL migration documentation
- Removed annoying "days since purchase" banner

### Deployment Checklist (Phase 1):
1. [ ] Open project in VS Code
2. [ ] Test locally - verify all features work
3. [ ] Initialize Git: `git init`
4. [ ] First commit: `git add . && git commit -m "Initial commit"`
5. [ ] Create public GitHub repo: `gh repo create painchek-tracker --public`
6. [ ] Push to GitHub: `git push -u origin main`
7. [ ] Connect to Netlify (via GitHub)
8. [ ] Configure custom domain: painchek.jonathonmarsden.com
9. [ ] Verify HTTPS working automatically
10. [ ] Test deployed version
11. [ ] Add to PROJECT_REGISTRY.md as "✅ Deployed"

### Next Steps:
1. **Immediate:** Deploy (Phase 1 - this week)
2. **Phase 4:** Create showcase page at jonathonmarsden.com/projects/painchek
3. **Phase 4:** Take screenshots for showcase
4. **Future:** Consider v2 enhancements

---

## 💡 CLAUDE CODE INSTRUCTIONS

### Context for Claude:
When working on this project, Claude should understand:

1. **Project Status:** Ready for deployment - Phase 1 priority
2. **Visibility:** Public GitHub repo - code will be seen by employers
3. **Deployment:** Will be auto-deploy via GitHub → Netlify
4. **Purpose:** Portfolio project - code quality is important

### Working on This Project:
```
# In project workspace, Claude should:
1. Read ./PROJECT_CONTEXT.md (this file)
2. Read ../PROJECT_REGISTRY.md (portfolio context)
3. Understand this is portfolio-quality code
4. Test changes by opening index.html locally
5. Use descriptive git commits
6. Maintain clean, documented code

# Common tasks:
"Add dark mode toggle to this app"
"Refactor the price calculation to be more efficient"
"Add data export to CSV feature"
"Create README content for GitHub"
"Take a screenshot for the showcase page"
"Add delete functionality for individual holdings"
```

### Quality Standards:
- **Code Quality:** HIGH - This is portfolio code employers will review
- **Documentation:** Code comments where helpful, comprehensive README
- **Testing:** Always test locally before committing
- **Commit Messages:** Descriptive and professional
- **Code Style:** Clean, readable, following React best practices

---

## 🔗 RELATED FILES

**This Project:**
- **Context:** `./PROJECT_CONTEXT.md` (this file)
- **Main File:** `./index.html` (entire app in one file)
- **Git:** `./.git/` (after initialization)
- **README:** `./README.md` (to be created on GitHub)

**Portfolio-Wide:**
- **Registry:** `../PROJECT_REGISTRY.md` (entry #1)
- **Strategy:** `../DEPLOYMENT_STRATEGY.md` (Phase 1)
- **Showcase Plan:** `../SHOWCASE_SYSTEM_VISUAL.md`

---

## 📝 NOTES & LEARNINGS

### What Went Well:
- Single HTML file approach makes deployment trivial
- Local storage works perfectly for this use case
- Clean component structure even in single file
- Tailwind makes responsive design easy

### Challenges Faced:
- Calculating weighted average price correctly
- Deciding between local storage vs. backend
- Making the UI simple but functional

### Key Learnings:
- Not every React app needs a build process
- CDN imports work great for simple apps
- Local storage is powerful for privacy-first apps
- Single file can be well-structured

### Would Do Differently:
- Maybe add TypeScript from the start
- Consider adding chart visualization
- Could use a backend for price updates

---

## 🎯 QUICK REFERENCE

**One-Sentence Summary:**
React-based portfolio tracker for PainChek shares, demonstrating clean component architecture and local storage management.

**Current Status:**
📦 Ready to deploy - Phase 1 priority (HIGH)

**Priority:**
HIGH - Portfolio project that shows React skills to employers

**Last Worked On:**
October 7, 2025 - Initial project creation and planning

---

**Quick Context for Claude:**
"This is a ready-to-deploy portfolio project. Single HTML React app. Will be public GitHub repo with auto-deploy to painchek.jonathonmarsden.com. Showcased as featured project. Code quality is important because employers will review it."
