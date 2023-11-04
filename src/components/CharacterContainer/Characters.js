import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {characterService} from "../../services/character.service";
import {Character} from "./Character";

export const Characters=()=>{
    const {ids} = useParams();
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        characterService.getByIds(ids).then(({data}) => setCharacters(data))
    }, [ids])

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
}