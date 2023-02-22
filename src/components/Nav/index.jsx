import { Container, Logo, Menu, Search } from "./styles";
import Otakubook from "../../assets/Otakubook.svg";
import オタク本 from "../../assets/オタク本.svg";
import {
  AiOutlineHome,
  AiOutlineBell,
  AiOutlineSearch,
  AiOutlineLogout,
} from "react-icons/ai";
import avatar from "../../assets/Avatar.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

function handleLogout() {}

export function Nav() {
  const { signOut, avatarUrl } = useAuth();
  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={Otakubook} alt="Logo" />
          <img src={オタク本} alt="Logo" />
        </Link>
      </Logo>
      <Search>
        <button>
          <AiOutlineSearch /> Search on OtakuBook
        </button>
      </Search>
      <Menu>
        <Link to="/myfeeds">
          <AiOutlineBell />
        </Link>
        <Link to="/">
          <AiOutlineHome />
        </Link>
        <Link to="/profile">
          <img src={avatarUrl} alt="Avatar" />
        </Link>
        <Link to="/">
          <AiOutlineLogout onClick={signOut} />
        </Link>
      </Menu>
    </Container>
  );
}
