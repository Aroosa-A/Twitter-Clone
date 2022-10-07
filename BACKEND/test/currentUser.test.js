import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';

chai.use(chaiHttp);

describe('Tests for post request in currentUser route', () => {
    it('should check post request sends back object', async () => {
        const user = { email: 'aroosa@email.com', password: '12345' };
        const res = await chai.request(server)
            .post('/currentUser')
            .send(user);
        expect(res.body).to.be.an('object');
    });
    it('should send status 200', async () => {
        const user = { email: 'aroosa@email.com', password: '12345' };
        const res = await chai.request(server)
            .post('/currentUser')
            .send(user);
        expect(res).to.have.status(200);
    });
    it('should send message "Login success"', async () => {
        const user = { email: 'aroosa@email.com', password: '12345' };
        const res = await chai.request(server)
            .post('/currentUser')
            .send(user);
        expect(res.body.message).to.include('Login success');
    });
    it('should send message "There were errors in the log in data" when email is not in correct format', async () => {
        const user = { email: 'aroosa.com', password: '12345' };
        const res = await chai.request(server)
            .post('/currentUser')
            .send(user);
        expect(res.body.message).to.include('There were errors in the log in data');
    });
    it('should send message "There were errors in the log in data" when password is less than 5 digits', async () => {
        const user = { email: 'aroosa@email.com', password: '123' };
        const res = await chai.request(server)
            .post('/currentUser')
            .send(user);
        expect(res.body.message).to.include('There were errors in the log in data');
    });
    it('should send message "You need to signUp before logging in" when user is not signed in', async () => {
        const user = { email: 'me@email.com', password: '98765' };
        const res = await chai.request(server)
            .post('/currentUser')
            .send(user);
        expect(res.body.message).to.include('You need to signUp before logging in');
    });
    it('should send message "Your password is incorrect" when user is already in database but password dont match', async () => {
        const user = { email: 'aroosa@email.com', password: '98765' };
        const res = await chai.request(server)
            .post('/currentUser')
            .send(user);
        expect(res.body.message).to.include('Your password is incorrect');
    });
});