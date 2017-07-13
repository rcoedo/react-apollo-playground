import express from "express";
import { graphqlExpress } from "graphql-server-express";
import bodyParser from "body-parser";
import cors from "cors";
import schema from "./src/schema";
import { user, validInnerToken } from "./src/mocks";

const app = express();

const withUserContext = opts => req => {
  console.log("request received");
  return {
    ...opts,
    context: {
      ...opts.context,
      user: req.headers.authorization === `Bearer ${validInnerToken}` ? user : null,
    },
  };
};

app.use(cors({ origin: (_origin, cb) => cb(null, true), credentials: true }));
app.use("/graphql", bodyParser.json(), graphqlExpress(withUserContext({ schema })));

const port = process.env.PORT || 0;
const server = app.listen(port, () => console.log(`Running on http://localhost:${server.address().port}/graphql`));
