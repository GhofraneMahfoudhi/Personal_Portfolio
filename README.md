# Personal Portfolio

## Table of Contents
- [Portfolio Overview](#portfolio-overview)
- [Technologies Used](#technologies-used)
  - [React](#react)
  - [JavaScript](#javascript)
  - [TailwindCSS](#tailwindcss)
  - [Framer Motion](#framer-motion)
  - [Vercel](#vercel)
- [Website Sections](#website-sections)
  - [Home](#home)
  - [About Me](#about-me)
  - [Professional Experience](#professional-experience)
  - [Latest Projects](#latest-projects)
  - [Certificates Earned](#certificates-earned)
  - [Volunteering](#volunteering)

---

## Portfolio Overview
This repository contains the source code for my personal portfolio website. The portfolio serves as a digital representation of my skills, experiences, projects, and certifications. It is designed to be visually appealing and interactive, providing an engaging experience for visitors interested in my professional background.

---

## Technologies Used

### React
``React`` is a powerful and efficient `JavaScript` library for building user interfaces. It was chosen due to its component-based architecture, making it easier to maintain and scale.

### JavaScript
``JavaScript`` is the core programming language of web development, enabling dynamic content and interactivity. It is used in conjunction with React to handle logic, state management, and event handling within the portfolio.

### TailwindCSS
``TailwindCSS`` is a utility-first ``CSS`` framework that allows for rapid styling and customization. It was chosen for this project to ensure a clean, consistent, and responsive design without writing extensive custom CSS. ``TailwindCSS`` simplifies styling with its pre-defined classes, improving development speed.

### Framer Motion
``Framer Motion`` is an animation library for React that provides smooth and engaging animations. It enhances the user experience by adding motion effects, making the website feel more interactive and modern.

### Vercel
``Vercel`` is a cloud platform for frontend deployment, offering fast and reliable hosting. It was selected for this project due to its seamless integration with GitHub, automatic deployments, and optimized performance, ensuring a smooth and efficient hosting solution.

---

## Website Sections

### Home
The ``Home`` section is the landing page of the portfolio. 

### About Me
The ``About Me`` section provides a brief introduction to who I am, my background, my skills, and my career aspirations. 

### Professional Experience
The ``Professional Experience`` section highlights my work history, including internships and roles I have undertaken. 

### Latest Projects
The ``Latest Projects`` section showcases my recent work in different fields. Each project is linked to its GitHub repository.

### Certificates Earned
The ``Certificates Earned`` section lists the certifications I have completed in AI, cloud computing, and other relevant fields.

### Volunteering
The ``Volunteering`` section highlights my contributions to various organizations and communities. It showcases my leadership and event management experience.

---

## Conclusion
This portfolio is a showcase of my skills, experiences, and achievements. Feedback and contributions are always welcome!

--- 

## Contact
If you have any inquiries, feel free to reach out via [LinkedIn](https://www.linkedin.com/in/farah-elloumi-735ab1269/) or [Email](farah.elloumi@supcom.tn).

---

## Deployment (publish a public link)

You can publish this portfolio with a single public URL (like the one shown on LinkedIn). Two easy options:

- GitHub Pages (automatic via the included GitHub Actions workflow):
  1. Push your repository to GitHub under your account (e.g. `GhofraneMahfoudhi/Personal_Portfolio`).
  2. The workflow `.github/workflows/deploy.yml` will build and deploy the `dist/` folder to the `gh-pages` branch on each push to `main`.
  3. In the GitHub repository Settings → Pages, set the source to the `gh-pages` branch (root). GitHub gives you a URL like `https://<your-username>.github.io/Personal_Portfolio/`.

- Vercel (recommended — very simple and fast):
  1. Create a Vercel account and connect your GitHub repo.
  2. Vercel will auto-detect the project (Framework: Vite). Use the default build command `npm run build` and output directory `dist`.
  3. Deploy — Vercel gives you a custom domain, and you can set a custom domain `ghofrane-mahfoudhi.com` if you buy one. The public link is ready to share.

PowerShell quick commands (example) — push and trigger GitHub Pages deploy:
```powershell
git add .
git commit -m "Prepare site for deployment"
git push origin main
```

If you want, I can:
- Help push the repo to your GitHub account and configure the Pages settings.
- Configure a Vercel deployment and show the resulting public URL.
