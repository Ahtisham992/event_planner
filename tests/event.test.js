const request = require('supertest');
const app = require('../app');

describe('Basic API Test', () => {
  it('should return 404 on invalid route', async () => {
    const res = await request(app).get('/invalid');
    expect(res.statusCode).toBe(404);
  });
});
