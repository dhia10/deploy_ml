import { API_BASE_URL } from "../../config";

export default function EdaUnderstanding() {
  return (
    <>


      <h3>Missing values</h3>
      <img src={`${API_BASE_URL}/eda/missing.png`} alt="Missing" style={{ width: "100%" }} />

      <h3>Target distribution</h3>
      <img src={`${API_BASE_URL}/eda/target.png`} alt="Target" style={{ width: "100%" }} />


    </>
  );
}
