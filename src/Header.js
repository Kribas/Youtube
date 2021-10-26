import MenuIcon from "@material-ui/icons/Menu";
import { Apps, Notifications, Search, VideoCall } from "@material-ui/icons";
import React, { useState } from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt=""
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
      </div>

      <Link to={`/search/${inputSearch}`}>
        <Search className="header__inputButton" />
      </Link>

      <div className="header__icons">
        <VideoCall className="header__icon" />
        <Apps className="header__icon" />
        <Notifications className="header__icon" />
        <Avatar
          src="https://avatars.githubusercontent.com/u/32868850?v=4"
          alt="Kribas"
        />
      </div>
    </div>
  );
}

export default Header;
