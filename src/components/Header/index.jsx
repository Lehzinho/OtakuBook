import { Container } from "./styles";
import AvatarPaceholder from "../../assets/Profile_avatar_placeholder_large.png";
import Background from "../../assets/dswallpapper.jpg";

import { AiOutlineEdit } from "react-icons/ai";

import { api } from "../../services/api";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function Header({
  imgSize,
  bkHeight,
  edit = false,
  setAvatarFile,
  setBackgroundFile,
}) {
  const { user, avatarUrl } = useAuth();

  const backgroundUlr = user.background
    ? `${api.defaults.baseURL}/background/${user.background}`
    : Background;

  const [background, setBackground] = useState(backgroundUlr);

  function handleAvatarFile(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  function handleBackgroundFile(event) {
    const file = event.target.files[0];
    setBackgroundFile(file);

    const imagePreview = URL.createObjectURL(file);
    setBackground(imagePreview);
  }

  return (
    <Container
      imgSize={imgSize}
      bkHeight={bkHeight}
      style={{ backgroundImage: `url(${background})` }}
    >
      {edit && (
        <label htmlFor="background">
          <AiOutlineEdit />
          <input type="file" id="background" onChange={handleBackgroundFile} />
        </label>
      )}
      <div>
        <img src={avatarUrl} alt="Avatar" />
        {edit && (
          <label htmlFor="avatar">
            <AiOutlineEdit />
            <input type="file" id="avatar" onChange={handleAvatarFile} />
          </label>
        )}
      </div>
    </Container>
  );
}
