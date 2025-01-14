import { createCourse, updateCourse } from "../../services/CourseService";
import { useState } from "react";

function CourseForm({ data = null }) {
  const [title, setTitle] = useState(data ? data.title: "");
  const [description, setDescription] = useState(data ? data.description : "");
  const [hours, setHours] = useState(data ? data.hours : "");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const doCreation = async () => {
      const newCourse = { title, description, hours: +hours };

      try {
        await createCourse(newCourse);
        setTimeout(() => {
          window.location.href = "/courses";
        }, 500);
      } catch (err) {
        setError(err.message);
      }
    };

    const doEdit = async () => {
      const updatedCourse = validateForm();

      try {
        await updateCourse(data.id, updatedCourse);
        setTimeout(() => {
          window.location.href = "/courses";
        }, 500);
      } catch (err) {
        setError(err.message);
      }
    };

    if (!data) doCreation();
    else doEdit();
  };

  const validateForm = () => {
    const newCourse = {};

    title ? (newCourse.title = title) : null;
    description ? (newCourse.description = description) : null;
    hours ? (newCourse.hours = +hours) : null;

    return newCourse;
  };

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium mb-2">Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Digite o título"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Descrição
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Digite a descrição"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Número de Horas
        </label>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Digite o número de horas"
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
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}

export default CourseForm;
