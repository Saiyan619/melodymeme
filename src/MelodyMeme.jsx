import React from 'react'
import CustomEditor from './CustomEditor'
import TestApi from './TestApi'
import { MainContext } from './Context'

const MelodyMeme = () => {
    const { fetchSongs } = MainContext();
  return (
      <div className='p-4'>
          <CustomEditor />
          <TestApi />
       
        
    </div>
  )
}

export default MelodyMeme