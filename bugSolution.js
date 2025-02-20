const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    const randomNumber = Math.random();
    try {
      if (randomNumber < 0.5) {
        // Simulate a successful response
        res.send('Success!');
      } else {
        // Simulate an error (handled using try-catch)
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      console.error('Error in route handler:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));