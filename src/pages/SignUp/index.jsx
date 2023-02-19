import { Container, Footer, Form, Logo } from "./styles";
import Otakubook from "../../assets/Otakubook.svg";
import オタク本 from "../../assets/オタク本.svg";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";
export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      return alert("Preenchs todos os campos!");
    }

    api
      .post("users", { name, email, password })
      .then(() => {
        alert("Usuario cadastrado com sucesso!");
        navigate(-1);
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possivel cadastrar");
        }
      });
  }

  return (
    <Container>
      <Logo>
        <img src={Otakubook} alt="Logo" />
        <img src={オタク本} alt="Logo" />
      </Logo>
      <Form>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>
          Learn more about our terms. <a href="#">Privacy Policy</a>{" "}
        </p>
        <Button
          radius="10px"
          height="65px"
          width="450px"
          title="Sign Up"
          onClick={handleSignUp}
        />
        <hr />
        <Link to="/">Log In</Link>
      </Form>

      <Footer>
        <p> Copyright © All rights reserved.</p>
      </Footer>
    </Container>
  );
}
