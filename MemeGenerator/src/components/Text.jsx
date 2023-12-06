import Draggable from "react-draggable"
import { useState } from "react"
function Text() {
    const [editMode, seteditMode] = useState(false);
    const [value, setvalue] = useState("Double click to Edit");

    return(
        <div className="text-container">
        <Draggable>
        {
            editMode 
            ? 
            (<input
                value = {value}
                onChange={(e) => setvalue(e.target.value)}
                onDoubleClick={(e) => seteditMode(false)}
            />)
            :
            (
                <h1 onDoubleClick={(e) => seteditMode(true) }>
                    {value}
                </h1>
            )
        }
        </Draggable>
        </div>
        
        
    )
}

export default Text