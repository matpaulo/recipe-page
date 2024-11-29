const color = "hsl(14, 45%, 36%)";

const Nutrition = () => {
  return (
    <>
      <h2 style={{ color }}>Nutrition</h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table className="table">
        <tbody>
          <tr>
            <td>Calories</td>
            <td style={{ color }}>
              <strong>277kcal</strong>
            </td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td style={{ color }}>
              <strong>0g</strong>
            </td>
          </tr>
          <tr>
            <td>Protein</td>
            <td style={{ color }}>
              <strong>20g</strong>
            </td>
          </tr>
          <tr>
            <td>Fat</td>
            <td style={{ color }}>
              <strong>22g</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Nutrition;
