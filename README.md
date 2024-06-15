# Vercel Next Dinan Boilerplate

## Overview

The Vercel Next Dinan Boilerplate is a comprehensive starting point for developing personal and commercial applications with Next.js, TypeScript, and Tailwind CSS. It includes advanced tools and libraries to streamline the development process, enhance code quality, and ensure a professional developer experience. shout out to ixartz for his next.js boilerplate which inspired this project.

This boilerplate reflects a high standard of software development practices, ensuring a scalable, maintainable, and high-performance application. The author has meticulously selected and integrated each tool and library to optimize the developer experience and code quality.

## Features  

- **Next.js with App Router**: Modern file-based routing and server-rendering framework.
- **React AI ChatBotify**: AI chatbot assistant
- **TypeScript**: Strict typing for a more reliable codebase.
- **Clerk**: Authentication and authorization services.
- **Turso DB**: Fast, globally distributed database.
- **Drizzle ORM**: Type-safe ORM compatible with SQLite, PostgreSQL, and MySQL.
- **React Player**: Media player for handling video and audio content.
- **Tailwind CSS & Tailwind Animate**: Utility-first CSS framework with animation support.
- **Checkly**: Monitoring and end-to-end testing.
- **Husky**: Git hooks for maintaining code quality.
- **ESLint**: Linting with strict rules for consistent code.
- **React Icons**: Popular icon library for React.
- **Storybook**: UI component explorer for React.
- **Playwright**: End-to-end testing framework.
- **Commitizen**: Conventional commit messages.
- **Vitest**: Unit testing framework.
- **Next-Intl**: for easy Internalization.
- **GlassMorphism**: css glass classes smoked and clear.
- **Lazy-Load and Suspense**: for a better user experience.

### Commit Message Format

The project enforces Conventional Commits specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses Commitizen, an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
npm run commit
```
One of the benefits of using Conventional Commits is that it allows us to automatically generate a `CHANGELOG` file. It also allows us to automatically determine the next version number based on the types of commits that are included in a release.

### Requirements

- Node.js 20+ and npm

### Installation

- **Clone the repository and install dependencies**:

```shell
git clone https://github.com/zapboy216/Vercel-Next-Dinan-Boilerplate.git
cd my-project-name
npm install
```
## Run the development server:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

### Set up authentication

Create a Clerk account at Clerk.com and create a new application in Clerk Dashboard. Then, copy `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` into `.env.local` file (not tracked by Git):

```shell
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

Now, you have a fully working authentication system with Next.js: Sign up, Sign in, Sign out, Forgot password, Reset password, Update profile, Update password, Update email, Delete account, and more.

### Set up remote database

The project uses DrizzleORM, a type-safe ORM compatible with SQLite, PostgreSQL, and MySQL databases. By default, the project is set up to work seamlessly with libSQL, and for production purposes, it's integrated with Turso. The Boilerplate also enables a smooth transition to an alternative database provider if your project requires it.

First, you need to create a Turso account at Turso.tech and install the Turso CLI:

```shell
brew install tursodatabase/tap/turso
turso auth signup # Sign up to Turso
```

Then, create a new database:

```shell
turso db create nextjs-boilerplate
```

Now, you need to update the `DATABASE_URL` in `.env` file with the database URL provided by Turso:

```shell
turso db show nextjs-boilerplate --url

# .env
# DATABASE_URL=libsql://[RANDOM-CHARS]-[DB-NAME]-[ORG-NAME].turso.io
```

Finally, you also need to create a new environment variable `DATABASE_AUTH_TOKEN` in `.env.local` (not tracked by Git) with the auth token provided by Turso:

```shell
turso db tokens create nextjs-boilerplate

# .env.local
# DATABASE_AUTH_TOKEN=[your-auth-token]
```

### Translation (i18n) setup

For translation, the project uses `next-intl` combined with Crowdin. As a developer, you only need to take care of the English (or another default language) version. Other languages are automatically generated and handled by Crowdin. You can use Crowdin to collaborate with your translation team or translate the messages yourself with the help of machine translation.

To set up translation (i18n), create an account at Crowdin.com and create a new project. In the newly created project, you will able to find the project ID. You'll also require to create a new Personal Access Tokens by going to Account Settings > API. Then, in your GitHub Actions, you need to define the following environment variables `CROWDIN_PROJECT_ID` and `CROWDIN_PERSONAL_TOKEN`.

After defining the environment variables in your GitHub Actions, your localization files will be synchronized with Crowdin everytime you push a new commit to the `main` branch.

### Project structure

