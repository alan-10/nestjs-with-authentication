export default () => ({
  port: parseInt(process.env.PORT, 10) || 3001,
  database: {
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    user: process.env.POSTGRES_USER,
    password:process.env.POSTGRES_PASSWORD,
    type: 'postgres'
  }
});