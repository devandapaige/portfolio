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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            condimentum nec arcu non venenatis. Phasellus ultricies erat et
            luctus fermentum. Etiam porta nisi id suscipit semper. Etiam
            interdum hendrerit enim, in posuere purus lobortis molestie. Vivamus
            ac mollis dolor. Aliquam id tristique mauris, sodales varius nibh.
            Morbi molestie nibh vel lacus convallis iaculis sed id ipsum.
            Pellentesque lectus diam, luctus eu lobortis sit amet, gravida et
            elit. Vivamus convallis sollicitudin felis. Maecenas in ex
            tincidunt, pretium ante sit amet, dictum velit. Vestibulum efficitur
            risus vel pellentesque molestie. Nullam quam ligula, ullamcorper in
            orci sit amet, efficitur convallis dui. Fusce congue metus at ligula
            euismod posuere. Integer volutpat odio eu ligula eleifend, et
            consequat quam ultrices. Praesent molestie eget ante nec suscipit.
          </p>
        </div>
      </div>
      <SocialIcons />
    </section>
  );
}

export default About;
