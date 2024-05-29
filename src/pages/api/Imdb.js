// api/Imdb.js
import axios from "axios";

export const Find_Imdb = async (query) => {
  const options = {
    method: "GET",
    url: "https://imdb146.p.rapidapi.com/v1/find/",
    params: { query: query },
    headers: {
      "X-RapidAPI-Key": "dca37a194fmshc1fbefaa4f6eb0fp1a260ajsncefa9bc1d6cd", // Replace with your actual RapidAPI key
      "X-RapidAPI-Host": "imdb146.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching movie data");
  }
};

export const Find_Imdb_By_Id = async (id) => {
  const options = {
    method: "GET",
    url: "https://movies-tv-shows-database.p.rapidapi.com/",
    params: {
      movieid: id,
    },
    headers: {
      Type: "get-movie-details",
      "X-RapidAPI-Key": "dca37a194fmshc1fbefaa4f6eb0fp1a260ajsncefa9bc1d6cd",
      "X-RapidAPI-Host": "movies-tv-shows-database.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
