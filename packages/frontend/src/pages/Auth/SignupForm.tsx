import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles';
import { styled } from '@material-ui/styles';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';
import { faGoogle, faFacebookSquare as faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => {
  return (
    <LoginContainer maxWidth="xs">
      <Text component="h1" variant="h5">
        Visualize your tasks. <br></br> And get more things done.
      </Text>
      <Form>
        <Field
          required
          fullWidth
          id="email"
          name="email"
          autoComplete="email"
          placeholder="email address"
          autoFocus
        />
        <Field
          required
          fullWidth
          name="password"
          type="password"
          id="password"
          placeholder="password"
          autoComplete="current-password"
        />
        <SubmitButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="large"
        >
          Sign up - It's Free!
        </SubmitButton>
      </Form>
      <Text component="h3" variant="h6">
        Or use another account:
      </Text>
      <Container>
        <SocialButton>
          <Icon icon={faFacebook} color="#3b5998" />
          Login with Facebook
        </SocialButton>
        <SocialButton>
          <Icon icon={faGoogle} color="#DB4437" />
          Login with Google
        </SocialButton>
      </Container>
    </LoginContainer>
  );
}

const LoginContainer = styled(Container)(theme => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  background: indigo[900],
  height: '100vh',
}))

const Text = styled(Typography)({
  color: "#fff",
});

const Form = styled('form')(theme => ({
  width: '100%', // Fix IE 11 issue.
  marginTop: theme.spacing,
}));

const Field = styled(Input)({
  background: "#fff",
  '& .MuiInput-input': {
    padding: '12px 8px',
  },
  '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomColor: pink[300],
  },
  '&.MuiInput-underline:after': {
    borderBottomColor: pink[500],
  },
  marginBottom: 24,
});

const SubmitButton = styled(Button)((theme: Theme) => ({
  marginTop: 16,
  marginBottom: 16,
  background: pink[500],
  '&:hover': {
    background: pink[400],
  }
}))

const SocialButton = styled(Button)({
  background: 'white',
  '&:hover': {
    background: grey[100],
  },
  color: grey[900],
  width: 220,
  marginBottom: 8,
})

const Icon = styled(FontAwesomeIcon)({
  marginRight: 8,
})
