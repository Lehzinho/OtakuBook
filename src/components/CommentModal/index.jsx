import {
  Canvas,
  Container,
  Frame,
  Header,
  Likes,
  Image,
  Comments,
} from "./styles";
import Avatar from "../../assets/Avatar.png";
import ImageTest from "../../assets/dswallpapper.jpg";
import { useState } from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";

export function CommentModal() {
  const [img, setImg] = useState(true); // replace with the props
  const [comment, setcomment] = useState(false); // replace with the props
  return (
    <Container>
      <Canvas>
        <Header>
          <div>
            <img src={Avatar} alt="avatar" />
            <p>User Name</p>
          </div>
          <Likes>😃5 🥰2 😠0</Likes>
        </Header>
        {img && <Image src={ImageTest} alt="Image" />}
        {comment && (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            voluptates optio, repellendus expedita vitae autem repellat, ipsa,
            odit id qui nesciunt impedit ea? Porro, aut. Facere beatae obcaecati
            cum maxime?
          </p>
        )}
        <h3>Comments</h3>
        <Comments>
          <h3>User Name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            expedita provident corporis magnam vero illo officia labore mollitia
            amet. Aut incidunt molestias mollitia dolorum, laborum maxime minus
            nostrum veritatis. Necessitatibus?
          </p>
        </Comments>
        <Frame>
          <AiOutlineCloseCircle />
        </Frame>
      </Canvas>
    </Container>
  );
}
