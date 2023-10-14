import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

type LogoTypeProps = {
	iconId: string
	href?:string
}
export const Logo = (props:LogoTypeProps) => {
	return (
			<a href={props.href} >
				<Icon width='55px' height='60px' iconId = {props.iconId}/>
			</a>
	);
};
