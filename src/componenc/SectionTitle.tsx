import styled from "styled-components";

type SectionTitleProps = {
	fontSize?: string
}

export const SectionTitle = styled.h2<SectionTitleProps>`
	 color:red;
	 text-align: center;
	font-size: ${(props) => props.fontSize || "48px"};

	 	span{
			background: -webkit-linear-gradient(#13B0F5, #E70FAA);
			-webkit-background-clip: text;
  	-webkit-text-fill-color: transparent;
		}
`

export const SectionDec = styled.p`
color: blue;
text-align: center;


`