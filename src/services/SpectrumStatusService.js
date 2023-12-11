const urlA =
  "https://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumStatus";

const urlB =
  "https://webfrontendassignment-isaraerospace.azurewebsites.net/api/ActOnSpectrum";

export const getSpectrumStatusData = async () => {
  try {
    const response = await fetch(urlA);
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(
        errorResponse?.errors || "Something went wrong with the request"
      );
    }
    const result = await response.json();
    return result;
  } catch (error) {
    return Promise.reject(error?.message || error);
  }
};

export const actOnSpectrum = async () => {
  try {
    const response = await fetch(urlB);
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse?.errors || "Action Failed");
    }
    return "Action Success";
  } catch (error) {
    return Promise.reject(error?.message || error);
  }
};
