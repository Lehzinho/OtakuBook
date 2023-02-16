import { Button } from "../Button";
import { AvatarText, Canvas, Container, File, Frame } from "./style";
import Avatar from "../../assets/Avatar.png";
import { AiOutlineCloseCircle } from "react-icons/ai";

export function Comment() {
  return (
    <Container>
      <Canvas>
        <AvatarText>
          <img src={Avatar} alt="Avatar" />
          <textarea />
        </AvatarText>
        <File>
          <p></p>
          <input type="file" accept="image/png, image/jpg" />
        </File>
        <Button title="Post" />
        <Frame>
          <AiOutlineCloseCircle />
        </Frame>
      </Canvas>
    </Container>
  );
}
