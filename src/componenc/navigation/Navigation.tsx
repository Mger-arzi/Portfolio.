import React from 'react';
import styled from 'styled-components';


export const Navigation = (props: {navItems:Array<string> }) => {
	return (
		<StaledNav>
				<ul>
					{props.navItems.map((item:string, index: number)=>{
						return <li key={index}>
							<a href=''>{item}</a>
						</li>
					})}
				</ul>
		</StaledNav>
	);
};
const StaledNav = styled.nav`
ul{
	display: flex;
	gap: 30px;
}
`