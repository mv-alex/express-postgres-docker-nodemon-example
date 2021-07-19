const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const UserDB = process.env.DB_USERNAME || "admin";
const PasswordDB = process.env.DB_PASSWORD || "admin";
const NameDB = process.env.DB_NAME || "todo";
const HostDB = process.env.DB_HOST || "postgres";
const PortDB = process.env.DB_PORT || 5432;

const { Client } = require("pg");
const http = require("http");

const server = http.Server(app);

async function start() {
  try {
    const client = new Client({
      host: HostDB,
      user: UserDB,
      password: PasswordDB,
      database: NameDB,
      port: PortDB,
    });
    await client.connect();

    server.listen(PORT, () => {
      console.log(`=== The server is running on PORT ${PORT} ===`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
