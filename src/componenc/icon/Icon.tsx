import React from 'react';
import iconsSprite from '../../accers/image/sprite.svg'
export const Icon = () => {
	return (
			<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<use xlinkHref={ `${iconsSprite}#${''}` }/>
			</svg>
	);
};
