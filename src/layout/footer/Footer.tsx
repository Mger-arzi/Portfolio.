import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../componenc/FlexWrapper';
import { Logo } from '../../componenc/logo/Logo';
import { Navigation } from '../../componenc/navigation/Navigation';
import { Container } from '../../componenc/container/Container';
import { Icon } from '../../componenc/icon/Icon';
import rocket from "../../accers/image/rocket-ship.svg"
import { theme } from '../../componenc/Theme';


const itemsNav =[ 
    {
    title: "Home",
    href: 'home'
},    {
    title: "Tech Stack",
    href: '"tech Stack"'
},    {
    title: "Projects",
    href: 'projects'
},    {
    title: "Contact",
    href: 'contact'
}
]


export const Footer = () => {
	return (
		<StyledFooter id={"contact"}>
			<Container>
			<StyleSVG src={rocket} alt="rocket" />

			<FlexWrapper gap='20px' align='center' justify='flex-end'>

				<Text>+7 999 99 99 999</Text>
				<Icon height='35' width='35' viewBox="0 0 23 23" iconId='LogoTelega'/>
				<Icon href='https://github.com/Mger-arzi' height='30' width='30' viewBox="0 0 30 30" iconId='gitHubLogo'/>
			</FlexWrapper>
			<Divider/>

			</Container>
			
		</StyledFooter>
	);
};

const StyledFooter = styled.section `
position: relative;
z-index:2;
	min-height: 30vh;
	position: relative;
	svg:hover{
	transform: translateY(-5px);
	transition: all 1s ease;
	cursor: pointer;
}
`
const Text = styled.p `
	font-size: 18px;
	color: ${theme.colors.colorText.FontH};
`
const Divider = styled.p `
	border-bottom: 1px solid #42446e38;

	margin: 60px 0;
`
const StyleSVG = styled.img`
	width: 50px;
	position: absolute;
	top: -10px;
	left: 170px;
	right: 0;

`