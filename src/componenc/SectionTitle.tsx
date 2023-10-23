import styled from "styled-components";

type SectionTitleProps = {
	fontSize?: string
}

export const SectionTitle = styled.h2<SectionTitleProps>`
	color: red;
	text-align: center;
	font-size: ${(props) => props.fontSize || "48px"};
	margin-top: 100px;

	span {
		background: -webkit-linear-gradient(#13b0f5, #e70faa);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;

export const SectionDec = styled.p`
color: blue;
text-align: center;
margin: 50px 0 100px 0px;

`