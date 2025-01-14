import EnrollmentListItem from "./EnrollmentListItem";

function EnrollmentTable({ enrollments }) {
  return (
    <main className="flex-1 overflow-y-auto">
      {enrollments.length > 0 ? (
        enrollments.map((item) => (
          <EnrollmentListItem entity="Matrícula" key={item.id} data={item} />
        ))
      ) : (
        <p className="text-center text-gray-500">Nenhuma matrícula encontrada</p>
      )}
    </main>
  );
}

export default EnrollmentTable;
