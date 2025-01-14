import { Plus } from "lucide-react";
import AppModal from "./AppModal";
import { useState } from "react";
import AppMenu from "./AppMenu";

function AppTemplate({ children, modalChildren, title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlerModal = (isOpenned) => setIsModalOpen(isOpenned);

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col">
      <AppMenu />
      <header className="bg-blue-600 text-white text-center p-2 shadow-md">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </header>

      <main className="flex-1 p-4">
        <button
          onClick={() => handlerModal(true)}
          className="mb-2 bg-blue-500 w-100 hover:bg-blue-600 text-white w-full h-12 shadow-lg flex items-center justify-center text-lg"
        >
          <Plus className="w-6 h-6 mr-2" />
          Adicionar {title}
        </button>
        <div className="max-h-custom overflow-y-auto">
          {children}
        </div>
      </main>

      {isModalOpen && (
        <AppModal modalTitle={`Adicionar ${title}`} onClose={() => setIsModalOpen(false)}>
          {modalChildren}
        </AppModal>
      )}
    </div>
  );
}

export default AppTemplate;
