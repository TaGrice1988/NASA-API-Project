import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import './navbar.css';
import './marsData.css';
import './earthBackground.css';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  const [nasaData, setNasaData] = useState({});
  const [showNasaData, setShowNasaData] = useState(false);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [apolloData, setApolloData] = useState({});
  const [showApolloData, setShowApolloData] = useState(false);
  const [marsData, setMarsData] = useState({});
  const [showMarsData, setShowMarsData] = useState(false);
  const [currentMarsImageIndex, setCurrentMarsImageIndex] = useState(0);
  const [apolloImageLoading, setApolloImageLoading] = useState(true);
  const [spaceStationData, setSpaceStationData] = useState({});
  const [showSpaceStationData, setShowSpaceStationData] = useState(false);
  const [apolloCheerData, setApolloCheerData] = useState({});
  const [showApolloCheerData, setShowApolloCheerData] = useState(false);
  const [neilFootData, setNeilFootData] = useState({});
  const [showNeilFootData, setShowNeilFootData] = useState(false);
  const [safeReturnData, setSafeReturnData] = useState({});
  const [showSafeReturnData, setShowSafeReturnData] = useState(false);


  const nasaAPI = 'https://api.nasa.gov/planetary/apod?api_key=aMdXa6Fh1a9OUm1NuXfun7MjVskZC2BwG3srX1Ye';
  const apolloAPI = 'https://images-api.nasa.gov/search?q=apollo%201969&description=moon%20landing&media_type=image';
  const marsAPI = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=aMdXa6Fh1a9OUm1NuXfun7MjVskZC2BwG3srX1Ye';
  const spaceStationAPI = 'http://images-api.nasa.gov/search?q=apollo%2011&title=Apollo%2011%20Overview&date_created=2013-05-15T00:00:00Z&media_type=video';
  const apolloCheerAPI = 'https://images-api.nasa.gov/search?media_type=image&keywords=Apollo 11';
  const neilFootAPI = 'https://images-api.nasa.gov/search?media_type=image&keywords=Apollo 11&nasa_id=6900947';
  const safeReturnAPI = 'https://images-api.nasa.gov/search?media_type=image&keywords=Apollo 11, Lunar Mission, Launch&nasa_id=6975606';
  
  const fetchNasaData = async (date) => {
    try {
      const formattedDate = date.toISOString().split("T")[0];
      const response = await fetch(`${nasaAPI}&date=${formattedDate}`);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      setNasaData(data);
    } catch (error) {
      console.error("Error fetching APOD data:", error);
    }
  };
  
  const fetchApolloData = async () => {
    try {
      setApolloImageLoading(true);
      const response = await fetch(apolloAPI);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const apolloLaunchData = data.collection.items[0].data[0];
      setApolloData(apolloLaunchData);
      setApolloImageLoading(false);
    } catch (error) {
      console.log(error);
      setApolloImageLoading(false);
    }
  };
  
  const fetchMarsData = async () => {
    try {
      const response = await fetch(marsAPI);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      setMarsData(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  const fetchSpaceStationData = async () => {
    try {
      const response = await fetch(spaceStationAPI);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const spaceStationItem = data.collection.items[0].data[0];
      setSpaceStationData(spaceStationItem);
    } catch (error) {
      console.log(error);
    }
  };
  
  const fetchApolloCheerData = async () => {
    try {
      const response = await fetch(apolloCheerAPI);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const apolloCheerItem = data.collection.items[0].data[0];
      setApolloCheerData(apolloCheerItem);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNeilFootData = async () => {
    try {
      const response = await fetch(neilFootAPI);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const neilfootItem = data.collection.items[0].data[0];
      setNeilFootData(neilfootItem);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSafeReturnData = async () => {
    try {
      const response = await fetch(safeReturnAPI);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const safeReturnItem = data.collection.items[0].data[0];
      setSafeReturnData(safeReturnItem);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleNasaData = () => {
    setShowNasaData(!showNasaData);
  };
  
  const toggleApolloData = () => {
    setShowApolloData(!showApolloData);
  };
  
  const toggleMarsData = () => {
    setShowMarsData(!showMarsData);
  };
  
  const toggleSpaceStationData = () => {
    setShowSpaceStationData(!showSpaceStationData);
  };

  const toggleApolloCheerData = () => {
    setShowApolloCheerData(!showApolloCheerData);
  };

  const toggleNeilFootData = () => {
    setShowNeilFootData(!showNeilFootData);
  }
  
  const toggleSafeReturnData = () => {
    setShowSafeReturnData(!showSafeReturnData);
  };

  const handleCurrentDateClick = () => {
    fetchNasaData(new Date());
  };

  const handlePreviousDateClick = () => {
    const previousDate = new Date();
    previousDate.setDate(previousDate.getDate() - 1);
    fetchNasaData(previousDate);
  };

  const handleCalendarDateChange = (date) => {
    setSelectedDate(date);
    setDatePickerVisible(false);
    fetchNasaData(date);
  };

  useEffect(() => {
    fetchNasaData(selectedDate);
    fetchApolloData();
    fetchMarsData();
    fetchSpaceStationData();
    fetchApolloCheerData();
    fetchNeilFootData();
    fetchSafeReturnData();
  }, [selectedDate]);
  
  return (
    <>
    {/* NAVBAR */}
      <div className="navbar">
        <Link to="/">NASA</Link>
        <Link to="/metArt">Art</Link>
        <Link href="/JacEnterprise">
          Contact
        </Link>
        <Link to="/activities">Activities</Link>
        <Link to="/Planet">Planet gallery</Link>
        <Link to="/WeatherData">Space Weather</Link>
      </div>

      {/* EARTH VIDEO BACKGROUND */}
      <div className="video-container">
        <video autoPlay loop muted className="video-background">
          <source src={window.location.origin + '/earthVideo.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-mask"></div>
      </div>

      {/* NASA IMG LOGO PNG */}
      <div className="nasa-image-container">
        <img className="nasa-image" src={window.location.origin + '/NASA_logo.png'} alt="NASA" />
      </div>

      {/* APOD SECTION */}
      <div className="container">
        <h1>NASA Astronomy Picture of the Day</h1>
        {!showNasaData ? (
          <button className="apod-button" onClick={toggleNasaData}>
            Show APOD
          </button>
        ) : (
          <>
          <button className="apod-button" onClick={handleCurrentDateClick}>
        Current Date APOD
      </button>
      <button className="apod-button" onClick={handlePreviousDateClick}>
        Previous Date APOD
      </button>
      <button
        className="apod-button"
        onClick={() => setDatePickerVisible(!isDatePickerVisible)}
      >
        Select Date from Calendar
      </button>
      {isDatePickerVisible && (
        <ReactDatePicker
          selected={selectedDate}
          onChange={handleCalendarDateChange}
        />
      )}
            <h2 className="apod-title">{nasaData.title}</h2>
            <div className="apod-content">
              <img className="apod-image" src={nasaData.url} alt={nasaData.title} />
              <h2 className="apod-img-date">{nasaData.date}</h2>
              <p className="apod-description">{nasaData.explanation}</p>
            </div>
            <button className="apod-button" onClick={toggleNasaData}>
              Hide APOD
            </button>
          </>
        )}

        {/* Safe Return Section */}
    {!showSafeReturnData ? (
      <button className="apod-button" onClick={toggleSafeReturnData}>
        Show Safe Return Data
      </button>
    ) : (
      <div className="safe-return-section">
        {apolloImageLoading ? (
          <p>Loading Safe Return image...</p>
        ) : (
          <div className="">
            <img
              className="apod-image"
              src={"http://images-assets.nasa.gov/image/6975606/6975606~medium.jpg"}
              alt={safeReturnData.title}
            />
            <h2 className="apod-title">{safeReturnData.title}</h2>
            <p className="apod-description">{safeReturnData.description}</p>
          </div>
        )}
        <button className="apod-button" onClick={toggleSafeReturnData}>
          Hide Safe Return Data
        </button>
      </div>
    )}

        {/* Apollo 11 astronaut Edwin image */}
        {!showApolloData ? (
          <button className="apod-button" onClick={toggleApolloData}>
            Lunar mission 1969 - Edwin E. Aldrin Jr
          </button>
        ) : (
          <>
            <h2 className="apod-title">{apolloData.title}</h2>
            {apolloImageLoading ? (
              <p>Loading Apollo image...</p>
            ) : (
              <div className="apod-content">
                <img
                  className="apod-image"
                  src={"https://images-assets.nasa.gov/image/S69-39532/S69-39532~thumb.jpg"}
                  alt={apolloData.title}
                />
                <p className="apollo-description">{apolloData.description}</p>
              </div>
            )}
            <button className="apod-button" onClick={toggleApolloData}>
              Hide Lunar mission
            </button>
          </>
        )}

        {/* Apollo 11 mission image */}
        {!showApolloCheerData ? (
          <button className="apod-button" onClick={toggleApolloCheerData}>
            Show Apollo Cheer Data
          </button>
        ) : (
          <div className="apollo-cheer-section">
            {apolloImageLoading ? (
              <p>Loading Apollo image...</p>
            ) : (
              <div className="apod-content">
                <img
                  className="apod-image"
                  src={"http://images-assets.nasa.gov/image/as11-44-6548/as11-44-6548~medium.jpg"} 
                  alt={apolloCheerData.title}
                />
                <h2 className="apod-title">{apolloCheerData.title}</h2>
                <p className="apod-description">{apolloCheerData.description}</p>
              </div>
            )}
            <button className="apod-button" onClick={toggleApolloCheerData}>
              Hide Apollo Cheer Data
            </button>
          </div>
        )}

        {/* Neil Armstrong's Footprint */}
        {!showNeilFootData ? (
          <button className="apod-button" onClick={toggleNeilFootData}>
            Show Neil Armstrongs Footprint
          </button>
        ) : (
          <div className="neil-foot-section">
            {apolloImageLoading ? (
              <p>Loading Neil Armstrongs Footprint image...</p>
            ) : (
              <div className="">
                <img
                  className="apod-image"
                  src={"http://images-assets.nasa.gov/image/6900972/6900972~medium.jpg"} 
                  alt={neilFootData.title}
                />
                <h2 className="apod-title">{neilFootData.title}</h2>
                <p className="apod-description">{neilFootData.description}</p>
              </div>
            )}
            <button className="apod-button" onClick={toggleNeilFootData}>
              Hide Neil Armstrongs Footprint
            </button>
          </div>
        )}

{/* 3D Model */}
<div className="sketchfab-embed-wrapper">
  <iframe
    title="Apollo 11 Moon Landing (Recreation)"
    frameBorder="0"
    allowFullScreen
    mozallowfullscreen="true"
    webkitallowfullscreen="true"
    allow="autoplay; fullscreen"
    src="https://sketchfab.com/models/61ac05690933458d9bec728992027605/embed?ui_watermark_link=0&ui_watermark=0"
    data-xr-spatial-tracking="true" // Use data-* for custom attributes
    data-execution-while-out-of-viewport="true" // Use data-* for custom attributes
    data-execution-while-not-rendered="true" // Use data-* for custom attributes
    data-web-share="true" // Use data-* for custom attributes
  ></iframe>
  <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
    <p style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
      Apollo 11 Moon Landing (Recreation)
    </p>{' '}
    
  </p>
</div>



{/* Apollo 11 mission highlight video */}
<h1>Apollo Launch</h1>
        {!showSpaceStationData ? (
          <button className="apod-button" onClick={toggleSpaceStationData}>
            Watch Apollo Launch Highlights!
          </button>
        ) : (
          <>
            <h2 className="apod-title">{spaceStationData.title}</h2>
            <p className="apod-description">{spaceStationData.description}</p>
            {spaceStationData.media_type === 'video' &&  (
              <video className="apollo-launch" controls>
                <source src={"http://images-assets.nasa.gov/video/Apollo 11 Overview/Apollo 11 Overview~preview.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <button className="apod-button" onClick={toggleSpaceStationData}>
              Hide Apollo Launch Highlights
            </button>
          </>
        )}

        {/* MARS ROVER PHOTOS */}
        <div className="mars-container">
          <h1>Explore Mars!</h1>
          {showMarsData ? (
            <div>
              <div>
                <h2 className="mars-camera-title">
                  {marsData.photos[currentMarsImageIndex].camera.full_name}
                </h2>
                <img
                  className="image-mars"
                  src={marsData.photos[currentMarsImageIndex].img_src}
                  alt={`Mars Exploration ${currentMarsImageIndex}`}
                />
                <p className="description-mars">
                  Earth Date: {marsData.photos[currentMarsImageIndex].earth_date}
                </p>
              </div>
              <div className="image-navigation">
                <button
                  className="arrow-button"
                  onClick={() => setCurrentMarsImageIndex(currentMarsImageIndex - 1)}
                  disabled={currentMarsImageIndex === 0}
                >
                  &lt; Previous
                </button>
                <button
                  className="arrow-button"
                  onClick={() =>
                    setCurrentMarsImageIndex(currentMarsImageIndex + 1)
                  }
                  disabled={
                    currentMarsImageIndex === marsData.photos.length - 1
                  }
                >
                  Next &gt;
                </button>
              </div>
              <button className="hide-mars-button" onClick={toggleMarsData}>
                Hide Mars Exploration
              </button>
            </div>
          ) : (
            <button className="hide-mars-button" onClick={toggleMarsData}>
              Show Me Mars
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
