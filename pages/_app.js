import '../styles/index.css';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title key="title">SpaceX Nextjs</title>
        <meta name="description" content="SpaceX Launches web app built in next.js" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp