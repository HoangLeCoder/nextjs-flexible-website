This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## First set up
1. Open Terminal
2. Run "npx create-next-app@latest ./"
3. Choose below options:    
√ Would you like to use TypeScript? ... [Yes].  
√ Would you like to use ESLint? ... [No].   
√ Would you like to use Tailwind CSS? ... [Yes].    
√ Would you like to use `src/` directory? ... [No]. 
√ Would you like to use App Router? (recommended) ... [Yes].    
√ Would you like to customize the default import alias (@/*)? ... [No]. 
4. Done create first Nextjs project.

## Install package
1. Open Terminal
2. Run "npm i @headlessui/react cloudinary jsonwebtoken @types/jsonwebtoken graphql-request next-auth"  
- @headelessui [Create combobox and dropdown]   
- cloudinary [Image upload] 
- jsonwebtoken @types/jsonwebtoken [Authentication] 
- graphql-request [GraphQL action]  
- next-auth [Auth]  

3. Run "npm i @grafbase/sdk --save-dev"

## Add Folder
1. Add "Public" folder from references
2. Create "Components" folder
3. Reconfig Tailwindcss in "tailwind.config.ts"
3. Create "common.types.ts" file
4. Create "Constants" folder for dummy data

# Grafbase API setup
Link https://grafbase.com/hoanglecoder/nextjs-flexible-website

1. Go to https://www.grafbase.com/signup
2. Sign Up with your GitHub account.
3. Click "Create Project" button
4. In VScode, open Terminal
5. Run "npx grafbase init --config-format typescript". Check reference at "https://www.npmjs.com/package/@grafbase/sdk"
6. Recode in "grafbase.config.ts"
7. Back to grafbase.com and connect to Github page
8. Import your project and 'Deploy'
9. After entering your project admin screen, press 'Connect'
10. In Vscode, create new file at most outside place and named it '.env'
11. In '.env' file, input this:    
NEXT_PUBLIC_GRAFBASE_API_URL = [API Endpoint]   
NEXT_PUBLIC_GRAFBASE_API_KEY = [API Key]    


# Google Cloud setup for storing date
1. Assume that you enter https://console.cloud.google.com and done all the registration process
2. Add new project and set up details
3. On the Sidebar, APIs & Services >  OAuth consent screen > Create > Input all required field
4. Move above to "Credentials" -> Create Credentials -> OAuth Client ID -> App type: "Web app" -> Add Authorized JS URL -> type "http://localhost:3000" -> Add Authorized redirect URL -> type "http://localhost:3000/api/auth/callback/google" -> Click Create
5. Open .env file, create GOOGLE_CLIENT_ID = [Client ID], GOOGLE_CLIENT_SECRET = [Client secret]

## Code Explain
