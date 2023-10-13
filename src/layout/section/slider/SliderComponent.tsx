import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../componenc/SectionTitle';
import { Icon } from '../../../componenc/icon/Icon';
import { Slider } from './Slider';
import { FlexWrapper } from '../../../componenc/FlexWrapper';

export const SliderComponent = () => {
	return (
		<StyledSlider>
			<SectionTitle>Testimony</SectionTitle>
			<FlexWrapper direction='column' align='center'>

				<Icon iconId='LogoTelega'/>
				<Slider/>
			</FlexWrapper>

		</StyledSlider>
	);
};
const StyledSlider = styled.section`
	background-color: #f688b7;
	min-height: 80vh;
`