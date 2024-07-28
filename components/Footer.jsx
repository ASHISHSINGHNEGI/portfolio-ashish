import { Link } from "react-router-dom";
import "../src/assets/Footer.css"; // Adjust the path as necessary

export default function Footer() {
  let contactInfo = {
    name: "Ashish Singh Negi",
    email: "ashishsinghnegi381@gmail.com",
    mobileNo: "+91-8707274186",
    linkedInLink: "https://www.linkedin.com/in/ashishsinghnegi381/",
    githubLink: "https://github.com/ASHISHSINGHNEGI",
    xLink: "https://x.com/21ashunegi",
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact-info">
          <h3>Contact Information</h3>
          <p>
            Email:{" "}
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </p>
          <p>
            Phone:{" "}
            <a href={`tel:${contactInfo.mobileNo}`}>{contactInfo.mobileNo}</a>
          </p>
        </div>
        <div className="footer-section social-links">
          <h3>Follow Me</h3>
          <Link to={contactInfo.linkedInLink} target="_blank">
            <img src="linkedin-svgrepo-com.svg" alt="LinkedIn" />
          </Link>
          <Link to={contactInfo.githubLink} target="_blank">
            <img src="github-142-svgrepo-com.svg" alt="GitHub" />
          </Link>
          <Link to={contactInfo.xLink} target="_blank">
            <img src="logo.svg" alt="Twitter" />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 {contactInfo.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
