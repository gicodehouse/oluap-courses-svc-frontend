function AppModal({ children, onClose, modalTitle }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-80 p-6">
        <h2 className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </h2>
        <h2 className="text-xl font-semibold mb-4">{modalTitle}</h2>
        {children}
      </div>
    </div>
  );
}

export default AppModal;
