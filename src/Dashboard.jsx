import React from "react";
import AppBody from "./components/Appbody";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./index.css";

function Dashboard() {
  return (
    <main id="parent_div">
      <section id="header_wrapper">
        <Header />
      </section>
      <section id="body_wrapper">
        <Sidebar />
        <AppBody />
      </section>
    </main>
  );
}

export default Dashboard;
