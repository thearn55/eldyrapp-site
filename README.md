# Eldyr promotional website

Static GitHub Pages website for eldyrapp.com. No build step, analytics, ads, or browser-app launch button.

Preview: `python3 -m http.server 4173` from this directory, then open http://localhost:4173.

Publish the contents of this folder to the root of the existing `thearn55/eldyrapp-site` repository. Keep GitHub Pages on main / root, with eldyrapp.com and HTTPS enabled. Commit through GitHub so the change can be reverted. Do not change the native app repository or DNS.

The screenshots are the supplied authentic screenshots, with no altered data. The November 20 release layout removes upcoming-update language now that the user has confirmed approval. Apparel is a concept preview, with no launch date, prices, or product specifications promised.

The privacy policy is copied from the current app source. Support is retained with Eldyr branding. `account.html` and `assets/` retain the existing website's email-account flow for older links. The new home redirects auth callbacks to that page only. This fallback is intentionally not linked in the promotional navigation. Test an actual recovery email with a dedicated test account before deploying; local checks cannot verify Supabase email configuration or a real session.

Before publishing: verify Home / workout / nutrition images, expanded screenshot gallery, App Store button, support and privacy URLs, and legacy account recovery. Preserve all bundled assets.
