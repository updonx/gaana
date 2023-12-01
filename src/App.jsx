
import './App.css'
import Music_detail_card from './card/Music_detail_card'
import MusicPlayer from './componets/MusicPlayer'
import { MusicProvider } from './contexts/Music'
import { Appprovider } from './contexts/song'

import Home from './home/Home'
import Navbaar from './navbaar/Navbaar'
// import Sidebaar from './sidebaar/Sidebaar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  
  

  return (
    <>
       <Navbaar/>
      
      
      {/* <Sidebaar/> */}
      
      <Appprovider>
        <MusicProvider>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='music/:id' element={<Music_detail_card/>}/>
        <Route path='/music' element={<MusicPlayer/>}/>
      </Routes>
      </BrowserRouter>
      </MusicProvider>
      </Appprovider>
      
    </>
  )
}

export default App
