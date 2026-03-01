import fetch from "node-fetch";

const login = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "admin@example.com",
        password: "Admin@123",
      }),
    });

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
};

login();
