import './App.css'
import { Context } from './Context'
import MelodyMeme from './MelodyMeme'

function App() {
  // const {fetchSongs} = MainContext()
  return (
    <Context>
      <MelodyMeme />
           </Context>
  )
}

export default App
