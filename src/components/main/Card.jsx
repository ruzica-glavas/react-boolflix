import {GB, IT, JP, ES, FR ,RO} from "country-flag-icons/react/3x2";
import {FaStar, FaRegStar} from "react-icons/fa";

const Card = (data, type) =>{
    const title = type===`movies` ? data.title : data.name //a dipendeza se é una serie tv o un film nell'API cambia nome
    const originalTitle = type === `movies` ? data.original_title : data.original_name //stessa cosa della varibile di sopra

    const renderLanguage =(language) =>{
        switch (language){
            case `en`:
                return <GB title="Great Britain" className="language-flag" />
            case `it`:
                return <IT title="Great Britain" className="language-flag" />
            case `jp`:
                return <JP title="Great Britain" className="language-flag" />
            case `es`:
                return <ES title="Great Britain" className="language-flag" />
            case `fr`:
                return <FR title="Great Britain" className="language-flag" />
            case `ro`:
                return <RO title="Great Britain" className="language-flag" />
            default:
                return <span>{language}</span>
                
        }
    }

    const renderVote = (vote) =>{
        const rating =  Math.ceil (vote/2)
        const stars = []
        for (let i=1; i<=5; i++){
            stars.push (
                i<= rating ? (
                    <FaStar key={i} className="star-filled"/>
                ) :(
                    <FaRegStar key={i} className="star-empty"/>
                )
            )
        }
        return stars
    }

    return(
        <>
        <li>
            <img src={`https://image.tmdb.org/t/p/w342${data.poster_path}`} alt={`${title}`}></img>
            <div>
                <h3>{title}</h3>
                <p>Original: {originalTitle}</p>
                <p>Lingua: {renderLanguage (data.original_language)}</p>
                <p>Voto: <span>{renderVote (data.vote_average)}</span></p>
            </div>
        </li>
        </>
    )
}

export default Card