import React from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';
import { createRef } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";

function Edit() {
    const [count, setcount] = useState(0); 
    const [para] = useSearchParams(); 
    const imageUrl = para.get('url');
    const memeref = createRef()
    const addTxt = () => {
        setcount(count + 1)
    }
    return(
        <>
            <h1>Edit page</h1>

            <div className="meme" ref={memeref}>

            <img src= {imageUrl} alt="coming" style={{width : '60vh'}}/>

            {   Array(count).fill(0).map((e)=> <Text/>) }

            </div>

            <Button style={{ margin:'30px' , display:'block'}}   onClick={() => addTxt()}>Add Text</Button>


            <Button style={{ margin:'30px' , display:'block'}} variant="success" onClick={ (e) => exportComponentAsJPEG(memeref) }>Save</Button>
        </>
    )
}

export default Edit