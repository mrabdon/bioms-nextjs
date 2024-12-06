import UsersTab from "@/components/UsersTab";

const UsersPage = () => {
  const allUsers = [
    {
      name: "Cardo Dalisay",
      username: "cardo",
      lastSignedIn: "Yesterday at 2:14 PM",
      joined: "Yesterday at 8:30 AM",
    },
    {
      name: "Administrator",
      username: "admin",
      lastSignedIn: "Yesterday at 2:57 PM",
      joined: "Last Monday at 3:02 PM",
    },
  ];

  const invitations = [
    {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      invitedOn: "11/26/2024",
    },
    {
      name: "John Smith",
      email: "john.smith@example.com",
      invitedOn: "11/20/2024",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-gray-800">Users</h1>
          <p className="text-sm text-gray-500">View and manage users</p>
        </div>
      </div>

      {/* Search and Sort */}
      <div className="sm:flex sm:items-center justify-between mb-4 gap-4">
        <div className="flex gap-4 flex-grow">
          <input
            type="text"
            placeholder="Search"
            className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <select className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none">
            <option>Sort by: Joined</option>
            <option>Sort by: Username</option>
            <option>Sort by: Last signed in</option>
          </select>
        </div>

        {/* <button className=" px-4 py-2 bg-purple-500 text-white text-sm font-medium rounded-md hover:bg-purple-600 sm:w-auto">
          Create user
        </button> */}
        {/* <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-md hover:from-purple-600 hover:to-blue-600">
          Create user
        </button> */}
        <button className="px-4 py-2 bg-gradient-to-b from-purple-500 to-purple-700 text-white text-sm font-medium rounded-md hover:from-purple-500 hover:to-purple-800">
          Create user
        </button>
      </div>

      {/* <UsersTab allUsers={allUsers} invitations={invitations} activeTab="All" /> */}
    </div>
  );
};

export default UsersPage;
