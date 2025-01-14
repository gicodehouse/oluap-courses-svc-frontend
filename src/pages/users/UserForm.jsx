import { useState } from "react";
import { createUser, updateUser } from "../../services/UserService";

function UserForm({ data = null }) {
  const [name, setName] = useState(data ? data.name: "");
  const [email, setEmail] = useState(data ? data.email: "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const doCreation = async () => {
      const newUser = { name, email, password };

      try {
        await createUser(newUser);
        setTimeout(() => {
          window.location.href = "/users";
        }, 500);
      } catch (err) {
        setError(err.message);
      }
    };

    const doEdit = async () => {      
      const updatedUser = validateForm();            

      try {
        await updateUser(data.id, updatedUser);
        setTimeout(() => {
          window.location.href = "/users";
        }, 500);
      } catch (err) {
        setError(err.message);
      }
    };
  
    if(!data)
      doCreation();
    else
      doEdit();
  };

  const validateForm = () => {
    const newUser = {};

    name ? newUser.name = name : null;
    email ? newUser.email = email : null;
    password ? newUser.password = password : null;

    return newUser;
  }

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium mb-2">Nome</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Digite seu nome"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Digite seu email"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Digite sua senha"
          required
        />
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md"
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}

export default UserForm;
