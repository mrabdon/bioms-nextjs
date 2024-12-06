import UsersTab from "@/components/UsersTab";

const InvitationsPage = () => {
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
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Invitations</h1>
          <p className="text-sm text-gray-500">Manage user invitations</p>
        </div>
      </div>
      {/* <UsersTab
        allUsers={allUsers}
        invitations={invitations}
        activeTab="Invitations"
      /> */}
    </div>
  );
};

export default InvitationsPage;
