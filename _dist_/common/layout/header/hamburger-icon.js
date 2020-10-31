import React from "../../../../web_modules/react.js";
import styled from "../../../../web_modules/styled-components.js";
export const HamburgerIcon = ({
  isOpen,
  setIsOpen
}) => {
  return /* @__PURE__ */ React.createElement(Hamburger, {
    onClick: () => setIsOpen(!isOpen),
    isOpen
  }, /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement("div", null));
};
const Hamburger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  opacity: .99;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 1rem;
  z-index: ${({theme}) => theme.zIndices.overlay + 1};
  position: fixed;
  top: 2rem;
  right: 2rem;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.8;
  }

  div {
    width: 2.5rem;
    height: 0.25rem;
    background: ${({theme}) => theme.colors.white};
    border-radius: 1rem;
    transition: all 0.25s ease-in-out;
    position: relative;
    transform-origin: 0.1rem;
    :first-child {
      transform: ${({isOpen}) => isOpen ? "rotate(45deg)" : "rotate(0)"};
    }
    :nth-child(2) {
      opacity: ${({isOpen}) => isOpen ? "0" : "1"};
      transform: ${({isOpen}) => isOpen ? "translateX(20px)" : "translateX(0)"};
    }
    :nth-child(3) {
      transform: ${({isOpen}) => isOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
  
  ${({theme}) => theme.mediaQuery.laptop} {
    display: none;
  }
`;
