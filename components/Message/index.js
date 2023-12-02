import { memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import messageClasses from './message.module.css';
import MagicWand from '@/components/MagicWand';

const Container = styled(Box, {
  shouldForwardProp: prop => prop !== 'isMe',
})(({ isMe }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: isMe ? 'flex-end' : 'flex-start',
  width: '100%',
  margin: '10px 0',
}));

const UserTitle = styled(Typography)({
  fontSize: 12,
  lineHeight: '20px',
  fontWeight: 400,
  color: '#B5B5B5',
});

const MessageText = styled(Typography)({
  fontSize: 14,
  lineHeight: '20px',
  fontWeight: 400,
  color: '#000',
  whiteSpace: 'no-wrap',
  wordBreak: 'break-word',
});

const StyledAvatar = styled(Avatar)({
  width: 48,
  height: 48,
  '& img': {
    objectFit: 'initial',
  },
});

const userName = 'David';

const Message = ({ isMe, message, showAvatar, isLoading }) => (
  <Container isMe={isMe}>
    <Stack direction="row" spacing={1} alignItems="flex-end">
      {showAvatar ? (
        <StyledAvatar alt={userName} src="/avatar.png" />
      ) : (
        <Box width={48} height={48} />
      )}
      <div className={messageClasses.messageWrapper}>
        {isMe && <UserTitle>{userName} (You)</UserTitle>}
        <Stack direction="row" gap={1} alignItems="center">
          <MessageText>{message}</MessageText>
          {isLoading && (
            <Box>
              <MagicWand />
            </Box>
          )}
        </Stack>
      </div>
    </Stack>
  </Container>
);

export default memo(Message);
