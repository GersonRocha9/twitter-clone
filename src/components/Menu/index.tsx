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

import { MenuItem } from "../../components";
import { MenuContainer } from "./styles";

export const Menu = () => {
  return (
    <MenuContainer>
      <MenuItem active label="Home" icon={<House weight="fill" size={32} />} />
      <MenuItem label="Explore" icon={<Hash size={32} />} />
      <MenuItem label="Notifications" icon={<Bell size={32} />} />
      <MenuItem label="Messages" icon={<Envelope size={32} />} />
      <MenuItem label="Bookmarks" icon={<BookmarkSimple size={32} />} />
      <MenuItem label="Lists" icon={<FileText size={32} />} />
      <MenuItem label="Profile" icon={<User size={32} />} />
      <MenuItem label="More" icon={<DotsThreeCircle size={32} />} />
    </MenuContainer>
  );
};
