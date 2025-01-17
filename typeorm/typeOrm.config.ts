import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'l2a',
  entities: ['./src/entity/*.entity{.ts,.js}'],
  migrations: ['./src/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_table',
});
