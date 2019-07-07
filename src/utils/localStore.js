import { isLocalStorageAvailable } from './generic';

const FILE_META_STORAGE_KEY = 'FILE_META_STORAGE_KEY';
const CURRENT_STORAGE_VERSION = 1;
export function getSavedFileMeta() {
  if (isLocalStorageAvailable()) {
    const savedFileMetaString = window.localStorage.getItem(
      FILE_META_STORAGE_KEY
    );
    if (savedFileMetaString) {
      try {
        const savedFileMeta = JSON.parse(savedFileMetaString);
        if (savedFileMeta.version === CURRENT_STORAGE_VERSION) {
          return savedFileMeta.fileMeta;
        }
      } catch (err) {
        // Do nothing
      }
    }
  }

  return {};
}

export function saveFileMeta(fileDict) {
  if (isLocalStorageAvailable()) {
    window.localStorage.setItem(
      FILE_META_STORAGE_KEY,
      JSON.stringify({
        version: CURRENT_STORAGE_VERSION,
        fileMeta: Object.keys(fileDict).reduce((acc, filename) => {
          const { objectURL, ...fileWithoutObjectURL } = fileDict[filename];
          acc[filename] = fileWithoutObjectURL;

          return acc;
        }, {}),
      })
    );
  }
}
