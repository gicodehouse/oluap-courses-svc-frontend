import { useEffect, useState } from "react";
import AppTemplate from "../../components/AppTemplate";
import { fetchCourses } from "../../services/CourseService";
import CourseForm from "./CourseForm";
import CourseTable from "./CourseTable";

function CourseIndex(){
      const [courses, setCourses] = useState([]);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        const getAll = async () => {
          try {
            const data = await fetchCourses();
            setCourses(data);
          } catch (err) {
            setError(err.message);
          }
        };
    
        getAll();
      }, []);

    return (
        <AppTemplate title="Cursos" modalChildren={<CourseForm />}>
            <CourseTable courses={courses} />
        </AppTemplate>
    )
}

export default CourseIndex;