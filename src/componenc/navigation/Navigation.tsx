import React from 'react';
import styled from 'styled-components';
import { theme } from '../Theme';
import { ItemsNavType } from '../../layout/header/Header';


export const Navigation = (props: {navItems:Array<ItemsNavType> }) => {
	return (
		<StaledNav>
				<ul>
					{props.navItems.map((item, index )=>{
						return <li key={index}>
							<a href={`#${item.href}`}>{item.title}</a>
						</li>
					})}
				</ul>
		</StaledNav>
	);
};
const StaledNav = styled.nav`
	a{
		color: ${theme.colors.colorText.FontH};
		font-weight: 500;
		font-size: 20px;
			&:hover{
				color: #f7f2f2;
			}
	}
	a:last-child{
		margin-right: 50px;
	}
ul{
	display: flex;
	gap: 30px;

}
`