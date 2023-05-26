import React from "react";

import avatar from "assets/img/avatar.jpg";

import "./styles.scss";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="content">
        <div className="left-side">
          <div className="title">About me</div>
          <div className="img-wrapper">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
        <div className="right-side">
          Hello! My name is Nghia and I enjoy creating things.
          <br />
          <br /> I am experienced in web development. I am familiar with React,
          JavaScript and TypeScript. Able to effectively self-manage during
          independent projects, as well as collaborate in a team setting.
          <br />
          <br /> As an extrovert, I keep a pro-active spirit and caring to in a
          team. I am aiming to be a full-stack developer in the future.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
