import React from 'react';
import indigo from '@material-ui/core/colors/indigo';
import grey from '@material-ui/core/colors/grey';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { styled } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faAlignJustify, faComment, faPaperclip, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import ButtonIconBase from '../../components/ButtonIcon';

export default () => {
  return (
    <Card>
      <Title>Hello, World</Title>
      <Badges>
        <Badge><Watch /></Badge>
        <Badge><Description /></Badge>
        <Badge><Comment count={3} /></Badge>
        <Badge><Attachment count={5} /></Badge>
        <Badge><Todo done={3} total={12} /></Badge>
      </Badges>
    </Card>
  );
}

const Card = styled('div')(({theme}) => ({
  display: 'relative',
  fontSize: 14,
  padding: theme.spacing(1.5, 2, 1),
  background: fade(indigo[50], 0.5),
  boxShadow: `0px 1px 2px 1px ${indigo[100]}`,
  '&:hover': {
    background: fade(indigo[50], 0.7),
    boxShadow: `0px 2px 4px 1px ${indigo[200]}`,
    cursor: 'pointer',
  },
}));

const Title = styled('div')({
  textAlign: 'left',
  marginBottom: 4,
});

const Badges = styled('div')({
  display: 'flex',
  flexWrap: "wrap",
  marginBottom: 4,
  color: grey[500],
})

const Badge = styled('div')({
  marginRight: 12,
})

const IconWrap = styled('div')({
  width: 20,
  height: 20,
})

const Icon = styled(FontAwesomeIcon)({
  padding: 2,
  width: 24,
  height: 20,
})

const ButtonIcon = styled(ButtonIconBase)({
  width: 24,
})

const Watch = () => <IconWrap><Icon icon={faEye} size="sm" /></IconWrap>
const Description = () => <IconWrap><Icon icon={faAlignJustify} size="sm" /></IconWrap>

type CommentProps = {
  count: number
}
const Comment = ({count}: CommentProps) => 
  <>
    <ButtonIcon icon={faComment} size="sm" />{count}
  </>

type AttachmentProps = {
  count: number
}
const Attachment = ({count}: AttachmentProps) =>
  <>
    <ButtonIcon icon={faPaperclip} size="sm" />{count}
  </>

type TodoProps = {
  done: number
  total: number
}
const Todo = ({done, total}: TodoProps) =>
  <>
    <ButtonIcon icon={faCheckSquare} size="sm" />{done}/{total}
  </>
