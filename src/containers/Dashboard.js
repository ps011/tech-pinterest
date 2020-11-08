import React, { useEffect, useState } from "react";
import Board from "../components/Board";

export default function Dashboard() {
  const [boards, setboards] = useState([]);

  useEffect(() => {
    let isMounted = true; 
    fetch("http://localhost:3000/boards")
      .then((response) => response.json())
      .then((data) => { if(isMounted) setboards(data.slice(0,20)) });
    return () => {
        isMounted = false;
    }
  }, [boards]);

  return boards.map((board) => {
    return <Board 
    key={board.id}
    id={board.id}
    name={board.name}
    count={board.count}
    category={board.category}
    tags={board.tags}></Board>;
  });
}
