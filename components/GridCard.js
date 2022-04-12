import React from "react";

function GridCard({ event }) {
  return (
    <li className="col-span-1 bg-gray-50 rounded-lg shadow divide-y divide-gray-200">
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1 truncate">
          <div className="flex flex-col items-center space-y-3">
            <h3 className="text-gray-900 text-sm font-medium truncate">
              {event.title}
            </h3>
            <a
              className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full hover:cursor-pointer"
              href={event.link}
            >
              Link
            </a>
            <p className="text-gray-500 font-light tracking-wide text-sm">
              {event.categories[0].title}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default GridCard;
