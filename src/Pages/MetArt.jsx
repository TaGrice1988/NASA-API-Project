import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './metArt.css';

const MetArt = () => {
const [metArtData, setMetArtData] = useState({});
const [asianArtData, setAsianArtData] = useState({});
const [europeanArtData, setEuropeanArtData] = useState({});
const [showArt, setShowArt] = useState(false); // State variable for showing/hiding art container


const metArtAPI = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/437133?title=Garden at Sainte-Adresse&objectName=Painting&artistAlphaSort=Monet, Claude&artistNationality=French&artistBeginDate=1840&artistEndDate=1926&artistDisplayName=Claude Monet&artistDisplayBio=French, Paris 1840–1926 Giverny';
const asianArtAPI = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/45734';
const europeanArtAPI = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/437329';

const fetchMetArtData = async () => {
    try {
    const response = await fetch(metArtAPI);
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }
    const data = await response.json();
    setMetArtData(data);
    } catch (error) {
    console.error(error);
    }
};

const fetchAsianArtData = async () => {
    try {
    const response = await fetch(asianArtAPI);
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }
    const data = await response.json();
    setAsianArtData(data);
    } catch (error) {
    console.error(error);
    }
};

const fetchEuropeanArtData = async () => {
    try {
    const response = await fetch(europeanArtAPI);
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }
    const data = await response.json();
    setEuropeanArtData(data);
    } catch (error) {
    console.error(error);
    }
};

    useEffect(() => {
    fetchMetArtData();
    fetchAsianArtData();
    fetchEuropeanArtData();
    }, []);

    const toggleArtContainer = () => {
        setShowArt(!showArt); // Toggle the showArt state when the button is clicked
    };

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

    <div className="art-image-container">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CtirCR-TOiVU_rrw-H4u29g6ypgcZyD0oA&usqp=CAU" className='Art-in-kids'/></div>

    {/* EARTH VIDEO BACKGROUND */}
    <div className="video-container">
        <video autoPlay loop muted className="video-background">
        <source src={window.location.origin + '/artVideo.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        <div className="video-mask"></div>
    </div>


    {/* show art button */}
    <button className="show-art-button" onClick={toggleArtContainer}>
        Show Art
    </button>

{/* CONTENT CONTAINER */}
    {showArt && (
    <div className="Art-container">
        <h1>Art</h1>

        {/* Abduction of women data */}
        <p className="Ancient-title">{europeanArtData.title}</p>
        <img
            className="apod-image"
            src={"https://images.metmuseum.org/CRDImages/ep/original/DP-14286-013.jpg"}
                
                />
        <p className="Ancient-title"> {europeanArtData.repository}</p>
        <p className="Ancient-font">{europeanArtData.artistDisplayName}</p>
        <p className="Ancient-font"> {europeanArtData.artistBeginDate}  to  {metArtData.artistEndDate}</p>
        <p className="Ancient-font"> {europeanArtData.artistNationality}</p>


        {/* Quail and Millet data */}
        <p className="Asian-title">{asianArtData.title}</p>
        <img
            className="scroll-image"
            src={"https://images.metmuseum.org/CRDImages/as/original/DP251139.jpg"}
                
                />
        <p className="Asian-title"> {asianArtData.repository}</p>
        <p className="Qual-font">{asianArtData.artistDisplayName}</p>
        <p className="Qual-font"> {asianArtData.artistBeginDate} - {metArtData.artistEndDate}</p>
        <p className="Qual-font"> {asianArtData.artistNationality}</p>
        <p className="Qual-font"> {asianArtData.period}</p>


        {/*  Garden at Sainte-Adresse data */}
        <p className="French-title">{metArtData.title}</p>
        <img
            className="apod-image"
            src={"https://m.media-amazon.com/images/I/81UW3qTy-HL.jpg"}
                
                />
        <p className="French-title"> {metArtData.repository}</p>
        <p className="Garden-font">{metArtData.artistDisplayName}</p>
        <p className="Garden-font"> {metArtData.artistBeginDate} - {metArtData.artistEndDate}</p>
        <p className="Garden-font"> {metArtData.artistNationality}</p>
        {/* hide button */ }
        {showArt && (
        <button className="show-art-button" onClick={toggleArtContainer}>
        Hide Art
        </button>
        )}
    </div>
    )}
    </>
    
);
};

export default MetArt;
