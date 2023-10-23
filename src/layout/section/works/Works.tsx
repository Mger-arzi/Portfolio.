import React from 'react';
import styled from 'styled-components';
import { SectionDec, SectionTitle } from '../../../componenc/SectionTitle';
import { FlexWrapper } from '../../../componenc/FlexWrapper';
import { Work } from './work/Work';
import PhotoWork1 from "../../../accers/image/Best NFTs-1.png"
import { Container } from '../../../componenc/container/Container';


export const Works = () => {
	return (
		<StyledWorks>
			<Container>
			<SectionTitle>Проекты</SectionTitle>
			<SectionDec>Вещи, которые я построил на данный момент</SectionDec>
			<FlexWrapper gap="40px" justify='space-between' wrap='wrap'>
				<Work src={PhotoWork1 }
					title='Project Tile goes here'
					text='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
					stack='HTML , JavaScript, SASS, React' />
				<Work src={PhotoWork1 }
					title='Project Tile goes here' 
					text='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
					stack='HTML , JavaScript, SASS, React' />
				<Work src={PhotoWork1 }
					title='Project Tile goes here' 
					text='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
					stack='HTML , JavaScript, SASS, React' />
				<Work src={PhotoWork1 }
					title='Project Tile goes here' 
					text='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
					stack='HTML , JavaScript, SASS, React' />
				<Work src={PhotoWork1 }
					title='Project Tile goes here' 
					text='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
					stack='HTML , JavaScript, SASS, React' />
				<Work src={PhotoWork1 }
					title='Project Tile goes here' 
					text='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
					stack='HTML , JavaScript, SASS, React' />
			</FlexWrapper>
			</Container>
		
		</StyledWorks>
	);
};
const StyledWorks = styled.section`
	/* min-height: 100vh; */

`

