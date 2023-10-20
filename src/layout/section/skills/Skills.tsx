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
				<Icon viewBox ={'5 8 26 26'} iconId={"logoTS"}/>
				<Icon viewBox={'0 0 35 35'} iconId={"GitLogo"}/>
				<Icon viewBox={'0 0 35 35'} iconId={"ReactLogo"}/>
				<Icon viewBox={'0 0 27 27'}  iconId={"JSlogo"}/>
				<Icon viewBox={'0 0 27 27'} iconId={"ReduxLogo"}/>
				<Icon viewBox={'0 0 27 27'} iconId={"gitHubLogo"}/>
				<Icon viewBox={'0 0 27 27'} iconId={"LogoStyled"}/>
				
			</FlexWrapper>
		</StyledSkills>
	);
};
const StyledSkills = styled.section`
	min-height: 100vh;
`