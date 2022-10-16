import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import FlagIcon from "@material-ui/icons/Flag";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { useStateValue } from "./StateProvider";
import Logo from "./GetSocialLogo.png";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <img src={Logo} alt="Logo" />
        <div className="header__input">
          <SearchIcon />
          <input type="Text" placeholder="Search GetSocial"></input>
        </div>
      </div>

      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar fontSize="large" src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <div>
          <IconButton>
            <AddIcon />
          </IconButton>

          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>

          <IconButton>
            <QuestionAnswerIcon />
          </IconButton>

          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
export default Header;
