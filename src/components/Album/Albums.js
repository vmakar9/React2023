import {useEffect, useState} from "react";
import {albumsService} from "../../services/albums.service";
import {Album} from "./Album";

export const Albums=()=>{
    const [albums,setAlbums] = useState([])

    useEffect(() => {
        albumsService.getAll().then(({data})=>setAlbums(data))
    }, []);

    return(<div>
        <div>
            {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    </div>)
}