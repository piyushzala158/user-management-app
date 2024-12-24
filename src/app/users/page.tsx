import Users from "@/views/users";

const Page = () => {
  return (
    <div className="p-4">
      <p className="text-2xl font-bold text-center py-3">
        User Management Table
      </p>
      <Users />
    </div>
  );
};

export default Page;
