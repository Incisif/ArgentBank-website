// src/api/userAPI.js

export async function loginUser(loginCredentials) {
  const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginCredentials),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Login failed");
  }
}

export async function fetchUserProfile(token) {
  const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Failed to fetch user profile");
  }
}

export async function updateUsername(token, userName) {
  const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({userName}),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Failed to update username");
  }
}
