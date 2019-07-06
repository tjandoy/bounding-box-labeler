export const SET_FILES = 'SET_FILES';
export const setFiles = fileList => (dispatch, getState) => {
  const { fileDict } = getState().data;

  dispatch({
    type: SET_FILES,
    payload: Array.from(fileList).reduce(
      (acc, file) => {
        if (!acc[file.name]) {
          acc[file.name] = {
            name: file.name,
            objectURL: URL.createObjectURL(file),
            boxes: [],
          };
        }
        return acc;
      },
      { ...fileDict }
    ),
  });
};

export const SELECT_FILE = 'SELECT_FILE';
export const selectFile = filename => ({
  type: SELECT_FILE,
  payload: filename,
});

export const SET_IMAGE_BOXES = 'SET_IMAGE_BOXES';
export const setImageBoxes = (filename, boxes) => ({
  type: SET_IMAGE_BOXES,
  payload: { filename, boxes },
});

export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';
export const switchLanguage = lang => ({
  type: SWITCH_LANGUAGE,
  payload: { lang },
});
