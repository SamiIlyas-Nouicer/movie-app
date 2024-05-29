// pages/home.js
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase'; // Adjust the import path according to your project structure
import { Find_Movie } from './api/Imdb'; // Adjust the import path according to your project structure
import { useEffect, useState } from 'react';
import  NavBar  from './components/NavBar';

const Home = () => {
  const [user] = useAuthState(auth);
  const [searchQuery, setSearchQuery] = useState('');
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before new search
    setMovie(null); // Reset movie state before new search

    try {
      const foundMovie = await Find_Movie(searchQuery);
      setMovie(foundMovie);
      console.log('Movie found:', foundMovie);
    } catch (error) {
      setError(error.message);
      console.error('Error finding movie:', error.message);
    }
  };

  useEffect(() => {
    console.log('Movie changed:', movie);
  }, [movie]);

  useEffect(() => {
    console.log('Search query changed:', searchQuery);
  }, [searchQuery]);

  console.log(user);
  return (
    <div className='flex flex-col '>
      <NavBar /> 
      {!user ? (
        <>
          <SignUp />
          <SignIn />
        </>
      ) : (
        <>
          <p>Welcome, {user.displayName}</p>
          <SignOut />
        </>
      )}

      <input
        type="text"
        placeholder="Search for a movie"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>Error: {error}</p>}
      {movie && <div>{ (
          <ul>
            {movie.titleResults.results.map((movies, index) => (
              <li key={index}>{movies.titleNameText}</li>
            ))}
          </ul>
        )
      
        }
        </div>        }
    </div>
  );
};

export default Home;
