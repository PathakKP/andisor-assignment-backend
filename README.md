# NestJS Prisma Andisor dashboard Backend

This project is a backend for an Andisor dashboard application, built using **NestJS** and **Prisma** with **PostgreSQL** as the database. It supports CRUD operations for products, including creating, updating, and retrieving products with their primary and secondary variants.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **PostgreSQL** (v12 or higher)

## Installation

Follow these steps to set up and run the backend:

### 1. Clone the Repository

Clone the repository to your local machine:

### 2. Install Dependencies

Install the required packages using npm or yarn:

```bash
npm install
```

or

```bash
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables to configure the database connection:

```env
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<database_name>?schema=public"
```

Replace `<username>`, `<password>`, and `<database_name>` with your PostgreSQL credentials.

### 4. Set Up the Database

Initialize Prisma to set up the database schema:

1. **Generate Prisma Client**:

   ```bash
   npx prisma generate
   ```

2. **Run Migrations** to create the database tables:

   ```bash
   npx prisma migrate dev --name init
   ```

3. **Seed the Database** with initial product data (optional):
   ```bash
   npx ts-node prisma/seed.ts
   ```

### 5. Run the Application

Start the NestJS application in development mode:

```bash
npm run start:dev
```

or

```bash
yarn start:dev
```

The server will be running on `http://localhost:8081`.

## API Endpoints

The following endpoints are available:

### Products

- **GET** `/products` - Get a paginated list of products, including primary and secondary variants.
- **GET** `/products/:id` - Get a single product by ID, including its variants.
- **POST** `/products` - Create a new product along with primary and secondary variants.
- **PATCH** `/products/:id` - Update an existing product, including its primary and secondary variants.

## Notes

- **CORS**: CORS is enabled for all origins to allow frontend applications to interact with the backend without restrictions.
- **Database Schema**: Prisma manages the database schema, and you can find the schema definition in `prisma/schema.prisma`.
