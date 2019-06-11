import React from 'react';
import ButtonBase from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import { styled } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default () => {
  return (
    <ButtonWrap>
      <Button>
        <FontAwesomeIcon icon={faTimes} />
      </Button>
    </ButtonWrap>
  );
};

const ButtonWrap = styled('div')({
  display: 'flex',
})

const Button = styled(ButtonBase)({
  marginLeft: 'auto',
  minWidth: 10,
  color: 'white',

  '&:hover': {
    background: grey[600],
  },
});