import "./Header.css";
import { FaRegBell, FaAngleDown } from "react-icons/fa";
import { FiBookmark, FiUser } from "react-icons/fi";
import logo from "../../assets/images/Logo.svg";

export default function Header() {
  return (
    <div className="expent-header">
      <div className="expent-logo-and-navicons">
        <div className="expent-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="expent-navicons">
          <div>HOME</div>
          <div>DASHBOARD</div>
          <div>VENDORS</div>
          <div>PROJECTS</div>
        </div>
      </div>

      <div className="expent-login-and-notifications">
        <div className="icon notification-icon">
          <FiBookmark />
        </div>
        <div className="icon notification-icon">
          <FaRegBell />
        </div>
        <div className="icon notification-icon active-icon">
          <FiUser />
        </div>
        <div className="username">
          Smith Jones <FaAngleDown />
        </div>
      </div>
    </div>
  );
}
