# Firebase Realtime Database Data Structure Error

This repository demonstrates a common error when interacting with the Firebase Realtime Database: using dot notation instead of double quotes for keys in nested objects. This can lead to unexpected behavior and data loss.

## Bug
The `bug.js` file shows incorrect data structure using dot notation. When this data is written to the Firebase database, it might not be stored as expected.

## Solution
The `bugSolution.js` file shows the correct way to define the data structure using double quotes for all keys, even if they contain alphanumeric characters. This ensures the data is stored and retrieved correctly by Firebase.

## How to reproduce
1.  Clone this repository.
2.  Initialize a Firebase project and obtain the necessary credentials.
3.  Replace the placeholder credentials in the code with your own.
4.  Run `bug.js` and then run `bugSolution.js` to observe the difference.