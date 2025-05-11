/** @type {import("drizzle-kit").Config} */

export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_nZDt0pxv5UVI@ep-shy-hat-a4ox64gp-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require",
  },
};
