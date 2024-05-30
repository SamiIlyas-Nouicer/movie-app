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
      "X-RapidAPI-Key": "dca37a194fmshc1fbefaa4f6eb0fp1a260ajsncefa9bc1d6cd",
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
      "X-RapidAPI-Key": "dca37a194fmshc1fbefaa4f6eb0fp1a260ajsncefa9bc1d6cd",
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
