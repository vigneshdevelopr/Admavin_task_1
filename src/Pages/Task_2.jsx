import React from 'react';
import NestedList from '../components/Nested_list.jsx';
import Template from '../Template/Template.jsx';

const data = {
  title: 'Oscar Award Winning films 2023',
  children: [
    {
      id: 1,
      title: 'Oppenheimer',
      children: [
        {
          id: 11,
          title: 'Christopher Nolen'
        },
        {
          id: 12,
          title: 'Robert Downey Jr. '
        }
      ]
    },
    {
      id: 2,
      title: 'Poor Things',
      children: [
        {
          id: 11,
          title: 'Emma Stone'
        },
        {
          id: 12,
          title: 'None'
        }
      ]
    }
  ]
};

const Task_2 = () => {
  
  return (
    <div>
      <Template />
      <NestedList data={data} />
    </div>
  );
};

export default Task_2;