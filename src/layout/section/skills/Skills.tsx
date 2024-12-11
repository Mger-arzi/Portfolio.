import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
import { SectionDec, SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/container/Container';
import Tilt from 'react-parallax-tilt';


export const Skills = () => {
  return (
    <StyledSkills id={'tech Stack'}>
      <Container>
        <SectionTitle>Мой техничесикий стек </SectionTitle>
        <SectionDec>Технологии, с которыми я работал в последнее время</SectionDec>
        <FlexWrapper justify='' align='center' wrap="wrap">
          <Tilt className="parallax-effect-img"
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            perspective={600}
            transitionSpeed={1000}
            scale={1.1}
            gyroscope={true}>
            <Icon viewBox={'5 8 26 26'} iconId={"logoTS"} />
          </Tilt>
          <Tilt className="parallax-effect-img"
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            perspective={600}
            transitionSpeed={1000}
            scale={1.1}
            gyroscope={true}>
            <Icon viewBox={'0 0 35 35'} iconId={"GitLogo"} />
          </Tilt>
          <Tilt className="parallax-effect-img"
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            perspective={600}
            transitionSpeed={1000}
            scale={1.1}
            gyroscope={true}>
            <Icon viewBox={'0 0 35 35'} iconId={"ReactLogo"} /></Tilt>

          <Tilt className="parallax-effect-img"
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            perspective={600}
            transitionSpeed={1000}
            scale={1.1}
            gyroscope={true}>
            <Icon viewBox={'0 0 27 27'} iconId={"JSlogo"} /></Tilt>
          <Tilt className="parallax-effect-img"
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            perspective={600}
            transitionSpeed={1000}
            scale={1.1}
            gyroscope={true}>
            <Icon viewBox={'0 0 35 35'} iconId={"ReduxLogo"} /></Tilt>
          <Tilt className="parallax-effect-img"
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            perspective={600}
            transitionSpeed={1000}
            scale={1.1}
            gyroscope={true}>
            <Icon viewBox={'0 2 30 30'} iconId={"LogoStyled"} /></Tilt>

          <Tilt className="parallax-effect-img"
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            perspective={600}
            transitionSpeed={1000}
            scale={1.1}
            gyroscope={true}>
            <Icon viewBox={'0 0 35 35'} iconId={"gitHubLogo1"} /></Tilt>
          <Tilt className="parallax-effect-img"
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            perspective={600}
            transitionSpeed={1000}
            scale={1.1}
            gyroscope={true}>
            <Icon width='110px' viewBox={'0 2 30 30'} iconId={"logoSass"} /></Tilt>
          <Tilt className="parallax-effect-img"
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            perspective={600}
            transitionSpeed={1000}
            scale={1.1}
            gyroscope={true}>
            <Icon width='110px' viewBox={'0 2 30 30'} iconId={"nextIcon"} /></Tilt>

        </FlexWrapper>
      </Container>

    </StyledSkills>
  );
};
const StyledSkills = styled.section`
	svg {

		margin: 40px;
	}
`