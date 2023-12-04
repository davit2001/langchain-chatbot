import { memo } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { CloseIcon } from 'next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon';

const ExtensionTextWrapper = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '100%',
  textTransform: 'uppercase',
  backgroundColor: 'rgb(131, 58, 180)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.spacing(2, 0, 0, 2),
}));

const ExtensionTitle = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  color: '#fff',
  fontSize: theme.typography.pxToRem(18),
  fontWeight: 700,
}));

const Name = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: theme.typography.pxToRem(14),
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '32ch',
}));

const FileSize = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(12),
  color: '#545454',
}));

const RemoveButton = styled(IconButton)({
  position: 'absolute',
  right: '7px',
  top: '7px',
  backgroundColor: '#c7c7c7',
  padding: 0,
  width: '20px',
  height: '20px',
  '&:hover': {
    backgroundColor: '#c7c7c7',
  },
  '& svg': {
    color: '#fff',
    width: '14px',
    height: '14px',
  },
});

const AttachmentCard = ({ name, extension, size, onRemove }) => (
  <Box
    display="flex"
    alignItems="center"
    borderRadius={4}
    gap={1}
    sx={{
      position: 'relative',
      maxWidth: 300,
      minWidth: 150,
      height: 60,
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    }}>
    <ExtensionTextWrapper>
      <ExtensionTitle>{extension}</ExtensionTitle>
    </ExtensionTextWrapper>
    <Stack alignItems="flex-start" justifyContent="center">
      <Name>{name}</Name>
      <FileSize>{size}</FileSize>
    </Stack>
    <RemoveButton variant="contained" disableRipple onClick={onRemove}>
      <CloseIcon />
    </RemoveButton>
  </Box>
);

export default memo(AttachmentCard);
