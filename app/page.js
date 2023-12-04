'use client';
import Link from 'next/link';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import texts from '@/constants/text';
import Button from '@mui/material/Button';

const Background = styled(Box)({
  backgroundImage: 'url(/upscaled-wizard-2.jpg)',
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
});

const Container = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
});

const SectionWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  marginTop: theme.spacing(10),
  marginLeft: theme.spacing(4),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: 'calibri',
  fontSize: theme.typography.pxToRem(50),
  fontWeight: 700,
  color: '#fff',
  maxWidth: '600px',
  textTransform: 'capitalize',
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(20),
  fontWeight: 700,
  color: '#fff',
  maxWidth: '500px',
  textTransform: 'capitalize',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgb(131, 58, 180)',
  color: '#fff',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  height: '50px',
  maxWidth: '200px',
  fontSize: theme.typography.pxToRem(18),
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: 'rgb(116,52,159)',
  },
}));

const Home = () => (
  <Background>
    <Container>
      <SectionWrapper>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Title>{texts.heroSection.title}</Title>
        <Description>{texts.heroSection.description}</Description>
        <StyledButton component={Link} href="/chat">
          {texts.heroSection.action}
        </StyledButton>
      </SectionWrapper>
    </Container>
  </Background>
);

export default Home;
