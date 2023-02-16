import { Nav } from "../../components/Nav";
import { Post } from "../../components/Posts";

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
import Avatar from "../../assets/Avatar.png";
import { Friend } from "../../components/Friend";
import { Header } from "../../components/Header";

export function Home() {
  return (
    <Container>
      <Nav />
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
            <img src={Avatar} alt="" />
            <button>What is in your mind?</button>
          </Posts>
          <Feed>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </Feed>
        </section>
        <section className="watchAndFrinds">
          <WhatsNext>
            <h4>What watch next?</h4>
            <div className="next"></div>
          </WhatsNext>
          <Friends>
            <div className="messages">
              <img src={Avatar} alt="" />
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
