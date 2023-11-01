import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    const title = 'Title';

    beforeEach(() => {
      render(<Header title={title}></Header>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });

    test('Then it should render the title', () => {
      const element = screen.getByText(title);
      expect(element).toBeInTheDocument();
    });
  });
});
