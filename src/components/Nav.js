import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-size: cover;
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.span`
  font-family: 'Open Sans', sans-serif;
  color: #555;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 50px;
  font-weight: 800;
  letter-spacing: -3px;
  line-height: 1;
  margin: 15px 25px 40px 25px;
  text-shadow: #ededed 3px 2px 0;
  position: relative;
  &:after {
    content: 'MovieQL';
    position: absolute;
    left: 8px;
    top: 32px;
  }
  &:after {
    background-image: -webkit-linear-gradient(
      left top,
      transparent 0%,
      transparent 25%,
      #555 25%,
      #555 50%,
      transparent 50%,
      transparent 75%,
      #555 75%
    );
    background-size: 4px 4px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: -5;
    display: block;
    text-shadow: none;
  }
`;

const Menu = styled.span`
  width: 1090px;
  height: 42px;
  list-style: none;
  margin: 10px 0 0 0;
  padding: 25px 10px;
  border-top: 4px double #aaa;
  border-bottom: 4px double #aaa;
  position: relative;
  text-align: center;
  #menu li {
    display: inline-block;
    width: 173px;
    margin: 0 10px;
    position: relative;
    -webkit-transform: skewy(-3deg);
    -webkit-backface-visibility: hidden;
    -webkit-transition: 200ms all;
  }
  #menu li a {
    text-transform: uppercase;
    font-family: 'Squada One', cursive;
    font-weight: 800;
    display: block;
    background: #fff;
    padding: 2px 10px;
    color: #333;
    font-size: 35px;
    text-align: center;
    text-decoration: none;
    position: relative;
    z-index: 1;
    text-shadow: 1px 1px 0px #fff, 2px 2px 0px #999, 3px 3px 0px #fff;
    background-image: -webkit-linear-gradient(
      top,
      transparent 0%,
      rgba(0, 0, 0, 0.05) 100%
    );
    -webkit-transition: 1s all;
    background-image: -webkit-linear-gradient(
      left top,
      transparent 0%,
      transparent 25%,
      rgba(0, 0, 0, 0.15) 25%,
      rgba(0, 0, 0, 0.15) 50%,
      transparent 50%,
      transparent 75%,
      rgba(0, 0, 0, 0.15) 75%
    );
    background-size: 4px 4px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4) inset,
      0 0 20px -5px rgba(0, 0, 0, 0.4), 0 0 0px 3px #fff inset;
  }
  #menu li:hover {
    width: 203px;
    margin: 0 -5px;
  }
  #menu a:hover {
    color: #d90075;
  }
  #menu li:after,
  #menu li:before {
    content: '';
    position: absolute;
    width: 50px;
    height: 100%;
    background: #bbb;
    -webkit-transform: skewY(8deg);
    x-index: -3;
    border-radius: 4px;
  }
  #menu li:after {
    background-image: -webkit-linear-gradient(
      left,
      transparent 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
    right: 0;
    top: -4px;
  }
  #menu li:before {
    left: 0;
    bottom: -4px;
    background-image: -webkit-linear-gradient(
      right,
      transparent 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
  }
`;

const Nav = () => (
  <NavBar>
    <Logo>MovieQL</Logo>
  </NavBar>
);

export default Nav;
