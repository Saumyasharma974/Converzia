// environment.js
const server =
  process.env.NODE_ENV === "production"
    ? "https://apnacollegebackend.onrender.com"
    : "http://localhost:8000";

export default server;
