// 0-promise.js

function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation (e.g., API request)
      setTimeout(() => {
        resolve("Response from API");
      }, 1000); // Simulated delay of 1 second
    });
  }
  
  export default getResponseFromAPI;
