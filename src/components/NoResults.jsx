import Error from "../assets/error.png";
export default function NoResults({ msg }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-3 h-[70vh]">
      <img src={Error} className="w-12" />
      <h1 className="text-center text-xl font-bold text-gray-500">{msg}</h1>
    </div>
  );
}
