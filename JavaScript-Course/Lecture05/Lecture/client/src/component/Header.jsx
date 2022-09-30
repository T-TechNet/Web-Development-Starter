import React from "react";
import styled from "styled-components";
import "./Header.css";

const Container=styled.div`
    height: 10px;
    color: red;
`

const Header = () => {
  return <div className="header">This is header part</div>;
};

export default Header;
