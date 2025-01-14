import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../../services/UserService";
import { fetchEnrolledCoursesByUserId } from "../../services/EnrollmentService";
import UserExploredItems from "./UserExploredItems";
import AppTemplateDetail from "../../components/AppTemplateDetail";

function UserDetail() {
  const { id } = useParams();

  const [user, setUser] = useState({}); // Estado inicial como null
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(""); // Estado para tratar erros
  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    const getAll = async () => {
      try {
        setLoading(true); // Ativa o carregamento
        const userData = await fetchUserById(id);
        setUser(userData);

        const enrolledCourses = await fetchEnrolledCoursesByUserId(id);
        setCourses(enrolledCourses);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        setError("Não foi possível carregar os dados do usuário.");
      } finally {
        setLoading(false); // Desativa o carregamento
      }
    };

    getAll();
  }, [id]);

  if (loading) {
    return <p>Carregando informações...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <AppTemplateDetail title={`Detalhes de ${user?.name || "Usuário"}`}>
      <UserExploredItems user={user} courses={courses} />
    </AppTemplateDetail>
  );
}

export default UserDetail;
