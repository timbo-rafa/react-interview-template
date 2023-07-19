import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { Cards } from './Cards';

test('renders 2 Cards initial state', async () => {
  const {container} = render(<Cards amount={2} />);
  expect(container).toHaveTextContent('downdown');
});

test('renders 4 Cards initial state', async () => {
    const {container} = render(<Cards amount={4} />);
    expect(container).toHaveTextContent('downdowndowndown');
  });

test('flips middle card then last card', async () => {
  const {container, } = render(<Cards amount={3} />);
  const cards = await screen.findAllByRole('cell')
  fireEvent.click(cards[1])
  expect(container).toHaveTextContent('downupdown');
  
  fireEvent.click(cards[2])
  expect(container).toHaveTextContent('downdownup');
});