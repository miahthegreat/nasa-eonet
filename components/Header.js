import React from "react";

function Header() {
  return (
    <div className="mx-auto max-w-7xl border-b border-gray-500/20 bg-slate-700 shadow px-2 py-4 mb-12">
      <h1 className="text-center text-3xl font-bold text-gray-50">
        NASA EONET
      </h1>
      <h2 className="text-center text-sm font-base text-gray-50">
        Earth Observatory Natural Event Tracker{" "}
      </h2>
    </div>
  );
}

export default Header;
