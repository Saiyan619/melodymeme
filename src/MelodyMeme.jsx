import React from 'react'
import CustomEditor from './CustomEditor'
import Lyrics from './Lyrics'
import { MainContext } from './Context'

const MelodyMeme = () => {
    const { fetchSongs } = MainContext();
  return (
      <div className='p-4'>
          <CustomEditor />
          <Lyrics />
       
        
    </div>
  )
}

export default MelodyMeme