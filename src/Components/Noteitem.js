import React from "react";

 import NoteBody from "./NoteBody";
 import DeleteButton from "./DeleteButton";



 function Noteitem ({title,body, createdAt,id,onDelete,archived,}){
    return(
        <div className="Note-item" >
            <NoteBody  id={id} title={title} body={body} createdAt={createdAt}archived={archived}/>
            <DeleteButton id={id} onDelete ={onDelete}/>
        </div>
    )
 }


 export default Noteitem;