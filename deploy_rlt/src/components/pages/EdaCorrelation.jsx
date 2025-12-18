import { API_BASE_URL } from "../../config";

export default function EdaCorrelation() {
  return (
    <>
      <h1>Correlation</h1>
      <img
        src={`${API_BASE_URL}/eda/correlation.png`}
        alt="Correlation matrix"
        style=
        {{ width: "100%", borderRadius: 8 }}
      />
    </>
  );
}
