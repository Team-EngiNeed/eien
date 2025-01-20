import React from "react";
import "./Title.css";

interface TitleProps {
  subTitle: string; // Define the type of subTitle
  title: string; // Define the type of title
}

const Title: React.FC<TitleProps> = ({ subTitle, title }) => {
  return (
    <div className="title" id="title">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
