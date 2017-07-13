import { ApolloClient, createNetworkInterface } from "react-apollo";

const authHeaderMiddleware = tokenFetcher => (req, next) => {
  const token = tokenFetcher();

  req.options.headers = req.options.headers || {};
  req.options.headers.authorization = token ? `Bearer ${token}` : null;

  next();
};

const buildClient = ({ tokenFetcher = () => localStorage.getItem("token"), networkOptions }) => {
  const networkInterface = createNetworkInterface(networkOptions);

  networkInterface.use([{ applyMiddleware: authHeaderMiddleware(tokenFetcher) }]);

  return new ApolloClient({
    networkInterface,
  });
};

export default buildClient;
