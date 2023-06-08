import "./App.css";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/topbar/Topbar";
import routs from "./routes/route.jsX";
import SearchBox from "./components/searchBox/SearchBox";

function App() {
  let router = useRoutes(routs);

  return (
    <div>
      <Topbar />
      <SearchBox />
      <div className="pb-[100px]">{router}</div>
      <Navbar />
    </div>
  );
}

export default App;