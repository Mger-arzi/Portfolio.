import React from 'react';
import styled from 'styled-components';
import photo from '../../../accers/image/Mger-1.jpeg'
import hello from "../../../accers/image/Hi_logo .svg"
import { FlexWrapper } from '../../../componenc/FlexWrapper';
export  const Main = () => {
	return (
		<StyledMain>
			<FlexWrapper align={'center'} justify=' space-around '>
				<div>
					<SpanHello>Привет<Hello src={hello}/></SpanHello><br></br>
					<SpanName>Меня зовут</SpanName>
					<MyName>Мгер Арзикян</MyName>
					<IFrontEnder>Я Front-end разработчик</IFrontEnder>
				</div>

				<Photo src={photo} alt="" />
			</FlexWrapper>
			
		</StyledMain>
	);
};

const  StyledMain = styled.div`
min-height: 100vh;
background-color: #191919;
`


const Hello = styled.img`
	width: 20px;
	height: 20px;
`
const Photo = styled.img`
	width: 350px;
	height: 350px;
	object-fit: cover;
	border-radius: 50%;
	border: 4px solid  #00C0FD;
	//#E70FAA
`
const SpanHello = styled.span`
	
`

const SpanName = styled.span`
	
`
const MyName = styled.h2`
	
`
const IFrontEnder = styled.h1`
	
`