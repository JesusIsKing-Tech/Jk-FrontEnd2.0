import React from 'react';
import { Button, Icon } from './styleFiltroDash';

function FiltroDash({texto}) {
  return (
    <Button>
      <Icon />
      {texto}
    </Button>
  );
}

export default FiltroDash;