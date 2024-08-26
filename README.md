Axon-Care
=========

Axon-Care is a modern healthcare management application that allows patients to easily register and request appointments, while giving administrators the ability to manage these appointments by scheduling or canceling them. The application is built with a focus on simplicity, efficiency, and scalability, using the latest technologies to ensure a seamless user experience.

Table of Contents
-----------------

-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Getting Started](#getting-started)
-   [Installation](#installation)
-   [Environment Variables](#environment-variables)
-   [Usage](#usage)
-   [Contributing](#contributing)

Features
--------

-   **Patient Registration:** Patients can easily create an account by providing their basic details.
-   **Appointment Requests:** Registered patients can request appointments with their preferred healthcare provider.
-   **Admin Dashboard:** Admins have access to a dashboard where they can view all appointment requests, and either schedule or cancel them.
-   **Real-time Updates:** Patients receive real-time updates on the status of their appointment requests.
-   **Error Monitoring:** Integrated with Sentry for comprehensive error monitoring and logging.

Technologies Used
-----------------

### Frontend

-   **Next.js** - A powerful React framework for building server-side rendered (SSR) and static web applications.
-   **TypeScript** - A typed superset of JavaScript that enhances code quality and maintainability.
-   **Tailwind CSS** - A utility-first CSS framework for creating responsive and modern user interfaces.

### Backend

-   **Appwrite** - A secure and scalable backend server for web, mobile, and flutter applications that provides authentication, database, file storage, and more.

### Monitoring

-   **Sentry** - A robust error tracking and monitoring tool that helps you identify and fix issues in real time.

Getting Started
---------------

### Prerequisites

Ensure you have the following installed on your local development environment:

-   Node.js (v16 or later)
-   npm or yarn
-   Appwrite Server (You can set up a local instance or use a cloud version)
-   Sentry Account (For error monitoring)

### Installation

1.  **Clone the repository**

    `git clone https://github.com/charlespalmerbf/axon-care-react.git`

2.  **Install dependencies**

    Using npm:

    `npm install`

    Or using yarn:

    `yarn install`

3.  **Set up Appwrite backend**

    -   Follow the Appwrite installation guide to set up your Appwrite server.
    -   Create a new project in Appwrite and note the project ID.
    -   Set up the necessary collections (e.g., Users, Appointments) as per the application's requirements.
4.  **Configure Sentry**

    -   Sign up for a Sentry account and create a new project.
    -   Get your DSN (Data Source Name) from Sentry and add it to your environment variables.

### Environment Variables

Create a `.env.local` file in the root of the project and add the following environment variables:

```
PROJECT_ID=<Your Appwrite Project ID>
API_KEY=<Your Appwrite API Key>
DATABASE_ID=<Your Appwrite Database ID>
PATIENT_COLLECTION_ID=<Your Appwrite Patients Collection ID>
DOCTOR_COLLECTION_ID=<Your Appwrite Doctors Collection ID>
APPOINTMENTS_COLLECTION_ID=<Your Appwrite Appointments Collection ID>
SENTRY_AUTH_TOKEN=<Your Sentry Auth Token>
NEXT_PUBLIC_BUCKET_ID=<Your Appwrite Bucket ID>
NEXT_PUBLIC_ENDPOINT=<Your Appwrite Endpoint>
NEXT_PUBLIC_ADMIN_PASSKEY=<Your Personalized Admin Passkey>
```

### Running the Application

To start the development server:

`npm run dev`

Or with yarn:

`yarn dev`

The application will be available at `http://localhost:3000`.

### Building for Production

To build the application for production:

`npm run build`

Or with yarn:

`yarn build`

This will create an optimized production build in the `.next` directory.

Usage
-----

-   **Patients** can sign up and log in to request new appointments.
-   **Admins** can access the admin dashboard to view, schedule, or cancel appointments.
