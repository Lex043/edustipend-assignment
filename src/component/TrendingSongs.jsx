// const UNAVAILABLE = [
//   "unavailable",
//   "unavailable",
//   "unavailable",
//   "unavailable",
//   "unavailable",
// ];

const TrendingSongs = () => {
  return (
    <section className="bg-[#666666] p-3 flex flex-col items-center gap-3">
      <h1 className="font-bold text-lg text-center">Trending songs</h1>
      <div className="flex flex-col gap-3">
        <button className="bg-white rounded-md text-sm px-2 py-1">
          Unavailable by <i>Davido</i> +
        </button>
        <button className="bg-white rounded-md text-sm px-2 py-1">
          Unavailable by <i>Davido</i> +
        </button>
        <button className="bg-white rounded-md text-sm px-2 py-1">
          Unavailable by <i>Davido</i> +
        </button>
        <button className="bg-white rounded-md text-sm px-2 py-1">
          Unavailable by <i>Davido</i> +
        </button>
        <button className="bg-white rounded-md text-sm px-2 py-1">
          Unavailable by <i>Davido</i> +
        </button>
      </div>
      <button className="bg-[#ff9900] py-1 px-2 rounded-md text-sm font-semibold">
        View more
      </button>
    </section>
  );
};

export default TrendingSongs;
