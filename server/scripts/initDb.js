const connection = require("../config/db");

const schema = `
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;

connection.query(schema, (err) => {
  if (err) {
    console.log("Database setup failed:", err);
  } else {
    console.log("Users table ready.");
  }
  connection.end();
});
