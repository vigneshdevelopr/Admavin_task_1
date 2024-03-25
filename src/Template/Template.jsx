import React from "react";
import { useNavigate } from "react-router-dom";
const Template = ({ children }) => {
  const navigate = useNavigate()
  return (
    <div>
      <main>
        <div className="navbar">
          <section className="routes">
            <main className="a" onClick={()=>navigate('/')}>Task 1</main>
            <main className="a" onClick={()=>navigate('/task_2')}>Task 2</main>
            <main className="a" onClick={()=>navigate('/task_3')}>Task 3</main>
            <main className="a" onClick={()=>navigate('/task_4')}>Task 4</main>
          </section>
        </div>
      </main>
      {children}
    </div>
  );
};

export default Template;
