import { useCallback, useState } from 'react';
import { useSnackbar } from 'notistack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Tooltip } from '@mui/material';
import UploadDocumentsButton from '@/components/UploadDocumentsButton';
import FileUtil from '@/app/utils/file.util';
import AttachmentCard from '@/components/AttachmentCard';

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#e5e5e5',
  borderRadius: theme.spacing(2),
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
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
  const [file, setFile] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

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

  const onUploadDocuments = useCallback(
    async event => {
      const firstFile = event.target.files[0];
      const { isSupported, type } = await FileUtil.checkMimeTypeInList(firstFile, ['pdf']);

      if (!isSupported) {
        enqueueSnackbar(`File ${type} type not supported`, {
          variant: 'error',
          autoHideDuration: 3000,
        });
        return;
      }

      setFile({
        name: firstFile.name,
        extension: type,
        size: FileUtil.formatFileSize(firstFile.size),
      });
    },
    [enqueueSnackbar],
  );

  const onRemove = useCallback(() => {
    setFile(null);
  }, []);

  return (
    <Wrapper>
      <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1}>
        <StyledInput
          value={inputValue}
          onChange={onChangeInputValue}
          onKeyUp={onKeyUp}
          placeholder="Type your message here and let the magic happen 🧙"
          multiline
          maxRows={6}
        />
        <Stack direction="row">
          <UploadDocumentsButton onUploadDocuments={onUploadDocuments} />
          <Tooltip title="Send" placement="top">
            <IconButton onClick={onSendClick}>
              <SendIcon sx={{ color: 'rgb(131, 58, 180)' }} />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
      {file && (
        <Box ml={1} mb={1}>
          <AttachmentCard
            name={file.name}
            extension={file.extension}
            size={file.size}
            onRemove={onRemove}
          />
        </Box>
      )}
    </Wrapper>
  );
};

export default SearchBar;
