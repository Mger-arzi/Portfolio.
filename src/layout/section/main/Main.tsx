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
	background: linear-gradient(to right,#13B0F5, #E70FAA) border-box;
  	border-radius: 50em;
  	border: 4px solid transparent;

`

const SpanHello = styled.span`
	
`

const SpanName = styled.span`
	
`
const MyName = styled.h2`
	background: -webkit-linear-gradient(#13B0F5, #E70FAA);
			-webkit-background-clip: text;
  		-webkit-text-fill-color: transparent;	
`
const IFrontEnder = styled.h1`
	
`