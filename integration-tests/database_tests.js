const expect = require('chai').expect;
const { Client } = require('pg')


const client = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
  })
client.connect()
  
client.query('SELECT 1+1 as result', (err, res) => {
    if(err) { console.error(err, res); }
    expect(res.rows[0]['result']).to.be.equal(2);
    client.end()
});
