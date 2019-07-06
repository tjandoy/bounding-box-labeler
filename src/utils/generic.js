export function isLocalStorageAvailable() {
  if (typeof global.window === 'undefined') return false;

  const test = '__storage_test__';
  try {
    global.window.localStorage.setItem(test, test);
    global.window.localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}
