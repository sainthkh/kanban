import React from 'react';
import ButtonBase from '@material-ui/core/Button';
import TextFieldBase from '@material-ui/core/TextField';
import { styled } from '@material-ui/styles';

import { 
  faCreditCard, faPaperclip, faComment, faAt, 
} from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

import MemberIcon from '../../components/MemberIcon';
import { Section, SectionTitle, SectionTitleIcon as TitleIcon } from './Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default () => {
  return (
    <Section>
      <SectionTitle><TitleIcon icon={faComment} />Add Comment</SectionTitle>
      <Editor />
    </Section>
  )
}

const Editor = () => {
  return (
    <FlexBox>
      <MemberIcon name="K" />
      <TextArea>
        <TextField multiline={true} rows={3}></TextField>
        <Toolbar>
          <EditorButton><Icon icon={faPaperclip} /></EditorButton>
          <EditorButton><Icon icon={faAt} /></EditorButton>
          <EditorButton><Icon icon={faSmile} /></EditorButton>
          <EditorButton><Icon icon={faCreditCard} /></EditorButton>
        </Toolbar>
      </TextArea>
    </FlexBox>
  );
}

const FlexBox = styled('div')({
  display: 'flex',
})

const TextArea = styled('div')({
  paddingLeft: 8,
  width: '100%',
  flexShrink: 2,
});

const TextField = styled(TextFieldBase)({
  width: '100%',
  background: 'white',
})

const Toolbar = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
})

const EditorButton = styled(ButtonBase)({
  minWidth: 12,
})

const Icon = styled(FontAwesomeIcon)({
  fontSize: 12,
})
