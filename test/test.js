let chai = require('chai');
let chaiHttp = require('chai-http');
const { response } = require('express');
let server = require('../app');

chai.should();
chai.use(chaiHttp);

describe('Calculator Test', () => {
    describe("POST num1 num2", () => {
        it("It should return the calculated number 8", (done) => {
            chai.request(server).post('/')
            .set('content-type', 'application/x-www-form-urlencoded')
            .type('form')
            .send('num1=5')
            .send('num2=3')
            .end((err, response) => {
                response.text.should.be.a('string');
                response.text.should.be.eql("8");
                done();
            })
        })
    })
})

