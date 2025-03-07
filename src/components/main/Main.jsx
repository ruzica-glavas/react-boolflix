import {useGlobalContext} from "../../contexts/GlobalContext"
import ResultsList from "./ResultsList"




const Main = () => {

    const {movies, tvs} = useGlobalContext()

   {/* const imgUrl = "https://image.tmdb.org/t/p/";
    const imgSize = "w45";*/} 
    


    //const HandleStars = (vote) => Math.ceil (vote/2)

   {/* const HandleFlag = {
        
            en: "GB",
            it: "IT",
            fr: "FR",
            pt: "PT",
            de: "DE",
            es: "ES",
            zh: "ZH",
            ja: "JP",
            ru: "RU",
            ko: "KR"
        
    }
    */} 

    return (
        <>
        <main>
            <h2>Movies</h2>

            <ResultsList type="movies" items={movies}/>
           {/*<ul>
                {
                    movies.map (element => {
                        return(
                            <li key={element.id}>{element.title}
                            <img
                            src={`${imgUrl}${imgSize}${element.poster_path}`}>   
                            </img>
                            -Original tilte:{element.original_title}
                            -lingua: <ReactCountryFlag 
                            countryCode= {HandleFlag[element.original_language]}
                            svg />
                            -voto: {HandleStars(parseInt(element.vote_average))}
                            </li>
                            
                        )
                    })
                }
            </ul> */} 

            <h2>Series</h2>

            <ResultsList type="tvs" items={tvs}/>
            {/*<ul>
                {
                    tvs.map (element => {
                        return(
                            <li key={element.id}>
                                {element.name}
                                -Original tilte: {element.original_name}
                                -lingua: 
                                <ReactCountryFlag 
                                countryCode= {HandleFlag[element.original_language]}
                                svg/>
                                -voto: {HandleStars(parseInt(element.vote_average))}
                                </li>
                        )
                    })
                }
            </ul> */}
            
        </main>
        </>
    )
}

export default Main