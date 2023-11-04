import {useNavigate} from "react-router-dom";
import {useCharacter} from "../../../hoocks/useCharacter";
import css from "./Episode.module.css"
export const Episode=({episode})=>{
    const {id, name, episode: chapter, characters} = episode;

    const navigate = useNavigate();
    const {setCharacter} = useCharacter();
    const toCharacters = () => {
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',');
        setCharacter(chapter)
        navigate(`/characters/${ids}`)
    };

    return (
        <div className={css.Episode} onClick={toCharacters}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
        </div>
    );

}