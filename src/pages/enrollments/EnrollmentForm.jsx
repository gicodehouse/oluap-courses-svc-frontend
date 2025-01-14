import { useEffect, useState } from "react";
import {
  createEnrollment,
  updateEnrollment,
} from "../../services/EnrollmentService";
import { fetchCourses } from "../../services/CourseService";
import { fetchUsers } from "../../services/UserService";

function EnrollmentForm({ data = null }) {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [userId, setUserId] = useState(data ? data.user_id : "");
  const [courseId, setCourseId] = useState(data ? data.course_id : "");
  const [error, setError] = useState("");  

  useEffect(() => {
    const getAll = async () => {
      try {
        const users = await fetchUsers();
        setUsers(users);
        const courses = await fetchCourses();
        setCourses(courses);

        setUserId(users[0].id);
        setCourseId(courses[0].id);

      } catch (err) {
        setError(err.message);        
      }
    };

    getAll();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const doCreation = async () => {
      const newEnrollment = { user_id: +userId, course_id: +courseId };      

      try {
        const created = await createEnrollment(newEnrollment);
        
        setTimeout(() => {
          window.location.href = "/enrollments";
        }, 500);
      } catch (err) {
        setError(err.message);
      }
    };

    const doEdit = async () => {
      const updatedEnrollment = validateForm();

      try {
        await updateEnrollment(data.id, updatedEnrollment);
        setTimeout(() => {
          window.location.href = "/enrollments";
        }, 500);
      } catch (err) {
        setError(err.message);
      }
    };

    if (!data) doCreation();
    else doEdit();
  };

  const validateForm = () => {
    const newEnrollment = {};

    userId ? (newEnrollment.user_id = +userId) : null;
    courseId ? (newEnrollment.course_id = +courseId) : null;

    return newEnrollment;
  };

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Nome do Usuário
        </label>
        <select
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          {users && ( users.map((u) => (<option key={u.id} value={u.id}>{ u.name }</option>)) )}
        </select>
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Nome do Curso
        </label>
        <select
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          {courses && ( courses.map((c) => (<option key={c.id} value={c.id}>{ c.title }</option>)) )}
          </select>
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

export default EnrollmentForm;
