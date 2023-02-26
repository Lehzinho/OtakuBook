import { useAuth } from "../../hooks/auth";

import {
  BestSeller,
  Container,
  Content,
  Feed,
  Friends,
  MyInfo,
  Posts,
  WhatsNext,
} from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import FeedPost from "../../components/Posts";
import Friend from "../../components/Friend";
import { Header } from "../../components/Header";
import { Comment } from "../../components/Comment";
import { Nav } from "../../components/Nav";

function handleModal() {
  setModal(!modal);
}

export function Home() {
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [comments, setComments] = useState(null);

  const { avatar } = useAuth();

  async function updateFeed() {
    const feed = await api.get(`/comments?comment=${search}`);
    setComments(feed.data.commentsWithLikes);
  }

  useEffect(() => {
    updateFeed();
  }, [modal]);

  // comments && console.log(comments);

  return (
    <Container>
      <Nav />
      {modal && <Comment setModal={setModal} />}
      <Content>
        <section>
          <MyInfo>
            <Header imgSize="106px" bkHeight="80px" />
            <p>Name</p>
            <div className="Info">Info</div>
          </MyInfo>
          <BestSeller>
            <h3>Manga Best Seller</h3>

            <div>COMPONENT</div>
          </BestSeller>
        </section>
        <section>
          <Posts>
            <img src={avatar} alt="" />
            <button onClick={setModal}>What is in your mind?</button>
          </Posts>
          <Feed>
            {comments &&
              comments.map((e, index) => (
                <FeedPost modal={modal} key={index} comments={e} />
              ))}
          </Feed>
        </section>
        <section className="watchAndFrinds">
          <WhatsNext>
            <h4>What watch next?</h4>
            <div className="next"></div>
          </WhatsNext>
          <Friends>
            <div className="messages">
              <img src={avatar} alt="" />
              <h3>Friends</h3>
              <hr />
            </div>
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
          </Friends>
        </section>
      </Content>
    </Container>
  );
}
