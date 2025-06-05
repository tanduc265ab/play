# play

This is a simple example project demonstrating how to integrate
[TypeORM](https://typeorm.io) with a MySQL database and a Kafka broker.

## Getting Started

1. Install dependencies (requires npm with internet access):
   ```bash
   npm install
   ```
2. Compile TypeScript sources:
   ```bash
   npm run build
   ```
3. Start the application:
   ```bash
   npm start
   ```

The app connects to MySQL using environment variables `DB_HOST`, `DB_PORT`,
`DB_USER`, `DB_PASSWORD` and `DB_NAME`. It also connects to Kafka using the
`KAFKA_BROKERS` variable. Defaults are provided for local development.

