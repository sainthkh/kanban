import React from 'react';
import { styled } from '@material-ui/styles'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { Section, SectionTitle, ActionButton, SectionTitleIcon as Icon } from './Section';

export default () => {
  return (
    <Section>
      <SectionTitle><Icon icon={faAlignJustify} />Description<ActionButton>Edit</ActionButton></SectionTitle>
      <Content>Hello</Content>
    </Section>
  )
}

const Content = styled('div')(({theme}) => ({
  marginLeft: theme.cardDetail.marginLeft,
}))