import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styles from "./styles/spaceWeatherStyles.module.css";
import './WeatherData.css'

const SpaceWeatherData = () => {
  const [cmeData, setCMEData] = useState([]);
  const [error, setError] = useState(null);
  const [solarFlareData, setSolarFlareData] = useState([]);
  const [gstData, setGSTData] = useState([]);
  const [hssData, setHSSData] = useState([]);
  const [ipsData, setIPSData] = useState([]);
  const [rbeData, setRBEData] = useState([]);
  const [sepData, setSEPData] = useState([]);

  useEffect(() => {
    fetchCMEData();
  }, []);

  const fetchCMEData = async () => {
    try {
      const response = await fetch(
        "https://api.nasa.gov/DONKI/CME?startDate=2017-01-03&endDate=2017-01-03&api_key=pJXi4nALW1feLqkYA0Y90LFObNVGnyC3MfHD0BZP"
      );

      if (!response.ok) {
        throw new Error("Error fetching data");
      }

      const data = await response.json();
      console.log("Fetched data:", data);

      setCMEData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchSolarFlareData();
  }, []);

  const fetchSolarFlareData = async () => {
    try {
      const response = await fetch(
        "https://api.nasa.gov/DONKI/FLR?startDate=2016-01-01&endDate=2016-01-30&api_key=pJXi4nALW1feLqkYA0Y90LFObNVGnyC3MfHD0BZP"
      );

      if (!response.ok) {
        throw new Error("Error fetching data");
      }

      const data = await response.json();
      console.log("Fetched data:", data);

      setSolarFlareData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchGSTData();
  }, []);

  const fetchGSTData = async () => {
    try {
      const response = await fetch(
        "https://api.nasa.gov/DONKI/GST?startDate=2016-01-01&endDate=2016-01-30&api_key=pJXi4nALW1feLqkYA0Y90LFObNVGnyC3MfHD0BZP"
      );

      if (!response.ok) {
        throw new Error("Error fetching data");
      }

      const data = await response.json();
      console.log("Fetched data:", data);

      setGSTData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchHSSData();
  }, []);

  const fetchHSSData = async () => {
    try {
      const response = await fetch(
        "https://api.nasa.gov/DONKI/HSS?startDate=2016-01-01&endDate=2016-01-31&api_key=pJXi4nALW1feLqkYA0Y90LFObNVGnyC3MfHD0BZP"
      );

      if (!response.ok) {
        throw new Error("Error fetching data");
      }

      const data = await response.json();
      console.log("Fetched data:", data);

      setHSSData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchIPSData();
  }, []);

  const fetchIPSData = async () => {
    try {
      const response = await fetch(
        "https://api.nasa.gov/DONKI/IPS?startDate=2016-01-01&endDate=2016-01-30&api_key=pJXi4nALW1feLqkYA0Y90LFObNVGnyC3MfHD0BZP"
      );

      if (!response.ok) {
        throw new Error("Error fetching data");
      }

      const data = await response.json();
      console.log("Fetched data:", data);

      setIPSData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchRBEData();
  }, []);

  const fetchRBEData = async () => {
    try {
      const response = await fetch(
        "https://api.nasa.gov/DONKI/RBE?startDate=2016-01-01&endDate=2016-01-31&api_key=pJXi4nALW1feLqkYA0Y90LFObNVGnyC3MfHD0BZP"
      );

      if (!response.ok) {
        throw new Error("Error fetching data");
      }

      const data = await response.json();
      console.log("Fetched data:", data);

      setRBEData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchSEPData();
  }, []);

  const fetchSEPData = async () => {
    try {
      const response = await fetch(
        "https://api.nasa.gov/DONKI/SEP?startDate=2016-01-01&endDate=2016-01-30&api_key=pJXi4nALW1feLqkYA0Y90LFObNVGnyC3MfHD0BZP"
      );

      if (!response.ok) {
        throw new Error("Error fetching data");
      }

      const data = await response.json();
      console.log("Fetched data:", data);

      setSEPData(data);
    } catch (error) {
      setError(error.message);
    }
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

      <h1 className={styles.title}>
        Space Weather Database Of Notifications, Knowledge, Information
      </h1>
      <div className={styles.mainContainer}>
        <div>
          <div className={styles.apiContainer}>
            <h3>Coronal Mass Ejection</h3>
            {cmeData.length > 0 ? (
              <ul>
                {cmeData.map((item) => (
                  <li key={item.activityID} className={styles.item}>
                    <h2>CME Analysis</h2>
                    <p>Activity ID: {item.activityID}</p>
                    <p>Catalog: {item.catalog}</p>
                    <p>Start Time: {item.startTime}</p>
                    <p>Source Location: {item.sourceLocation || "N/A"}</p>
                    <p>Active Region Number: {item.activeRegionNum || "N/A"}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Details
                    </a>
                    <h3>Notes:</h3>
                    <p>{item.note || "N/A"}</p>
                    <h3>Instruments:</h3>
                    <ul>
                      {item.instruments && item.instruments.length > 0 ? (
                        item.instruments.map((instrument, index) => (
                          <li key={index}>
                            <p>
                              Display Name: {instrument.displayName || "N/A"}
                            </p>
                          </li>
                        ))
                      ) : (
                        <li>
                          <p>No instruments data available.</p>
                        </li>
                      )}
                    </ul>
                    <h3>CME Analyses:</h3>
                    <ul>
                      {item.cmeAnalyses && item.cmeAnalyses.length > 0 ? (
                        item.cmeAnalyses.map((cmeAnalysis) => (
                          <li key={cmeAnalysis.time21_5}>
                            <p>Time 21.5: {cmeAnalysis.time21_5 || "N/A"}</p>
                            <p>Latitude: {cmeAnalysis.latitude || "N/A"}</p>
                            <p>Longitude: {cmeAnalysis.longitude || "N/A"}</p>
                            <p>Half Angle: {cmeAnalysis.halfAngle || "N/A"}</p>
                            <p>Speed: {cmeAnalysis.speed || "N/A"}</p>
                            <p>Type: {cmeAnalysis.type || "N/A"}</p>
                            <p>
                              Is Most Accurate:{" "}
                              {cmeAnalysis.isMostAccurate ? "Yes" : "No"}
                            </p>
                            <h4>Note:</h4>
                            <p>{cmeAnalysis.note || "N/A"}</p>
                            <p>
                              Level Of Data: {cmeAnalysis.levelOfData || "N/A"}
                            </p>
                            <a
                              href={cmeAnalysis.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View CME Analysis Details
                            </a>
                            <h4>ENLIL List:</h4>
                            <ul>
                              {cmeAnalysis.enlilList &&
                              cmeAnalysis.enlilList.length > 0 ? (
                                cmeAnalysis.enlilList.map((enlilItem) => (
                                  <li key={enlilItem.modelCompletionTime}>
                                    <p>
                                      Model Completion Time:{" "}
                                      {enlilItem.modelCompletionTime || "N/A"}
                                    </p>
                                    <p>AU: {enlilItem.au || "N/A"}</p>
                                    <p>
                                      Estimated Shock Arrival Time:{" "}
                                      {enlilItem.estimatedShockArrivalTime ||
                                        "N/A"}
                                    </p>
                                    <p>
                                      Estimated Duration:{" "}
                                      {enlilItem.estimatedDuration || "N/A"}
                                    </p>
                                    <p>Rmin Re: {enlilItem.rmin_re || "N/A"}</p>
                                    <p>Kp 18: {enlilItem.kp_18 || "N/A"}</p>
                                    <p>Kp 90: {enlilItem.kp_90 || "N/A"}</p>
                                    <p>Kp 135: {enlilItem.kp_135 || "N/A"}</p>
                                    <p>Kp 180: {enlilItem.kp_180 || "N/A"}</p>
                                    <p>
                                      Is EarthGB:{" "}
                                      {enlilItem.isEarthGB ? "Yes" : "No"}
                                    </p>
                                    <a
                                      href={enlilItem.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      View ENLIL List Details
                                    </a>
                                    <h4>Impact List:</h4>
                                    <ul>
                                      {enlilItem.impactList &&
                                      enlilItem.impactList.length > 0 ? (
                                        enlilItem.impactList.map((impact) => (
                                          <li key={impact.location}>
                                            <p>
                                              Location:{" "}
                                              {impact.location || "N/A"}
                                            </p>
                                            <p>
                                              Arrival Time:{" "}
                                              {impact.arrivalTime || "N/A"}
                                            </p>
                                            <p>
                                              Is Glancing Blow:{" "}
                                              {impact.isGlancingBlow
                                                ? "Yes"
                                                : "No"}
                                            </p>
                                          </li>
                                        ))
                                      ) : (
                                        <li>
                                          <p>No impact data available.</p>
                                        </li>
                                      )}
                                    </ul>
                                  </li>
                                ))
                              ) : (
                                <li>
                                  <p>No ENLIL list data available.</p>
                                </li>
                              )}
                            </ul>
                            <h4>CME IDs:</h4>
                            <ul>
                              {cmeAnalysis.cmeIDs &&
                              cmeAnalysis.cmeIDs.length > 0 ? (
                                cmeAnalysis.cmeIDs.map((cmeID) => (
                                  <li key={cmeID}>{cmeID}</li>
                                ))
                              ) : (
                                <li>
                                  <p>No CME IDs available.</p>
                                </li>
                              )}
                            </ul>
                          </li>
                        ))
                      ) : (
                        <li>
                          <p>No CME analysis data available.</p>
                        </li>
                      )}
                    </ul>
                    <h3>Linked Events:</h3>
                    <ul>
                      {item.linkedEvents && item.linkedEvents.length > 0 ? (
                        item.linkedEvents.map((linkedEvent) => (
                          <li key={linkedEvent.activityID}>
                            <p>Activity ID: {linkedEvent.activityID}</p>
                          </li>
                        ))
                      ) : (
                        <li>
                          <p>No linked events data available.</p>
                        </li>
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading...</p>
            )}
            {error && <p>Error: {error}</p>}
          </div>
        </div>

        <div className={styles.apiContainer}>
          <h3>Geomagnetic Storm</h3>
          {solarFlareData.length > 0 ? (
            <ul>
              {solarFlareData.map((item) => (
                <li key={item.flrID} className={styles.item}>
                  <h2>{item.flrID}</h2>
                  <p>Event Time: {item.beginTime}</p>
                  {item.peakTime && <p>Peak Time: {item.peakTime}</p>}
                  {item.endTime && <p>End Time: {item.endTime}</p>}
                  <p>Class: {item.classType}</p>
                  {item.sourceLocation && (
                    <p>Source Location: {item.sourceLocation}</p>
                  )}
                  <h4>Linked Events: </h4>
                  <ul>
                    {item.linkedEvents.map((event) => (
                      <li key={event.activityID}>{event.activityID}</li>
                    ))}
                  </ul>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    View Details
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
          {error && <p>Error: {error}</p>}
        </div>
      </div>

      <div className={styles.rowContainer}>
        <div className={styles.apiContainer}>
          <h3>Solar Energetic Particle</h3>
          {gstData.length > 0 ? (
            <ul>
              {gstData.map((item) => (
                <li key={item.gstID} className={styles.item}>
                  <h2>{item.gstID}</h2>
                  <p>Start Time: {item.startTime}</p>
                  <h3>All Kp Index:</h3>
                  <ul>
                    {item.allKpIndex.map((kpIndex) => (
                      <li key={kpIndex.observedTime}>
                        <p>Observed Time: {kpIndex.observedTime}</p>
                        <p>Kp Index: {kpIndex.kpIndex}</p>
                        <p>Source: {kpIndex.source}</p>
                      </li>
                    ))}
                  </ul>
                  <h3>Linked Events:</h3>
                  <ul>
                    {item.linkedEvents.map((event) => (
                      <li key={event.activityID}>
                        <p>Activity ID: {event.activityID}</p>
                      </li>
                    ))}
                  </ul>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    View Details
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
          {error && <p>Error: {error}</p>}
        </div>
      </div>

      <div className={styles.rowContainer}>
        <div className={styles.apiContainer}>
          <h3>High-Speed Stream</h3>
          {hssData.length > 0 ? (
            <ul>
              {hssData.map((item) => (
                <li key={item.hssID} className={styles.item}>
                  <h2>{item.hssID}</h2>
                  <p>Event Time: {item.eventTime}</p>
                  <p>
                    Instruments:{" "}
                    {item.instruments
                      .map((instrument) => instrument.displayName)
                      .join(", ")}
                  </p>
                  <h4>Linked Events: </h4>
                  {Array.isArray(item.linkedEvents) &&
                  item.linkedEvents.length > 0 ? (
                    <ul>
                      {item.linkedEvents.map((event) => (
                        <li key={event.activityID}>{event.activityID}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No linked events</p>
                  )}
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    View Details
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
          {error && <p>Error: {error}</p>}
        </div>
      </div>

      <div className={styles.apiContainer}>
        <h3>Solar Flare</h3>
        {ipsData.length > 0 ? (
          <ul>
            {ipsData.map((item) => (
              <li key={item.activityID} className={styles.item}>
                <h2>{item.activityID}</h2>
                <p>Event Time: {item.eventTime}</p>
                <p>Location: {item.location}</p>
                <p>Catalog: {item.catalog}</p>
                <h3>Instruments:</h3>
                <ul>
                  {item.instruments.map((instrument) => (
                    <li key={instrument.displayName}>
                      <p>Instrument: {instrument.displayName}</p>
                    </li>
                  ))}
                </ul>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  View Details
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
        {error && <p>Error: {error}</p>}
      </div>

      <div className={styles.rowContainer}>
        <div className={styles.apiContainer}>
          <h3>Interplanetary Shock</h3>
          {rbeData.length > 0 ? (
            <ul>
              {rbeData.map((item) => (
                <li key={item.rbeID} className={styles.item}>
                  <h2>{item.rbeID}</h2>
                  <p>Event Time: {item.eventTime}</p>
                  {item.linkedEvents && item.linkedEvents.length > 0 && (
                    <div>
                      <h3>Linked Events:</h3>
                      <ul>
                        {item.linkedEvents.map((event) => (
                          <li key={event.activityID}>
                            <p>Activity ID: {event.activityID}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    View Details
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
          {error && <p>Error: {error}</p>}
        </div>
      </div>
      <div className={styles.rowContainer}>
        <div className={styles.apiContainer}>
          <h3>Radiation Belt Enhancement</h3>
          {sepData.length > 0 ? (
            <ul>
              {sepData.map((item) => (
                <li key={item.sepID} className={styles.item}>
                  <h3>{item.sepID}</h3>
                  <p>Event Time: {item.eventTime}</p>
                  <p>
                    Instruments:{" "}
                    {item.instruments
                      .map((instrument) => instrument.displayName)
                      .join(", ")}
                  </p>
                  <h4>Linked Events:</h4>
                  <ul>
                    {item.linkedEvents.map((event) => (
                      <li key={event.activityID}>{event.activityID}</li>
                    ))}
                  </ul>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    View Details
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
          {error && <p>Error: {error}</p>}
        </div>
      </div>
    </>
  );
};

export default SpaceWeatherData;
