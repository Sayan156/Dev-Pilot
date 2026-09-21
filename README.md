# devPilot

devPilot is a full-stack AI-powered application for working with repositories and project context. It combines a Java/Spring Boot backend with a modern Next.js frontend to provide chat, repository-aware workflows, authentication, and vector-based search capabilities.

## Overview

The project is organized as a monorepo with two main parts:

- `backend/` — Spring Boot application for APIs, services, security, and AI integration
- `client/` — Next.js frontend for the user interface
- `docker-compose.yml` — PostgreSQL + pgvector setup for local development

This repository is designed for workflows such as:

- Chatting with a repository-aware assistant
- Repository indexing and retrieval
- AI-powered analysis of codebase context
- Authenticated user sessions and dashboards
- Localized vector search using PostgreSQL pgvector

## Tech Stack

### Frontend
- Next.js 16
- React 19
- Tailwind CSS
- shadcn/ui-style component system
- TypeScript

### Backend
- Java 21
- Spring Boot 4
- Spring Security
- Spring Data JPA
- Spring AI
- OpenAI integration
- PostgreSQL + pgvector

### Infrastructure
- Docker Compose
- PostgreSQL container with pgvector extension

## Project Structure

```text
devPilot/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/devPilot/backend/
│   │   │   │   ├── config/
│   │   │   │   ├── controllers/
│   │   │   │   ├── dto/
│   │   │   │   ├── entity/
│   │   │   │   ├── exceptions/
│   │   │   │   ├── repository/
│   │   │   │   ├── security/
│   │   │   │   └── services/
│   │   │   └── resources/
│   │   └── test/
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
├── client/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── public/
│   ├── package.json
│   ├── next.config.ts
│   └── README.md
├── docker/
├── docker-compose.yml
├── .gitignore
└── README.md
```

## Prerequisites

Before running the application, make sure you have:

- Java 21+
- Maven or the included Maven wrapper
- Node.js 20+
- npm
- Docker and Docker Compose
- An OpenAI API key (for the AI backend features)

## Getting Started

### 1. Start the database

The repository includes a PostgreSQL with pgvector setup:

```bash
docker compose up -d
```

This starts a PostgreSQL instance on port `5433` with:

- Database: `devpilot`
- Username: `postgres`
- Password: `postgres`

### 2. Configure the backend

Open the backend project and configure your application settings as needed for:
- database connection
- Spring Security / auth
- OpenAI API access

Example environment variables to set:

```bash
export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5433/devpilot
export SPRING_DATASOURCE_USERNAME=postgres
export SPRING_DATASOURCE_PASSWORD=postgres
export OPENAI_API_KEY=your_openai_api_key
```

Then run the backend:

```bash
cd backend
./mvnw spring-boot:run
```

The backend server will typically run on a local port such as:

- `http://localhost:8080`

### 3. Run the frontend

In a separate terminal:

```bash
cd client
npm install
npm run dev
```

Then open:

- `http://localhost:3000`

## Available UI Areas

The client app includes routes and sections for:

- Auth flows
- Chat interface
- Dashboard
- Login page
- Repository-related workflows

## Backend Responsibilities

The backend is organized around common Spring patterns:

- `controllers/` — REST endpoints for auth, chat, and repository actions
- `services/` — business logic and orchestration
- `repository/` — persistence access
- `entity/` — domain models
- `config/` — security, CORS, crypto, and app configuration
- `security/` — authentication and access control

## Development Notes

- The frontend uses the App Router pattern in `client/app/`
- The backend uses Spring Boot and Java packages under `devPilot.backend`
- Vector search is backed by PostgreSQL pgvector, which is suitable for repository-aware AI retrieval
- Docker is used to simplify local database setup and avoid manual PostgreSQL installation

## License

This repository does not currently declare a license in the project metadata. If you plan to distribute or publish it publicly, you may want to add an appropriate open-source license.

## Contributing

If you want to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and validate the frontend/backend locally
5. Open a pull request

## Support

For local troubleshooting:
- confirm Docker is running
- verify PostgreSQL is up on port `5433`
- confirm Java version is 21
- confirm your OpenAI API key is valid
- ensure frontend and backend ports are not already in use

---

This README can be adapted further if you want to include specific screenshots, architecture diagrams, setup for GitHub OAuth, or more detailed API documentation.
