import React from "react";
import PropTypes from "prop-types";

const ActionLink = (props) => {
  return (
    <>
      <h1> Hello, i am {props.name} </h1>
      <h2> My job is: {props.job} </h2>
      <p> About myslef: {props.bio} </p>
      <div>
        Here is my picture: <br /> {props.children}
      </div>
      <button onClick={() => props.alertMyInput(`My name is ${props.name} `)}>
        ClickMe
      </button>
    </>
  );
};
ActionLink.defaultProps = {
  name: "Player Unknown",
  job: "Worker",
  bio: "mysterious",
};
ActionLink.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
  bio: PropTypes.string,
};

export default ActionLink;
