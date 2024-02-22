import "./about.css"

const About = ()=>{
    return (
        <>
        <div className="fade">
             
        </div>
        <div className="about_div">
        <h1>Few details</h1>

            <details className="details">
                <summary className="summary">About-Me</summary>
                <p className="para">I'm Pavankalyan from Hyderabad, and I graduated in 2022. After graduation, I took a web development program to strengthen my talents, and by the conclusion of the course, I obtained new skills and experience. I also worked on a few projects, which helped me build confidence to work on real-world projects..</p>     
            </details>

            <details className="details">
                <summary className="summary">About-application</summary>
                <p className="para">This the a demo application similar to movie streaming application Netflix biuld using ReactJs and other modules. The movie data is dynamic and fetched from Tmdb API and also one can view a video related to the movie by clicking on the movie poster</p>
            </details>

            <details className="details">
                <summary className="summary">Technologies Used</summary>
                <p className="para">This application is based on reactJs where I have used Hooks and also other npm modules such as react-youtube for the relative video of the movies and all movie datas are dynamic and fetch from Tmdb API. To deploy the appication I have deployed using Github </p>

            </details>

            <details className="details">
                <summary className="summary">SKills</summary>
                <p className="para">Programming language: Python | Javascript   \\\front-end: HTML | CSS | Typescript | ReactJs | Json |   \\\Other: Data Structure and Algorithms  | MYSQL | DBMS | Problem solving</p>

            </details>


        </div>
        </>
    )
}

export default About;