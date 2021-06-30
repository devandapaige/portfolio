import ContactImg from "../assets/Headshot2.jpg";
function Contact() {
  return (
    <div id="contact">
      <div>
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a
            href="mailto:jobs@amanda-nelson.com"
            rel="noreferrer"
            target="_blank"
          >
            jobs@amanda-nelson.com
          </a>
        </p>
        <p>
          Schedule a Zoom:{" "}
          <a
            href="http://calendar.amanda-nelson.com"
            rel="noreferrer"
            target="_blank"
          >
            calendar.amanda-nelson.com
          </a>
        </p>
      </div>
      <img alt="Amanda Nelson" src={ContactImg} id="contactImg"/>
    </div>
  );
}

export default Contact;
