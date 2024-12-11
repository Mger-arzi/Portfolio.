import styled from "styled-components";
import { theme } from "./Theme";

type SectionTitleProps = {
	fontSize?: string
	margin?: string
}

export const SectionTitle = styled.h2<SectionTitleProps>`
	color: ${theme.colors.colorText.FontText};
	text-align: center;
	font-size: ${(props) => props.fontSize || "48px"};
	margin: ${props => props.margin || "100px 0 0 0" };

	span {
		background: -webkit-linear-gradient(#13b0f5, #e70faa);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;

export const SectionDec = styled.p`
color: ${theme.colors.colorText.FontH};
text-align: center;
margin: 20px 0 100px 0px;

`