import React, { useState, useEffect } from 'react';
import sanitizeHtml from 'sanitize-html';
import axios from 'axios';

function TestApi() {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [error, setError] = useState(null);
  const [trackCover, settrackCover] = useState('')
  const [Releases, setReleases] = useState('')

function handleTrackCover(e) {
  settrackCover(e.target.value)
  console.log(trackCover)
}

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

  const fetchSongs = async () => {

    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/search',
      params: {
        term: `${trackCover}`,
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
      const coverart = response.data.tracks.hits[0].track.images.coverart;
      setReleases(coverart)
    } catch (error) {
      console.error(error);
    }
}


  


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

      {/* <div>
      <input
        type="text"
        onChange={handleTrackCover}
        placeholder="Enter song name"
        className="border p-2"
      />
      <button onClick={fetchSongs} className="bg-blue-500 text-white p-2 ml-2">
        Fetch covver art
        </button>

      </div> */}
    </div>
  );
}

export default TestApi;
