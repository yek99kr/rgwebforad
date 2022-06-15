import Link from "next/link";

const Menu = () => {
  return (
    <>
      <nav className="fixed z-10  bg-white flex justify-between items-center w-[100vw] h-[33px]">
        <div>
          <div className="flex-1 pt-2 pb-2 pl-5 pr-5  inline">
            <img src="/logoshort.png" className="relative w-[70px] inline" />
          </div>
          <div className="flex-1 pt-2 pb-2 pl-5 pr-5 bg-yellow-400 inline text-[15px] ">
            Projects
          </div>
          <div className="flex-1 pt-2 pb-2 pl-5 pr-5 bg-blue-400 inline">
            Store
          </div>
          <div className="flex-1 pt-2 pb-2 pl-5 pr-5 bg-pink-400 inline">
            Instagram
          </div>
          <div className="flex-1 pt-2 pb-2 pl-5 pr-5 bg-green-500 inline">
            Contact
          </div>
          <div className="flex-1 pt-2 pb-2 pl-5 pr-5 bg-white inline"></div>
          <div className="justify-end  pt-2 pb-2 pl-5 pr-5 bg-purple-500 inline">
            Cart (0)
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
