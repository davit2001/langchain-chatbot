const toArrayBuffer = src =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Cannot read the file'));

    reader.readAsArrayBuffer(src);
  });

const toDataURL = src =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('Cannot read the file'));

    reader.readAsDataURL(src);
  });

const FileReaderUtils = {
  toArrayBuffer,
  toDataURL,
};

export default FileReaderUtils;
