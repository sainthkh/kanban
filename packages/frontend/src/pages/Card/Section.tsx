import ButtonBase from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';
import indigo from '@material-ui/core/colors/indigo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Section = styled('section')({
  marginTop: 24,
})

export const SectionTitle = styled('h3')({
  display: 'flex',
  alignItems: 'center',
  fontSize: 16,
  marginBottom: 8,
})

export const SectionTitleIcon = styled(FontAwesomeIcon)({
  marginLeft: 4,
  marginRight: 16,
  fontSize: 20,
  color: '#42526e',

  '&.svg-inline--fa': {
    width: 22.5,
  }
});

export const ActionButton = styled(ButtonBase)({
  marginLeft: 'auto',
  background: indigo[100],
  boxShadow: `1px 1px 2px 0px ${indigo[200]}`,

  '&:hover': {
    background: indigo[200],
    boxShadow: `1px 1px 8px 0px ${indigo[200]}`,
  },
})
