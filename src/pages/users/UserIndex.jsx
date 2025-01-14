import AppTemplate from "../../components/AppTemplate";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import { fetchUsers } from "../../services/UserService";
import { useEffect, useState } from "react";

function UserIndex() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAll = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    };

    getAll();
  }, []);

  return (
    <AppTemplate title="Usuários" modalChildren={<UserForm />}>
      <UserTable users={users} />
    </AppTemplate>
  );
}

export default UserIndex;
