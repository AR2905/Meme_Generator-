import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Edit from "./pages/Edit"
import './app.css'
function App() { 
    return(
        <div className="App">
            <h1>Meme Generator</h1>
            <Routes>
            
                <Route path="/" element={<Home/>}/>
                
                <Route path="/edit" element={<Edit/>}/>

            </Routes>
        </div>
    )
}

export default App