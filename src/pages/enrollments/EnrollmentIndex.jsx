import AppTemplate from "../../components/AppTemplate";
import { fetchEnrollments } from "../../services/EnrollmentService";
import EnrollmentTable from "./EnrollmentTable";
import EnrollmentForm from "./EnrollmentForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function EnrollmentIndex() {
  const [enrollments, setEnrollments] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getAll = async () => {
      try {
        const data = await fetchEnrollments();
        setEnrollments(data);
      } catch (err) {
        if(err.toString().includes("401")){
          navigate("/login");
        }
        
      }
    };

    getAll();
  }, []);

  return (
    <AppTemplate  title="Matrículas" modalChildren={<EnrollmentForm />}>
      <EnrollmentTable enrollments={enrollments} />
    </AppTemplate>
  );
}

export default EnrollmentIndex;
