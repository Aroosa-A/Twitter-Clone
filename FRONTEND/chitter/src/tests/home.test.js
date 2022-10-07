import React from 'react';
import Home from '../jsx/Home';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';



describe('Tests for Home component', () => {
    it('should render component with heading text when some user is logged in', () => {
        const string = [{ firstName: 'Aroosa', secondName: 'Ahmed', userName: 'aroosa', postBody: 'There are no posts to display' }];
        const name = { firstName: 'Aroosa' };
        render(<MemoryRouter><Home post={string} currentUser={name} /></MemoryRouter>);
        const posts = screen.getByText(/Hello Aroosa! Here are all the peeps/);
        expect(posts).toBeInTheDocument();
    });
    it('should render component with heading text when some user is not logged in', () => {
        const string = [{ firstName: 'Aroosa', secondName: 'Ahmed', userName: 'aroosa', postBody: 'There are no posts to display' }];
        render(<MemoryRouter><Home post={string} /></MemoryRouter>);
        const posts = screen.getByText(/Hello! Here are all the peeps/);
        expect(posts).toBeInTheDocument();
    });
    it('should render the postBody of object', () => {
        const string = [{ firstName: 'Aroosa', secondName: 'Ahmed', userName: 'aroosa', postBody: 'There are no posts to display' }];
        render(<MemoryRouter><Home post={string} /></MemoryRouter>);
        const posts = screen.getByTestId(/postBody/);
        expect(posts).toBeInTheDocument();
    });
    it('should render right data passed in not todays date', () => {
        const object = [{
            postBody: 'My post',
            postDate: "2022-08-15T01:10:54.510Z"
        }];
        render(<MemoryRouter><Home post={object} /></MemoryRouter>);
        const date = screen.getByText(/at 2:10 AM/);
        expect(date).toBeInTheDocument();
    });
});