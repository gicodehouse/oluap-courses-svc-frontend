import { Edit, Eye, Trash } from "lucide-react";
import React, { useState } from "react";
import UserForm from "./UserForm";
import UserCard from "./UserCard";
import AppModal from "../../components/AppModal";
import { deleteUser } from "../../services/UserService";
import { useNavigate } from "react-router-dom";

const UserListItem = ({ data, entity }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlerModal = (isOpenned) => setIsModalOpen(isOpenned);
  const navigate = useNavigate();

  const navigateToDetail = (id) => {    
    navigate(`/users/${id}/details`);
  }

  const onDelete = () => {
    const onDestroy = async () => {
      try {
        await deleteUser(data.id);
        setTimeout(() => {
          window.location.href = "/users";
        }, 500);
      } catch (err) {
        setError(err.message);
      }
    };

    const destroy = confirm("Deseja realmente executar essa ação?");
    if (destroy) onDestroy();
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-md flex flex-col sm:flex-row sm:justify-between items-start sm:items-center my-2">
      <UserCard data={data} />

      {/* Ações */}
      <div className="flex space-x-2 mt-4 sm:mt-0 ml-auto">
        <button
          onClick={() => navigateToDetail(data.id)}
          className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-full"
        >
          <Eye className="w-4 h-4" />
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
        >
          <Edit className="w-4 h-4" />
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
        >
          <Trash className="w-4 h-4" />
        </button>
      </div>

      {isModalOpen && (
        <AppModal
          modalTitle={`Editar ${entity}`}
          onEditEntity={data}
          onClose={() => setIsModalOpen(false)}
        >
          <UserForm data={data} />
        </AppModal>
      )}
    </div>
  );
};

export default UserListItem;
