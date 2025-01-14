import { useEffect, useState } from "react";
import { fetchCourseById } from "../../services/CourseService";
import { fetchUserById } from "../../services/UserService";

function EnrollmentCard({ data }) {
    const [userName, setUserName] = useState("");
    const [courseTitle, setCourseTitle] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
      const getAll = async () => {
        try {
          const user = await fetchUserById(data.user_id); 
          setUserName(user.name);   
          const course = await fetchCourseById(data.course_id);  
          setCourseTitle(course.title);
        } catch (err) {
          setError(err.message);
          console.log(err);
          
        }
      };
  
      getAll();
    }, []);


    const formatData = (date) => {
      const now = new Date(date);
      const formattedDate = now.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      return formattedDate;
    };
  
    return (
      <div className="flex-1">
        <p className="text-gray-700 font-medium">
          Nome do Usuário: <span className="font-normal">{userName}</span>
        </p>
        <p className="text-gray-700 font-medium">
          Nome do Curso: <span className="font-normal">{courseTitle}</span>
        </p>
        <p className="text-gray-700 font-medium">
          Data de criação:{" "}
          <span className="font-normal">{formatData(data.enrolled_at)}</span>
        </p>
      </div>
    );
  }
  
  export default EnrollmentCard;
  