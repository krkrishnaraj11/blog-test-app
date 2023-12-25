import {render} from '@testing-library/react-native';
import CustomDrawer from '../src/components/CustomDrawer';

jest.mock('../src/api/userApi.ts');

describe('fetch user data', () => {
  test('should render names in drawer', () => {
    const {getByTestId} = render(<CustomDrawer />);
    const header = getByTestId('header');
    expect(header).toBeTruthy();
  });
});
