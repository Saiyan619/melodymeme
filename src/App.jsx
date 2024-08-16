import './App.css'
import { Context, MainContext } from './Context'
import CustomEditor from './CustomEditor'
import MelodyMeme from './MelodyMeme'
import TestApi from './TestApi'

function App() {
  // const {fetchSongs} = MainContext()
  return (
    <Context>
      <MelodyMeme />
           </Context>
  )
}

export default App
