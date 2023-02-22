import { Button } from "../Button";
import { AvatarText, Canvas, Container, File, Frame } from "./style";
import Avatar from "../../assets/Avatar.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { api } from "../../services/api";

export function Comment({ setModal }) {
  const [comment, setComment] = useState("");
  const [commentFile, setCommentFile] = useState(null);
  const [commentFilePreview, setCommentFilePreview] = useState(null);
  const contentArray = [commentFile, comment];

  function handleFile(event) {
    const file = event.target.files[0];
    setCommentFile(file);

    const filePreview = URL.createObjectURL(file);
    setCommentFilePreview(filePreview);
    console.log(filePreview);
  }

  function handleComments() {
    const fileUploadForm = new FormData();
    // fileUploadForm.append("comments", comment);

    try {
      contentArray.map((e) => {
        if (e) {
          fileUploadForm.append("comments", e);
        }
      });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possíve atualizar o perfil");
      }
    }
    api.post("/comments", fileUploadForm);
    setModal(false);
  }
  // setModal(false);

  return (
    <Container>
      <Canvas>
        <AvatarText>
          <img src={Avatar} alt="Avatar" />
          <textarea onChange={(e) => setComment(e.target.value)} />
        </AvatarText>
        <File>
          <p></p>
          <input
            type="file"
            accept="image/png, image/jpg"
            onChange={handleFile}
          />
        </File>
        <Button title="Post" onClick={() => handleComments()} />
        <Frame>
          <AiOutlineCloseCircle onClick={() => setModal(false)} />
        </Frame>
      </Canvas>
    </Container>
  );
}
