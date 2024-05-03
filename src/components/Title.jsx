const Title = ({ title, description }) => {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-0 pt-10 sm:px-4 lg:grid lg:max-w-7xl lg:gap-x-4 lg:px-4 lg:pb-2 lg:pt-10">
      <div className=" lg:pr-6">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {title}
        </h1>
        <p className="mt-2 text-lg leading-8 text-gray-600">{description}</p>
      </div>
    </div>
  );
};
export default Title;
