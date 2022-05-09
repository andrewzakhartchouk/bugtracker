import { Navbar } from "components";
import { NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-bg-green ">
      <Navbar></Navbar>
      <div className="flex flex-grow"></div>
    </div>
  );
};

export default Dashboard;
