import React, { useState, useContext } from "react";
import { HashLink } from "react-router-hash-link";
import { withStyles } from "@material-ui/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";
import CopyToClipboard from "react-copy-to-clipboard";

import Iconbox from "../Icon/Iconbox";
import TextArrow from "../TextArrow/TextArrow";
import { ContextApp } from "../../../ContextAPI";
import { addNotification } from "../../AppFunctions";
import styles from "./Card.module.css";

function Card(props) {
  const {
    className = "",
    themeShadow,
    iconLink,
    copy = false,
    learnMoreBtn = false
  } = props;
  const { id, icon = "fas fa-id-card", name, score } = props.card;
  const { notifisystem } = useContext(ContextApp);
  const [copied, setCopied] = useState(false);

  // console.log(id, name, webdevScore);
  return (
    <HashLink
      to={`/profile/${id}`}
      className={`${className !== "" ? className["card"] : ""} ${
        styles["card"]
      } ${themeShadow ? styles["theme-shadow-card"] : ""}`}
      data-aos="zoom-in"
    >
      <Iconbox className={className} icon={icon} />
      <div>
        <h4>{name}</h4>
        <p>Score : {Math.round(score * 1000) / 1000} / 10</p>
      </div>
      {iconLink}
      {learnMoreBtn && <TextArrow className={className} text="Learn More" />}
    </HashLink>
  );
}

export default Card;
