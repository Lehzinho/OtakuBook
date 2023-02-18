import { Container, Footer, Form, Logo } from "./styles";
import Otakubook from "../../assets/Otakubook.svg";
import オタク本 from "../../assets/オタク本.svg";
import MangaSignIn from "../../assets/MangaSignIn.png";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
export function SignUp() {
  return (
    <Container>
      <Logo>
        <img src={Otakubook} alt="Logo" />
        <img src={オタク本} alt="Logo" />
      </Logo>
      <Form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <p>
          Learn more about our terms. <a href="#">Privacy Policy</a>{" "}
        </p>
        <Button radius="10px" height="65px" width="450px" title="Sign Up" />
        <hr />
        <Link to="/">Log In</Link>
      </Form>

      <Footer>
        <p> Copyright © All rights reserved.</p>
      </Footer>
    </Container>
  );
}
0;
