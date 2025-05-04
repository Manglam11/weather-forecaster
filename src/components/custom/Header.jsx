import Place from "./Place.jsx";
import Search from "./Search.jsx";
import Settings from "./Settings.jsx";

function Header() {
  return (
    <div className="bg-white h-[70px] flex items-center justify-around relative">
      <Place />
      <Search />
      <Settings />
    </div>
  );
}

export default Header;
