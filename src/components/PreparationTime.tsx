const PreparationTime = () => {
  return (
    <>
      <div
        className="alert alert-danger pt-3 pb-1"
        role="alert"
        style={{
          backgroundColor: "hsl(330, 100%, 98%)",
          borderColor: "hsl(330, 100%, 98%)",
        }}
      >
        <h4>Preparation time</h4>
        <ul className="custom-list">
          <span style={{ color: "black" }}>
            <li className="pb-2 px-2">
              <strong>Total</strong>: Approximately 10 minutes
            </li>
            <li className="pb-2  px-2">
              <strong>Preparation</strong>: 5 minutes
            </li>
            <li className="px-2">
              <strong>Cooking</strong>: 5 minutes
            </li>
          </span>
        </ul>
      </div>
    </>
  );
};

export default PreparationTime;
