import React, { useEffect, useState } from "react";

const TaskOne = () => {
  const [data, setData] = useState([]);
  const showData = data.slice(0, 10);
  
  console.log(showData);

  const handlerOnLoadMore = () => {
    setData(data);
    console.log(data)
  };

  useEffect(() => {
    const fethData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      console.log(data);
      setData(data);
    };
    fethData();
  }, []);

  return (
    <>
      {/* Task One Container */}
      <div>
        <h1>DataLength{data.length}</h1>

        {showData.map((singleData) => (
          <h1>UserID: {singleData.id}</h1>
        ))}

        <button
          type=""
          className="btn mt-20"
          onClick={() => {
            handlerOnLoadMore();
          }}
        >
          Show More
        </button>
      </div>
    </>
  );
};

export default TaskOne;
