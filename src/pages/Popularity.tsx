import Form from "../components/Form";

const Popularity = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-16 bg-darkGray text-white">
      <h1 className="text-4xl font-bold text-white mb-8">
        Verifica la Popularidad
      </h1>
      <div className="w-full max-w-md p-8 bg-slate-300 rounded-lg shadow-md">
        <Form />
      </div>
    </div>
  );
};

export default Popularity;
