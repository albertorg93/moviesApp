const server = require('../index'); // lanza servidor
const supertest = require('supertest');
//const mongoose = require('../models/pruebamongo.js') // lanza la bbdd
const request = supertest(server)

afterAll( async () => {
  await server.close()
  //await mongoose.connection.close()
})

it('Probando jest', () => {
    expect(1).toBe(1)
})

describe('GET the pugs', () => {
    it('gets the test endpoint /',  async() => {
        await request
            .get('/')
            .expect(200)
    })

    it('gets the test endpoint /dashboard',  async() => {
        await request
            .get('/dashboard')
            .expect(200)
    })

    it('gets the test endpoint /search',  async() => {
        await request
            .get('/search')
            .expect(200)
    })

    it('gets the test endpoint /signup',  async() => {
        await request
            .get('/signup')
            .expect(200)
    })

    it('gets the test endpoint /movies',  async() => {
        await request
            .get('/movies')
            .expect(200)
    })
})