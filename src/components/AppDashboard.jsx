import React from "react";

const AppDashboard = ({qtdUsers, qtdCourses, qtdEnrollments}) => {
  return (
    <div className="p-2 text-center">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total de Usuários</h3>
          <p className="text-2xl font-bold">{qtdUsers}</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Cursos Disponíveis</h3>
          <p className="text-2xl font-bold">{qtdCourses}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Matrículas Ativas</h3>
          <p className="text-2xl font-bold">{qtdEnrollments}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDashboard;
