/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import 'jest-styled-components';

configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(
  createSerializer({
    map: obj => {
      // Don't include the intl object in snapshots
      // because it changes based on any modification of the
      // translations file
      const { intl, key, ...cleanProps } = obj.props;

      return { ...obj, props: cleanProps };
    },
  })
);
