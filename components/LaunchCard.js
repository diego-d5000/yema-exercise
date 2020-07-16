import Skeleton from 'react-loading-skeleton';
import cn from 'classnames';

const getRandomIndex = (imagesLength) => Math.floor(Math.random() * (imagesLength));

const LaunchCard = ({ launch, isLoading }) => {

  const launchDate = new Date(launch?.launch_date_utc);
  const launchImageList = launch?.links?.flickr_images;
  const launchImage = (launchImageList && launchImageList[getRandomIndex(launchImageList.length)]) || 'spacex_default_image.jpg';

  return (
    <article className="w-full rounded bg-gray-200 overflow-hidden shadow-sm hover:shadow-xl flex flex-col items-stretch duration-300 transition-shadow ease-out">
      <header>
        {<div className="relative w-full pb-3/4">
          {isLoading ? <Skeleton className="absolute object-cover w-full h-full" /> : <img className="absolute object-cover w-full h-full" alt={`{${launch.mission_name}} launch photo`} src={launchImage} />}
        </div>}
        <div className="px-3 pt-2">
          {isLoading ? <Skeleton /> : <h1 className={
            cn("my-2 text-lg font-semibold h-14 overflow-hidden",
              { 'text-red-600': !launch.launch_success, 'text-green-600': launch.launch_success }
            )}>{launch.mission_name}</h1>}
          {isLoading ? <Skeleton /> : <span><b>Fecha: </b> {launchDate.toLocaleDateString()}</span>}<br />
          {isLoading ? <Skeleton /> : <span><b>Hora: </b> {launchDate.toLocaleTimeString()} (GMT{(launchDate.getTimezoneOffset() / 60 * -1)}:00)</span>}
        </div>
      </header>
      <div className="p-3">
        <a className="text-blue-600" href={launch?.links?.wikipedia} target="_blank" rel="noopener">Ver Más</a>
      </div>
    </article>
  )
}

export default LaunchCard;