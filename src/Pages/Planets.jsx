import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./PlanetsIndex.css";

const App = () => {
    const [mercuryData, setMercuryData] = useState({});
    const [showMercuryData, setShowMercuryData] = useState(false);
    const [mercuryImageLoading, setMercuryImageLoading] = useState(true);

    const [venusData, setVenusData] = useState({});
    const [showVenusData, setShowVenusData] = useState(false);
    const [venusImageLoading, setVenusImageLoading] = useState(true);

    const [earthData, setEarthData] = useState({});
    const [showEarthData, setShowEarthData] = useState(false);
    const [earthImageLoading, setEarthImageLoading] = useState(true);

    const [marsData, setMarsData] = useState({});
    const [showMarsData, setShowMarsData] = useState(false);
    const [marsImageLoading, setMarsImageLoading] = useState(true);

    const [jupiterData, setJupiterData] = useState({});
    const [showJupiterData, setShowJupiterData] = useState(false);
    const [jupiterImageLoading, setJupiterImageLoading] = useState(true);

    const [saturnData, setSaturnData] = useState({});
    const [showSaturnData, setShowSaturnData] = useState(false);
    const [saturnImageLoading, setSaturnImageLoading] = useState(true);

    const [uranusData, setUranusData] = useState({});
    const [showUranusData, setShowUranusData] = useState(false);
    const [uranusImageLoading, setUranusImageLoading] = useState(true);

    const [neptuneData, setNeptuneData] = useState({});
    const [showNeptuneData, setShowNeptuneData] = useState(false);
    const [neptuneImageLoading, setNeptuneImageLoading] = useState(true);

    const [plutoData, setPlutoData] = useState({});
    const [showPlutoData, setShowPlutoData] = useState(false);
    const [plutoImageLoading, setPlutoImageLoading] = useState(true);

    const mercuryApi =
        "https://images-api.nasa.gov/search?q=planet%202019&media_type=image&title=Mercury Solar Transit&nasa_id=NHQ201911110001";

    const venusApi =
        "https://images-api.nasa.gov/search?q=planet%201974&media_type=image&title=Venus from Mariner 10&nasa_id=PIA23791";

    const earthApi =
        "https://images-api.nasa.gov/search?q=earth%202012&title=Most Amazing High Definition Image of Earth - Blue Marble 2012&nasa_id=GSFC_20171208_Archive_e001386";

    const marsApi =
        "https://images-api.nasa.gov/search?q=planet%201969&media_type=image&nasa_id=PIA21837";

    const jupiterApi =
        "https://images-api.nasa.gov/search?q=planet%201975&media_type=image&title=Space Science&nasa_id=7994970";

    const saturnApi =
        "https://images-api.nasa.gov/search?q=planet%201980&media_type=image&title=The Day the Earth Smiled&nasa_id=PIA17172";

    const uranusApi =
        "https://images-api.nasa.gov/search?q=planet%201980&media_type=image&title=Alien aurorae spotted on Uranus by Hubble&nasa_id=GSFC_20171208_Archive_e000100";

    const neptuneApi =
        "https://images-api.nasa.gov/search?q=neptune%201989&media_type=image&title=Neptune Full Disk&nasa_id=PIA00046";

    const plutoApi =
        "https://images-api.nasa.gov/search?q=pluto%202015&title=Charon and Pluto: Strikingly Different Worlds&nasa_id=PIA19966";

    const fetchMercuryData = async () => {
        try {
            const response = await fetch(mercuryApi);
            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const data = await response.json();
            const mercurySolarData = data.collection.items[0].data[0];

            setMercuryData(mercurySolarData);

            setMercuryImageLoading(false);
        } catch (error) {
            console.log(error);
            setMercuryImageLoading(false);
        }
    };

    const fetchVenusData = async () => {
        try {
            const response = await fetch(venusApi);
            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const data = await response.json();
            const venusData = data.collection.items[0].data[0];

            setVenusData(venusData);

            setVenusImageLoading(false);
        } catch (error) {
            console.log(error);
            setVenusImageLoading(false);
        }
    };

    const fetchEarthData = async () => {
        try {
            const response = await fetch(earthApi);
            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const data = await response.json();
            const earthData = data.collection.items[0].data[0];

            setEarthData(earthData);

            setEarthImageLoading(false);
        } catch (error) {
            console.log(error);
            setEarthImageLoading(false);
        }
    };

    const fetchMarsData = async () => {
        try {
            const response = await fetch(marsApi);
            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const data = await response.json();
            const marsData = data.collection.items[0].data[0];

            setMarsData(marsData);

            setMarsImageLoading(false);
        } catch (error) {
            console.log(error);
            setMarsImageLoading(false);
        }
    };

    const fetchJupiterData = async () => {
        try {
            const response = await fetch(jupiterApi);
            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const data = await response.json();
            const moonShadowData = data.collection.items[0].data[0];

            setJupiterData(moonShadowData);

            setJupiterImageLoading(false);
        } catch (error) {
            console.log(error);
            setJupiterImageLoading(false);
        }
    };

    const fetchSaturnData = async () => {
        try {
            const response = await fetch(saturnApi);
            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const data = await response.json();
            const saturnData = data.collection.items[0].data[0];

            setSaturnData(saturnData);

            setSaturnImageLoading(false);
        } catch (error) {
            console.log(error);
            setSaturnImageLoading(false);
        }
    };

    const fetchUranusData = async () => {
        try {
            const response = await fetch(uranusApi);
            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const data = await response.json();
            const uranusData = data.collection.items[0].data[0];

            setUranusData(uranusData);

            setUranusImageLoading(false);
        } catch (error) {
            console.log(error);
            setUranusImageLoading(false);
        }
    };

    const fetchNeptuneData = async () => {
        try {
            const response = await fetch(neptuneApi);
            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const data = await response.json();
            const neptuneData = data.collection.items[0].data[0];

            setNeptuneData(neptuneData);

            setNeptuneImageLoading(false);
        } catch (error) {
            console.log(error);
            setNeptuneImageLoading(false);
        }
    };

    const fetchPlutoData = async () => {
        try {
            const response = await fetch(plutoApi);
            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const data = await response.json();
            const plutoData = data.collection.items[0].data[0];

            setPlutoData(plutoData);

            setPlutoImageLoading(false);
        } catch (error) {
            console.log(error);
            setPlutoImageLoading(false);
        }
    };

    const toggleMercuryData = () => {
        setShowMercuryData(!showMercuryData);
    };

    const toggleVenusData = () => {
        setShowVenusData(!showVenusData);
    };

    const toggleEarthData = () => {
        setShowEarthData(!showEarthData);
    };

    const toggleMarsData = () => {
        setShowMarsData(!showMarsData);
    };

    const toggleJupiterData = () => {
        setShowJupiterData(!showJupiterData);
    };

    const toggleSaturnData = () => {
        setShowSaturnData(!showSaturnData);
    };

    const toggleUranusData = () => {
        setShowUranusData(!showUranusData);
    };

    const toggleNeptuneData = () => {
        setShowNeptuneData(!showNeptuneData);
    };

    const togglePlutoData = () => {
        setShowPlutoData(!showPlutoData);
    };

    useEffect(() => {
        fetchMercuryData();
        fetchVenusData();
        fetchEarthData();
        fetchMarsData();
        fetchJupiterData();
        fetchSaturnData();
        fetchUranusData();
        fetchNeptuneData();
        fetchPlutoData();
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
        <div className="container">
            {!showMercuryData ? (
                <button className="apod-button" onClick={toggleMercuryData}>
                    Mercury
                </button>
            ) : (
                <>
                    <h2 className="apod-title">{mercuryData.title}</h2>
                    {mercuryImageLoading ? (
                        <p>Loading Mercury...</p>
                    ) : (
                        <div className="apod-content">
                            <img
                                className="apod-image"
                                src={
                                    "https://images-assets.nasa.gov/image/NHQ201911110003/NHQ201911110003~thumb.jpg"
                                }
                                alt={mercuryData.Title}
                            />
                            <p className="apod-description">{mercuryData.description}</p>
                        </div>
                    )}
                    
                </>
            )}

            <div className="App2">
                {!showVenusData ? (
                    <button className="apod-button" onClick={toggleVenusData}>
                        Venus
                    </button>
                ) : (
                    <>
                        <h2 className="apod-title">{venusData.title}</h2>
                        {venusImageLoading ? (
                            <p>Loading Venus...</p>
                        ) : (
                            <div className="apod-content">
                                <img
                                    className="apod-image"
                                    src={
                                        "https://images-assets.nasa.gov/image/PIA23791/PIA23791~thumb.jpg"
                                    }
                                    alt={venusData.title}
                                />
                                <p className="apod-description">{venusData.description}</p>
                            </div>
                        )}
                        
                    </>
                )}
            </div>

            <div className="App3">
                {!showEarthData ? (
                    <button className="apod-button" onClick={toggleEarthData}>
                        Earth
                    </button>
                ) : (
                    <>
                        <h2 className="apod-title">{earthData.title}</h2>
                        {earthImageLoading ? (
                            <p>Loading Earth...</p>
                        ) : (
                            <div className="apod-content">
                                <img
                                    className="apod-image"
                                    src={
                                        "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001386/GSFC_20171208_Archive_e001386~thumb.jpg"
                                    }
                                    alt={earthData.title}
                                />
                                <p className="apod-description"> A Blue Marble image of the Earth taken from the VIIRS instrument aboard NASA most recently launched Earth-observing satellite - Suomi NPP. This composite image uses a number of swaths of the Earth surface taken on January 4, 2012. The NPP satellite was renamed Suomi NPP on January 24, 2012 to honor the late Verner E. Suomi of the University of Wisconsin.   Suomi NPP is NASA next Earth-observing research satellite. It is the first of a new generation of satellites that will observe many facets of our changing Earth. </p>
                            </div>
                        )}
                        
                    </>
                )}
            </div>

            <div className="App4">
                {!showMarsData ? (
                    <button className="apod-button" onClick={toggleMarsData}>
                        Mars
                    </button>
                ) : (
                    <>
                        <h2 className="apod-title">{marsData.title}</h2>
                        {marsImageLoading ? (
                            <p>Loading Mars...</p>
                        ) : (
                            <div className="apod-content">
                                <img
                                    className="apod-image"
                                    src={
                                        "https://images-assets.nasa.gov/image/PIA21837/PIA21837~thumb.jpg"
                                    }
                                    alt={marsData.title}
                                />
                                <p className="apod-description">{marsData.description}</p>
                            </div>
                        )}
                        
                    </>
                )}
            </div>

            <div className="App5">
                {!showJupiterData ? (
                    <button className="apod-button" onClick={toggleJupiterData}>
                        Jupiter
                    </button>
                ) : (
                    <>
                        <h2 className="apod-title">{jupiterData.title}</h2>
                        {jupiterImageLoading ? (
                            <p>Loading Jupiter...</p>
                        ) : (
                            <div className="apod-content">
                                <img
                                    className="apod-image"
                                    src={
                                        "https://images-assets.nasa.gov/image/7994970/7994970~thumb.jpg"
                                    }
                                    alt={jupiterData.title}
                                />
                                <p className="apod-description">
                                    {jupiterData.description}
                                </p>
                            </div>
                        )}
                        
                    </>
                )}
            </div>

            <div className="App6">
                {!showSaturnData ? (
                    <button className="apod-button" onClick={toggleSaturnData}>
                        Saturn
                    </button>
                ) : (
                    <>
                        <h2 className="apod-title">{saturnData.title}</h2>
                        {saturnImageLoading ? (
                            <p>Loading Saturn...</p>
                        ) : (
                            <div className="apod-content">
                                <img
                                    className="apod-image"
                                    src={
                                        "https://images-assets.nasa.gov/image/PIA17172/PIA17172~thumb.jpg"
                                    }
                                    alt={saturnData.title}
                                />
                                <p className="apod-description">{saturnData.description}</p>
                            </div>
                        )}
                        
                    </>
                )}
            </div>
            <div className="App7">
                {!showUranusData ? (
                    <button className="apod-button" onClick={toggleUranusData}>
                        Uranus
                    </button>
                ) : (
                    <>
                        <h2 className="apod-title">{uranusData.title}</h2>
                        {uranusImageLoading ? (
                            <p>Loading Uranus...</p>
                        ) : (
                            <div className="apod-content">
                                <img
                                    className="apod-image"
                                    src={
                                        "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000100/GSFC_20171208_Archive_e000100~thumb.jpg"
                                    }
                                    alt={uranusData.title}
                                />
                                <p className="apod-description"> This is a composite image of Uranus by Voyager 2 and two different observations made by Hubble — one for the ring and one for the auroras.  Ever since Voyager 2 beamed home spectacular images of the planets in the 1980s, planet-lovers have been hooked on auroras on other planets. Auroras are caused by streams of charged particles like electrons that come from various origins such as solar winds, the planetary ionosphere, and moon volcanism. They become caught in powerful magnetic fields and are channeled into the upper atmosphere, where their interactions with gas particles, such as oxygen or nitrogen, set off spectacular bursts of light.  The auroras on Jupiter and Saturn are well-studied, but not much is known about the auroras of the giant ice planet Uranus. In 2011, the NASA/ESA Hubble Space Telescope became the first Earth-based telescope to snap an image of the auroras on Uranus. In 2012 and 2014 a team led by an astronomer from Paris Observatory took a second look at the auroras using the ultraviolet capabilities of the Space Telescope Imaging Spectrograph (STIS) installed on Hubble.  They tracked the interplanetary shocks caused by two powerful bursts of solar wind traveling from the sun to Uranus, then used Hubble to capture their effect on Uranus’ auroras — and found themselves observing the most intense auroras ever seen on the planet. By watching the auroras over time, they collected the first direct evidence that these powerful shimmering regions rotate with the planet. They also re-discovered Uranus’ long-lost magnetic poles, which were lost shortly after their discovery by Voyager 2 in 1986 due to uncertainties in measurements and the featureless planet surface.</p>
                            </div>
                        )}
                        
                    </>
                )}
            </div>

            <div className="App8">
                {!showNeptuneData ? (
                    <button className="apod-button" onClick={toggleNeptuneData}>
                        Neptune
                    </button>
                ) : (
                    <>
                        <h2 className="apod-title">{neptuneData.title}</h2>
                        {neptuneImageLoading ? (
                            <p>Loading Neptune...</p>
                        ) : (
                            <div className="apod-content">
                                <img
                                    className="apod-image"
                                    src={
                                        "https://images-assets.nasa.gov/image/PIA00046/PIA00046~thumb.jpg"
                                    }
                                    alt={neptuneData.title}
                                />
                                <p className="apod-description">{neptuneData.description}</p>
                            </div>
                        )}
                        
                    </>
                )}
            </div>

            <div className="App9">
                {!showPlutoData ? (
                    <button className="apod-button" onClick={togglePlutoData}>
                        Pluto
                    </button>
                ) : (
                    <>
                        <h2 className="apod-title">{plutoData.title}</h2>
                        {plutoImageLoading ? (
                            <p>Loading Pluto...</p>
                        ) : (
                            <div className="apod-content">
                                <img
                                    className="apod-image"
                                    src={
                                        "https://images-assets.nasa.gov/image/PIA19966/PIA19966~thumb.jpg"
                                    }
                                    alt={plutoData.title}
                                />
                                <p className="apod-description"> A composite of enhanced color images of Pluto (lower right) and Charon (upper left), taken by NASA New Horizons spacecraft as it passed through the Pluto system on July 14, 2015. This image highlights the striking differences between Pluto and Charon. The color and brightness of both Pluto and Charon have been processed identically to allow direct comparison of their surface properties, and to highlight the similarity between Charon polar red terrain and Pluto equatorial red terrain. Pluto and Charon are shown with approximately correct relative sizes, but their true separation is not to scale. The image combines blue, red and infrared images taken by the spacecraft Ralph/Multispectral Visual Imaging Camera (MVIC).</p>
                            </div>
                        )}
                        
                    </>
                )}
            </div>
        </div>
        </>
    );
};
export default App;
