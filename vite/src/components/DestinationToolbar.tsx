interface IProps {
  page: string;
  changePage: (page: string) => void;
}

function DestinationToolbar({ page, changePage }: IProps) {
  const renderItem = (title: string) => {
    return (
      <li
        className={page === title ? "active" : ""}
        aria-selected={page === title}
        tabIndex={0}
        onClick={() => changePage(title)}
        onKeyDown={(e) => (e.key === "Enter" ? changePage(title) : null)}
      >
        {title}
      </li>
    );
  };

  return (
    <ul className="tabs tabs--destination underline-tab text-accent">
      {renderItem("moon")}
      {renderItem("mars")}
      {renderItem("europa")}
      {renderItem("titan")}
    </ul>
  );
}

export default DestinationToolbar;
