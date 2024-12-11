import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const TitleFooter = () => {
  return (
    <FlexWrapper justify='center'>
      <SectionTitle margin='200px 0' fontSize='58px'>По любым вопросам пишите мне:<br></br>
        <span>mger54598@gmail.com</span></SectionTitle>

    </FlexWrapper>
  );
};

