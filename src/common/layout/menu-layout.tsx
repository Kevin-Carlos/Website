import React, { FC, useContext } from "react";
import styled from "styled-components";
import { Header } from "./header";
import { Footer } from "./footer";
import { MenuContext } from "./menu-context";

type MenuLayoutProps = {};

export const MenuLayout: FC<MenuLayoutProps> = ({ children }) => {
  const menuCtx = useContext(MenuContext);

  return (
    <GridLayout>
      <GridHeader backgroundVisibility={menuCtx.transparentizeHeaderBG} />
      <GridContent>{children}</GridContent>
      <GridFooter hideFooterItems={menuCtx.hideFooterItems} />
    </GridLayout>
  );
};

const GridLayout = styled.article`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

const GridHeader = styled(Header)`
  grid-area: header;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
`;

const GridContent = styled.main`
  grid-area: content;
  min-height: calc(100vh - 12rem);
  background-color: ${({ theme }) => theme.colors.black};

  /* Skewed transparent div  */
  &::after {
    content: "";
    position: fixed;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100%;
    bottom: -70rem;
    transform: skewY(-12deg);
    pointer-events: none;
    z-index: ${({ theme }) => theme.zIndices.underlay};

    ${({ theme }) => theme.mediaQuery.tablet} {
      bottom: -85vh;
    }
  }
`;

const GridFooter = styled(Footer)`
  grid-area: footer;
  align-self: end;
`;
