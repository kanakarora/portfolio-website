import "../styles/Home.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Home = () =>{
    return (
        <>
        <section id="profile">
<div class="section__pic-container">
  <img src="profilePic.jpg" alt="John Doe profile picture" />
</div>
<div class="section__text">
  <p class="section__text__p1">Hello, I'm</p>
  <h1 class="title">John Doe</h1>
  <p class="section__text__p2">Frontend Developer</p>
  <div class="btn-container">
    <button
      class="btn btn-color-2"
      onclick="window.open('./assets/resume-example.pdf')"
    >
      Download CV
    </button>
    <button class="btn btn-color-1" onclick="location.href='./#contact'">
      Contact Info
    </button>
  </div>
  <div id="socials-container">
   <a href="https://github.com/kanakarora"><FaGithub/></a>
   <a href="https://www.linkedin.com/in/kanakarora/"><FaLinkedin /></a>
   
   
  </div>
</div>
</section>
        </>
    )
}

export default Home;
