cat <<EOL > README.md
# Postgres Adminer

Postgres Adminer is a lightweight database management tool designed for PostgreSQL. It allows users to manage their databases easily and efficiently through a web interface.

## Features

- Easy database management
- User-friendly web interface
- Support for multiple database operations

## Installation

To get started with Postgres Adminer, follow these steps:

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/shresthashim/postgres-adminer.git
   \`\`\`

2. Navigate to the project directory:
   \`\`\`bash
   cd postgres-adminer
   \`\`\`

3. Open the \`docker-compose.yml\` file and add your PostgreSQL username, password, and database name:
   \`\`\`yaml
   version: '3.8'
   services:
     postgres:
       image: postgres:latest
       environment:
         POSTGRES_USER: your_username
         POSTGRES_PASSWORD: your_password
         POSTGRES_DB: your_database
       ports:
         - "5432:5432"

     adminer:
       image: adminer
       ports:
         - "8080:8080"
   \`\`\`

4. Start the application:
   \`\`\`bash
   docker-compose up
   \`\`\`

## Usage

Once the application is running, navigate to \`http://localhost:8080\` in your web browser to access the Adminer interface. Use the credentials you provided in the \`docker-compose.yml\` file to log in.

