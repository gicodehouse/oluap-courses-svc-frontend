import React, { useState } from "react";
import { Edit, Trash } from "lucide-react";
import EnrollmentCard from "./EnrollmentCard";
import EnrollmentForm from "./EnrollmentForm";
import AppModal from "../../components/AppModal";
import { deleteEnrollment } from "../../services/EnrollmentService";

const EnrollmentListItem = ({ data, entity }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlerModal = (isOpenned) => setIsModalOpen(isOpenned);

  const onDelete = () => {
    const onDestroy = async () => {
      try {
        await deleteEnrollment(data.id);
        setTimeout(() => {
          window.location.href = "/enrollments";
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

      <EnrollmentCard data={data} />

      <div className="flex space-x-2 mt-4 sm:mt-0 ml-auto">
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
          <EnrollmentForm data={data} />
        </AppModal>
      )}
    </div>
  );
};

export default EnrollmentListItem;
