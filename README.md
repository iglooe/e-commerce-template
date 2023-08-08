# E-Commerce + Dashboard Template

This is my interpretation of an e-commerce website + dashboard build with everything new in Next.js 13.

<!-- [![E-Commerce-template](./public/images/screenshot/landing-page-screenshot.png)](https://skateshop.sadmn.com/) -->

> **Warning**
> This project is still in development and is not ready for production use.
>
> It uses new technologies (server actions, prisma ORM) which are subject to change and may break your application.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **User Management:** [Clerk](https://clerk.com)
- **ORM:** [Prisma](https://www.prisma.io/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Payments infrastructure:** [Stripe](https://stripe.com)
- **Photo:** [Cloudinary](https://cloudinary.com/)

## Features to be implemented

- [x] Authentication with **Clerk**
- [x] Photo uploads with **Cloudinary**
- [x] ORM using **Prisma**
- [x] Database on **PlanetScale**
- [x] Validation with **Zod**
- [ ] Seller and customer workflows
- [ ] User subscriptions with **Stripe**
- [ ] Storefront with products, categories, and subcategories
- [ ] Checkout with **Stripe Checkout**
- [ ] Admin dashboard with stores, products, orders, subscriptions, and payments

## Running Locally

1. Clone the repository

```bash
git clone https://github.com/iglooe/e-commerce-template.git
```

2. Install dependencies using npm

```bash
npm install
```

3. Copy the `.env.example` to `.env` and update the variables.

```bash
cp .env.example .env
```

4. Start the development server

```bash
npm run dev
```

5. Generate the database schema

```bash
npx prisma generate
```

6. Push the database changes

```bash
npx prisma db push
```

## How do I deploy this?

Follow the deployment guides for [Vercel](https://nextjs.org/learn/basics/deploying-nextjs-app/deploy), [Netlify](https://docs.netlify.com/integrations/frameworks/next-js/overview/) and [Heroku](https://elements.heroku.com/buildpacks/mars/heroku-nextjs) for more information.
