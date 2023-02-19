import { Container, Footer, Form, Logo, LogoContent } from "./styles";
import Otakubook from "../../assets/Otakubook.svg";
import オタク本 from "../../assets/オタク本.svg";
import MangaSignIn from "../../assets/MangaSignIn.png";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(event) {
    event.preventDefault();
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <input
          type="text"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          radius="10px"
          height="65px"
          width="450px"
          title="Log In"
          onClick={handleSignIn}
        />
        <hr />
        <Link to="/signup">Dont Have an account no probblem SignUp</Link>
      </Form>
      <LogoContent>
        <Logo>
          <img src={Otakubook} alt="Logo" />
          <img src={オタク本} alt="Logo" />
        </Logo>
        <p>A new way to connect people to the world of anime.</p>
        <img src={MangaSignIn} alt="Logo" />
      </LogoContent>
      <Footer>
        <p> Copyright © All rights reserved.</p>
      </Footer>
    </Container>
  );
}
0;
