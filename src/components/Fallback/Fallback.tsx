const Fallback: React.FC = () => {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div
        className="spinner-grow mx-2"
        role="status"
        style={{
          animationDelay: "0.1s",
          color: "#A8F1CA",
        }}
      ></div>
      <div
        className="spinner-grow mx-2"
        role="status"
        style={{
          animationDelay: "0.2s",
          color: "#91CAEA",
        }}
      ></div>
      <div
        className="spinner-grow mx-2"
        role="status"
        style={{
          animationDelay: "0.3s",
          color: "#BDB6FF",
        }}
      ></div>
    </div>
  );
};

export default Fallback;
