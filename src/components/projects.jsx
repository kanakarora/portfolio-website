import "../styles/projects.css";
const Projects = () =>{

 const projectData = [
    {
        id:1,
        title:"Todo List | Task Management Application",
        codeSrc:"https://github.com/kanakarora/todo-app",
        discription:"Developed a responsive web application using ReactJS and Context API. Built reusable components for task creation, deletion, and updating. Implemented state management for optimal performance. Focused on clean, maintainable code following best practices in front-end development.",
        TechStack:"Tech Stack: ReactJS, Context API"

    },
    {
        id:2,
        title:"Myntra Clone | E-commerce Website",
        codeSrc:"https://github.com/kanakarora/myntra__clone",
        discription:"Developed user-facing features and reusable components in HTML, CSS, ReactJS. Implemented responsive design and ensured cross-browser compatibility. Integrated back-end APIs for dynamic product data display and optimized the application for speed and performance.",
        TechStack:"Tech Stack: HTML, CSS, ReactJS, API Integration"

    },
    {
        id:3,
        title:"Short-Tales | Social Media Application",
        codeSrc:"https://github.com/kanakarora/social--media/tree/master",
        discription:"Developed front-end features with ReactJS and Context API, emphasizing scalable architecture. Created reusable components and ensured cross-browser compatibility. Implemented user authentication to integrate front-end with server-side logic. Focused on responsive design principles for a seamless multi-device experience.",
        TechStack:"Tech Stack: ReactJS, Context API, User Authentication"

    },
   
 ]

  return (
    <div className="projects">
    <h1>My Projects</h1>

    {projectData && projectData.map (project=>{
        return (
            <div class="project">
        <h2>{project.title}</h2>
        <p>{project.discription}</p>
        <p class="tech-stack">{project.TechStack}</p>
        <a href={project.codeSrc} target="_blank">View Project</a>
    </div>
        )
    })
}
  
</div>

  )

}
export default Projects;