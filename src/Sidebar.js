import {
  ExpandMoreOutlined,
  Home,
  OndemandVideo,
  Subscriptions,
  ThumbUpAltOutlined,
  VideoLibrary,
  History,
  WatchLater,
  Whatshot,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected title="Home" Icon={Home} />
      <SidebarRow title="Trending" Icon={Whatshot} />
      <SidebarRow title="Subscription" Icon={Subscriptions} />
      <hr />
      <SidebarRow title="Library" Icon={VideoLibrary} />
      <SidebarRow title="History" Icon={History} />
      <SidebarRow title="Your Videos" Icon={OndemandVideo} />
      <SidebarRow title="Watch Later" Icon={WatchLater} />
      <SidebarRow title="Liked Videos" Icon={ThumbUpAltOutlined} />
      <SidebarRow title="Show more" Icon={ExpandMoreOutlined} />
      <hr />
    </div>
  );
}

export default Sidebar;
