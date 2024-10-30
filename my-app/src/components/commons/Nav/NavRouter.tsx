import { Link } from "react-router-dom";

interface Props {
  to: string;
  title: string;
  class_Name?: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  activePage: string;
}

export default function NavRouter({
  to,
  title,
  class_Name,
  activePage,
  setActivePage,
}: Props) {
  return (
    <div className="group" onClick={() => setActivePage(to)}>
      <Link
        to={to}
        className={
          "cursor-pointer transition-all hover:text-primary-color" +
          " " +
          class_Name
        }
      >
        {title}
      </Link>
      {activePage === to && (
        <div className="min-h-[2px] w-full rounded-full bg-[#efa8a8] transition-all" />
      )}
      <div className="min-h-[2px] w-0 rounded-full bg-[#efa8a8] transition-all group-hover:w-full" />
    </div>
  );
}
