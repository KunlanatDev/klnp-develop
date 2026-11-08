# KLNP Develop — Developer Portfolio

React + TypeScript + Vite + MUI + Redux Toolkit. Static site on Firebase Hosting (no server, no database in v1).

## Run
    npm install
    cp .env.example .env.local      # fill VITE_WEB3FORMS_KEY and VITE_CONTACT_EMAIL
    npm run dev

## Deploy (free Spark plan)
    firebase login
    npm run deploy                  # https://klnp-develop.web.app

## Where to edit
- Name, links, availability: `src/config/brand.ts`
- Projects: `src/data/projects.ts` · Tech: `src/data/techStack.ts` · Services: `src/data/services.ts`
- About text: `src/pages/Home/sections/AboutSection.tsx`
- Resume: put `public/resume/resume.pdf`

## Add a theme
Copy a block in `src/theme/palettes.ts`, change colors, add it to `palettes`. The theme button cycles through all of them.

## Shared tools
- Toast: `dispatch(showToast({ message, severity }))`
- Confirm dialog: `if (await confirmDialog({ title, message })) { ... }`
- Errors: `try { } catch (e) { handleError(e) }`

## Flutter demos
    flutter create flutter_apps/shop_app
    bash scripts/build-flutter.sh shop_app shop-app
Then set `flutterDemo: { path: '/demos/shop-app/' }` on the project.
