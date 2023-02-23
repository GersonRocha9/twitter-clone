import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  User,
} from "phosphor-react";

import { Link } from "react-router-dom";
import { MenuContainer } from "./styles";

export const Menu = () => {
  return (
    <MenuContainer>
      <Link to="/">
        <House weight="fill" size={32} />
        Home
      </Link>

      <Link to="/explore">
        <Hash size={32} />
        Explore
      </Link>

      <Link to="/notifications">
        <Bell size={32} />
        Notifications
      </Link>

      <Link to="/messages">
        <Envelope size={32} />
        Messages
      </Link>

      <Link to="/bookmarks">
        <BookmarkSimple size={32} />
        Bookmarks
      </Link>

      <Link to="/lists">
        <FileText size={32} />
        Lists
      </Link>

      <Link to="/profile">
        <User size={32} />
        Profile
      </Link>

      <Link to="/more">
        <DotsThreeCircle size={32} />
        More
      </Link>
    </MenuContainer>
  );
};
