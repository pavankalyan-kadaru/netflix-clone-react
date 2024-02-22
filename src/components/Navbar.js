import { useEffect, useState } from "react";
import "./navbar.css"




const Navbar = () => {

    const [dispaly,setdisplay] = useState(false)

    
        useEffect(()=>{
            window.addEventListener("scroll", ()=>{
                if(window.scrollY>140){
                    setdisplay(true);
                }else{
                    setdisplay(false);
                }
            })
            return () => {
                window.removeEventListener("scroll",window)
            };
        },[])
    

    return (
        <nav className={`navbar ${dispaly && 'nav_black'}` } >
            <img className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix_logo">
            </img>

            <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix_Avatar"></img>

        </nav>
    )
}


export default Navbar;