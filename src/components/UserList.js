import { useEffect, useState } from "react";
import { fetchUsers, deleteUser } from "../services/Api";
import { useNavigate } from "react-router-dom";
import './../styles.css';
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetchUsers(page);
        setUsers(response.data.data);
      } catch (err) {
        console.error("Error fetching users", err);
      }
    };
    getUsers();
  }, [page]);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">User List</h2>
      <table className="w-full border mt-4">
        <thead>
          <tr className="bg-gray-100 ">
            <th className="m">Avatar</th>
            <th className="m">Name</th>
            <th className="m">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border">
              <td><img src={user.avatar} alt={user.first_name} className="w-10 h-10 rounded-full " /></td>
              <td >{user.first_name} {user.last_name}</td>
              <td>
                <button onClick={() => navigate(`/edit/${user.id}`)} className="bg-green-500 text-white p-1 mx-1">Edit</button>
                <button onClick={() => handleDelete(user.id)} className="bg-red-500 text-white p-1 mx-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="border border-black" onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
      <button className="border border-black" onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default UserList;
