import { Link } from "react-router-dom";

interface Props {
  to: string;
  title: string;
  toggleSidebar: () => void;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  activePage: string;
  icon: string;
}

export default function SideRouter({
  to,
  title,
  toggleSidebar,
  setActivePage,
  activePage,
  icon,
}: Props) {
  return (
    <Link
      onClick={() => {
        toggleSidebar();
        setActivePage(to);
      }}
      to={to}
      className={`flex gap-3 rounded p-2 ${
        activePage === to
          ? "bg-primary-light dark:text-black"
          : " dark:text-white"
      }`}
    >
      <i className={icon} />
      <span> {title} </span>
    </Link>
  );
}
