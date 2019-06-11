import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { styled } from '@material-ui/styles';
import { CSSProperties, } from '@material-ui/styles/withStyles';

type DueDateProps = {
  datetime: string;
};

export default ({datetime}: DueDateProps) => {
  const background = 'inherit';
  
  return (
    <Wrap background={background}>
      <Checkbox value={false} />
      {datetime}
    </Wrap>
  );
}

type WrapProps = {
  background?: string,
}

const Wrap = styled<React.ElementType<WrapProps & CSSProperties>>('div')(({background}) => ({
  borderRadius: 3,
  background,
}))