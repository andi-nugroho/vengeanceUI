# Tutorial: How to Install Dependencies & Run Project Locally

This guide will help you install the necessary libraries and run the `VengeanceUI` application on your local machine.

## Prerequisites

Ensure you have the following installed:
-   **Node.js** (LTS Version recommended): [Download Node.js](https://nodejs.org/)
-   **NPM** (Usually installed automatically with Node.js)
-   *Optional*: **Bun** (If you prefer using Bun, as a `bun.lock` file is available)

## Step 1: Install Dependencies

Open your terminal (Command Prompt, PowerShell, or Terminal in VS Code) in this project folder, then run one of the following commands:

### Using NPM (Recommended)
Run this command to download all libraries listed in `package.json`:

```bash
npm install
```

### Using Bun (Alternative)
If you are using Bun:

```bash
bun install
```

Wait until the installation process is complete. The `node_modules` folder will appear upon success.

## Step 2: Run Local Server

Once the installation is finished, run the following command to start the development server:

### Using NPM
```bash
npm run dev
```

### Using Bun
```bash
bun dev
```

## Step 3: Open in Browser

After running the command above, you will see output similar to this:

```
Ready in ...
- Local: http://localhost:3000
```

Open your browser (Chrome, Edge, Firefox, etc.) and visit the address:

**[http://localhost:3000](http://localhost:3000)**

Congratulations! Your project is now running on localhost.

---

## Additional Notes (Scripts)

Here is a list of other commands available in `package.json`:

-   `npm run build`: Builds the application for production (includes running `registry:build`).
-   `npm run start`: Runs the production server after the build is complete.
-   `npm run lint`: Checks the code for errors or warnings (ESLint).
