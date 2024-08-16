import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';


const globalContext = createContext();

export const Context = ({ children }) => {

    const [Releases, setReleases] = useState('');
    const [trackCover, settrackCover] = useState('')
    function handleTrackCover(e) {
        settrackCover(e.target.value)
        console.log(trackCover)
      }

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
      <globalContext.Provider value={{Releases, trackCover, setReleases, fetchSongs, handleTrackCover}}>
          {children}
      </globalContext.Provider>
  )
}

export function MainContext() {
    return useContext(globalContext);
}
