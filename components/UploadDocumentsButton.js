import { useCallback, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import IconButton from '@mui/material/IconButton';

const Wrapper = styled(Box)({
  '& input': {
    display: 'none',
  },
});

const UploadDocumentsButton = ({ onUploadDocuments }) => {
  const inputRef = useRef(null);
  const onUploadDocumentsClick = useCallback(() => {
    if (!inputRef.current) return;

    inputRef.current.click();
  }, []);

  return (
    <Wrapper>
      <IconButton onClick={onUploadDocumentsClick}>
        <AttachFileIcon sx={{ color: '#545454' }} />
      </IconButton>
      <input ref={inputRef} type="file" onChange={onUploadDocuments} />
    </Wrapper>
  );
};

export default UploadDocumentsButton;
