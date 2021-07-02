import ProfileImg from "../assets/headshot1.jpg";
import SocialIcons from "./SocialIcons";
function About() {
  return (
    <section id="about">
      <div className="aboutSection">
        <img alt="Amanda Nelson" src={ProfileImg} />
        <div className="aboutText">
          <h2>About</h2>
          <p>
            💻 Full Stack Javascript Developer <br />
            🎨 Sticker and Digital Media Creative <br />
            🌊 Float Therapy Advocate <br />
            🌲 Irish Pines Tree Farm Co-Owner
          </p>
          <p>
            It started with a SheCodes Workshop in mid-2020 and became a passion
            for creating and engineering with Javascript.
            <br />
            In July 2021, I officially completed a part-time Full-Stack Web
            Developer Certificate at Lambda School, focusing on the PERN
            (PostgreSQL, Express, React, and Node.js) Stack. <br />
            Creating my own React Applications, building APIs, and taking
            projects from an idea to tangible websites have been beyond
            rewarding. I cannot wait to work for a company on new features and
            maintain their current projects.
            <br />
            When I'm not learning and coding, I like creating marketing
            materials for the Float Zone. I'm always advocating floatation
            therapy for others on their mental health and chronic health
            journies. Occasionally I also escape to central Pennsylvania to my
            family's tree farm I co-own.
          </p>
        </div>
      </div>
      <SocialIcons />
    </section>
  );
}

export default About;
