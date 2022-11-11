import "./App.css";
import useFetch from "./components/useFetch";
import SingleUser from "./components/SingleUser";
import { useState, useEffect } from "react";

function App() {
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  const { data, loading } = useFetch();
  const { arraysPopulated: slicedData } = data;

  useEffect(() => {
    if (loading) return;
    setFollowers(slicedData[page]);
  }, [loading, page]);

  const handlePage = index => {
    setPage(index);
  };

  const handlePrev = e => {
    setPage(prev => {
      if (page < 1) {
        return data.arraysPopulated.length - 1;
      }
      return prev - 1;
    });
  };
  const handleNext = e => {
    setPage(prev => {
      if (page >= data.arraysPopulated.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const usersList = followers.map(entry => {
    const { avatar_url: img, html_url: url, login: name, id } = entry;
    return <SingleUser key={id} props={{ img, url, name, id }} />;
  });
  return (
    <div className="App">
      <h1>{loading ? "loading" : "headline"}</h1>
      <div className="userlist">{usersList}</div>
      <button onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button>
      {!loading && (
        <div className="buttons">
          {data.arraysPopulated.map((array, index) => {
            return (
              <button
                className={`button ${index === page ? "active" : null} `}
                key={index}
                onClick={e => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
