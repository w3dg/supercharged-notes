# Supercharged Notes

The Supercharged Notes project is a Next.js application that allows users to create and manage their notes.

## Tech Stack

- **Next.js**
- **React Hook form** - for form handling and errors
- **Clerk** - for authenticating users
- **Prisma** - ORM for querying database
- **TailwindCSS** - For styling
- **Zod** - Validating inputs and data
- **TailwindCSS with ShadCn** - For styling

**Docker** is also used for spinning up a [PostgreSQL Database](https://www.postgresql.org/). See [`docker-compose.yml`](./docker-compose.yml)

## Demo

<video width="720" loop controls>
  <source src="https://i.imgur.com/apMYli4.mp4" type="video/mp4" />
</video>

## Getting Started

### Setting up environment

```bash
cp sample.env .env
```

If you have Postgres running locally, connect to that by setting the connection string in `.env`. Or spin one up with Docker using the given compose file as below:

```bash
docker compose up
```

Get your API Keys from [Clerk](https://clerk.com/) for a project and set it in the `.env`

#### Install dependencies

```bash
npm install # or use your preferred package manager
```

Run the development server:

```bash
npm run dev # or run with your preferred package manager
```

Set up the database schema with your postgres database

```bash
npm run db:push
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
