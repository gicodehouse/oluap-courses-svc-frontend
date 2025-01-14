import AppMenu from "./AppMenu";

function AppTemplateDetail({ children, title }) {

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col">
      <AppMenu />
      <header className="bg-blue-600 text-white text-center p-2 shadow-md">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </header>

      <main className="flex-1 p-4">
        <div className="max-h-custom overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

export default AppTemplateDetail;
