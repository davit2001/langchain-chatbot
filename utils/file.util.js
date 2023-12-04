import FileReaderUtils from './fileReader.util';

const getFileType = header => {
  switch (header) {
    case '255044462d312e34': {
      return 'pdf';
    }
    case '89504e47da1aa': {
      return 'png';
    }
    case '474946383961803': {
      return 'gif';
    }
    case '52494646da8400': {
      return 'webp';
    }
    case '504b3414000': {
      return 'zip';
    }
    case '504b34a000': {
      return 'xlsx';
    }
    case '504b3414088': {
      return 'docs';
    }
    case 'efbbbf5461736b20': {
      return 'txt';
    }
    case '3c3f786d6c207665': {
      return 'svg';
    }
    case '0002066747970': {
      return 'mp4';
    }
    case 'ffd8ffe00104a46': {
      return 'jpeg';
    }
    default: {
      return 'Unknown';
    }
  }
};

const checkMimeTypeInList = async (file, possibleExtensions) => {
  const arrayBuffer = await FileReaderUtils.toArrayBuffer(file);
  const arr = new Uint8Array(arrayBuffer).subarray(0, 8);

  let header = '';
  for (let i = 0; i < arr.length; i += 1) {
    header += arr[i].toString(16);
  }

  const type = getFileType(header);
  return {
    isSupported: possibleExtensions.includes(type),
    type,
  };
};

const formatFileSize = (bytes, decimalPoint = 2) => {
  if (bytes === 0) return '0 Bytes';

  const unit = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const index = Math.floor(Math.log(bytes) / Math.log(unit));

  return `${parseFloat((bytes / unit ** index).toFixed(decimalPoint))} ${sizes[index]}`;
};

const FileUtil = {
  checkMimeTypeInList,
  formatFileSize,
};

export default FileUtil;
