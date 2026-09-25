# Preserve the existing website

This is a complete static website, not a request to generate a new design.
Run `npm run dev` for preview (PORT environment variable, default 3000, host 0.0.0.0).
No installation is required; server.js uses only Node built-ins.
Run `npm run build` to validate local asset references. Vercel serves dist directly.
Preserve dist/index.html, both CSS files, both browser scripts and all 18 local images.
Do not replace this site with React, Tailwind, placeholder imagery or a newly generated page.
Do not delete or regenerate dist: it is the authoritative source for this static project.
Only change visible design or content when explicitly requested by the user.
If preview fails, diagnose the server and file paths without rewriting the visual design.
