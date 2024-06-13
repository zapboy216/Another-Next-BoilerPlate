# Vercel Next Dinan Boilerplate

## Overview

The Vercel Next Dinan Boilerplate is a comprehensive starting point for developing sophisticated applications with Next.js, TypeScript, and Tailwind CSS. It includes advanced tools and libraries to streamline the development process, enhance code quality, and ensure a professional developer experience.

## Features  

- **Next.js with App Router**: Modern file-based routing and server-rendering framework.
- **React AI ChatBotify**: AI chatbot assistant
- **TypeScript**: Strict typing for a more reliable codebase.
- **Clerk**: Authentication and authorization services.
- **Turso DB**: Fast, globally distributed database.
- **Drizzle ORM**: Type-safe ORM compatible with SQLite, PostgreSQL, and MySQL.
- **React Player**: Media player for handling video and audio content.
- **Tailwind CSS & Tailwind Animate**: Utility-first CSS framework with animation support.
- **React ChatBotify**: AI-powered chatbot integration.
- **Checkly**: Monitoring and end-to-end testing.
- **Husky**: Git hooks for maintaining code quality.
- **ESLint**: Linting with strict rules for consistent code.
- **React Icons**: Popular icon library for React.
- **Storybook**: UI component explorer for React.
- **Playwright**: End-to-end testing framework.
- **Commitizen**: Conventional commit messages.
- **Vitest**: Unit testing framework.
- **Next-Intl**: for easy Internalization.

## Getting Started

### Requirements

- Node.js 20+ and pnpm

### Installation

- **Clone the repository and install dependencies**:

```shell
git clone --depth=1 https://github.com/zapboy216/Vercel-Next-Dinan-Boilerplate.git my-project-name
cd my-project-name
pnpm install
```
## Run the development server:

shell

pnpm run dev

Open http://localhost:3000 in your browser.
Authentication Setup

    Create a Clerk account and a new application in the Clerk Dashboard.
    Copy NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY into your .env.local file:

shell

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key

## Database Setup

    Create a Turso account and install the Turso CLI:

shell

brew install tursodatabase/tap/turso
turso auth signup

    Create a new database:

shell

turso db create nextjs-boilerplate

    Update the DATABASE_URL in .env with the provided database URL:

shell

## .env
DATABASE_URL=libsql://RANDOM-CHARS-DB-NAME-ORG-NAME.turso.io

    Add DATABASE_AUTH_TOKEN to .env.local:

shell

turso db tokens create nextjs-boilerplate

## .env.local
DATABASE_AUTH_TOKEN=your-auth-token

## Project Structure

.
├── README.md
├── .github
├── .husky
├── .storybook
├── .vscode
├── migrations
├── public
├── scripts
├── src
│   ├── app
│   ├── components
│   ├── libs
│   ├── locales
│   ├── models
│   ├── styles
│   ├── templates
│   ├── types
│   └── utils
│   └── validations
├── tests
│   ├── e2e
│   └── integration
├── tailwind.config.js
└── tsconfig.json


Customization

Search for a FIXME: comments throughout the project to make quick customizations. Key files to modify include:

    public/apple-touch-icon.png, public/favicon.ico, etc.: Customize your favicon.
    src/utils/AppConfig.ts: Configuration settings.
    src/templates/BaseTemplate.tsx: Default theme.
    next.config.mjs: Next.js configuration.
    .env: Environment variables.

Commit Message Format

Use Commitizen for conventional commit messages:

shell

pnpm run commit

Testing

Run unit tests with:

shell

pnpm run test

Run integration and E2E tests with:

shell

pnpm playwright install # Only once in a new environment
pnpm run test:e2e

Deploy to Production

Generate a production build:

shell

pnpm run build

Start the server with the production build:

shell

pnpm run start

Ensure DATABASE_URL and DATABASE_AUTH_TOKEN are set in your environment variables.
Logging

Integrated with Pino.js and Better Stack for logging and log management. Create an account on Better Stack and set LOGTAIL_SOURCE_TOKEN in your environment variables.
Checkly Monitoring

Set up monitoring with Checkly. Create an account, generate an API key, and set CHECKLY_API_KEY and CHECKLY_ACCOUNT_ID in GitHub Actions.
Contributions

We welcome contributions! Feel free to open an issue or submit a pull request.
License

Licensed under the MIT License © 2024

This boilerplate reflects a high standard of software development practices, ensuring a scalable, maintainable, and high-performance application. The author has meticulously selected and integrated each tool and library to optimize the developer experience and code quality.