import React from 'react';
import { styled } from '@material-ui/styles';
import indigo from '@material-ui/core/colors/indigo';
import { CSSProperties, } from '@material-ui/styles/withStyles';

export type Props = {
  name: string;
  background?: string;
};

export default ({ name, background }: Props) => {
  return (
    <Circle background={background}>
      {name}
    </Circle>
  );
}

type CircleProps = {
  background?: string,
}

const Circle = styled<React.ElementType<CircleProps & CSSProperties>>('div')(({background}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',

  width: 32,
  height: 32,
  borderRadius: 16,
  background: background ? background : indigo[300],
}))