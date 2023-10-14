import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../componenc/FlexWrapper';
import { Logo } from '../../componenc/logo/Logo';

export const Footer = () => {
	return (
		<StyledFooter>
			<FlexWrapper>
				<Logo/>
				
			</FlexWrapper>
		</StyledFooter>
	);
};

const StyledFooter = styled.section `
	
`