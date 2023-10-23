import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../componenc/FlexWrapper';
import { Logo } from '../../componenc/logo/Logo';
import { Navigation } from '../../componenc/navigation/Navigation';
import { Container } from '../../componenc/container/Container';
import { Icon } from '../../componenc/icon/Icon';
import rocket from "../../accers/image/rocket-ship.svg"


const itemsNav = ["Home","About","Tech Stack","Projects","Contact"]


export const Footer = () => {
	return (
		<StyledFooter>
			<Container>
			<FlexWrapper align='center' justify='flex-end'>
									<StyleSVG src={rocket} alt="rocket" />

				<Text>+79999999999</Text>
				<Icon height='35' width='35' viewBox="0 0 23 23" iconId='LogoTelega'/>
				<Icon height='30' width='30' viewBox="0 0 30 30" iconId='gitHubLogo'/>
			</FlexWrapper>
			<Divider/>
			<Navigation navItems={itemsNav}/>

			</Container>
			
		</StyledFooter>
	);
};

const StyledFooter = styled.section `
	min-height: 30vh;
	position: relative;
`
const Text = styled.p `
	
`
const Divider = styled.p `
	border-bottom: 1px solid #42446e38;

	margin-bottom: 60px;
`
const StyleSVG = styled.img`
	width: 50px;
	position: absolute;
	top: 10px;
	left: 135px;
	right: 0;


`