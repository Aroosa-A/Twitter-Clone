import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignUp from '../jsx/SignUp';


describe('Tests for SignUp component', () => {
    it('should render input with place holder', () => {
        render(<MemoryRouter><SignUp /></MemoryRouter>);
        const input = screen.getByPlaceholderText(/first name/i);
        expect(input).toBeInTheDocument();
    });
    it('should render button with displayed value as SignUp', () => {
        render(<MemoryRouter><SignUp /></MemoryRouter>);
        const button = screen.getByText(/Sign Up/i);
        expect(button).toBeInTheDocument();
    });
});