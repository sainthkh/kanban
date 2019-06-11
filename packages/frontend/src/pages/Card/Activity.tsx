import React from 'react';
import ButtonBase from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';

import { styled } from '@material-ui/styles';
import { faSmile, faListAlt } from '@fortawesome/free-regular-svg-icons';

import MemberIcon from '../../components/MemberIcon';
import { Section, SectionTitle, SectionTitleIcon as Icon } from './Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => {
  return (
    <Section>
      <SectionTitle><Icon icon={faListAlt} />Activity</SectionTitle>
      <ActivityLog activity={{type:"setDueDate", datetime:"tomorrow at 12:00 PM"}} />
      <Comment />
    </Section>
  );
}

type UserActivity = 
  | { type: 'setDueDate'; datetime: string }

type ActivityLogProps = {
  activity: UserActivity,
}

const ActivityLog = ({ activity }: ActivityLogProps) => {
  return (
    <FlexBox>
      <MemberIcon name="K" />
      <Content>
        <MemberName>K Heo</MemberName>
        {actionDescription(activity)}
        <Time />
      </Content>
    </FlexBox>
  );
}

const FlexBox = styled('div')({
  display: 'flex',
})

const Content = styled('div')({
  marginLeft: 8,
  width: '100%',
  flexShrink: 2,
  paddingBottom: 8,
  borderBottom: `1px solid ${grey[400]}`,
  marginBottom: 8,
})

const MemberName = styled('span')({
  fontWeight: 'bold',
})

const actionDescription = (action: UserActivity) => {
  return '';
}

const Time = () => {
  return (
    <TimeText>39 minutes ago</TimeText>
  );
}

const TimeText = styled('div')({
  fontSize: 12,
  color: grey[600],
  marginTop: 4,
})

const Comment = () => {
  return (
    <FlexBox>
      <MemberIcon name="K" />
      <Content>
        <Info><MemberName>K Heo</MemberName><Wrap><Time /></Wrap></Info>
        <CommentContent>Hi</CommentContent>
        <CommentButton><ButtonIcon icon={faSmile} /></CommentButton>
        <CommentMenu>Edit</CommentMenu>
        <CommentMenu>Add Link as Attachment</CommentMenu>
        <CommentMenu>Delete</CommentMenu>
      </Content>
    </FlexBox>
  );
}

const Info = styled('div')({
  display: 'flex',
  marginBottom: 8,
})

const Wrap = styled('div')({
  marginLeft: 8,
})

const CommentContent = styled('div')({
  padding: 8,
  borderRadius: 3,
  background: 'white',
  border: `1px solid ${grey[300]}`,
  marginBottom: 8,
})

const CommentButton = styled(ButtonBase)({
  minWidth: 12,
  color: grey[600],
  marginRight: 12,

  '&:hover': {
    background: 'inherit',
    color: grey[900],
  }
})

const ButtonIcon = styled(FontAwesomeIcon)({
  fontSize: 12,
})

const CommentMenu = styled(ButtonBase)({
  fontSize: 12,
  minWidth: 12,
  textTransform: 'none',
  textDecoration: 'underline',
  padding: 0,
  marginRight: 12,
  color: grey[600],

  '&:hover': {
    color: grey[900],
    background: 'inherit',
    textDecoration: 'underline',
  }
})