// api/Imdb.js
import axios from 'axios';

export const Find_Movie = async (query) => {
  const options = {
    method: 'GET',
    url: 'https://imdb146.p.rapidapi.com/v1/find/',
    params: { query: query },
    headers: {
      'X-RapidAPI-Key': 'dca37a194fmshc1fbefaa4f6eb0fp1a260ajsncefa9bc1d6cd', // Replace with your actual RapidAPI key
      'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
    }
  };

  try {
    console.log('Making API request with options:', options);
    const response = await axios.request(options);
    console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie data:', error.response ? error.response.data : error.message);
    throw new Error('Error fetching movie data');
  }
};

Find_Movie('Inception');
