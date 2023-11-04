import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {episodeService} from "../../../services/episodes.service";
import css from "./Episodes.module.css"
import {Episode} from "../Episode/Episode";
export const Episodes=()=>{
    const [episodesRes,setEpisodesRes] = useState({prev:null,next:null,results:[]})
    const [query,setQuery] = useSearchParams({page:'1'})
    const page = query.get('page')

    useEffect(() => {
        episodeService.getAll(page).then(({data:{info:{prev,next},results}})=>setEpisodesRes({prev,next,results}))
    }, [page]);

    const prevHandler =()=>{
        setQuery(prev => {
            prev.set('page',`${page-1}`)
            return prev
        })
    }

    const nextHandler =()=>{
        setQuery(prev => {
            prev.set('page',`${+page+1}`)
            return prev
        })
    }
    return (
        <div >
            <div className={css.Episodes}>
                {episodesRes.results.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.buttons}>
                <button disabled={!episodesRes.prev} onClick={prevHandler}>prev</button>
                <button disabled={!episodesRes.next} onClick={nextHandler}>next</button>
            </div>
        </div>
    );

}