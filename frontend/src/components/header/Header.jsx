const Header = () => {
  return (
    <div className="flex flex-row px-2 py-1 bg-slate-300 w-full rounded-lg rounded-t-none rounded-l-none justify-start items-center">
      <div className="avatar online mr-4">
        <div className="w-12 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <h2 className="text-2xl text-teal-900 font-semibold">Vinaya</h2>
    </div>
  );
};

export default Header;
