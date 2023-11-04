import {Episodes} from "../EpisodeContainer/Episodes/Episodes";
import {useEffect} from "react";
import {useCharacter} from "../../hoocks/useCharacter";

export const EpisodesPage=()=>{
    const {setCharacter} = useCharacter();

    useEffect(() => {
        setCharacter(null)
    }, [setCharacter])

    return (
        <div>
            <Episodes/>
        </div>
    );
}