import React, { useEffect, useState } from "react";
import { getSpectrumStatusData } from "../../services/SpectrumStatusService";
import SpectrumStatus from "../spectrumStatus";
import { Link } from "react-router-dom";

const SpectrumA = () => {
  const [spectrumData, setSpectrumData] = useState(null);
  const [error, setError] = useState(null);

  const getSpectrumData = async () => {
    try {
      setError(null);
      const status = await getSpectrumStatusData();
      setSpectrumData(status);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getSpectrumData();
  }, []);

  const onUpdateHandle = () => {
    getSpectrumData();
  };
  return (
    <div>
      <h1>
        Spectrum status <Link to="/spectrumLive"> Get Live Updates</Link>
      </h1>
      {spectrumData && <SpectrumStatus spectrumData={spectrumData} />}
      <div className="spectrum-update-container">
        <button onClick={onUpdateHandle}>Update</button>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
};

export default SpectrumA;
