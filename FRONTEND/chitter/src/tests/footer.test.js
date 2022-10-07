import React from 'react';
import Footer from '../jsx/Footer';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';



describe('Tests for footer component', () => {
    it('should render footer', () => {
        render(<MemoryRouter><Footer /></MemoryRouter>);
        const footer = screen.getByText(/2022/);
        expect(footer).toBeInTheDocument();
    });
});