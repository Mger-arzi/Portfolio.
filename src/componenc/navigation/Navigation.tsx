import React from 'react';
import styled from 'styled-components';

export const Navigation = () => {
	return (
		<StaledNav>
				<ul>
					<li>
						<a href="">Home</a>
					</li>
					<li>
						<a href="">About</a>
					</li>
					<li>
						<a href="">Tech Stack</a>
					</li>
					<li>
						<a href="">Projects</a>
					</li>
					<li>
						<a href="">Contact</a>
					</li>
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