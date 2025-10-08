# Changelog

All notable changes to PainChek Tracker will be documented in this file.

## [1.1.0] - 2025-10-08

### 🔒 Security & Stability (MAJOR IMPROVEMENTS)

#### Added
- **Netlify Functions** - Replaced third-party CORS proxy (corsproxy.io) with self-hosted Netlify Functions
  - `stock-proxy.js` - Proxies Yahoo Finance API with input validation and caching
  - `asx-proxy.js` - Proxies ASX announcements with input validation and caching
  - Better security: Input validation on server-side
  - Better reliability: No third-party dependency
  - Better performance: Response caching (1min stocks, 5min news)

- **Comprehensive Input Validation** - Prevents corrupt localStorage data
  - Validates date: not in future, not before 1900, valid format
  - Validates shares: positive number, under 1 billion
  - Validates price: positive, under $10,000 (reasonable for PCK)
  - Shows all validation errors at once (not just first)

- **Retry Logic with Exponential Backoff** - Handles network failures gracefully
  - 3 attempts max for all API calls
  - Backoff timing: 1s, 2s, 4s between retries
  - Skips retry on client errors (4xx)
  - Resilient to temporary network issues

- **localStorage Data Validation** - Prevents crashes from corrupted data
  - Validates JSON structure on read
  - Validates tranche objects have required fields
  - Auto-clears corrupted data with error logging
  - Graceful error handling

- **localStorage Quota Exceeded Handling** - Better UX when storage full
  - All writes wrapped in try-catch
  - Detects QuotaExceededError specifically
  - Alerts users with actionable message (export CSV)
  - Prevents silent failures

#### Fixed
- **CRITICAL: Historical price lookup** - Was completely broken!
  - Bug: Grabbed first price from 5-year dataset instead of matching purchase date
  - Impact: All auto-lookup tranches had wrong purchase prices
  - Fix: Now finds closest timestamp to target date (within 7 days)
  - Logs lookup result to console for verification
  - **Users must edit existing tranches to get correct prices**

### ✨ Features

#### Added
- **Edit Tranche Functionality** - No more delete/re-add!
  - Pencil icon button on each tranche
  - Pre-fills form with current values
  - Supports auto-lookup if price field cleared
  - Cancel button properly resets state
  - Perfect for fixing wrong historical prices

### 🎨 UI/UX Improvements

#### Changed
- **Chart Timeframe** - 1 year → 3 months for better penny stock visibility
  - Less noise from long-term volatility
  - Volume patterns more visible
  - Easier to correlate with recent ASX announcements
  - Aligns with quarterly reporting cycles

- **Quick Stats Styling** - Harmonized with other cards
  - Removed blue gradient background → white
  - Removed blue border
  - Changed inner cards to subtle gray (bg-slate-50)
  - Removed icon from heading
  - Consistent with rest of page design

- **Card Ordering** - Optimized for returning users
  - New order: Header → Quick Stats → Tranches → Charts → Utilities → News
  - Tranches moved above charts (easier access for data entry)
  - All charts grouped together (Portfolio + Price/Volume)
  - Better visual flow

#### Removed
- **Days Since Last Purchase Banner** - Too noisy
  - Removed amber warning banner that showed for any gap
  - Users still have "Days Held" in Quick Stats
  - Less visual clutter

### 🚀 Performance

#### Optimized
- **Memoized Portfolio History Calculation** - Faster rendering
  - Converted `calculatePortfolioHistory()` to `useMemo`
  - Only recalculates when tranches or chartData changes
  - Prevents expensive operations on every render
  - Especially beneficial for users with many tranches

### 📖 Documentation

#### Added
- `TESTING_CHECKLIST.md` - Comprehensive testing guide
- `CHANGELOG.md` - This file
- Updated `PROJECT_CONTEXT.md` - Recent changes, known issues
- Updated `USER_GUIDE.html` - 3-month chart timeframe, URL migration troubleshooting

#### Fixed
- Removed broken footer links from `USER_GUIDE.html`
  - CODE_REVIEW.html (didn't exist)
  - DOCUMENTATION_INDEX.html (didn't exist)

### 🐛 Known Issues (Not Fixed Yet)

#### Critical (Batch 2 - Next Priority)
- Chart instances stored on DOM elements instead of React refs (memory leak)
- Missing useEffect dependencies (React Hooks violations)

#### Important (Batch 3)
- Charts recreated instead of updated (performance + flicker)
- Heavy calculations not all memoized
- Missing accessibility features (ARIA labels, keyboard nav)
- Error handling gaps in several functions
- Date parsing timezone issues

### ⚠️ Breaking Changes
**NONE** - All changes are backward compatible. localStorage data structure unchanged.

### 🔄 Migration Notes

#### For Existing Users:
1. **Historical Prices May Be Wrong** - If you used auto-lookup before Oct 8:
   - Click the pencil icon (Edit) on each tranche
   - Clear the price field
   - Click "Update Tranche"
   - System will fetch correct historical price
   - Check browser console to verify

2. **URL Migration** - If switching between URLs:
   - Old: `painchek-tracker.netlify.app`
   - New: `painchek.jonathonmarsden.com`
   - Data doesn't transfer (browser localStorage is domain-specific)
   - Export CSV from old URL, re-add tranches on new URL
   - See USER_GUIDE.html troubleshooting section

### 📊 Statistics
- **Commits:** 13
- **Files Changed:** 8
- **Lines Added:** ~500
- **Lines Removed:** ~150
- **localStorage Impact:** Zero (data safe)

---

## [1.0.0] - 2025-10-07

### Initial Release
- Portfolio tracking for PCK (PainChek Ltd - ASX:PCK)
- Live price data from Yahoo Finance (15-20 min delay)
- Add/delete tranches with auto-lookup historical prices
- Portfolio performance chart
- Price & volume charts (1 year)
- Quick stats panel
- Price alerts
- CSV export
- ASX announcements feed
- 100% client-side (no backend, no accounts)
- localStorage for data persistence

---

**Format:** Based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
**Versioning:** [Semantic Versioning](https://semver.org/)
