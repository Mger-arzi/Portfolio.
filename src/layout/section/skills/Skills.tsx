import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../componenc/FlexWrapper';
import { Icon } from '../../../componenc/icon/Icon';
import { SectionDec, SectionTitle } from '../../../componenc/SectionTitle';
import { Container } from '../../../componenc/container/Container';

export const Skills = () => {
	return (
		<StyledSkills>
			<Container>
				<SectionTitle>Мой техничесикий стек</SectionTitle>
				<SectionDec>Технологии, с которыми я работал в последнее время</SectionDec>
				<FlexWrapper justify='' align='center' wrap="wrap">
					<Icon viewBox ={'5 8 26 26'} iconId={"logoTS"}/>
					<Icon viewBox={'0 0 35 35'} iconId={"GitLogo"}/>
					<Icon viewBox={'0 0 35 35'} iconId={"ReactLogo"}/>
					<Icon viewBox={'0 0 27 27'}  iconId={"JSlogo"}/>
					<Icon viewBox={'0 0 35 35'} iconId={"ReduxLogo"}/>
					<Icon viewBox={'0 2 30 30'} iconId={"LogoStyled"}/>
					<Icon viewBox={'0 0 35 35'} iconId={"gitHubLogo1"}/>
					<Icon width='110px' viewBox={'0 2 30 30'} iconId={"logoSass"}/>

				</FlexWrapper>
			</Container>
			
		</StyledSkills>
	);
};
const StyledSkills = styled.section`
	svg {
		margin: 40px;
	}
`