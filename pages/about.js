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
  // it doesnt need loading state because is full static

  const { company } = data || {};
  return (
    <MainLayout>
      <h1 className="text-center font-semibold text-2xl">About {company.name}</h1>
      <HeroCompanyInfo company={company} />
      <h2 className="text-center font-semibold text-2xl">Headquarters</h2>
      <LocationComponent headquarters={company.headquarters} />
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
