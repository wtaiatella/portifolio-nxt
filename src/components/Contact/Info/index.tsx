import { Container } from "./styles";

export function Info() {
  return (
    <Container>
      <h2>
        My <span className="text-highlight">contact</span> details
      </h2>

      <h3>e-mail</h3>
      <p>
        <a href="mailto:wtaiatella@gmail.com">wtaiatella@gmail.com</a>
      </p>

      <h3>phone</h3>
      <p>
        <a href="tel:+5541992292443">+55 41 9 9229-2443</a>
      </p>

      <h3>address</h3>
      <p>Brazil, Florianópolis, SC</p>

      <div className="contact-socialmedia">
        <h2>Follow me</h2>
        <ul>
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5541992292443"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/Icones/whatsapp-big-logo.png" alt="whatsapp" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/wtaiatella"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/Icones/github.png" alt="github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/wagner-taiatella/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/Icones/linkedin.png" alt="linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
}
