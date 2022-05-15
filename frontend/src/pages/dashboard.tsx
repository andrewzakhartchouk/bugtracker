import { Navbar } from "components";
import { NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-bg-green overflow-auto">
      <Navbar></Navbar>
      <div className="flex flex-grow"></div>
    </div>
  );
};

export default Dashboard;
