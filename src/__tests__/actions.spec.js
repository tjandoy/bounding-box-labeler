import {
  switchLanguage,
} from '../actions';

describe('Testing action creators', () => {
  test('Switch Language', () => {
    const expectedActionObject = {
      type: 'SWITCH_LANGUAGE',
      payload: { lang: 'ja' },
    };
    expect(switchLanguage('ja')).toEqual(expectedActionObject);
  });
});
