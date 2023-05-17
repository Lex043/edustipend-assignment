import CreatePlaylist from "./component/CreatePlaylist";
import TrendingSongs from "./component/TrendingSongs";

const App = () => {
  return (
    <main className="bg-[#eeeeee] flex flex-col justify-center items-center min-h-screen px-8 lg:px-[16rem]">
      <section className="flex flex-col gap-4 md:flex-row justify-between w-full items-center px-4 md:px-0 md:pr-4 md:pl-8 border-[1px] border-[#807878] py-4">
        <CreatePlaylist />
        <TrendingSongs />
      </section>
    </main>
  );
};

export default App;
