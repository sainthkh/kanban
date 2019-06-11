import React from 'react';
import { styled } from '@material-ui/styles';
import { CSSProperties, } from '@material-ui/styles/withStyles';

export type Props = {
  name: string,
  background: string, 
};

export default ({name, background}: Props) => {
  return (
    <Wrap style={{background}}>
      {name}
    </Wrap>
  )
}

type WrapProps = {
  background: string,
};

const Wrap = styled<React.ElementType<WrapProps & CSSProperties>>('div')(({background}) => ({
  padding: 8,
  borderRadius: 3,
  marginRight: 4,
  fontSize: 12,
  fontWeight: 'bold',
  color: 'white',
  background,
}));