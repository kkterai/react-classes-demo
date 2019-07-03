import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import App from './App';

afterEach(cleanup);

it("renders", ()=> {
    const { asFragment } = render(<App text="Enter a Github username:" />);
    expect(asFragment()).toMatchSnapshot();
});

it("has text in h2", () => {
    const { getByTestId, getByText } = render(<App text="Enter a Github username:"/>);
    expect(getByTestId('h2tag')).toHaveTextContent("Enter a Github username:");
})