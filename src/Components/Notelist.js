import React from "react";

import Noteitem from "./Noteitem";

function Notelist({Note,onDelete,onSearch}){
    return(
        <div className="Note-list">
            {
             Note.map((Note) =>(
                <Noteitem key={Note.id} id={Note.id}onDelete={onDelete}{...Note} onSearch={onSearch}/>
    ))
 }
</div>
    );
}

export default Notelist;