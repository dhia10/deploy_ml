import { API_BASE_URL } from "../../config";

export default function EdaBoxplots() {
  return (
    <>
      <h1>Boxplots</h1>
      <img
        src={`${API_BASE_URL}/eda/boxplots.png`}
        alt="Boxplots"
        style={{ width: "100%", borderRadius: 10 }}
      />
    </>
  );
}
