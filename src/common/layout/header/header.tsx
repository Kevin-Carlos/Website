import React, { FC, useState, useRef } from "react";
import styled from "styled-components";
import { menuItems } from "./nav-items";
import darkLogo from "common/assets/images/logo-dark.png";
import { transparentize } from "polished";
import { links } from "common/links";
import { HamburgerIcon } from "./hamburger-icon";
import { HamburgerMenu } from "./hamburger-menu";
import { useClickOutside } from "common/hooks";
import { LinkButton } from "common/ui-elements/buttons";
import { Link } from "react-router-dom";


interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  const [mobileNav, toggleMobileNav] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(menuRef, () => toggleMobileNav(false));

  return (
    <HeaderWrapper className={className}>
      <ContentWrapper>
        <LogoWrapper>
          <Link to={links.home()}>
            <Circle />
            <Logo src={darkLogo} />
          </Link>
        </LogoWrapper>
        <Nav>
          {menuItems.map(i => (
            <LinkButton href={i.path} key={i.name}>
              {i.name}
            </LinkButton>
          ))}
        </Nav>
        <HamburgerMenuWrapper ref={menuRef}>
          <HamburgerIcon
            isOpen={mobileNav}
            setIsOpen={toggleMobileNav}
          />
          <HamburgerMenu
            isOpen={mobileNav}
            setIsOpen={toggleMobileNav}
          />
        </HamburgerMenuWrapper>
      </ContentWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.black};
  height: 6rem;
  padding: 0 1rem;
  z-index: ${({ theme }) => theme.zIndices.overlay};
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.mediaQuery.desktop} {
    max-width: 120rem;
  }

  ${({ theme }) => theme.mediaQuery.xl_desktop} {
    max-width: 140rem;
  }
`;

const Circle = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 100%;
  width: 4rem;
  height: 4rem;
  position: absolute;
  border-width: 0;
  
  transition: all 0.2s ease-in-out;
`;

const Logo = styled.img`
  position: absolute;
  width: 4rem;
`;

const LogoWrapper = styled.div`
  position: relative;
  height: 4rem;
  width: 4rem;
  &:hover {
    ${Circle} {
      background-color: ${({ theme }) => transparentize(0.2, theme.colors.white)};
    }
  }
`;

const Nav = styled.nav`
  display: none;

  ${({ theme }) => theme.mediaQuery.laptop} {
    display: inherit;
    & > a:not(:first-child) {
      margin-left: 2rem;
    }
  }
`;

const HamburgerMenuWrapper = styled.div`
  z-index: ${({ theme }) => theme.zIndices.overlay - 1};

  ${({ theme }) => theme.mediaQuery.laptop} {
    display: none;
  }
`;