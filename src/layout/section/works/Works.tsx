import React from 'react';
import styled from 'styled-components';
import { SectionDec, SectionTitle } from '../../../componenc/SectionTitle';
import { FlexWrapper } from '../../../componenc/FlexWrapper';



export const Works = () => {
	return (
		<StyledWorks>
			<SectionTitle>Проекты</SectionTitle>
			<SectionDec>Вещи, которые я построил на данный момент</SectionDec>
			<FlexWrapper>
				
			</FlexWrapper>
		</StyledWorks>
	);
};
const StyledWorks = styled.section`
	min-height: 100vh;
	background-color: #8a61b4;
`

