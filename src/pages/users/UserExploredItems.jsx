function UserExploredItems({ user, courses }) {
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
    <div>
      <div className="bg-white shadow-md p-4 rounded-md flex flex-col sm:flex-row sm:justify-between items-start sm:items-center my-2">
        <div className="p-2 overflow-y-auto">
          <div className="flex-1">
            <p className="text-gray-700 font-medium">
              Nome:{" "}
              <span className="font-normal">
                {user ? user.name : "Não Informado"}
              </span>
            </p>
            <p className="text-gray-700 font-medium">
              Email:{" "}
              <span className="font-normal">
                {user ? user.email : "Não Informado"}
              </span>
            </p>
            <p className="text-gray-700 font-medium">
              Data de criação:{" "}
              <span className="font-normal">
                {formatData(user ? user.created_at : "")}
              </span>
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-1xl font-semibold text-center">Cursos Matriculados</h2>
      <div className="flex flex-wrap w-full">
        {courses.map((c) => (
          <div key={c.id} className="w-1/2 p-2">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
              <h2 className="text-lg font-bold text-blue-800">{c.title}</h2>
              <p className="text-sm text-blue-600 flex-grow">{c.description}</p>
              <p className="text-sm text-blue-600">{c.hours}h</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserExploredItems;
