import "../styles/globals.css";
import type { AppProps } from "next/app";
import { WalletProvider } from "../context/MintbaseWalletProvider";
import { Network, Chain } from "mintbase";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const HASURA_GRAPHQL_URL_TEST =
  "https://threexr-test-hasura.herokuapp.com/v1/graphql";
const MB_PUBLIC_API_KEY = "5759bd06-adb1-427e-9705-5d5e31c6a328";

const apolloClient = new ApolloClient({
  uri: HASURA_GRAPHQL_URL_TEST,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <WalletProvider
        network={Network.testnet}
        chain={Chain.near}
        apiKey={MB_PUBLIC_API_KEY}
      >
        <Component {...pageProps} />
      </WalletProvider>
    </ApolloProvider>
  );
}


export default MyApp;
