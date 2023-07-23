export const History = ({ dataArray }) => {
  return (
    <>
      <h3>History</h3>
      <table>
        <tbody>
          <tr>
            {dataArray.map((value, key) => (
              <td key={key}> {value} </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};
