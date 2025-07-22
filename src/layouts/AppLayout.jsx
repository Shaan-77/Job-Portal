import Header from "@/Components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div className="grid-background  "></div>

      <main className="min-h-screen container mx-auto font-mono ">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center mt-10 bg-gray-800">
        Developed by Yahya Shanawaz Mohammed
      </div>
    </>
  );
};

export default AppLayout;
