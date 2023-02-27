import { Container, Content, Interaction, User } from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { BsChatLeftText } from "react-icons/bs";
import AngryEmo from "../../assets/EmoAngry.svg";
import StarEmo from "../../assets/Emostar.svg";
import HappyEmo from "../../assets/EmoHappy.svg";
import CommentsEmo from "../../assets/EmoComments.svg";

export default function FeedPost({ modal, comments }) {
  const [likes, setLikes] = useState(null);
  const [happy, setHappy] = useState(null);
  const [star, setStar] = useState(null);
  const [angry, setAngry] = useState(null);
  const avatar = `${api.defaults.baseURL}/avatar/${comments.commentUser[0].avatar}`;
  const displayFile =
    comments.file && `${api.defaults.baseURL}/uploads/${comments.file}`;

  function changeStatus(e) {
    const triger = e.target.id;
    if (e.target.className === "active") {
      setHappy(false);
      setStar(false);
      setAngry(false);
      return;
    }
    setHappy(false);
    setStar(false);
    setAngry(false);
    triger === "happy" && setHappy(true);
    triger === "star" && setStar(true);
    triger === "angry" && setAngry(true);
    api.post(`/likes/${comments.id}`, {
      like: happy,
      sad: star,
      dislike: angry,
    });
  }

  useEffect(() => {
    async function getLikes() {
      const likes = await api.get(`/likes/${comments.id}`);
      setLikes(likes);
    }
    console.log(happy, star, angry);
    happy ||
      star ||
      (angry &&
        api.post(`/likes/${comments.id}`, {
          like: happy,
          sad: star,
          dislike: angry,
        }));
    getLikes();
  }, [happy, star, angry]);
  return (
    <Container>
      <User>
        <img src={avatar} alt="" />
        <p>{comments.commentUser[0].name}</p>
      </User>
      <Content>
        {comments.file && <img src={displayFile} alt="" />}
        {comments.comment && <p>{comments.comment}</p>}
      </Content>
      <Interaction>
        <img
          src={HappyEmo}
          className={happy ? "active" : ""}
          onClick={changeStatus}
          alt=""
          id="happy"
        />
        <p>0</p>
        <img
          src={StarEmo}
          className={star ? "active" : ""}
          onClick={changeStatus}
          alt=""
          id="star"
        />
        <p>1</p>

        <img
          src={AngryEmo}
          className={angry ? "active" : ""}
          onClick={changeStatus}
          alt=""
          id="angry"
        />
        <p>2</p>

        <img src={CommentsEmo} alt="" />
        <p>3</p>
      </Interaction>
    </Container>
  );
}
