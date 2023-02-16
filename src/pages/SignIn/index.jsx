import { Container, Footer, Form, Logo, LogoContent } from "./styles";
import Otakubook from "../../assets/Otakubook.svg";
import オタク本 from "../../assets/オタク本.svg";
import MangaSignIn from "../../assets/MangaSignIn.png";
import { Button } from "../../components/Button";
export function SignIn() {
  return (
    <Container>
      <Form>
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Password" />
        <Button radius="10px" height="65px" width="450px" title="Log In" />
        <hr />
        <a href="#">Dont Have an account no probblem SignUp</a>
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
