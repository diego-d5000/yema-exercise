const LocationComponent = ({ headquarters }) => (
  <section className="text-gray-700 body-font relative">
    <div className="container px-5 py-24 flex-col mx-auto flex sm:flex-no-wrap flex-wrap">
      <div className="bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-center relative">
        <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=(SpaceX%Hawthorne)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
        <div className="bg-white relative flex flex-wrap py-6 lg:w-1/2 md:w-2/3 w-full">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">ADDRESS</h2>
            <p className="leading-relaxed">{headquarters.address}</p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">City</h2>
            <p className="text-blue-500 leading-relaxed">{headquarters.city}</p>
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">State</h2>
            <p className="leading-relaxed">{headquarters.state}</p>
          </div>
        </div>
      </div>
    </div>
  </section >
);

export default LocationComponent;