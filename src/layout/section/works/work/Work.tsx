import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../componenc/Theme';

type WorkPropsType = {
	title: string
	text: string
	src: string
	stack: string
}

export const Work = (props: WorkPropsType) => {
	return (
		<SteledWork>
			<Image src={props.src} alt="image" />
			<Title>{props.title}</Title>
			<Text>{props.text}</Text>
			<TechStack><span>Cтек:</span> {props.stack}</TechStack>
			<Link href='#'>Открыть в браузере</Link> 
			<Link href='#'>Просмотреть код</Link>
		</SteledWork>
	);
};

const SteledWork = styled.div`
	background-color: rgba(116, 116, 116, 0.764);
	max-width: 335px;
	width: 100%;
	border-radius: 20px;
	padding-bottom: 25px;
	
`
const Image = styled.img`
	width: 100%;
	height: 260px;
	object-fit: cover;
	border-radius :20px 20px 0 0;
`
const Link = styled.a`
color: rgba(0, 0, 0, 1);
	font-size: 16px;
	font-weight: 400;
	margin-left: 30px;

	

`
const Title = styled.h3`
	font-size: 28px;
	font-weight: 500;
	margin: 15px 30px 15px 30px;

`
const Text = styled.p`
	font-size: 18px;
	font-weight: 200;
	color: ${theme.colors.colorText.FontH};
	margin: 15px 30px 15px 30px;
`
const TechStack = styled.p`
	span{
		font-size: 16px;
		font-weight: 400;
		color: rgba(0, 0, 0, 1) ;
	}
	margin: 10px 30px 20px 30px;
	font-size: 14px;
	font-weight: 300;
	color: ${theme.colors.colorText.FontH};

`