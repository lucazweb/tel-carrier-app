import React from 'react';
import { StyledLoading } from './loading.styled';
import { FaSpinner } from 'react-icons/fa';

export const Loading = () => {
  return (
    <StyledLoading>
      <FaSpinner />
    </StyledLoading>
  );
};
