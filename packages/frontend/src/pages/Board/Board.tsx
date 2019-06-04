import React from 'react';
import { styled } from '@material-ui/styles';
import grey from '@material-ui/core/colors/grey';

import AppBar from './AppBar';
import BoardMenu from './BoardMenu';
import List from './List';

export default () => {
  return (
    <Board>
      <AppBar />
      <Content>
        <BoardMenu />
        <Lists>
          <List />
        </Lists>
      </Content>
    </Board>
  );
}

const Board = styled('div')({
  background: grey[100],
  height: '100vh',
})

const Content = styled('div')({

});

const Lists = styled('div')({

});
