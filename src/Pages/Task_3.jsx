import React, { useState, useEffect, useRef } from "react";
import ItemCard from "../components/ScrollContent";
import '../Style/Task_3.css'
import Template from "../Template/Template";
const List = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isBottom, setIsBottom] = useState(false);
  const targetElement = useRef(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/image/random/20");
      const dogs = await res.json();
      setData((prevData) => [...prevData, ...dogs.message]);
      setPage((prevPage) => prevPage + 1);
    };

    if (page === 1) {
      getData();
    }

    if (page <= 6 && isBottom) {
      getData();
    }

    return () => {
      setIsBottom(false);
    };
  }, [page, isBottom]);

  const scrollFunc = () => {
    const browserHeight = window.innerHeight;
    const scrollPosition = window.pageYOffset;
    const elementHeight = targetElement.current.clientHeight;
    const elementIndent = targetElement.current.offsetTop;
    const childHeight = targetElement.current.firstElementChild.clientHeight;

    if (browserHeight + scrollPosition + childHeight >= elementHeight + elementIndent) {
      setIsBottom(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  return (
    <Template>

    <div className="container" ref={targetElement}>
      {data.map((dog, i) => (
        <ItemCard key={`dog-${i}`} item={dog} />
        ))}
    </div>
        </Template>
  );
};

export default List;
