import EntryCard from "@/components/EntryCard";
import NewEntryCard from "@/components/NewEntryCard";
import prisma from "@/package/db/prisma/db";
import getUserByClerkId from "@/utils/auth";
import React from "react";

const getentries = async () => {
  const user = await getUserByClerkId();
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return entries;
};
async function page() {
  const entries = await getentries();

  return (
    <div>
      <h1 className="text-2xl">Journal</h1>
      <div className="p-2">
        <div className="grid grid-cols-3 gap-4">
          <NewEntryCard />
          {entries.map((entry) => {
            return <EntryCard key={entry.id} entry={entry} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
