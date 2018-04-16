import 'raf/polyfill';
import { createSerializer } from 'enzyme-to-json';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

expect.addSnapshotSerializer(createSerializer());

configure({ adapter: new Adapter() });