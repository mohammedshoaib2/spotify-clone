import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
function App() {
  return (
    <div className="h-screen bg-black">
      <div className=" h-[80%] sm:h-[90%] w-full flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
    </div>
  );
}

export default App;
