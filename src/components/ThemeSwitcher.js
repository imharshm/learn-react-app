import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../theme/AppProvider";

const ThemeSwitcher = () => {
  const { toggleTheme, themeMode } = useContext(AppContext);
  const handleThemeChange = (e) => {
    console.log(e);
    toggleTheme();
  };
  return (
    <Root>
      <h1 onClick={(e) => handleThemeChange(e)}>Toggle Theme</h1>
    </Root>
  );
};

export default ThemeSwitcher;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .custom-classname .react-toggle--checked .react-toggle-track {
    background-color: red;
    height: 200px;
    width: 200px;
    padding: 30px;
  }
`;