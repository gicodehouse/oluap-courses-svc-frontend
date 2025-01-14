import { useEffect, useState } from "react";
import AppDashboard from "../../components/AppDashboard";
import AppMenu from "../../components/AppMenu";
import { fetchUsers } from "../../services/UserService";
import { fetchEnrollments } from "../../services/EnrollmentService";
import { fetchCourses } from "../../services/CourseService";
import { useNavigate } from "react-router-dom";

function HomeIndex() {
  const [qtdUsers, setQtdUsers] = useState(0);
  const [qtdCourses, setQtdCourses] = useState(0);
  const [qtdEnrollments, setQtdEnrollments] = useState(0);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getAll = async () => {
      try {
        const users = await fetchUsers();
        setQtdUsers(users.length);
        const enrollments = await fetchEnrollments();
        setQtdEnrollments(enrollments.length);
        const courses = await fetchCourses();
        setQtdCourses(courses.length);
      } catch (err) {
        setError(err.message);
        navigate("/login");
      }
    };

    getAll();
  }, []);
  return (
    <div>
      <AppMenu />
      <AppDashboard 
        qtdUsers={qtdUsers} 
        qtdCourses={qtdCourses}
        qtdEnrollments={qtdEnrollments}
      />
    </div>
  );
}

export default HomeIndex;
