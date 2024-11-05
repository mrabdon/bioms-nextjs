import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";

import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
// import EventCalendar from "@/components/EventCalendar";
// import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import Image from "next/image";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          <UserCard type="Unlifted" />
          <UserCard type="Lifted" />
          <UserCard type="Committed" />
          <UserCard type="Remaining" />
          <UserCard type="Pending" />
          <UserCard type="Total" />
        </div>
        {/* MIDDLE CHARTS */}

        {/* BOTTOM CHART */}
        {/* <div className="w-full h-[500px] flex flex-wrap gap-4"> */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3">
          <div className="  bg-white p-4 rounded-md ">
            <h1 className="text-2xl font-semibold my-4 ">Reports <span className="text-blue-400">Overview</span></h1>
           <h2>__________________________________________________________________________</h2>
            <UserCard type="Draft" />
          <UserCard type="Sent" />
          <UserCard type="Open" />
          
         
          </div>
          <div className=" bg-white p-4 rounded-md ">
            <h1 className="text-2xl font-semibold my-4 ">Analytics <span className="text-blue-400">Overview</span></h1>
            <h2>__________________________________________________________________________</h2>
            <UserCard type="Paid" />
          <UserCard type="Paritally Paid" />
          <UserCard type="Unpaid" />
  
          </div>

          <div className=" bg-white p-4 rounded-md ">
            <h1 className="text-2xl font-semibold my-4 ">Analytics <span className="text-blue-400">Overview</span></h1>
            <h2>__________________________________________________________________________</h2>
            <UserCard type="Paid" />
          <UserCard type="Paritally Paid" />
          <UserCard type="Unpaid" />
  
          </div>
        </div>
      {/* RIGHT */}
      {/* <div className="w-full lg:w-1/3 flex flex-col gap-8">

        <Announcements />
      </div> */}
    </div>
    </div>
  );
};

export default AdminPage;
