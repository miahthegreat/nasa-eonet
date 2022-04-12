import React from "react";
import GridCard from "./GridCard";

function GridList({ events }) {
  return (
    <ul role="list" className="grid grid-cols-1 gap-10 sm:grid-cols-2 mb-6">
      {events
        ? events.map((event, idx) => {
            return <GridCard event={event} key={idx} />;
          })
        : null}
    </ul>
  );
}

export default GridList;
