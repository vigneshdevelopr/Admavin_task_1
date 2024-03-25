import { useState } from "react";
import '../Style/Task_2.css'
import Template from '../Template/Template'
const NestedList = ({ data, level = 0 }) => {
    const [expanded, setExpanded] = useState(false);
  
    const handleToggle = () => {
      setExpanded(!expanded);
    };
  
    return (
      <div className="main_task_2">
        <div className={`level-${level}`} onClick={handleToggle}>{data.title}</div>
        {expanded && data.children && (
          <ul>
            {data.children.map((child) => (
              <li key={child.id} className={`level-${level + 1}`}>
                <NestedList data={child} level={level + 1} />
              </li>
            ))}
          </ul>
        )}
      </div>
      // </Template>
    );
  };

  export default NestedList