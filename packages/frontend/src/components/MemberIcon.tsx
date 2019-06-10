import React from 'react';

type Props = {
  children: string;
};

export default ({ children }: Props) => {
  return (
    <div>{children}</div>
  );
}