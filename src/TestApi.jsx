import React, { useState, useEffect } from 'react';
import sanitizeHtml from 'sanitize-html';
import axios from 'axios';

function TestApi() {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [error, setError] = useState(null);



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
