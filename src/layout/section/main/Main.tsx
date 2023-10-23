import React from 'react';
import styled from 'styled-components';
import photo from '../../../accers/image/Mger-1.jpeg'
import hello from "../../../accers/image/Hi_logo .svg"
import { FlexWrapper } from '../../../componenc/FlexWrapper';
import { Container } from '../../../componenc/container/Container';
import { theme } from '../../../componenc/Theme';
export  const Main = () => {
	return (
		<StyledMain>
			<Container>
				<FlexWrapper height='100%' align={'center'} justify=' space-between '>
					<div>
						<SpanHello>Привет<Hello src={hello}/></SpanHello><br></br>
						<SpanName>Меня зовут</SpanName>
						<MyName> Арзикян Мгер</MyName>
						<IFrontEnder>Я Front-end разработчик</IFrontEnder>
					</div>
					<WrapperPhoto>
						<Photo src={photo} alt="" />
						<BorderPhoto1></BorderPhoto1>
						<BorderPhoto2></BorderPhoto2>
					</WrapperPhoto>
				</FlexWrapper>
			</Container>
			
			
		</StyledMain>
	);
};

const  StyledMain = styled.div`
min-height: 100vh;
background-color: ${theme.colors.primaryBg};
display: flex;
`


const Hello = styled.img`
	width: 40px;
	height: 40px;
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
font-size: 58px;
font-weight: 700;
color:rgba(217, 217, 217, 1);

`

const SpanName = styled.span`
	font-size: 58px;
font-weight: 700;
color:rgba(217, 217, 217, 1);

`
const MyName = styled.h2`
	background: -webkit-linear-gradient(#13B0F5, #E70FAA);
			-webkit-background-clip: text;
  		-webkit-text-fill-color: transparent;	
		  font-size: 58px;
font-weight: 700;
color:rgba(217, 217, 217, 1);


`
const IFrontEnder = styled.h1`
	font-size: 58px;
font-weight: 700;
color:rgba(217, 217, 217, 1);
`

const WrapperPhoto = styled.div`
	position: relative;
	&::before{
		content: '';
		width: 450px;
		height: 450px;
		transform: rotate(5deg);
		border: 1px solid transparent;
		border-image: linear-gradient(to left top,rgba(227, 221, 221, 0.256), rgba(255, 255, 255, 0) 61% );
		border-image-slice: 1;
		
		position: absolute;
			top: -40px;
			left: -40px;
	}
	
	&::after{
		content: '';
		width: 450px;
		height: 450px;
		transform: rotate(20deg);
		border: 1px solid transparent;
		border-image: linear-gradient(to left top,rgba(227, 221, 221, 0.256), rgba(255, 255, 255, 0) 61% );
		border-image-slice: 1;

		position: absolute;
			top: -40px;
			left: -40px;
	}
`
const BorderPhoto1 = styled.div`
	&::after{
		content: '';
		width: 450px;
		height: 450px;
		transform: rotate(35deg);
		border: 1px solid transparent;
		border-image: linear-gradient(to left top,rgba(227, 221, 221, 0.256) ,rgba(255, 255, 255, 0) 61% );
		border-image-slice: 1;

		position: absolute;
			top: -40px;
			left: -40px;
	}
`

const BorderPhoto2 = styled.div`
	&::before{
		content: '';
		width: 450px;
		height: 450px;
		transform: rotate(50deg);
		border: 1px solid transparent;
		border-image: linear-gradient(to left top,rgba(227, 221, 221, 0.256) ,rgba(255, 255, 255, 0) 61% );
;
		border-image-slice: 1;
		
		position: absolute;
			top: -30px;
			left: -60px;
	}
	&::after{
		content: '';
		width: 450px;
		height: 450px;
		transform: rotate(65deg);
		border: 1px solid transparent;
		border-image: linear-gradient(to left top,rgba(227, 221, 221, 0.256) ,rgba(255, 255, 255, 0) 61% );
;
		border-image-slice: 1;

		position: absolute;
			top: -40px;
			left: -60px;
	}
`
