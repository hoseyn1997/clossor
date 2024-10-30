export default function BackToTop() {
  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      id="back-to-top"
      className="z-10 text-gray-400 dark:text-white "
    >
      <i className="bi bi-arrow-up-circle-fill duration-400 fixed bottom-4 right-4 z-10 cursor-pointer text-4xl transition-colors hover:text-primary-color"></i>
    </button>
  );
}
