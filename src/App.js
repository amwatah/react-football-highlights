import axios from "axios";
import { useEffect, useState } from "react";
import MatchCard from "./components/MatchCard";

function App() {
  const [videos, setVideos] = useState([]);
  const [eplMatches, setEplMatches] = useState([]);
  const [laligaMatches, setLaligaMatches] = useState([]);
  const [italyMatches, setItalyMatches] = useState([]);
  const [league, setLeague] = useState(0);
  const year =  new Date().getFullYear()
  const localEpl = [];
  const localSpain = [];
  const localItaly = [];

  const options = {
    method: "GET",
    url: "https://free-football-soccer-videos.p.rapidapi.com/",
    headers: {
      "x-rapidapi-host": "free-football-soccer-videos.p.rapidapi.com",
      "x-rapidapi-key": `${"fd0454f1b9msh9c01b195580c588p1f012bjsn7e6f631a737f"}`,
    },
  };

  function fetchVideos() {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setVideos(response.data);

        videos.forEach((video) => {
          if (video.competition.id === 15) {
            localEpl.push(video);
            setEplMatches(localEpl);
          }
          if (video.competition.id === 13) {
            localItaly.push(video);
            setItalyMatches(localItaly);
          }
          if (video.competition.id === 14) {
            localSpain.push(video);
            setLaligaMatches(localSpain);
          }
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <>
      <div className="page">
        <div className="text-center text-xl font-bold flex flex-col items-center relative">
          <div className="title bar fixed top-0 clear-both h-[5vh] bg-red-500 p-1 rounded-lg  ">
              <p>DIMBA SPORTS</p>
             
          </div>
          <div className="matches md:grid md:grid-cols-4 mt-[10vh] ">
            {league === 0 &&
              videos.map((video, index) => {
                return <MatchCard video={video} key={index} />;
              })}

            {league === 15 &&
              eplMatches.map((video, index) => {
                return <MatchCard video={video} key={index} />;
              })}
            {league === 14 &&
              laligaMatches.map((video, index) => {
                return <MatchCard video={video} key={index} />;
              })}
            {league === 13 &&
              italyMatches.map((video, index) => {
                return <MatchCard video={video} key={index} />;
              })}
          </div>
        </div>
        <div className="footer  fixed bottom-0 h-[10vh] w-full bg-red-500 rounded-lg m-1 flex flex-col  items-center ">
          <div className="leagues flex justify-center items-center  gap-1 ">
          <button
            onClick={() => setLeague(0)}
            className=" p-1 bg-white  text-red-500 rounded-xl focus:bg-fuchsia-500 focus:text-white "
          >
            ALL
          </button>
          <button
            onClick={() => setLeague(15)}
            className=" p-1 bg-white  text-red-500 rounded-xl focus:bg-fuchsia-500 focus:text-white"
          >
            EPL
          </button>
          <button
            onClick={() => setLeague(14)}
            className=" p-1 bg-white  text-red-500 rounded-xl focus:bg-fuchsia-500 focus:text-white"
          >
            LA LIGA
          </button>
          <button
            onClick={() => setLeague(13)}
            className=" p-1 bg-white  text-red-500 rounded-xl focus:bg-fuchsia-500 focus:text-white"
          >
            SIREA
          </button>
          </div>
            
          <div className="footer">
             @ {year} Amwatah Obuya
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
