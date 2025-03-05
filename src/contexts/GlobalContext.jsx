import {createContext, useState, useContext} from "react"
import axios from "axios"

const GlobalContext = createContext();

const GlobalProvider = ({childern}) => {

    //Chiamata Api per i film
    const [movies, setMovies] = useState ();

    //Creazione variabili per l'endpoint e l'API key
    const url = import.meta.env.API_MOVIES_URL;
    const keyUrl = import.meta.env.API_KEY;

    const fetchMovies =() =>{
        axios
        .get (url/keyUrl)
        .then ((res => setMovies (res.data)));
    }

    //destracturing per il value
    const value ={
        movies,
        fetchMovies,
    }

    return (
        <GlobalContext.Provider value={value}>
            {childern}
        </GlobalContext.Provider>
    )
}

const useGlobalContext =() => useContext (GlobalContext)

export {
    GlobalProvider,
    useGlobalContext
}