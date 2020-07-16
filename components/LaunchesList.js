import { gql, useQuery, NetworkStatus } from "@apollo/client";
import LaunchCard from "./LaunchCard";
import { useRouter } from "next/router";
import Link from 'next/link';
import cn from 'classnames';

export const DEFAULT_LAUNCHES_LIMIT = 12;

export const LAUNCHES_PAST_QUERY = gql`
  query launchesPast($limit: Int!, $offset: Int!) {
      launchesPast(limit: $limit, offset: $offset, sort: "launch_date_utc", order: "ASC") {
        id
        mission_name
        links {
          wikipedia
          flickr_images
        }
        launch_success
        launch_date_utc
      }
    }
`;

const PaginationButton = ({ page, pageOffset, disabled, children }) => (
  <Link href={`/?page=${+page + pageOffset}`} shallow>
    <a className={cn("block p-4 bg-black text-white hover:bg-gray-800", { 'pointer-events-none opacity-50': disabled })} disabled={disabled}>{children}</a>
  </Link>
)

const PageButton = ({ page, active }) => (
  <Link href={`/?page=${page}`} shallow>
    <a className={cn("inline-block p-4 bg-gray-300 mx-4 hover:bg-gray-200", { 'bg-gray-600 pointer-events-none': active })}>{page}</a>
  </Link>
)

const LaunchesList = () => {
  debugger
  const router = useRouter();
  const page = router?.query?.page || 1;
  const { loading, error, data, } = useQuery(LAUNCHES_PAST_QUERY,
    {
      variables: {
        offset: (+page - 1) * DEFAULT_LAUNCHES_LIMIT,
        limit: DEFAULT_LAUNCHES_LIMIT,
      }
    }
  );

  if (error) {
    return (<div>Error al cargar, intente nuevamnete</div>)
  }

  const { launchesPast: launches } = data || { launchesPast: Array(12).fill({}) };
  const areMoreLaunhces = +page < 3; //limit results to just 3 pages (excersice requeriments)

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {launches.map((launch, i) =>
          (
            <LaunchCard
              key={launch.id ? `launch-${launch.id}` : `skeleton-${i}`}
              launch={launch}
              isLoading={loading}
            />
          )
        )}
      </div>

      <div className="flex justify-evenly content-center my-16">
        <div><PaginationButton page={page} pageOffset={-1} disabled={page == '1' || loading}> {'<'} Prev</PaginationButton></div>
        <div>{[1, 2, 3].map((n) => <PageButton key={n} page={n} active={+page === n} />)}</div>
        <div><PaginationButton page={page} pageOffset={+1} disabled={!areMoreLaunhces || loading}> Next {'>'}</PaginationButton></div>
      </div>
    </>
  )
};

export default LaunchesList;
