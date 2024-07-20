import "../src/App.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <p>Ashish Singh Negi</p>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="defa</div>ult.asp">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="contact.asp">Contact</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>{" "}
            <li>
              <a href="">Skills</a>
            </li>
          </ul>
        </div>
        <div className="socialLinks">
          <ul>
            <li>
              <a href="linkedin">linkedin</a>
            </li>
            <li>
              <a href="github">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
