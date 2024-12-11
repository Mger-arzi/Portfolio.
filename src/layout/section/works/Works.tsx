import React from 'react';
import styled from 'styled-components';
import { SectionDec, SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import PhotoWork1 from "../../../accers/image/BestNFTs-1.png"
import toDo from "../../../accers/image/toDo.png"
import card from "../../../accers/image/cards.png"
import { Container } from '../../../components/container/Container';



export const Works = () => {
  return (
    <StyledWorks id={'projects'}>
      <Container>
        <SectionTitle>
          Проекты</SectionTitle>
        <SectionDec>Вещи, которые я построил на данный момент</SectionDec>
        <FlexWrapper gap="40px" justify='space-between' wrap='wrap'>
          <Work src={toDo}
            hrefGitHub='https://github.com/Mger-arzi/TodoList1'
            hrefBrayser='https://mger-arzi.github.io/TodoList1/#/'
            title='Project ToDo'
            text='ToDO с куртыми технологиями'
            stack='HTML , JavaScript, SASS, Reac, TypeScript, Redux, REST, RRD, React form' />
          <Work src={card}
            hrefBrayser='https://quiz-cards-prod.vercel.app/sign-in'
            title='Project quiz-cards'
            text='Учебные карточки'
            stack='HTML , JavaScript, SASS, React , RTK, NextJS' />

        </FlexWrapper>
      </Container>

    </StyledWorks>
  );
};
const StyledWorks = styled.section`
position: relative;

	/* min-height: 100vh; */

`

