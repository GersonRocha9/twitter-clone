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
        <span>Home</span>
      </Link>

      <Link to="/explore">
        <Hash size={32} />
        <span>Explore</span>
      </Link>

      <Link to="/notifications">
        <Bell size={32} />
        <span>Notifications</span>
      </Link>

      <Link to="/messages">
        <Envelope size={32} />
        <span>Messages</span>
      </Link>

      <Link to="/bookmarks">
        <BookmarkSimple size={32} />
        <span>Bookmarks</span>
      </Link>

      <Link to="/lists">
        <FileText size={32} />
        <span>Lists</span>
      </Link>

      <Link to="/profile">
        <User size={32} />
        <span>Profile</span>
      </Link>

      <Link to="/more">
        <DotsThreeCircle size={32} />
        <span>More</span>
      </Link>
    </MenuContainer>
  );
};
