# NUANSA Web Portal

Welcome to the official repository for the **NUANSA Web Portal**. This project is built on [Next.js](https://nextjs.org/) and serves as the primary website for the upcoming NUANSA event.

---

## Table of Contents

- [Overview](#overview)
- [Event Details](#event-details)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)

---

## Overview

**NUANSA** is a cultural production by undergraduates in NUS mainly showcasing Indonesia's rich heritage and culture throughout annual theatrical performances that blend traditional music, dance and drama with contemporary storytelling. 

---

## Event Details

- **Event Title:** NUANSA 2025
- **Date:** September 7, 2025
- **Description:** Watch the latest performances and cultural showcases from Indonesia, featuring traditional music, dance, and drama.

---

## Technology Stack

- **Front-End:** 
  - [Next.js](https://nextjs.org/)
  - React
  - CSS Modules / Tailwind CSS for styling
- **Hosting:** 
  - Deployed on [Vercel](https://vercel.com/)
- **Other Tools:** 
  - Git for version control
  - Continuous Deployment (CD) via Vercel and GitHub Actions

---

## Installation

### Prerequisites

- **Node.js:** Version 14 or higher
- **npm or yarn:** As the package manager

### Steps

1. **Clone the Repository:**
    Execute the following command in your terminal:
    ```bash
        git clone https://github.com/nuansacp2025/nuansa-web.git
    ```

2. **Navigate to the Project Directory:**
    ```bash
        cd nuansa-web
    ```

3. **Install Dependencies:**
    ```bash
        npm install
    ```

4. **Run the Development Server:**
    ```bash
        npm run dev
    ```

5. **Open Your Browser:**
    Navigate to `http://localhost:3000` to view the application.

---

## Usage

1. **Home Page:** Displays the overview of the event, including the date and a brief description.

2. **About Us Page:** Provides detailed information about NUANSA, its history, and its significance.

3. **About Us History Page:** A dedicated page that dives deeper into the history of NUANSA, showcasing past events and milestones.

4. **About Us Keong Mas Page:** A special page dedicated to the NUANSA 2025 event, featuring the theme "Keong Mas" and its significance.

5. **Contact Us Page:** A form for users to reach out for inquiries or feedback.

6. **Our Team Page:** Showcases the team behind NUANSA, including their roles and contributions.

7. **Arts Team Page:** A dedicated page for the arts team, highlighting their efforts and contributions to the event.

8. **Production Team Page:** A dedicated page for the production team, showcasing their roles and contributions to the event.

9. **External Affairs Team Page:** A dedicated page for the external affairs team, highlighting their efforts and contributions to the event.

## Deployment

This project is deployed on Vercel. When changes are pushed to the `main` branch, a continuous deployment pipeline automatically builds and deploys the updated version. When changes are pushed to the `staging` branch, a deployment will be pushed to the preproduction environment. When a Pull Request is created, a preview deployment will be created for the branch.