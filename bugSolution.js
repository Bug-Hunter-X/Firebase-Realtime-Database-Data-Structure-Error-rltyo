```javascript
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

// Write the data to Firebase (requires Firebase initialization)
firebase.database().ref('/').set(correctData)
  .then(() => {
    console.log('Data written successfully!');
  })
  .catch((error) => {
    console.error('Error writing data:', error);
  });
```