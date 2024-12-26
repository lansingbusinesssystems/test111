import http, { IncomingMessage, ServerResponse } from "http";

export const helloDocker = (): string => {
  return "Hello, Docker World 12 !\n";
};

export const createServer = () => {
  return http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(helloDocker());
  });
};

if (require.main === module) {
  const server = createServer();
  const port = 3000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}