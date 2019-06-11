import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Checkbox from '@material-ui/core/Checkbox';
import grey from '@material-ui/core/colors/grey';

import { styled } from '@material-ui/styles'
import { faCheckSquare, } from '@fortawesome/free-solid-svg-icons';
import { Section, SectionTitle, ActionButton, SectionTitleIcon as Icon } from './Section';

export default () => {
  return (
    <Section>
      <SectionTitle><Icon icon={faCheckSquare} />Checklist <ActionButton>Delete</ActionButton></SectionTitle>
      <Progress progress={30} />
      <ChecklistItem value={false} text="Get things done" />
    </Section>
  )
}

type ProgressProps = {
  progress: number;
}

const Progress = ({progress}: ProgressProps) => {
  return (
    <FlexBox>
      <Percent>{progress}%</Percent>
      <ProgressWrap>
        <LinearProgress variant="determinate" value={progress} />
      </ProgressWrap>
    </FlexBox>
  );
}

const Percent = styled('div')({
  fontSize: 12,
  color: grey[800],
  marginLeft: 5,
})

const ProgressWrap = styled('div')({
  width: '100%',
  paddingLeft: 8,
})

const FlexBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
})

type ChecklistItemProps = {
  value: boolean;
  text: string;
}

const ChecklistItem = ({value, text}: ChecklistItemProps) => {
  return (
    <ItemWrap>
      <Checkbox value={value} />
      <div>{text}</div>
    </ItemWrap>
  );
}

const ItemWrap = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: -5,
})
