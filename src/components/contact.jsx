import "../styles/contactme.css";


const Contact = () =>{
  
  
    
    

    return (
        <div className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p><i className="fas fa-envelope"></i> kanikaarora2404@gmail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Sri Ganganagar, Rajasthan</p>
            <p><i className="fas fa-phone"></i> 8824707625</p>
            <div className="social-links">
              <a href="https://github.com/kanakarora" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://www.linkedin.com/in/kanakarora" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
         
        </div>
      </div>
    )
}

export default Contact;