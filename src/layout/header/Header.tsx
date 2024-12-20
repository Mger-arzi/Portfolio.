import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Navigation } from "../../components/navigation/Navigation";
import { Container } from "../../components/container/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import rocket from "../../accers/image/rocket.svg"
import { theme } from "../../components/Theme";


// const itemsNav = ["Home","Tech Stack","Projects","Contact"]
export type ItemsNavType = {
  title: string
  href: string
}
const itemsNav = [
  {
    title: "Home",
    href: 'home'
  }, {
    title: "Tech Stack",
    href: 'tech Stack'
  }, {
    title: "Projects",
    href: 'projects'
  }, {
    title: "Contact",
    href: 'contact'
  }
]


export const Header = () => {
  return (
    <StyledHeader>
      <Container>

        <FlexWrapper align="center" justify="end;">

          {/* <StyleSVG src={rocket} alt="rocket" /> */}


          <Navigation navItems={itemsNav} />
          <Icon href="t.me/Mgerchick" viewBox="0 0 23 23" width="35px" height="35px" iconId="LogoTelega" />
          <Icon href="https://github.com/Mger-arzi" viewBox="0 0 30 30" width="30px" height="30px" iconId="gitHubLogo" />



        </FlexWrapper>

      </Container>


    </StyledHeader>
  );
};
const StyledHeader = styled.header`
background-color: #191919;
padding: 20px 0 ;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 9999;
svg:not(:last-child){
	margin-right: 20px;
}
li:hover, .active{
    text-decoration: underline;
	color: #fff;
	transition: all 1s ease;

}
svg:hover{
	transform: translateY(-5px);
	transition: all 1s ease;
	cursor: pointer;
}
`
const StyleSVG = styled.img`
	width: 50px;
	position: fixed;
	top: 10px;
	left: 135px;
	right: 0;


`
