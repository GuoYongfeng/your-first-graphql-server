import express from 'express';
import schema from './schema';
// new dependencies
import { graphql } from 'graphql';
import bodyParser from 'body-parser';

let app  = express();
let PORT = 3000;

// parse POST body as text
app.use(bodyParser.text({ type: 'application/graphql' }));

// 任何发送给 /graphql 的 POST 的请求都会触发 GraphQL Schema 的查询。
app.post('/graphql', (req, res) => {
  // 执行 GraphQL 查询!
  graphql(schema, req.body)
  .then((result) => {
    res.send(JSON.stringify(result, null, 2));
  });
});

let server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);
});
