'use client';
import { useCallback, useState } from 'react';
import { SnackbarProvider } from 'notistack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Message from '../components/Message/index';
import SearchBar from '@/components/SearchBar';
import { roleTypes } from '@/constants/message';
import texts from '@/constants/text';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  padding: '0 20px',
  gap: theme.spacing(3),
}));

const Layout = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  width: '100%',
  height: '80vh',
  borderRadius: theme.spacing(2),
  background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(180,58,113,1) 100%)',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
}));

const MessageOverflow = styled(Box)({
  overflowY: 'auto',
  width: '100%',
});

const initialMessages = [
  {
    role: roleTypes.ASSISTANT,
    content: texts.initialChatMessage,
  },
];

const Title = styled(Typography)({
  textTransform: 'capitalize',
  fontFamily: 'verdana',
  fontSize: '36px',
  fontWeight: 700,
  '-webkit-background-clip': 'text !important',
  '-webkit-text-fill-color': 'transparent',
  background: '-webkit-linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(180,58,113,1) 100%)',
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState(initialMessages);

  const onSend = useCallback(
    content => {
      setMessages(prevMessages => [...prevMessages, { role: roleTypes.USER, content }]);

      // to fetch data after showing user message
      setTimeout(() => {
        setIsLoading(true);
        fetch('/api/chat', {
          method: 'POST',
          body: JSON.stringify({ question: content, history: messages }),
        })
          .then(res => res.json())
          .then(({ role, content }) => {
            setMessages(prevMessages => [...prevMessages, { role, content }]);
            setIsLoading(false);
          })
          .catch(() => {
            setMessages(prevMessages => [
              ...prevMessages,
              {
                role: roleTypes.ASSISTANT,
                content: 'Sorry, I am not able to answer your question.',
              },
            ]);
            setIsLoading(false);
          });
      }, 500);
    },
    [messages],
  );

  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <Container>
        <Box>
          <Title>{texts.title}</Title>
        </Box>
        <Layout>
          <MessageOverflow>
            {messages.map(({ role, content }) => (
              <Message
                key={content}
                isMe={role === roleTypes.USER}
                message={content}
                showAvatar={role === roleTypes.ASSISTANT}
              />
            ))}
            {isLoading && (
              <Message
                isMe={false}
                message={texts.loadingMessage}
                isLoading={isLoading}
                showAvatar
              />
            )}
          </MessageOverflow>
          <SearchBar onSend={onSend} />
        </Layout>
      </Container>
    </SnackbarProvider>
  );
}
