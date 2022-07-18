import dotenv from "dotenv";
import APP_ROOT from "app-root-path";

// environment
export const env = {
  isDev: process.env.NODE_ENV == undefined ? true : String(process.env.NODE_ENV).toLowerCase().includes("development"),
  isTest: String(process.env.NODE_ENV).toLowerCase().includes("test"),
  isProd: String(process.env.NODE_ENV).toLowerCase().includes("prod"),
  isStaging: String(process.env.NODE_ENV).toLowerCase().includes("staging"),
  env: process.env.NODE_ENV,
};

let configPath = env.isDev ? "/src" : "build";
let rootPath = env.isDev ? APP_ROOT.path : "";
console.log(env.isDev);


dotenv.config();
const config = {
  configPath,
  rootPath,
  issuer: process.env.ISSUER,
  inProduction: !env.isDev,
  secret: process.env.SECRET,
  port: env.isDev ? process.env.LOCAL_PORT : process.env.PORT,
};

export default config;
