import { useEffect, useState } from "react"
// import fetchurls from "../urls";
import "./rows.css"
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer";

function Rows({ title, fetchinfo, largeposter }) {
    const [movies, setmovies] = useState([]);
    const [trailerurl, settrailerurl] = useState("");

    useEffect(() => {
        async function fetchdata(file) {
            const respones = await fetch(file);
            const data = await respones.json();
            setmovies(data.results);
            // console.log(data);
            // console.log(movies)
            return
        }
        fetchdata(fetchinfo);

    }, [fetchinfo])
    // useEffect(()=>{
    //     const fetching = (file)=>{
    //         fetch(file)
    //         .then(res => res.json())
    //         .then(data => setmovies(data))

    //     }

    //     fetching(fetchinfo)
    // },[fetchinfo])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    function trailershow(poster) {
    //     movieTrailer(poster?.name || poster?.title ||"")
    //         .then((url) => {
    //             console.log("movieurl", url)
    //             const urlpath = new URLSearchParams(new URL(url).search)
    //             console.log("movie v part",urlpath.get("v"))
    //             // settrailerurl(urlpath.get("v"));
    //         })
    //         .catch(error => console.log(error))
    // }
    // console.log("movie trailer",poster.title)
    if (trailerurl) {
        settrailerurl("")
    } else {
        movieTrailer(poster?.name || poster?.title || "")
            .then((url) => {
                console.log("movieurl",url)
                const urlpath = new URLSearchParams(new URL(url).search)
                settrailerurl(urlpath.get("v"));
            })
            .catch(error => console.log(error))
    }
}


return (
    <div className="rows">
        <h2>  {title}  </h2>
        {console.log(movies)}


        {/* {console.log(`movie names only ${movies[0].title}`)} */}
        <div className="row-posters">
            {movies.map(poster => (
                <img
                    onClick={() => trailershow(poster)}
                    src={`https://image.tmdb.org/t/p/original${largeposter ? poster.poster_path : poster.backdrop_path}`}
                    alt={poster.title}
                    className={`posters ${largeposter && 'longposter'}`}
                    key={poster.id} ></img>
            ))}

        </div>
        {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}

    </div>
)
}

export default Rows;