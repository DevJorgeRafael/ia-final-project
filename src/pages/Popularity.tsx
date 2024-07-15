import Form from "../components/Form";

const Popularity = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-16 bg-darkGray text-white p-2">
      <h1 className=" text-center text-4xl font-bold text-spotifyGreen mb-8">
        Verifica la Popularidad de tu Canción
      </h1>
      <div className="px-2">
        <div className="w-full max-w-4xl p-8 bg-slate-100 rounded-lg shadow-md">
        <Form/>
      </div>
      </div>
    </div>
  );
};

export default Popularity;
