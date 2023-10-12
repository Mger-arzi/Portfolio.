import React from "react";
import styled from "styled-components";
import { Logo } from "../../componenc/logo/Logo";
import { Navigation } from "../../componenc/navigation/Navigation";
import { Icon } from "../../componenc/icon/Icon";


export const Header = () => {
	return (
		<StyledHeader>
			<Logo/>
			<Navigation/>
			
		</StyledHeader>
	);
};
const StyledHeader = styled.header`
background-color: #191919;
display: flex;
justify-content: space-between;
align-items: center;
`