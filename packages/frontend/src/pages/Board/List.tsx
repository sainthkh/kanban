import React from 'react';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faEllipsisH as dots } from '@fortawesome/free-solid-svg-icons';

import Card from './Card';

export default () => {
  return (
    <List>
      <Header>
        <Name>Header</Name>
        <MenuButton><Icon icon={dots} /></MenuButton>
      </Header>
      <Cards>
        <Card></Card>
      </Cards>
      <AddNew>
        <Button variant="outlined" fullWidth color="primary">+ Add another card</Button>
      </AddNew>
    </List>
  );
}

const List = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  background: 'white',
  width: 272, 
  margin: theme.spacing(0, 0.5),
  boxShadow: '0px 0px 8px 2px rgba(230,230,230,1)',
  padding: 16,
  borderRadius: 3,
  maxHeight: '100%',
}))

const Header = styled('div')({
  display: 'flex',
  marginBottom: 12,
});

const Name = styled('div')({
  marginRight: 'auto',
  fontSize: '1.1rem',
})

const MenuButton = styled(Button)({

})

const Cards = styled('div')({
  marginBottom: 16,
});

const AddNew = styled('div')({

});

