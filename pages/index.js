import { initializeApollo } from 'lib/apolloClient';
import LaunchesList, { LAUNCHES_PAST_QUERY, DEFAULT_LAUNCHES_LIMIT } from 'components/LaunchesList';
import MainLayout from 'components/MainLayout';
import Head from 'next/head';

const Home = () => {
  return (
    <MainLayout>
      <Head>
        <title key="title">SpaceX Nextjs | Launches</title>
      </Head>
      <h1 className="text-center font-semibold text-2xl mb-8">Launches</h1>
      <LaunchesList />
    </MainLayout>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: LAUNCHES_PAST_QUERY,
    variables: {
      offset: 0,
      limit: DEFAULT_LAUNCHES_LIMIT,
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1, // use new beta feature to revalidate date on fly
  }
}

export default Home;