```shell
.
├── README.md                       # README file
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .storybook                      # Storybook folder
├── .vscode                         # VSCode configuration
├── migrations                      # Database migrations
├── public                          # Public assets folder
├── scripts                         # Scripts folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React components
│   ├── libs                        # 3rd party libraries configuration
│   ├── locales                     # Locales folder (i18n messages)
│   ├── models                      # Database models
│   ├── styles                      # Styles folder
│   ├── templates                   # Templates folder
│   ├── types                       # Type definitions
│   ├── utils                       # Utilities folder
│   └── validations                 # Validation schemas
├── tests
│   ├── e2e                         # E2E tests, also includes Monitoring as Code
│   └── integration                 # Integration tests
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure the Boilerplate by making a search in the whole project with `FIXME:` for making quick customization. Here is some of the most important files to customize:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/utils/AppConfig.ts`: configuration file
- `src/templates/BaseTemplate.tsx`: default theme
- `next.config.mjs`: Next.js configuration
- `.env`: default environment variables


### Testing

All unit tests are located with the source code inside the same directory. So, it makes it easier to find them. The project uses Vitest and React Testing Library for unit testing. You can run the tests with:

```shell
npm run test
```

### Integration & E2E Testing

The project uses Playwright for Integration and E2E testing. You can run the tests with:

```shell
npx playwright install # Only for the first time in a new environment
npm run test:e2e
```

### Enable Edge runtime (optional)

The App Router folder is compatible with the Edge runtime. You can enable it by uncommenting the following lines `src/app/layouts.tsx`:

```tsx
// export const runtime = 'edge';
```

For your information, the database migration is not compatible with the Edge runtime. So, you need to disable the automatic migration in `src/libs/DB.ts`:

```tsx
if (process.env.NODE_ENV === 'development') {
  await migrate(db, { migrationsFolder: './migrations' });
}
```

After disabling it, you are required to run the migration manually with:

```shell
npm run db:migrate
```

You also require to run the command each time you want to update the database schema.

### Deploy to production

During the build process, the database migration is automatically executed. So, you don't need to run the migration manually. But, in your environment variable, `DATABASE_URL` and `DATABASE_AUTH_TOKEN` need to be defined.

Then, you can generate a production build with:

```shell
$ npm run build
```

It generates an optimized production build of the boilerplate. For testing the generated build, you can run:

```shell
$ npm run start
```

You also need to defined the environment variables `CLERK_SECRET_KEY` using your own key.

The command starts a local server with the production build. Then, you can now open http://localhost:3000 with your favorite browser to see the project.


### Code coverage

Boilerplate relies on Codecov for code coverage reporting solution. To use Codecov, create a Codecov account and connect it to your GitHub account. On your Codecov dashboard, it should display a list of your repositories. Select the repository you want to enable Codecov for and copy the token. Then, in your GitHub Actions, you need to define the `CODECOV_TOKEN` environment variable and paste the token you copied.

Be sure to create the `CODECOV_TOKEN` as a Github Actions secret, do not paste it directly into your source code.

### Logging

The project uses Pino.js for logging. By default, for development environment, the logs are displayed in the console.

For production environment, the project is already integrated with Better Stack to manage and query your logs using SQL. To use Better Stack, you need to create a Better Stack account and create a new source: go to your Better Stack Logs Dashboard > Sources > Connect source. Then, you need to give a name to your source and select Node.js as the platform.

After creating the source, you able to see your source token and copy it. Then, in your environment variabless, you can paste the token in `LOGTAIL_SOURCE_TOKEN` variable. Now, all your logs will be automatically sent and ingested by Better Stack.

### Checkly monitoring

The project uses Checkly to ensure that your production environment is always up and running. At regular intervals, Checkly runs the tests ending with `*.check.spec.ts` extension and notifies you if any of the tests fail. Additionally, you have the flexibility to execute tests across multiple locations to ensure that your application is available worldwide.

To use Checkly, you must first create an account on their website. Once you have an account, you can set the `CHECKLY_API_KEY` environment variable in GitHub Actions by generating a new API key in the Checkly Dashboard. Additionally, you will need to define the `CHECKLY_ACCOUNT_ID`, which can also be found in your Checkly Dashboard under User Settings > General.

To complete the setup, make sure to update the `checkly.config.ts` file with your own email address and production URL.

### Useful commands

#### Bundle Analyzer

there is a built-in bundle analyzer. It can be used to analyze the size of your JavaScript bundles. To begin, run the following command:

```shell
npm run build-stats
```

By running the command, it'll automatically open a new browser window with the results.

#### Database Studio

The project is already configured with Drizzle Studio to explore the database. You can run the following command to open the database studio:

```shell
npm run db:studio
```

Then, you can open https://local.drizzle.studio with your favorite browser to explore your database.


## Licensed under the MIT License, Copyright © 2024



