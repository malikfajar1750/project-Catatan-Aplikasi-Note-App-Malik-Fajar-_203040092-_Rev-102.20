import React from "react";

import { showFormattedDate } from "../ultilites/data";

function NoteBody ({title,body, id, createdAt,archived}){
    return(
        <div className="Note_item-body">
             <h4 className='card-id card-title'>{id}</h4>
            <h3 className="note_Body">{title}</h3>
            <h4 className="note_body">{body}</h4>
            <h5 className="note_p">{showFormattedDate(createdAt)}</h5>
            <p className="note_p">{archived} </p>
        </div>
    )
}


  
export default NoteBody;
