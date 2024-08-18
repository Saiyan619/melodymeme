import React, { useState, useEffect } from 'react';
import sanitizeHtml from 'sanitize-html';

function Lyrics() {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [error, setError] = useState('failed');



  const fetchLyrics = async () => {
    try {
      const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
      const data = await response.json();
    //  if (response.ok) {
       // Sanitize and replace newlines with <br> tags
       const sanitizedLyrics = sanitizeHtml(data.lyrics).replace(/\n/g, '<br/>');
       setLyrics(sanitizedLyrics);
    
    //  }
       
        
    
    } catch (err) {
      setError('Failed to get lyrics');
        console.log('error')
      // setError('An error occurred while fetching lyrics');
      console.log(err)
    }
  };

  


  


  return (
    <div className='mt-10'>
      <h1 className='text-3xl'>Can't remember the Lyrics?, Search below</h1>
      <div className='mt-5'>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter song title"
        className="border p-2 ml-2"
        />
        
      <input
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Enter artist name"
        className="border p-2"
      />
    
    
        <button onClick={fetchLyrics} className="mt-4 ml-4 bg-blue-500 text-white px-4 py-2 rounded" >
          Find Lyrics
        </button>


        {lyrics ? (
           <div className="mt-4" dangerouslySetInnerHTML={{ __html: lyrics }} /> 

      ) : (
        <p className="text-red-500 mt-4">{error}</p>
         ) }
        </div>

    </div>
  );
}

export default Lyrics;
