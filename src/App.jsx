import './App.css'
import CustomEditor from './CustomEditor'
import TestApi from './TestApi'

function App() {
  return (
    <div className='p-4'>
     <h1 className="text-3xl font-bold underline">
      MelodyMeme
    </h1>
<CustomEditor />
      <TestApi />
</div>  )
}

export default App
