# TODO: Fix React useRef null error & black screen in production build

## Steps:

1. ✅ Step 1: Update vite.config.js with React-safe production build settings
   - target: 'es2020'
   - Mild esbuild (remove aggressive drops)
   - sourcemap: true
   
2. ✅ Update main.jsx with root safety check
   
 3. ⏭️ Skipped: Minor Navbar safety (not needed)
   
 4. ✅ Test: Local build & preview passed (no errors, content renders)
   
 5. ✅ Deploy Vercel --prod complete
   Production URL: https://hungry-ghost-dzn-client-8vfa6sx54-jeremy-e-jeffersons-projects.vercel.app
   Test: Hard refresh (Ctrl+Shift+R), unregister SW in DevTools > Application > Service Workers
