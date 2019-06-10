import React from 'react';
import ButtonBase from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { styled } from '@material-ui/styles';
import indigo from '@material-ui/core/colors/indigo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileSignature, faAlignJustify, faUserAlt, faTag, faCheckSquare, faClock, faPaperclip, faArrowRight, faCopy, faEye, faArchive, faShare, faComment, faAt } from '@fortawesome/free-solid-svg-icons';
import { faSmile, faListAlt } from '@fortawesome/free-regular-svg-icons';

import Board from '../Board/Board';
import MemberIcon from '../../components/MemberIcon';

export default () => {
  return (
    <>
      <Board />
      <Overlay>
        <Detail>
          <Title><Icon icon={faFileSignature} />Card</Title>
          <List>in list <ListLink>Name</ListLink></List>
          <FlexBox>
            <Content>
              <MetaBox>
                <Members><MetaTitle>Members</MetaTitle><MemberIcon>K</MemberIcon><MemberIcon>U</MemberIcon></Members>
                <Labels><MetaTitle>Labels</MetaTitle><Label>One</Label><Label>Two</Label></Labels>
                <MetaTitle>Due date</MetaTitle>
                <DueDate datetime="Tomorrow at 12:00(due soon)" />
              </MetaBox>
              <Description>
                <SectionTitle><Icon icon={faAlignJustify} />Description <ActionButton>Edit</ActionButton></SectionTitle>
                Hello
              </Description>
              <Checklist>
                <SectionTitle><Icon icon={faCheckSquare} />Checklist <ActionButton>Delete</ActionButton></SectionTitle>
                <Progress progress={30} />
                <ChecklistItem value={false} text="Get things done" />
              </Checklist>
              <AddComment>
                <SectionTitle><Icon icon={faComment} />Add Comment</SectionTitle>
                <Editor />
              </AddComment>
              <Activity>
                <SectionTitle><Icon icon={faListAlt} />Activity</SectionTitle>
                <ActivityLog activity={{type:"setDueDate", datetime:"tomorrow at 12:00 PM"}} />
                <Comment />
              </Activity>
            </Content>
            <Actions>
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

const Icon = styled(FontAwesomeIcon)({
  marginLeft: 4,
  marginRight: 8,
  color: '#42526e',
})

const Detail = styled('div')({
  background: `${indigo[50]}`,
  marginTop: 48,
  marginBottom: 80,
  padding: '12px 16px',
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

const List = styled('div')({
  
})

const ListLink = styled('a')({

})

const FlexBox = styled('div')({
  display: 'flex',
})

const Content = styled('div')({
  width: 552,
})

const MetaBox = styled('div')({

})

const Labels = styled('div')({
  
})

const MetaTitle = styled('div')({

})

const Label = styled('div')({
  
})

const Members = styled('div')({
  
})

type DueDateProps = {
  datetime: string;
};

const DueDate = ({datetime}: DueDateProps) => {
  return (
    <div>
      <Checkbox value={false} />
      {datetime}
    </div>
  );
}

const SectionTitle = styled('h3')({
  fontSize: 16,
})

const ActionButton = styled(ButtonBase)({

})

const Description = styled('div')({
  
})

const Checklist = styled('div')({
  
})

type ProgressProps = {
  progress: number;
}

const Progress = ({progress}: ProgressProps) => {
  return (
    <div>
      <div>{progress}%</div>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
}

type ChecklistItemProps = {
  value: boolean;
  text: string;
}

const ChecklistItem = ({value, text}: ChecklistItemProps) => {
  return (
    <div>
      <Checkbox value={value} />
      <div>{text}</div>
    </div>
  );
}

const AddComment = styled('div')({
  
})

const Editor = () => {
  return (
    <div>
      <MemberIcon>K</MemberIcon>
      <TextField multiline={true}></TextField>
      <EditorButton><Icon icon={faPaperclip} /></EditorButton>
      <EditorButton><Icon icon={faAt} /></EditorButton>
      <EditorButton><Icon icon={faSmile} /></EditorButton>
      <EditorButton><Icon icon={faFileSignature} /></EditorButton>
    </div>
  );
}

const EditorButton = styled(ButtonBase)({

})

const Activity = styled('div')({
  
})

type UserActivity = 
  | { type: 'setDueDate'; datetime: string }

type ActivityLogProps = {
  activity: UserActivity,
}

const ActivityLog = ({ activity }: ActivityLogProps) => {
  return (
    <div>
      <MemberIcon>K</MemberIcon>
      <MemberName>K Heo</MemberName>
      {actionDescription(activity)}
      <Time />
    </div>
  );
}

const MemberName = styled('span')({
  fontWeight: 'bold',
})

const actionDescription = (action: UserActivity) => {
  return '';
}

const Actions = styled('div')({
  width: 168,
})

const Time = () => {
  return (
    <div>39 minutes ago</div>
  );
}

const Comment = () => {
  return (
    <div>
      <MemberIcon>K</MemberIcon>
      <MemberName>K Heo</MemberName>
      <Time />
      <CommentContent>Hi</CommentContent>
      <CommentButton><Icon icon={faSmile} /></CommentButton>
      <CommentMenu>Edit</CommentMenu>
      <CommentMenu>Add Link as Attachment</CommentMenu>
      <CommentMenu>Delete</CommentMenu>
    </div>
  );
}

const CommentContent = styled('div')({

})

const CommentButton = styled(ButtonBase)({

})

const CommentMenu = styled(ButtonBase)({

})

const ButtonGroup = styled('div')({
  display: 'flex',
  flexDirection: 'column',
})

const ButtonGroupName = styled('h6')({

})

const MenuButton = styled(ButtonBase)({
  
})

const ButtonIcon = styled(FontAwesomeIcon)({
  marginRight: 8,
})
