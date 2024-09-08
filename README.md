# Project Management Tool

A free, open-source, Made-in-India project management tool built with modern web technologies. This tool helps teams manage projects, track issues, assign tasks, and maintain an organized workflow, with user role management.

## Features

- **Project and Issue Management**: Create and manage projects, track issues with automated key generation, and manage assignments to team members.
- **Role-Based Access Control**: Differentiate between admin and regular users with granular permission settings.
- **User Management**: Manage users and their roles efficiently with a relationship-based system.
- **Open Source & Free to Use**: Completely free and open-source, allowing anyone to use, modify, and contribute.

## Tech Stack

- **Backend**:
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [Payload CMS](https://payloadcms.com/)
- **Frontend**:
  - [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Database**:
  - [MongoDB](https://www.mongodb.com/)
- **Other Tools**:
  - Payload hooks for custom logic
  - Access control with middleware for admin and user roles

## Development

To spin up the project locally, follow these steps:

1. First clone the repo
1. Then `cd YOUR_PROJECT_REPO && cp .env.example .env`
1. Next `yarn && yarn dev` (or `docker-compose up`, see [Docker](#docker))
1. Now Open [http://localhost:3000/admin](http://localhost:3000/admin) to access the admin panel
1. Create your first admin user using the form on the page

That's it! Changes made in `./src` will be reflected in your app.

### Docker

Alternatively, you can use [Docker](https://www.docker.com) to spin up this project locally. To do so, follow these steps:

1. Follow [steps 1 and 2 from above](#development), the docker-compose file will automatically use the `.env` file in your project root
1. Next run `docker-compose up`
1. Follow [steps 4 and 5 from above](#development) to login and create your first admin user

That's it! The Docker instance will help you get up and running quickly while also standardizing the development environment across your teams.
