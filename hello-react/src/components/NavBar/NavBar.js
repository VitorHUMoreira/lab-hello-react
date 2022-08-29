import "./NavBar.css";
import ironLogo from "../../assets/ironhack-logo-xs.png";
import hamburg from "../../assets/menu-top-xs.png";

function NavBar() {
  return (
    <div className="nav-container">
      <img src={ironLogo} alt="Ironhack logo" />
      <img src={hamburg} alt="Hamburg menu" />
    </div>
  );
}

export default NavBar;
