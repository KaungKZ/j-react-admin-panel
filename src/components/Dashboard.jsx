import React from "react";
import AsideMenu from "./AsideMenu";
import Categories from "./Categories";

export default function Dashboard() {
  return (
    <div className="fixed-components">
      <AsideMenu />

      <Categories />
    </div>
  );
}
