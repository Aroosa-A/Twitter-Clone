import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';

chai.use(chaiHttp);


describe('Tests for post request in chitterUsers route', () => {

    it('should sends back object', async () => {
        const user = { firstName: 'Aroosa', secondName: 'Ahmed', email: 'aroosa@email.com', userName: 'aroosa', password: '12345' };
        const res = await chai.request(server)
            .post('/chitterUsers')
            .send(user)
        expect(res.body).to.be.an('object');
    });
    it('should send status 200', async () => {
        const user = { firstName: 'Aroosa', secondName: 'Ahmed', email: 'aroosa@email.com', userName: 'aroosa', password: '12345' };
        const res = await chai.request(server)
            .post('/chitterUsers')
            .send(user)
        expect(res).to.have.status(200);
    });
    it('should send message "There were errors in the sign up data" when firstName length is less than expected', async () => {
        const user = { firstName: 'A', secondName: 'Ahmed', email: 'aroosa@email.com', userName: 'aroosa', password: '12345' };
        const res = await chai.request(server)
            .post('/chitterUsers')
            .send(user);
        expect(res.body.message).to.include('There were errors in the sign up data');
    });
    it('should send message "User already exists" when user already registered once', async () => {
        const user = { firstName: 'Aroosa', secondName: 'Ahmed', email: 'aroosa@email.com', userName: 'aroosa', password: '12345' };
        const res = await chai.request(server)
            .post('/chitterUsers')
            .send(user)
        expect(res.body.message).to.include('User already exists');
    });
});
