import React from 'react';
import ButtonBase from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';
import indigo from '@material-ui/core/colors/indigo';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCreditCard, faUserAlt, faTag, 
  faCheckSquare, faClock, faPaperclip, faArrowRight, 
  faCopy, faEye, faArchive, faShare, faRocket,
} from '@fortawesome/free-solid-svg-icons';

import Board from '../Board/Board';
import MemberIcon, { Props as MemberIconProps } from '../../components/MemberIcon';
import CloseButton from './CloseButton';
import Label from './Label';
import DueDate from './DueDate';
import Description from './Description';
import Checklist from './Checklist';
import CommentEditor from './CommentEditor';
import Activity from './Activity';
import { SectionTitleIcon as Icon } from './Section';

export default () => {
  return (
    <>
      <Board />
      <Overlay>
        <Detail>
          <FlexBox>
            <Content>
              <Title><Icon icon={faCreditCard} />Card</Title>
              <List>in list <ListLink href="#">Name</ListLink></List>            
              <MetaBox>
                <Meta>
                  <MetaTitle>Members</MetaTitle>
                  <Participants>
                    <ParticipantIcon name="K" /><ParticipantIcon name="U" />
                  </Participants>
                </Meta>
                <Meta>
                  <MetaTitle>Labels</MetaTitle>
                  <Labels>
                    <Label name="One" background="#61bd4f" /><Label name="Two" background="#61bd4f" />
                  </Labels>
                </Meta>
                <Meta>
                  <MetaTitle>Due date</MetaTitle>
                  <DueDate datetime="Tomorrow at 12:00(due soon)" />
                </Meta>
              </MetaBox>
              <Description />
              <Checklist />
              <CommentEditor />
              <Activity />
            </Content>
            <Actions>
              <CloseButton />
              <ButtonGroup>
                <ButtonGroupName>Add to card</ButtonGroupName>
                <MenuButton><ButtonIcon icon={faUserAlt} />Members</MenuButton>
                <MenuButton><ButtonIcon icon={faTag} />Labels</MenuButton>
                <MenuButton><ButtonIcon icon={faCheckSquare} />Checklist</MenuButton>
                <MenuButton><ButtonIcon icon={faClock} />Due Date</MenuButton>
                <MenuButton><ButtonIcon icon={faPaperclip} />Attachment</MenuButton>
              </ButtonGroup>
              <ButtonGroup>
                <ButtonGroupName>Power-ups</ButtonGroupName>
                <MenuButton><ButtonIcon icon={faRocket} /> Get Power-ups</MenuButton>
              </ButtonGroup>
              <ButtonGroup>
                <ButtonGroupName>Actions</ButtonGroupName>
                <MenuButton><ButtonIcon icon={faArrowRight} />Move</MenuButton>
                <MenuButton><ButtonIcon icon={faCopy} />Copy</MenuButton>
                <MenuButton><ButtonIcon icon={faEye} />Watch</MenuButton>
                <MenuButton><ButtonIcon icon={faArchive} />Archive</MenuButton>
                <MenuButton><ButtonIcon icon={faShare} />Share</MenuButton>
              </ButtonGroup>
            </Actions>
          </FlexBox>
        </Detail>
      </Overlay>
    </>
  )
}

const Overlay = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  background: 'rgba(0, 0, 0, 0.64)',
  position: 'fixed',
  width: '100%',
  height: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
  top: 0,
  left: 0,
  zIndex: 20,
});

const Detail = styled('div')({
  background: indigo[50],
  marginTop: 48,
  marginBottom: 80,
  borderRadius: 3,
  overflow: 'hidden',
  position: 'relative',
  width: 768,
  zIndex: 25,
  textAlign: 'left',
})

const Title = styled('div')({
  fontSize: 20,
  fontWeight: 'bold',
})

const List = styled('div')(({theme}) => ({
  color: grey[500],
  marginLeft: theme.cardDetail.marginLeft,
  marginBottom: 16,
  fontSize: 14,
}))

const ListLink = styled('a')({
  textTransform: 'none',
  textDecoration: 'underline',
  padding: 0,
  minWidth: 10,
  color: grey[500],

  '&:hover': {
    background: 'inherit',
    color: grey[900],
  },
})

const FlexBox = styled('div')({
  display: 'flex',
})

const Content = styled('div')({
  width: 552,
  padding: '12px 16px',
})

const MetaBox = styled('div')(({theme}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: theme.cardDetail.marginLeft,
}))

const Meta = styled('div')({
  marginRight: 8,
})

const MetaTitle = styled('div')({
  textTransform: 'uppercase',
  fontSize: 14,
  fontWeight: 'bold',
  color: grey[600],
  marginBottom: 4,
})

const Participants = styled('div')({
  display: 'flex',
})

const ParticipantIcon = (props: MemberIconProps) => {
  return (
    <div style={{marginRight: 4}}>
      <MemberIcon {...props} />
    </div>
  )
}

const Labels = styled('div')({
  display: 'flex',
})

const Actions = styled('div')({
  width: 168,
  background: grey[900],
  padding: '12px 16px',
})

const ButtonGroup = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 16,
})

const ButtonGroupName = styled('h3')({
  fontSize: 12,
  textTransform: 'uppercase',
  margin: 0,
  marginBottom: 8,
  color: grey[400],
})

const MenuButton = styled(ButtonBase)({
  color: grey[300],
  background: '#0c1012',
  justifyContent: 'flex-start',
  textAlign: 'left',
  marginBottom: 4,
  boxShadow: `1px 1px 1px 0px ${blueGrey[900]}`,

  '&:hover': {
    boxShadow: `1px 1px 8px 0px ${blueGrey[900]}`,
  }
})

const ButtonIcon = styled(FontAwesomeIcon)({
  marginRight: 8,
})
