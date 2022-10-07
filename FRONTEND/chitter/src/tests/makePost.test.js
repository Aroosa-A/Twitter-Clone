import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MakePost from '../jsx/MakePost';



describe('Tests for makePost component', () => {
    it('should render textarea', () => {
        const currentUser = { firstName: 'Aroosa', secondName: 'Ahmed', userName: 'aroosa' };
        render(<MemoryRouter><MakePost currentUser={currentUser} /></MemoryRouter>);
        const textArea = screen.getByPlaceholderText(/Enter your Post here/);
        expect(textArea).toBeInTheDocument();
    });
    it('should render button', () => {
        const currentUser = { firstName: 'Aroosa', secondName: 'Ahmed', userName: 'aroosa' };
        render(<MemoryRouter><MakePost currentUser={currentUser} /></MemoryRouter>);
        const button = screen.getByTestId(/submit/);
        expect(button).toBeInTheDocument();
    });
    it('should render userName', () => {
        const currentUser = { firstName: 'Aroosa', secondName: 'Ahmed', userName: 'aroosa' };
        render(<MemoryRouter><MakePost currentUser={currentUser} /></MemoryRouter>);
        const name = screen.getByText(/Hi! Aroosa Ahmed/);
        expect(name).toBeInTheDocument();
    });
});