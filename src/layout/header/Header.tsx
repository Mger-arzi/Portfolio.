import React from "react";
import styled from "styled-components";
import { Logo } from "../../componenc/logo/Logo";
import { Navigation } from "../../componenc/navigation/Navigation";

const itemsNav = ["Home","About","Tech Stack","Projects","Contact"]



export const Header = () => {
	return (
		<StyledHeader>
			<Logo iconId="ReduxLogo"/>
			<Navigation navItems={itemsNav}/>
			<Logo href="https://web.telegram.org/a/#1140893833" iconId="LogoTelega"/>
			<Logo iconId="gitHubLogo"/>
			
		</StyledHeader>
	);
};
const StyledHeader = styled.header`
background-color: #191919;
display: flex;
justify-content: space-between;
align-items: center;
`