import React from 'react'
import CustomEditor from './CustomEditor'
import TestApi from './TestApi'
import { MainContext } from './Context'

const MelodyMeme = () => {
    const { fetchSongs } = MainContext();
  return (
      <div>
          <CustomEditor />
          <TestApi />
          <button onClick={fetchSongs} className="bg-blue-500 text-white p-2 ml-2">
        Fetch covver art
        </button>
    </div>
  )
}

export default MelodyMeme