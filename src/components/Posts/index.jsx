import { Container, Content, Interaction, User } from "./styles";
import Avatar from "../../assets/Avatar.png";
export function Post() {
  return (
    <Container>
      <User>
        <img src={Avatar} alt="   " />
        <p>User Name</p>
      </User>
      <Content>
        <img src="" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
          odio. Odio ratione quia qui saepe! Qui laudantium perferendis totam
          temporibus eveniet omnis iusto obcaecati, unde voluptates a! Quam,
          quod inventore. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Quis quam id sed, dolores esse, impedit at mollitia tenetur quos
          delectus quae facilis obcaecati amet fugit aut ullam alias itaque
          corporis? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Doloremque repellat maxime eos quasi? Inventore adipisci laboriosam
          sequi vitae voluptatem, odit fugiat ipsam veritatis perferendis
          deleniti tempora magni placeat asperiores delectus! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Beatae aspernatur nam dolorem
          inventore modi? Ad dolores sapiente hic quidem, animi repellat earum
          quos minima labore, officiis molestias fugit? Obcaecati, amet!
        </p>
      </Content>
      <Interaction></Interaction>
    </Container>
  );
}
