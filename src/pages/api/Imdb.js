// api/Imdb.js
import axios from "axios";

export const Find_Imdb = async (query) => {
  if (typeof query !== "string") {
    console.error("Query must be a string");
    return;
  }

  const options = {
    method: "GET",
    url: "https://imdb-api12.p.rapidapi.com/search",
    params: { query: query },
    headers: {
      "X-RapidAPI-Key": "376b40d5b4msh7e9a0d42b036231p1a53e4jsn6cefc8e09280",
      "X-RapidAPI-Host": "imdb-api12.p.rapidapi.com",
    },
  };

  console.log("Request options:", options);

  try {
    const response = await axios.request(options);
    console.log("from find imdb backend", response.data);
    return response.data;
  } catch (error) {
    console.error("Error making request:", error);
  }
};

export const Find_Imdb_By_Id = async (id) => {
  if (!id || typeof id !== "string") {
    console.error("Invalid ID: ID must be a non-empty string");
    return;
  }

  const options = {
    method: "GET",
    url: `https://imdb-api12.p.rapidapi.com/title/${id}`,
    headers: {
      "X-RapidAPI-Key": "376b40d5b4msh7e9a0d42b036231p1a53e4jsn6cefc8e09280",
      "X-RapidAPI-Host": "imdb-api12.p.rapidapi.com",
    },
  };

  console.log("Request options prepared:", options);

  try {
    const response = await axios.request(options);
    console.log("Response received:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during request:", error);
  }
};
