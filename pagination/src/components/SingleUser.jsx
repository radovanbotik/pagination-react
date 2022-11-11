import React from "react";
import "./SingleUser.css";

export default function SingleUser(props) {
  const { img, name, url } = props.props;
  return (
    <div className="user-card">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <a href={url} className="link">
        go to profile
      </a>
      {/* <Link to={url}>see user</Link> */}
    </div>
  );
}
