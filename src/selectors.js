import { createSelector } from 'reselect';

const fileDictSelector = state => state.data.fileDict;
export const selectedFilenameSelector = state => state.ui.selectedFilename;

export const filesSelector = createSelector(
  fileDictSelector,
  fileDict => Object.keys(fileDict).map(filename => fileDict[filename])
);

export const selectedFileSelector = createSelector(
  fileDictSelector,
  selectedFilenameSelector,
  (fileDict, selectedFilename) => fileDict[selectedFilename]
);
