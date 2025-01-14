import CourseListItem from "./CourseListItem";

function CourseTable({ courses }) {
  return (
    <main className="flex-1 overflow-y-auto">
      {courses.length > 0 ? (
        courses.map((item) => (
          <CourseListItem entity="Curso" key={item.id} data={item} />
        ))
      ) : (
        <p className="text-center text-gray-500">Nenhum curso encontrado</p>
      )}
    </main>
  );
}

export default CourseTable;
