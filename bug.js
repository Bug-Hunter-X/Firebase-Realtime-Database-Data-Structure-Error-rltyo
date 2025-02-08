```javascript
// Incorrect data structure for Firebase Realtime Database
const incorrectData = {
  users: {
    uid1: { name: "User 1", email: "user1@example.com" },
    uid2: { name: "User 2", email: "user2@example.com" }
  }
};

// Correct data structure for Firebase Realtime Database
const correctData = {
  users: {
    uid1: {
      "name": "User 1",
      "email": "user1@example.com"
    },
    uid2: {
      "name": "User 2",
      "email": "user2@example.com"
    }
  }
};
```