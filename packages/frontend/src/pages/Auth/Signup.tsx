import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/styles';

import FitImage from '../../components/FitImage';
import LoginForm from './SignupForm';
import login from './signup.jpg';


export default function SignIn() {
  return (
    <>
      <CssBaseline />
      <Main>
          <Image />
          <LoginForm />
      </Main>
    </>
  );
}

const Main = styled('div')({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: '100vh',
});

const Image = () => {
  return (
    <Container>
      <ImageContainer maxWidth="md">
        <FitImage src={login} alt="login" />
      </ImageContainer>
    </Container>
  );
};

const ImageContainer = styled(Container)({
  paddingLeft: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

