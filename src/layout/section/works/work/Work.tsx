import React from 'react';
import styled from 'styled-components';

type WorkPropsType = {
	title: string
	text: string
	src: string
	stack: string
}

export const Work = (props: WorkPropsType) => {
	return (
		<SteledWork>
			<Image src={props.src} alt="" />
			<Title>{props.title}</Title>
			<Text>{props.text}</Text>
			<TechStack>Мой стек: {props.stack}</TechStack>
			<Link href='#'>Открыть в браузере</Link> 
			<Link href='#'>Просмотреть код</Link>
		</SteledWork>
	);
};

const SteledWork = styled.div`
	background-color: #ebe767;
	max-width: 375px;
	width: 100%;
`
const Image = styled.img`
	width: 100%;
	height: 260px;
	object-fit: cover;
`
const Link = styled.a`
	
`
const Title = styled.h3`
	
`
const Text = styled.p`
	
`
const TechStack = styled.p`
	
`