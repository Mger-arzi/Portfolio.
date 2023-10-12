import React from 'react';
import styled from 'styled-components';
import photo from '../../../accers/image/Mger-1.jpeg'
import hello from "../../../accers/image/Hi_logo .svg"
export  const Main = () => {
	return (
		<div>
			<div>
				<span>Привет<Hello src={hello}/></span><br></br>
				<span>Меня зовут</span>
				<h2>Мгер Арзикян</h2>
				<h1>Я Front-end разработчик</h1>
			</div>
			<Photo src={photo} alt="" />
		</div>
	);
};
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