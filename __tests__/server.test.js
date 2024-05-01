'use strict';

const supertest = require('supertest');
const server = require('../server.js');
const request = supertest(server.app);

describe('Test API Server', () => {
  it('handles good request to homepage', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
  });

  it('handles good request to /data', async () => {
    const response = await request.get('/data');
    expect(response.status).toEqual(200);
  });
});
