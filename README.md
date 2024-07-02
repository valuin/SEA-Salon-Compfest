<h1 align="center">SEA Salon Website</h1>
<p align="center">
    <img alt="SEA Salon Website" src="/public/header.png">
</p>

<p align="center">
 Built with Next.js and Supabase
</p>

<p align="center">
  <a href="#bug-notice"><strong>Bug Notice</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#running-the-project-locally"><strong>Running the Project Locally</strong></a> ·
</p>
<br/>

## Bug Notice
 <strong>
 Due to an unforeseen bug on the page routing, signing up / creating an account doesnt automatically log you in, so after making an account you must go back to the login page and login with the credentials you just put in the sign up page
 </strong>

## Tech Stack

This project is built using the following technologies:

- **Frontend Framework**: [Next.js](https://nextjs.org) - A React framework for hybrid static & server rendering.
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework for rapidly building custom designs.
- **Database & Auth**: [Supabase](https://supabase.com) - An open-source Firebase alternative providing databases, authentication, and more.
- **Deployment**: [Vercel](https://vercel.com) - A platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database.

## Features

- Navbar, Footer, Hero Section, Service Catalog
- Page Routing
- Review System
- Reservation System
- Authentication System of User and Admin
- Admin Dashboard 


## Running the Project Locally

To run this project on your local machine, follow these steps:

1. Clone the repository:
  ```bash
  git clone https://github.com/valuin/SEA-Salon-Compfest
  ```

2. Navigate to the project directory:
   ```bash
   cd sea-salon
   ```

3. Install Dependencies
  ```bash
  npm install
  ```

4. Rename `.env.local.example` to `.env.local` and update the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)

   NOTE: You might need to do some seeding on supabase first for the local hosting using this SQL Schema
   <img alt="Database Schema" src="/public/scheme.png">


5. You can now run the Next.js local development server:

   ```bash
   npm run dev
   ```

   The site should now be running on [localhost:3000](http://localhost:3000/).

