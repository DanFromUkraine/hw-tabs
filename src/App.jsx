import { default as Sidebar } from "./components/Sidebar";
import { default as MainContent } from "./components/MainContent";
import { useState } from "react";

const App = () => {
  const [content, changeContent] = useState({
    label: "",
    text_content: ""
  });
  return (
    <main className="flex p-4 gap-5">
      <Sidebar content={content} changeContent={changeContent}/>
      <MainContent content={content}/>
    </main>
  );
};

export default App;
