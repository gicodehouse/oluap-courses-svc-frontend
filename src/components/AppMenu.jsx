import React from "react";
import { Link } from "react-router-dom";

const AppMenu = () => {

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    window.location.href = "/login";
  }

  return (
    <div className="flex justify-between bg-blue-600 text-white p-4">
      <h1 className="text-lg font-bold">
        <Link to="/">
          OAB-tv
        </Link>
        </h1>
      <nav className="flex gap-4">
        <Link to="/users" className="hover:underline">
          Usuários
        </Link>
        <Link to="/courses" className="hover:underline">
          Cursos
        </Link>
        <Link to="/enrollments" className="hover:underline">
          Matrículas
        </Link>
        <div onClick={handleLogout} className="hover:underline">
          Sair
        </div>
      </nav>
    </div>
  );
};

export default AppMenu;
