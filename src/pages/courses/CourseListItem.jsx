import React, { useState } from "react";
import { Edit, Trash } from "lucide-react";
import AppModal from "../../components/AppModal";
import CourseForm from "./CourseForm";
import CourseCard from "./CourseCard";
import { deleteCourse } from "../../services/CourseService";

const CourseListItem = ({ data, entity }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlerModal = (isOpenned) => setIsModalOpen(isOpenned);

    const onDelete = () => {
      const onDestroy = async () => {
        try {
          await deleteCourse(data.id);
          setTimeout(() => {
            window.location.href = "/courses";
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

      <CourseCard data={data} />

      {/* Ações */}
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
          <CourseForm data={data} />
        </AppModal>
      )}
    </div>
  );
};

export default CourseListItem;
