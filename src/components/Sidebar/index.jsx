import { sidebar } from "../../constants";
const index = ({content, changeContent }) => {
  return (
    <section className="sidebar bg-gray-500">
      <ul className="p-1">
        {sidebar.nav_links.map(({ label, i, text_content }) => {
            const classname = label === content.label ? "bg-gray-400" : "";
          return (
            <li
              key={label}
              className={`px-4 bg-gray-600 ${label === content.label ? "bg-gray-400" : ""} py-2 my-2 hover:bg-gray-400 text-white`}
              onClick={changeContent.bind(null, { label, text_content })}
            >
              {label}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default index;
