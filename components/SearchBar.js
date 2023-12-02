import { useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#e5e5e5',
  borderRadius: theme.spacing(2),
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const StyledInput = styled(TextField)(({ theme }) => ({
  width: '100%',
  fontSize: theme.typography.pxToRem(16),
  '& .MuiInputBase-root': {
    padding: theme.spacing(1),
    border: 'none',
    fontSize: theme.typography.pxToRem(18),
  },
  fieldset: {
    border: 'none',
  },
  '& label.Mui-focused': {
    color: 'unset',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'unset',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'unset',
    },
    '&:hover fieldset': {
      borderColor: 'unset',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'unset',
    },
  },
}));

const SearchBar = ({ onSend }) => {
  const [inputValue, setInputValue] = useState('');
  const onChangeInputValue = useCallback(event => {
    setInputValue(event.target.value);
  }, []);
  const onSendClick = useCallback(() => {
    if (!inputValue) return;

    onSend(inputValue);
    setInputValue('');
  }, [inputValue, onSend]);

  const onKeyUp = useCallback(
    event => {
      if (event.keyCode === 13 && !event.shiftKey) {
        onSendClick();
      }
    },
    [onSendClick],
  );

  return (
    <Wrapper>
      <StyledInput
        value={inputValue}
        onChange={onChangeInputValue}
        onKeyUp={onKeyUp}
        placeholder="Type your message here and let the magic happen 🧙"
        multiline
        maxRows={6}
      />
      <IconButton onClick={onSendClick}>
        <SendIcon sx={{ color: 'rgb(131, 58, 180)' }} />
      </IconButton>
    </Wrapper>
  );
};

export default SearchBar;
