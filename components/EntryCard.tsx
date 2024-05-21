import React from "react";

function EntryCard({ entry }) {
  return (
    <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md">
      <div className="p-5 flex">
        <span className="text-2xl">{entry.id}</span>
        <span className="text-2xl">{entry.content}</span>
      </div>
    </div>
  );
}

export default EntryCard;
