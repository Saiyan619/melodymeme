import React, { useState, useEffect } from 'react';
import sanitizeHtml from 'sanitize-html';
import axios from 'axios';

function TestApi() {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [error, setError] = useState(null);
  const [Releases, setReleases] = useState('')

  const fetchLyrics = async () => {
    try {
      const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
      const data = await response.json();
      if (response.ok) {
        // Sanitize and replace newlines with <br> tags
        const sanitizedLyrics = sanitizeHtml(data.lyrics).replace(/\n/g, '<br/>');
        setLyrics(sanitizedLyrics);
      } else {
        setError('Failed to fetch lyrics');
      }
    } catch (err) {
      setError('An error occurred while fetching lyrics');
    }
  };

    // useEffect(() => {
    //   const fetchReleases = async () => {
    //     const artistId = 'your-artist-id';  // Replace with the actual artist ID
    //     const url = `https://coverartarchive.org/release/foo/135741621.jpg`; // Correct URL
    
    //     try {
    //       const response = await fetch(url);
    //       if (!response.ok) {
    //         throw new Error(`Error: ${response.status}`);
    //       }
    //       const data = await response.json();
    //       setReleases(data);  
    //       console.log(data);
    //       // console.log(data.images[5].image);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }; 
    
    //   fetchReleases();
    // }, []);  
    

//  useEffect(() => {
//       const fetchReleases = async () => {
//         const options = {
//           method: 'GET',
//           url: 'https://songstats.p.rapidapi.com/artists/info',
//           params: {
//             spotify_artist_id: '2h93pZq0e7k5yf4dywlkpM',
//             songstats_artist_id: 'vxk62ige'
//           },
//           headers: {
//             'x-rapidapi-key': 'e1d4ad1b02msh79264ed2c9d1a2ap158e6fjsnaa39898192da',
//             'x-rapidapi-host': 'songstats.p.rapidapi.com'
//           }
//         };
        
//         try {
//           const response = await axios.request(options);
//           console.log(response.data);
//         } catch (error) {
//           console.error(error);
//         }
//       }; 
    
//       fetchReleases();
//  }, []);
  
  
  useEffect(() => {
      const fetchSongs = async () => {

        const options = {
          method: 'GET',
          url: 'https://shazam.p.rapidapi.com/search',
          params: {
            term: 'look what you made me do',
            locale: 'en-US',
            offset: '0',
            limit: '5'
          },
          headers: {
            'x-rapidapi-key': 'e1d4ad1b02msh79264ed2c9d1a2ap158e6fjsnaa39898192da',
            'x-rapidapi-host': 'shazam.p.rapidapi.com'
          }
        };
        
        try {
          const response = await axios.request(options);
          // setReleases()
          console.log(response.data.tracks.hits[0].track.images.coverart);
        } catch (error) {
          console.error(error);
        }
          }
    
        fetchSongs();
    }, []);  
    

  
  


  return (
    <div>
      <input
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Enter artist name"
        className="border p-2"
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter song title"
        className="border p-2 ml-2"
      />
      <button onClick={fetchLyrics} className="bg-blue-500 text-white p-2 ml-2">
        Fetch Lyrics
      </button>

      {error ? (
        <p className="text-red-500 mt-4">{error}</p>
      ) : (
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: lyrics }}
        />
      )}
    </div>
  );
}

export default TestApi;
