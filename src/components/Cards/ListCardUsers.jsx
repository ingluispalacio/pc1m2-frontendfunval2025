import CardUser from "./CardUser";

function ListCardUsers({ users }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 py-4 md:py-6 md:gap-6">
      {users.map((user, index) => (
        <CardUser user={user} index={index} />        
      ))}
    </div>
  );
}
export default ListCardUsers;