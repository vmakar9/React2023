import {useEffect, useState} from "react";
import {commentsService} from "../../services/comments.service";
import {Comment} from "./Comment";
import {Outlet} from "react-router-dom";

export const Comments =()=>{
    const [comments,setComments] = useState([])
    useEffect(() => {
        commentsService.getAll().then(value => setComments(value.data))
    }, []);

    return(<div>
        <div>
            <Outlet/>
        </div>
        {comments.map(comment =><Comment commment={comment} key={comment.id}/>)}
    </div>)
}