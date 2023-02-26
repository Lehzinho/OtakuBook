import { Button } from "../Button";
import { AvatarText, Canvas, Container, File, Frame } from "./style";
import Avatar from "../../assets/Avatar.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { CommentModal } from "../CommentModal";

export function Comment({ setModal }) {
  const [comment, setComment] = useState("");
  const [commentFile, setCommentFile] = useState(null);
  const [commentModalt, setCommentModalt] = useState(false);
  const [commentFilePreview, setCommentFilePreview] = useState(null);
  const { avatar } = useAuth();

  function handleFile(event) {
    const file = event.target.files[0];
    setCommentFile(file);

    const filePreview = URL.createObjectURL(file);
    setCommentFilePreview(filePreview);
  }

  function handleComments() {
    const fileUploadForm = new FormData();
    try {
      comment && fileUploadForm.append("comments", comment);
      commentFile && fileUploadForm.append("comments", commentFile);
      console.log([...fileUploadForm]);
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

  return (
    <Container onClick={() => setCommentModalt(!commentModalt)}>
      <Canvas>
        <AvatarText>
          <img src={avatar} alt="Avatar" />
          <textarea onChange={(e) => setComment(e.target.value)} />
        </AvatarText>
        <File>
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
