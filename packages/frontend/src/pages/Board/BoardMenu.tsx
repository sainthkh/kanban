import React from 'react';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';

export default () => {
  return (
    <BoardMenu>
      <Name>Planner Board</Name>
      <Favorite>F</Favorite>
      <Team>Personal</Team>
      <Visibility>Private</Visibility>
      <Collections>C</Collections>
      <Members></Members>
    </BoardMenu>
  );
}

const BoardMenu = styled('div')({
  display: 'flex',
  padding: 4,
})

const Name = styled('div')({

})

const Favorite = styled(Button)({
  
})

const Team = styled(Button)({
  
})

const Visibility = styled(Button)({
  
})

const Collections = styled(Button)({

})

const Members = styled('div')({

})

