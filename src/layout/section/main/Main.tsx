import React from "react";
import styled from "styled-components";
import photo from "../../../accers/image/Mger-1.jpeg";
import hello from "../../../accers/image/Hi_logo .svg";
import { FlexWrapper } from "../../../componenc/FlexWrapper";
import { Container } from "../../../componenc/container/Container";
import { theme } from "../../../componenc/Theme";
import img  from '../../../accers/image/Abstract.png'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main = () => {
	return (
		<StyledMain>
			<Container>
				<FlexWrapper
					height="100%"
					align={"center"}
					justify=" space-between "
				>
					<div>
						<SpanHello>
							Привет
                            
							<Hello src={hello} />
						</SpanHello>
						<br></br>
						<SpanName>Меня зовут</SpanName>
						<MyName> Арзикян Мгер</MyName>
						<IFrontEnder>
                            <Typewriter
                                options={{
                                    strings: [' Я Front-end разработчик', 'I`m IronMan'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    cursor: ''
                                }}
                            />
                            <p>Я Front-end разработчик</p>
                        </IFrontEnder>
					</div>
                    
					<WrapperPhoto>
                    <Tilt className="parallax-effect-img"
                                    tiltMaxAngleX={15}
                                    tiltMaxAngleY={15}
                                    perspective={600}
                                    transitionSpeed={1000}
                                    scale={1.1}
                                    gyroscope={true}>
						<div style={{
							position: 'relative'
						}}>
							<img style={{
								zIndex: 2,
								position: 'absolute',
								width: 550,
								height: 550,
								top: -117,
								left: -105
							}} src={img} />
                              
                                    <Photo src={photo} alt="avatar" />

                                
                        </div>
						</Tilt>
						{/* <BorderPhoto1></BorderPhoto1> */}
						{/* <BorderPhoto2></BorderPhoto2> */}
					</WrapperPhoto> 
				</FlexWrapper>
			</Container>
		</StyledMain>
	);
};

const StyledMain = styled.div`
position: relative;
	min-height: 100vh;
	background-color: ${theme.colors.primaryBg};
	display: flex;
`;

const Hello = styled.img`
	width: 40px;
	height: 40px;
`;
const Photo = styled.img`
	z-index: 999;
	position: relative;
	width: 350px;
	height: 350px;
	object-fit: cover;
	background: linear-gradient(to right, #13b0f5, #e70faa) border-box;
	border-radius: 50em;
	border: 4px solid transparent;

	
`

const SpanHello = styled.span`
	font-size: 58px;
	font-weight: 700;
	color: rgba(217, 217, 217, 1);
    p{
        display: none;
    }
`;

const SpanName = styled.span`
	font-size: 58px;
	font-weight: 700;
	color: rgba(217, 217, 217, 1);
    p{
        display: none;
    }
`;
const MyName = styled.h2`
	background: -webkit-linear-gradient(#13b0f5, #e70faa);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 58px;
	font-weight: 700;
	color: rgba(217, 217, 217, 1);
`;
const IFrontEnder = styled.h1`
	font-size: 58px;
	font-weight: 700;
	color: rgba(217, 217, 217, 1);

    p {
        display: none;
    }
`;

const WrapperPhoto = styled.div`

	
`;
