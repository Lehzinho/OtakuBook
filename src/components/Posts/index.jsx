import { Container, Content, Interaction, User } from "./styles";
import { api } from "../../services/api";
import { useCallback, useEffect, useState } from "react";
import AngryEmo from "../../assets/EmoAngry.svg";
import StarEmo from "../../assets/Emostar.svg";
import HappyEmo from "../../assets/EmoHappy.svg";
import CommentsEmo from "../../assets/EmoComments.svg";
import { useAuth } from "../../hooks/auth";

export default function FeedPost({ modal, comments }) {
  const [likes, setLikes] = useState(null);
  const [send, setSend] = useState(false);
  const [happy, setHappy] = useState(false);
  const [angry, setAngry] = useState(false);
  const [star, setStar] = useState(false);
  const [starCount, setStarCount] = useState([]);
  const [angryCount, setAngryCount] = useState([]);
  const [happyCount, setHappyCount] = useState([]);
  const avatar = `${api.defaults.baseURL}/avatar/${comments.commentUser[0].avatar}`;
  const displayFile =
    comments.file && `${api.defaults.baseURL}/uploads/${comments.file}`;
  const { user } = useAuth();

  const changeStatus = useCallback(
    (e) => {
      const triger = e.target.id;
      setSend(true);
      if (e.target.className === "active") {
        setHappy(false);
        setStar(false);
        setAngry(false);
      } else {
        switch (triger) {
          case "happy":
            setHappy(true);
            setStar(false);
            setAngry(false);
            break;
          case "star":
            setHappy(false);
            setStar(true);
            setAngry(false);
            break;
          case "angry":
            setHappy(false);
            setStar(false);
            setAngry(true);
            break;
        }
      }
    },
    [happy, star, angry]
  );

  function updateAll(likes) {
    const newHappyCount = [];
    const newStarCount = [];
    const newAngryCount = [];
    likes.forEach((like) => {
      if (like.like) newHappyCount.push(like.user_id);
      if (like.sad) newStarCount.push(like.user_id);
      if (like.dislike) newAngryCount.push(like.user_id);
    });
    setHappyCount(newHappyCount);
    setStarCount(newStarCount);
    setAngryCount(newAngryCount);
    const newHappy = newHappyCount.includes(user.id);
    const newStar = newStarCount.includes(user.id);
    const newAngry = newAngryCount.includes(user.id);
    if (newHappy !== happy) setHappy(newHappy);
    if (newStar !== star) setStar(newStar);
    if (newAngry !== angry) setAngry(newAngry);
  }

  useEffect(() => {
    const updateLikes = async () => {
      try {
        if (send) {
          await api.post(`/likes/${comments.id}`, {
            like: happy,
            sad: star,
            dislike: angry,
          });
        }
        const response = await api.get(`/likes/${comments.id}`);
        updateAll(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    updateLikes();
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
        <p>{happyCount.length === 0 ? 0 : happyCount.length}</p>
        <img
          src={StarEmo}
          className={star ? "active" : ""}
          onClick={changeStatus}
          alt=""
          id="star"
        />
        <p>{starCount.length === 0 ? 0 : starCount.length}</p>

        <img
          src={AngryEmo}
          className={angry ? "active" : ""}
          onClick={changeStatus}
          alt=""
          id="angry"
        />
        <p>{angryCount.length === 0 ? 0 : angryCount.length}</p>

        <img src={CommentsEmo} alt="" />
        <p>3</p>
      </Interaction>
    </Container>
  );
}
