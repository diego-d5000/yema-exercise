import { initializeApollo } from 'lib/apolloClient'
import MainLayout from 'components/MainLayout'
import { gql, useQuery } from '@apollo/client'
import HeroCompanyInfo from 'components/HeroCompanyInfo'
import LocationComponent from 'components/LocationComponent'

const COMPANY_QUERY = gql`
query company {
  company {
    ceo
    employees
    headquarters {
      address
      city
      state
    }
    links {
      elon_twitter
      website
    }
    name
    summary
  }
}

`

const About = () => {
  const { data, error, loading } = useQuery(COMPANY_QUERY);

  if (error) return <div>Error, intente más tarde</div>

  const { company } = data || {};
  return (
    <MainLayout>
      <HeroCompanyInfo company={company} isLoading={loading} />
      <LocationComponent headquarters={company?.headquarters} isLoading={loading} />
    </MainLayout>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: COMPANY_QUERY,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    }
  }
}

export default About;
