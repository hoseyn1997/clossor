import { observer } from "mobx-react-lite";
import { useStore } from "../../../stores/store";

export default observer(function Modal() {
  const {
    modalStore: { modal, closeModal },
  } = useStore();

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check to see if the click is on the overlay
    if (e.currentTarget === e.target) {
      closeModal(); // Close the modal
    }
  };

  if (!modal.open) return null;
  return (
    <div
      id="targetElement"
      onClick={handleOverlayClick}
      className="fixed bg-[#000000bd] top-0 z-40 flex justify-center items-center w-full h-screen text-black modal"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative gird bg-white rounded-md px-5 py-2 z-50"
      >
        {modal.content}
        <button onClick={closeModal} className="absolute top-0 right-1">
          <i className="bi bi-x-circle"></i>
        </button>
      </div>
    </div>
  );
});
