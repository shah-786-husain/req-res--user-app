import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser } from "../services/Api";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ first_name: "", last_name: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(id, form);
    navigate("/users");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl font-bold">Edit User</h2>
      <input type="text" placeholder="First Name" className="border p-2 mb-2" onChange={(e) => setForm({ ...form, first_name: e.target.value })} />
      <input type="text" placeholder="Last Name" className="border p-2 mb-2" onChange={(e) => setForm({ ...form, last_name: e.target.value })} />
      <button className="bg-blue-500 text-white p-2">Update</button>
    </form>
  );
};

export default EditUser;
