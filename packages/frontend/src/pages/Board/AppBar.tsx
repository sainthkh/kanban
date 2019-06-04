import React from 'react';
import AppBarBase from '@material-ui/core/AppBar';
import ButtonBase from '@material-ui/core/Button';
import ToolbarBase from '@material-ui/core/Toolbar';
import TypographyBase from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { styled } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faHome, faChalkboard, faSearch, faPlus, faInfoCircle, faBell } from '@fortawesome/free-solid-svg-icons';

import ButtonIcon from '../../components/ButtonIcon';


export default () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Left>
          <Button>
            <Icon icon={faHome} size="lg" />
          </Button>
          <BoardsButton>
            <ButtonIcon icon={faChalkboard} />
            Boards
          </BoardsButton>
          <SearchBox>
            <InputBase
              placeholder="Search…"
            />
            <SearchIcon>
              <Icon icon={faSearch} />
            </SearchIcon>
          </SearchBox>
        </Left>
        <Title component="h6">Kanban</Title>
        <Right>
          <Button>
            <Icon icon={faPlus} size="lg" />
          </Button>
          <Button>
            <Icon icon={faInfoCircle} size="lg" />
          </Button>
          <Button>
            <Icon icon={faBell} size="lg" />
          </Button>
        </Right>
      </Toolbar>
    </AppBar>
  );
}

const AppBar = styled(AppBarBase)({
  display: 'flex',
  background: 'rgba(255, 255, 255, 0.8)',
  padding: 4,
});

const Toolbar = styled(ToolbarBase)({
  minHeight: 0,
  maxWidth: '100%',
})

const Left = styled('div')({
  display: 'flex',
});

const Right = styled('div')({
  display: 'flex',
  marginLeft: 'auto'
});

const Button = styled(ButtonBase)({
  padding: 8,
  minWidth: 0,
  width: 40,
  color: grey[600],
});

const BoardsButton = styled(Button)({
  width: 110,
})

const Title = styled(TypographyBase)({
  position: 'absolute',
  left: '50%',
  color: blue.A200,
  fontSize: '1.5rem',
  margin: 'auto',
})

const SearchBox = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: fade(theme.palette.common.black, 0.1),
  '&:hover': {
    backgroundColor: fade(theme.palette.common.black, 0.15),
  },
  paddingLeft: theme.spacing(1),
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(1),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIcon = styled('div')(({theme}) => ({
  width: theme.spacing(7),
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));