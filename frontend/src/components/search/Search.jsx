import { FaSearch } from "react-icons/fa";
const Search = () => {

  return (
    <div className="w-full px-2 py-2 border-b-slate-500 border-b-2 flex justify-between items-center gap-1 mt-0">
      <label className="input input-bordered flex items-center gap-2 h-12">
        <input type="text" className="grow" placeholder="Search" />
      </label>
      <button className="btn btn-info"><FaSearch /></button>
    </div>
  );
};
export default Search;
