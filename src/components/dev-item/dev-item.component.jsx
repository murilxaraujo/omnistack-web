import React from "react";
import "./dev-item.styles.scss";

const DevCard = ({ ...otherProps }) => {
  const { key, avatar_url, name, techs, bio, github_username } = otherProps;

  return (
    <li key={key} className="dev-item">
      <header>
        <img src={avatar_url} alt={name} />
        <div className="user-info">
          <strong>{name}</strong>
          <span>{techs}</span>
        </div>
      </header>
      <p>{bio}</p>
      <a href={`http://github.com/${github_username}`}>
        Acessar perfil no github
      </a>
    </li>
  );
};

export default DevCard;
