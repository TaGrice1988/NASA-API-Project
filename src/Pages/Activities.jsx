import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './activities.css';


const Activities = () => {
  const [programmingData, setProgrammingData] = useState({});
  const [showProgrammingData, setShowProgrammingData] = useState(false);
  const [recreationalData, setRecreationalData] = useState({});
  

  const programmingAPI = 'http://www.boredapi.com/api/activity?key=5881028';

  const fetchProgrammingData = async () => {
    try {
      const response = await fetch(programmingAPI);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      setProgrammingData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRecreationalData = async () => {
    try {
      const response = await fetch('http://www.boredapi.com/api/activity/?key=4704256');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      setRecreationalData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleProgrammingData = () => {
    setShowProgrammingData(!showProgrammingData);
  };

  useEffect(() => {
    fetchProgrammingData();
    fetchRecreationalData();
  }, []);

  return (
    <>
      {/* NAVBAR */}
    <div className="navbar">
        <Link to="/">NASA</Link>
        <Link to="/metArt">Art</Link>
        <Link to="/JacEnterprise">Contact</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/Planet">Planet gallery</Link>
        <Link to= "/WeatherData"> Space Weather </Link>
    </div>
      
      <div className="image-container">
  <img src="https://thumbs.dreamstime.com/b/healthy-lifestyle-background-sport-activity-fintess-design-elements-seamless-pattern-vector-illustration-healthy-lifestyle-178020105.jpg" alt="video-Background" className="video-background" />
      </div>
      
      <div className="Activities-container">
        {/* Add a button to show activity data */}
        {!showProgrammingData ? (
          <button className="apod-button" onClick={toggleProgrammingData}>
            Show activities
          </button>
        ) : (
          <>
            {/* Display the fetched Programming data */}
            <h1>Activities</h1>
            <p className='Programming-title'>{programmingData.activity}</p>
            <p className='Programming-description'>Type: {programmingData.type}</p>
            <a className='Programming-link' href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">{programmingData.link} https://expressjs.com/ </a>

             {/* Display the fetched Recreational data */}
            <p className='Language-title'>{recreationalData.activity}</p>
            <p className='Language-description'>Type: {recreationalData.type}</p>
            <a className='Language-link' href="https://www.youtube.com/watch?v=ARF7nZKqXl0" target="_blank" rel="noopener noreferrer"> {recreationalData.link} https://www.youtube.com/watch?v=ARF7nZKqXl0</a>
            {/* Add a button to hide activity data */}
            <button className="apod-button" onClick={toggleProgrammingData}>
              Hide Activities
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Activities;
