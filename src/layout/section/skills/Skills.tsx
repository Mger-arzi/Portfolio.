import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../componenc/FlexWrapper';
import { Icon } from '../../../componenc/icon/Icon';
import { SectionDec, SectionTitle } from '../../../componenc/SectionTitle';

export const Skills = () => {
	return (
		<StyledSkills>
			<SectionTitle>Мой техничесикий стек</SectionTitle>
			<SectionDec>Технологии, с которыми я работал в последнее время</SectionDec>
			<FlexWrapper justify='center' align='center' wrap="wrap">
				<Icon viewBox ={'0 8 35 25'} iconId={"logoTS"}/>
				<Icon iconId={"GitLogo"}/>
				<Icon iconId={"ReactLogo"}/>
				<Icon iconId={"JSlogo"}/>
				<Icon iconId={"ReduxLogo"}/>
				<Icon iconId={"gitHubLogo"}/>
				<Icon iconId={"LogoStyled"}/>
				<Icon iconId={"logoTS"}/>
				
			</FlexWrapper>
		</StyledSkills>
	);
};
const StyledSkills = styled.section`
	background-color: #15e7273a;
	min-height: 100vh;
`