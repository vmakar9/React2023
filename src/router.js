import {createBrowserRouter, Navigate} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {EpisodesPage} from "./components/Pages/EpisodesPage";
import {CharactersPage} from "./components/Pages/CharactersPage";

export const router = createBrowserRouter([
    {
        path: '', element: <Layout/>, children: [
            {index: true, element: <Navigate to={'episodes'}/>},
            {path: 'episodes', element: <EpisodesPage/>},
            {path: 'characters/:ids', element: <CharactersPage/>}
        ]
    }
]);
