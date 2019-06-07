import React from 'react';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';
import grey from '@material-ui/core/colors/grey';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons';


export default () => {
  return (
    <BoardMenu>
      <Name>Planner Board</Name>
      <Favorite><Icon icon={faEmptyStar} /></Favorite>
      <Divider />
      <Team>Personal</Team>
      <Divider />
      <Visibility>Private</Visibility>
      <Divider />
      <Collections><Icon icon={faSuitcase} /></Collections>
      <Divider />
      <Members></Members>
    </BoardMenu>
  );
}

const BoardMenu = styled('div')({
  display: 'flex',
  padding: '8px 16px',
  alignItems: 'center',

})

const Name = styled('div')({
  fontWeight: 'bold',
  fontSize: '1.1rem',
})

const Favorite = styled(Button)({
  minWidth: 32,
  marginLeft: 16,
})

const Divider = styled('div')({
  borderLeft: `1px solid ${grey[500]}`,
  height: 20,
  marginLeft: 4,
  marginRight: 4,
})

const Team = styled(Button)({
  textTransform: 'none',
})

const Visibility = styled(Button)({
  textTransform: 'none',
})

const Collections = styled(Button)({
  minWidth: 32,
})

const Members = styled('div')({

})

