import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../jsx/Login';


describe('Tests for Login component', () => {
    it('should render input with email place holder', () => {
        render(<MemoryRouter><Login /></MemoryRouter>);
        const email = screen.getByPlaceholderText(/email/i);
        expect(email).toBeInTheDocument();
    });
    it('should render button with displayed value as Login', () => {
        render(<MemoryRouter><Login /></MemoryRouter>);
        const button = screen.getByText(/LogIn/);
        expect(button).toBeInTheDocument();
    });

});