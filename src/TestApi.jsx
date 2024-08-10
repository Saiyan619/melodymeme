import React from 'react'
import { useEffect } from 'react'

const TestApi = () => {
    useEffect(() => {
        const fetchToken = async () => {
          const clientId = 'd46219bf9b64425bbbcadb415d889176'; // Replace with your actual client ID
          const clientSecret = '34410039424e44928aa70c022a7bb6f0'; // Replace with your actual client secret
    
          try {
            const response = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                body: new URLSearchParams({
                  'grant_type': 'client_credentials',
                  'client_id': 'd46219bf9b64425bbbcadb415d889176', // Replace with your actual client ID
                  'client_secret': 'd46219bf9b64425bbbcadb415d889176' // Replace with your actual client secret
                }),
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              });
      
              if (!response.ok) {
                throw new Error('Failed to fetch token');
              }
      
              const data = await response.json();
              setToken(data.access_token);
          } catch (error) {
            console.error('Error fetching token:', error);
          }
        };
    
        fetchToken();
      }, []);
    

  return (
      <div>
             <div>
      <h1>Spotify Access Token</h1>
      {/* {token ? <p>Token: {token}</p> : <p>Loading...</p>} */}
    </div>
    </div>
  )
}

export default TestApi