# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploy to GitHub Pages with Custom Domain

This project is configured to deploy automatically to GitHub Pages with the custom domain `anandmuley.in`.

**Setup Instructions:**

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions" (not "Deploy from a branch")
   - The workflow will automatically deploy when you push to the `main` branch

2. **Configure Custom Domain:**
   - The `CNAME` file is already created in the `public` folder with `anandmuley.in`
   - In your repository Settings → Pages, under "Custom domain", enter `anandmuley.in`
   - GitHub will automatically create a DNS check file

3. **Configure DNS:**
   - Go to your domain registrar (where you purchased `anandmuley.in`)
   - Add the following DNS records:
     - **Type A records** pointing to GitHub Pages IPs:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
     - OR use a **CNAME record** pointing to: `your-username.github.io` (if using a user/organization page)
   - Wait for DNS propagation (can take up to 48 hours, usually much faster)

4. **Deploy:**
   - Push your code to the `main` branch
   - The GitHub Actions workflow will automatically build and deploy your site
   - Your site will be available at `https://anandmuley.in` once DNS is configured

**Manual Deployment:**
```sh
npm run build
# Then push the dist folder to the gh-pages branch (handled automatically by GitHub Actions)
```

### Alternative: Deploy via Lovable

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.
