import { saveFileMeta } from './utils/localStore';

export const SET_FILE_DICT = 'SET_FILE_DICT';
const setFileDict = fileDict => {
  saveFileMeta(fileDict);

  return {
    type: SET_FILE_DICT,
    payload: fileDict,
  };
};

export const ADD_FILES = 'ADD_FILES';
export const addFiles = fileList => (dispatch, getState) => {
  const { fileDict } = getState().data;
  const updatedFileDict = Array.from(fileList).reduce(
    (acc, file) => {
      if (!acc[file.name] || !acc[file.name].objectURL) {
        acc[file.name] = {
          name: file.name,
          boxes: [],
          ...(acc[file.name] || {}),
          objectURL: URL.createObjectURL(file),
        };
      }
      return acc;
    },
    { ...fileDict }
  );

  dispatch(setFileDict(updatedFileDict));
};

export const SELECT_FILE = 'SELECT_FILE';
export const selectFile = filename => ({
  type: SELECT_FILE,
  payload: filename,
});

export const setImageBoxes = (filename, boxes) => (dispatch, getState) => {
  const { fileDict } = getState().data;

  dispatch(
    setFileDict({
      ...fileDict,
      [filename]: {
        ...fileDict[filename],
        boxes,
      },
    })
  );
};

export const toggleIgnoreFile = filename => (dispatch, getState) => {
  const { fileDict } = getState().data;

  dispatch(
    setFileDict({
      ...fileDict,
      [filename]: {
        ...fileDict[filename],
        ignore: !fileDict[filename].ignore,
      },
    })
  );
};

export const removeAllFiles = () => setFileDict({});

export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';
export const switchLanguage = lang => ({
  type: SWITCH_LANGUAGE,
  payload: { lang },
});
