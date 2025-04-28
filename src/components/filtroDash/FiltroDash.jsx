import React from 'react';
import { InputWrapper, Input, Icon } from './styleFiltroDash';

function FiltroDash({ texto, onChange }) {
  return (
    <InputWrapper>
      <Icon />
      <Input 
        placeholder={texto}
        onChange={onChange}
      />
    </InputWrapper>
  );
}

export default FiltroDash;
