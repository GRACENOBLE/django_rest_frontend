import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const page = async () => {
  const books = await fetch("http://127.0.0.1:8000/api/books/")
    .then((res) => res.json())
    .catch((err) => console.log(err));
  console.log(books);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-semibold">Book website</h1>
      <form className="flex gap-4">
        <input
          type="text"
          placeholder="book title"
          className="border rounded-md ps-2"
        />
        <input
          type="number"
          placeholder="release date"
          className="border rounded-md ps-2"
        />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default page;
