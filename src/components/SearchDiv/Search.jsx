import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Search = () => {
  return (
    <div className="searchDiv bg-greyIsh grid gap-10 rounded-[10px] p-[3rem]">
      <form action="">
        <div
          className="firstDiv flex justify-between shadow-lg shadow-greyIsh-700 items-center
         bg-white rounded-[8px] gap-[20px] p-5"
        >
          <div className="flex gap-3 items-center">
            <AiOutlineSearch className="text-[25px] text-blue-500 icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search Your Dream Jobs...."
            />
            <AiOutlineCloseCircle
              className="text-blue-500 text-[25px] 
            hover:text-textColor icon"
            />
          </div>

          <div className="flex gap-3 items-center">
            <BsHouseDoor className="text-[25px] text-blue-500 icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search by Company Name...."
            />
            <AiOutlineCloseCircle
              className="text-blue-500 text-[25px] 
            hover:text-textColor icon"
            />
          </div>

          <div className="flex gap-3 items-center">
            <CiLocationOn className="text-[25px] text-blue-500 icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search by Location......"
            />
            <AiOutlineCloseCircle
              className="text-blue-500 text-[25px] 
            hover:text-textColor icon"
            />
          </div>
          <button
            className="h-full bg-blueColor px-8 p-3 rounded-[10px]
           text-white hover:bg-blue-300 cursor-pointer"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
export default Search;
