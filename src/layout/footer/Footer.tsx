import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../componenc/FlexWrapper';
import { Logo } from '../../componenc/logo/Logo';
import { Navigation } from '../../componenc/navigation/Navigation';

const itemsNav = ["Home","About","Tech Stack","Projects","Contact"]


export const Footer = () => {
	return (
		<StyledFooter>
			<FlexWrapper align='center' justify='flex-end'>
				<Logo iconId='ReduxLogo'/>
				<Text>+79999999999</Text>
				<Logo iconId='LogoTelega'/>
				<Logo iconId='LogoTelega'/>
				<Logo iconId='LogoTelega'/>
			</FlexWrapper>
			<Divider/>
			<Navigation navItems={itemsNav}/>
		</StyledFooter>
	);
};

const StyledFooter = styled.section `
	min-height: 30vh;
	background-color: #55f08c;
`
const Text = styled.p `
	
`
const Divider = styled.p `
	border-bottom: 1px solid #f00;
	margin-bottom: 60px;
`
