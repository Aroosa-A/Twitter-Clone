import React from 'react';
import Header from '../jsx/Header';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';



describe('Tests for header component', () => {
    it('should render header', () => {
        render(<MemoryRouter><Header /></MemoryRouter>);
        const header = screen.getByText(/chitter chat/i);
        expect(header).toBeInTheDocument();
    });
});