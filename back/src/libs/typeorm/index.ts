import configs from "../../configs";
import { createConnection } from "typeorm";

export const connectDB = async () => {
  const connexion = await createConnection(configs.database);
  console.log("Database connection ok");
};
