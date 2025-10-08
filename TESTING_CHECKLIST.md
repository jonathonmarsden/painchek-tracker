# PainChek Tracker - Testing Checklist

## Recent Changes to Test (Oct 8, 2025)

### ✅ Security & Stability Improvements

#### 1. Netlify Functions (Replace CORS Proxy)
**What changed:** API calls now go through Netlify Functions instead of corsproxy.io

**Test:**
- [ ] Open app - does it load stock price?
- [ ] Check browser console - any errors from `/.netlify/functions/stock-proxy`?
- [ ] Check Recent Announcements - do they load?
- [ ] Wait 5 minutes and refresh - does data reload properly?
- [ ] Check browser Network tab - confirm requests go to `/.netlify/functions/` not `corsproxy.io`

**Expected:** Everything works the same, but more reliable

---

#### 2. Historical Price Lookup Fix (CRITICAL BUG FIX)
**What changed:** Auto-lookup now finds correct price for purchase date

**Test:**
- [ ] Add new tranche with auto-lookup (leave price blank)
- [ ] Check browser console for: `Historical price lookup: [date] → [date] = $X.XX`
- [ ] Verify the price looks correct for that date
- [ ] Try a weekend date - should find nearest weekday price
- [ ] Try a very old date (2020) - should still work

**Expected:** Correct historical price, not random old price

---

#### 3. Edit Tranche Feature
**What changed:** Can now edit existing tranches instead of delete/re-add

**Test:**
- [ ] Click pencil icon on existing tranche
- [ ] Form should pre-fill with current values
- [ ] Header shows "Edit Tranche" instead of "Add New Tranche"
- [ ] Button says "Update Tranche" instead of "Add Tranche"
- [ ] Change date and click Update - should save
- [ ] Click pencil, then Cancel - should reset form
- [ ] Edit and clear price field - should auto-lookup new price

**Expected:** Smooth editing experience

**Fix Your Wrong Price:**
1. Click pencil icon on your Sept 4th tranche
2. Clear the price field (delete $0.10)
3. Click "Update Tranche"
4. Check console for correct price
5. Gain/Loss should now be accurate!

---

#### 4. Input Validation
**What changed:** Better error messages for invalid inputs

**Test:**
- [ ] Try adding tranche with future date - should error
- [ ] Try adding tranche with negative shares - should error
- [ ] Try adding tranche with price = $99999 - should error
- [ ] Try adding tranche with shares = 0 - should error
- [ ] Error messages should list all problems, not just first one

**Expected:** Clear, helpful error messages

---

#### 5. localStorage Validation
**What changed:** App validates data when loading from localStorage

**Test (Advanced):**
- [ ] Open browser DevTools → Application → Local Storage
- [ ] Find `pck-tranches` key
- [ ] Manually corrupt the JSON (add `{corrupted}`)
- [ ] Refresh page
- [ ] Check console - should say "Invalid tranches data in localStorage, clearing..."
- [ ] App should load with empty tranches, not crash

**Expected:** Graceful handling of corrupted data

---

#### 6. localStorage Quota Handling
**What changed:** Alerts user when storage is full

**Test (Hard to simulate):**
- Normal use: Won't trigger unless you have 100+ tranches
- When triggered: Alert says "Storage quota exceeded! Please export your data..."

**Expected:** User gets clear message, not silent failure

---

#### 7. Performance: Memoized Portfolio History
**What changed:** Portfolio chart calculation is now cached

**Test:**
- [ ] Add 5-10 tranches
- [ ] Open browser DevTools → Performance
- [ ] Record performance profile while scrolling page
- [ ] Check if `calculatePortfolioHistory` appears less often

**Expected:** Faster rendering, especially with many tranches

---

### ✅ UI/UX Improvements

#### 8. Chart Timeframe Change (1 year → 3 months)
**What changed:** Price & Volume charts now show 3 months instead of 1 year

**Test:**
- [ ] Check "Price & Volume History (3 Months)" header
- [ ] X-axis should show ~3 months of dates
- [ ] Charts should be less "squished" horizontally
- [ ] Volume spikes more visible

**Expected:** Better chart readability for penny stock

---

#### 9. Quick Stats Styling
**What changed:** Removed blue gradient, matches other cards

**Test:**
- [ ] Quick Stats card should have white background (not blue gradient)
- [ ] Inner stat boxes should be light gray (not white with shadow)
- [ ] Should look consistent with other white cards

**Expected:** Visual consistency across all cards

---

#### 10. Card Reordering
**What changed:** Order is now Header → Quick Stats → Tranches → Charts

**Test:**
- [ ] Scroll down - Quick Stats appears first (after header)
- [ ] Your Tranches appears before charts
- [ ] All charts grouped together (Portfolio, Price, Volume)
- [ ] Price Alerts below charts

**Expected:** Better flow for returning users

---

## Regression Testing (Make Sure Nothing Broke)

### Core Functionality
- [ ] Add tranche with manual price - works
- [ ] Add tranche with auto-lookup - works
- [ ] Edit existing tranche - works
- [ ] Delete tranche - works
- [ ] Export CSV - downloads file with correct data
- [ ] Set price alerts - saves and shows on next visit
- [ ] Refresh data button - updates prices

### Charts
- [ ] Portfolio Performance chart shows
- [ ] Price chart shows (3 months)
- [ ] Volume chart shows (3 months)
- [ ] Charts update when adding/editing tranches

### Data Persistence
- [ ] Close browser tab
- [ ] Reopen app
- [ ] Tranches still there
- [ ] Price alerts still there

### ASX Announcements
- [ ] Recent Announcements section loads
- [ ] 8 announcements shown
- [ ] Price sensitive ones highlighted in red
- [ ] Clicking announcement opens ASX PDF (not HTML)

---

## Known Issues (Not Fixed Yet)

### Critical (Batch 2)
- ⚠️ Chart memory leaks (slow browser over time)
- ⚠️ React Hooks dependencies missing

### Important (Batch 3)
- Chart flickering on data updates
- No keyboard navigation
- Missing ARIA labels

---

## Browser Compatibility

Test on:
- [ ] Chrome/Edge (latest)
- [ ] Safari (iOS/macOS)
- [ ] Firefox (latest)
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iOS)

---

## Performance Baseline

With 10 tranches:
- [ ] Page load < 3 seconds
- [ ] Chart render < 1 second
- [ ] Add tranche < 500ms
- [ ] No console errors

---

## If Something Breaks

1. **Check browser console** (F12 → Console)
2. **Check Network tab** (F12 → Network) - look for failed requests
3. **Clear localStorage** (Application → Local Storage → Clear All)
4. **Hard refresh** (Ctrl+Shift+R or Cmd+Shift+R)
5. **Report issue with:**
   - Browser and version
   - Console errors (screenshot)
   - Steps to reproduce

---

## Today's Accomplishments Summary

**Security:**
- ✅ Removed third-party CORS proxy dependency
- ✅ Added input validation
- ✅ Added localStorage validation
- ✅ Added retry logic with exponential backoff

**Bug Fixes:**
- ✅ Fixed historical price lookup (was completely broken!)
- ✅ Added edit functionality

**Performance:**
- ✅ Memoized expensive calculations
- ✅ Added quota exceeded handling

**UX:**
- ✅ Chart timeframe optimized for penny stocks
- ✅ Harmonized visual styling
- ✅ Improved card ordering

**localStorage Impact:** ZERO - all user data safe!

---

**Last Updated:** October 8, 2025
**Version:** 1.1.0
