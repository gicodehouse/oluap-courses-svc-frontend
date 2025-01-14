import UserListItem from "./UserListItem";

function UserTable({ users }) {
  return (
    <main className="flex-1 overflow-y-auto">
      {users.length > 0 ? (
        users.map((item) => (
          <UserListItem entity="Usuário" key={item.id} data={item} />
        ))
      ) : (
        <p className="text-center text-gray-500">Nenhum usuário encontrado</p>
      )}
    </main>
  );
}

export default UserTable;
