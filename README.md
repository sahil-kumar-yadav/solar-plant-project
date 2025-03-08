# 🌞 Solar Energy Solutions Website

A modern, responsive, and user-friendly website for showcasing solar energy solutions, built with **Next.js**, **React**, and **Tailwind CSS**. This project aims to educate users about solar energy, showcase products, and provide tools for booking installations.

---

## 🚀 Features

### 🌟 **Core Features**
- **Homepage**: Highlights the benefits of solar energy with engaging visuals and CTAs.
- **Product Pages**: Detailed information about solar panels, inverters, batteries, and EV chargers.
- **Online Store**: Allows users to request quotes or purchase products directly.
- **Booking System**: Enables users to schedule installation appointments with date validation.
- **Educational Blog**: Provides articles about solar energy benefits, maintenance tips, and product guides.
- **Customer Support**: Includes FAQs, a contact form, and live chat integration.

### 🎨 **UI/UX Highlights**
- Modern design with vibrant colors reflecting sustainability (greens, yellows, blues).
- Fully responsive layout optimized for desktop and mobile devices.
- Hover effects and animations for enhanced interactivity.
- Accessibility-first design with proper contrast and semantic HTML.

### 🛠️ **Technical Features**
- Built with:
  - **Next.js** for server-side rendering (SSR) and static site generation (SSG).
  - **Tailwind CSS** for fast and responsive styling.
  - **React Calendar** for an interactive booking system.
- SEO Optimizations:
  - Metadata management using Next.js `metadata` API.
  - Sitemap generation with `next-sitemap`.
  - Structured data using JSON-LD for rich snippets.
- Integrated live chat via Crisp Chat for real-time customer support.

---

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── products/          # Product pages
│   │   └── [id]/page.tsx  # Dynamic product details
│   ├── blog/              # Blog pages
│   │   └── [slug]/page.tsx # Dynamic blog posts
│   ├── booking/page.tsx   # Booking system
│   └── support/page.tsx   # Customer support page
├── components/            # Reusable components (HeroSection, CrispChat, etc.)
├── data/                  # Static data (e.g., products)
├── public/                # Static assets (images)
└── styles/                # Global styles (Tailwind CSS)
```

---

## 🛠️ Installation & Setup

### Prerequisites
1. Node.js (v16 or higher recommended)
2. npm or yarn package manager

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/solar-energy-website.git
   cd solar-energy-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the project root and add the following environment variables:
   ```env
   NEXT_PUBLIC_CRISP_WEBSITE_ID=your_crisp_website_id
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Deployment

This project is optimized for deployment on **Vercel**, the recommended hosting platform for Next.js apps.

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and import your repository.
3. Configure environment variables in Vercel's dashboard.
4. Deploy your site with one click!

---

## 📖 Usage

### 💻 Local Development
- Modify components or pages in the `src/app` directory to update content or features.
- Use `npm run dev` to preview changes locally.

### 🌐 Production Site
The live version of this project is available at: [https://your-live-site.vercel.app](https://your-live-site.vercel.app)

---

## 📚 Educational Blog Setup

To add new blog posts:
1. Create a new `.mdx` file in the `src/posts` directory:
   ```
   src/posts/new-blog-post.mdx
   ```
2. Add metadata at the top of the file:
   ```mdx
   ---
   title: "Your Blog Title"
   date: "2025-03-08"
   author: "Your Name"
   ---
   
   Write your blog content here...
   ```
3. The post will automatically appear on the blog page.

---

## 🛡️ Security Features

1. HTTPS enforced (via Vercel).
2. Environment variables securely managed in `.env.local`.
3. Input validation in forms (e.g., date validation in booking system).

---

## 🧪 Testing

### Manual Testing Checklist:
- Test responsiveness on different devices (desktop, tablet, mobile).
- Verify SEO optimizations using Lighthouse or similar tools.
- Test booking system functionality (e.g., prevent past dates).

### Automated Testing:
Add unit tests using Jest or Cypress for key components like forms and dynamic pages.

---

## 👥 Contributing

Contributions are welcome! To contribute:
1. Fork this repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to your branch (`git push origin feature-name`).
5. Submit a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

Special thanks to:
- [Next.js](https://nextjs.org/) team for their amazing framework.
- [Tailwind CSS](https://tailwindcss.com/) team for their utility-first CSS framework.
- [Crisp Chat](https://crisp.chat/) for providing real-time chat solutions.

--- 
