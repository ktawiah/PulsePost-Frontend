import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <>
      <div className="relative mt-4 md:mt-0">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>

        <Input
          type="text"
          className="w-full py-2 pl-10 pr-4"
          placeholder="Search"
        />
      </div>
    </>
  );
};

export default SearchBar;
