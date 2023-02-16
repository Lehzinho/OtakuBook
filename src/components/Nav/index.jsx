import { Container, Logo, Menu, Search } from "./styles";
import Otakubook from "../../assets/Otakubook.svg";
import オタク本 from "../../assets/オタク本.svg";
import { AiOutlineHome, AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import avatar from "../../assets/Avatar.png";

export function Nav() {
  return (
    <Container>
      <Logo>
        <img src={Otakubook} alt="Logo" />
        <img src={オタク本} alt="Logo" />
      </Logo>
      <Search>
        <button>
          <AiOutlineSearch /> Search on OtakuBook
        </button>
      </Search>
      <Menu>
        <AiOutlineBell />
        <AiOutlineHome />
        <img src={avatar} alt="Avatar" />
      </Menu>
    </Container>
  );
}
