function closeModal(setModalLogin: any) {
    setModalLogin(false);
}

export default function Modal({ show, setter, modalName, children }: any) {
  if (!show) return null;

  return (
    <div className="w-md bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-lg p-8 z-10">
        <div className="bg-white p-2 relative">
            <button onClick={() => closeModal(setter)} className="absolute top-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <div>{children}</div>
    </div>
  );
}
