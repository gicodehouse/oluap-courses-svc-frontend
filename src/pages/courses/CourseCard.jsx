function CourseCard({ data }) {
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
          Nome: <span className="font-normal">{data.title}</span>
        </p>
        <p className="text-gray-700 font-medium">
          Descrição: <span className="font-normal">{data.description}</span>
        </p>
        <p className="text-gray-700 font-medium">
          Quantidade de Horas: <span className="font-normal">{data.hours}h</span>
        </p>
        <p className="text-gray-700 font-medium">
          Data de criação:{" "}
          <span className="font-normal">{formatData(data.created_at)}</span>
        </p>
      </div>
    );
  }
  
  export default CourseCard;
  