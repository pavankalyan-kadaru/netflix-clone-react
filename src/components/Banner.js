import { useEffect, useState } from "react";
import fetchurls from "../urls";
import './banner.css'

const Banner = () =>{

    const [wallposter,setwallposter] = useState([]);

    useEffect(()=>{
        async function fetechwallposter(){
            const response = await fetch(fetchurls.popular)
            const data = await response.json()
            setwallposter(
                data.results[Math.floor(Math.random()* data.results.length)-1] 
            )
        }
        fetechwallposter()
    },[])

    function description(str, len){
       return str?.length>len ? str.substr(0, len-1) + '...' : str
    }


    return(
        <header className="banner_header"
        style= {{
                backgroundImage:`url('https://www.themoviedb.org/t/p/original${wallposter?.poster_path}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                // backgroundRepeat:'no-repeat',
            
        }}>
        <div className="banner_content">
            <h1 className="banner_title">{wallposter?.title || wallposter?.original_title}</h1>

           <div>
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
           </div>

            <h1 className="banner_description"> {description(wallposter?.overview, 200)} </h1>
            
            
        </div>
        <div className="fade_area">

        </div>
            {console.log("wallpaper",wallposter)}
            </header>
    )
}

export default Banner;