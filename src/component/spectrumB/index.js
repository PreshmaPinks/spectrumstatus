import React, { useEffect, useState } from "react";
import SpectrumStatus from "../spectrumStatus";
import { actOnSpectrum } from "../../services/SpectrumStatusService";
import { Link } from "react-router-dom";

const SpectrumB = () => {
  const [spectrumData, setSpectrumData] = useState(null);
  const [actionNeeded, setActionNeeded] = useState(false);
  const [error, setError] = useState(null);
  const actOnSpectrumMessage = async () => {
    try {
      setError(null);
      await actOnSpectrum();
      setActionNeeded(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const spectrumSocketConnection = new WebSocket(
      "wss://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumWS"
    );
    spectrumSocketConnection.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.IsActionRequired) {
        setActionNeeded(true);
      }
      setSpectrumData(JSON.parse(event.data));
    };
  }, []);
  return (
    <div>
      <h1>
        Spectrum Status Live <Link to="/"> Back</Link>
      </h1>
      {spectrumData && <SpectrumStatus spectrumData={spectrumData} />}
      {actionNeeded && (
        <div className="spectrum-action-container">
          Action Required:
          <button onClick={actOnSpectrumMessage}> Act on Spectrum</button>
        </div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default SpectrumB;
