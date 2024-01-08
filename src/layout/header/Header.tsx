import React from "react";
import styled from "styled-components";
import { Logo } from "../../componenc/logo/Logo";
import { Navigation } from "../../componenc/navigation/Navigation";
import { Container } from "../../componenc/container/Container";
import { FlexWrapper } from "../../componenc/FlexWrapper";
import { Icon } from "../../componenc/icon/Icon";
import rocket from "../../accers/image/rocket.svg"
import { theme } from "../../componenc/Theme";


// const itemsNav = ["Home","Tech Stack","Projects","Contact"]
export type ItemsNavType = {
    title: string
    href: string
}
const itemsNav =[ 
    {
    title: "Home",
    href: 'home'
},    {
    title: "Tech Stack",
    href: 'tech Stack'
},    {
    title: "Projects",
    href: 'projects'
},    {
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
						
					
					<Navigation navItems={itemsNav}/>
					<Icon viewBox="0 0 23 23" width="35px"height="35px"  iconId="LogoTelega"/>
					<Icon viewBox="0 0 30 30" width="30px"height="30px" iconId="gitHubLogo"/>
					

					
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
li:hover{
	transform: rotate(6deg) scale(1.3) translateY(-2px);
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
