import {React , useEffect, useState}  from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import MemeCard from "../components/Card"
import { getAllMemes } from "../Api/meme"



function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
        getAllMemes().then((meme) => setData(meme.data.memes))
    }, [])


    return (
        <div className="row" >

            { 
                data.map((e) => <MemeCard img = {e.url} title ={e.name}/>)
            }
            
        </div>
    )
}

export default Home