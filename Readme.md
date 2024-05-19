## Getting Started

This guide details how to set up the development environment for this React project.

### Prerequisites

* Node.js (version 14 or later): [Download Node.js](https://nodejs.org/en/download)
* Git version control (optional, but recommended): [Download Git](https://git-scm.com/downloads)

### Steps

**1. Clone the Repository (if using Git)**

```Bash
git clone https://github.com/GenerousDev/Onafriq-Cypress-Assignment.git
```

**2. Navigate to the Project Directory**

```Bash
cd ONAFRIQ
```

**3. Install Dependencies**

The project uses a combination of npm packages for development and production. To install them all, run:

```Bash
npm install
```

Important Note: If you encounter setup errors during installation, you might need to force a reinstall of dependencies to ensure everything resolves correctly:

```Bash
npm install --force
```

**4. Start the Cypress Server**

To launch the cypress server and see the automated test running in your browser and generate report with mochawesome, execute:

```Bash
npx cypress open
```
