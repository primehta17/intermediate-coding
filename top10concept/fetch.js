let axios = require("axios");

const api = "https://jsonplaceholder.typicode.com/todos/1";

async function fetchData() {
  try {
    const response = await axios.get(api);
    console.log("Data:", response.data); // Here you get the JSON
  } catch (error) {
    console.error("Error fetching:", error);
  }
}

fetchData();

async function fetchDatas() {
  try {
    const response = await fetch(api); // Use fetch
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched data:", data); // Log the JSON
    // Do something with `data` — e.g., return it or process it
  } catch (error) {
    console.error("Error fetching API:", error);
  }
}

fetchDatas();

fetch(api)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Fetched data:", data);
    // Do something with data
  })
  .catch((error) => {
    console.error("Error fetching API:", error);
  });
