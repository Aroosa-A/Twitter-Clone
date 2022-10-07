import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';

chai.use(chaiHttp);



describe('Tests for post request in chitterPosts route', () => {
    it('should check Post req sends object', async () => {
        const firstPost = { firstName: 'Aroosa', secondName: 'Ahmed', userName: 'aroosa', postBody: 'first post' };
        const res = await chai.request(server)
            .post('/chitterPosts')
            .send(firstPost)
        expect(res.body).to.be.an('object');
    });
    it('should give status 200', async () => {
        const firstPost = { firstName: 'Aroosa', secondName: 'Ahmed', userName: 'aroosa', postBody: 'second post' };
        const res = await chai.request(server)
            .post('/chitterPosts')
            .send(firstPost)
        expect(res).to.have.status(200);
    });
    it('should send message `There were errors in the post` when postBody length is less than expected length', async () => {
        const post = { firstName: 'Aroosa', secondName: 'Ahmed', userName: 'aroosa', postBody: 'a' };
        const res = await chai.request(server)
            .post('/chitterPosts')
            .send(post);
        expect(res.body.message).to.include(`There were errors in the post`);
    });
    it('should send message `Post successful` when post is ok', async () => {
        const post = { firstName: 'Aroosa', secondName: 'Ahmed', userName: 'aroosa', postBody: 'another post' };
        const res = await chai.request(server)
            .post('/chitterPosts')
            .send(post);
        expect(res.body.message).to.include(`Post successful`);
    });
});
describe('Tests for get request in chitterPost route', () => {
    it('should give status 200 if got data', async () => {
        const res = await chai.request(server)
            .get('/chitterPosts')
            .send()
        expect(res).to.have.status(200);
    });
    it('should get object', async () => {
        const res = await chai.request(server)
            .get('/chitterPosts')
            .send()
        expect(res).to.be.an('object');
    });
});