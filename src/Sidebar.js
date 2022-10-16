import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { actionsTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={SupervisedUserCircleIcon} title="Friends" />
      <SidebarRow Icon={LocalHospitalIcon} title="Friends" />
      <SidebarRow Icon={QuestionAnswerIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={SubscriptionsIcon} title="Videos" />
      <SidebarRow Icon={KeyboardArrowDownIcon} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
