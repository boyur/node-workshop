# Request parsing

```shell
npm i
npm start
```

## Usage

```shell
$ curl -i "http://localhost:3000/sum?a=1&b=2"

HTTP/1.1 200 OK
Content-Type: application/json
Date: Wed, 22 Nov 2017 09:58:28 GMT
Connection: keep-alive
Content-Length: 14

{
  "sum": 3
}
```

```shell
$ curl -i -X POST -d '{"a": 1, "b": 2}' "http://localhost:3000/sum"

HTTP/1.1 200 OK
Content-Type: application/json
Date: Wed, 22 Nov 2017 09:58:08 GMT
Connection: keep-alive
Content-Length: 14

{
  "sum": 3
}
```