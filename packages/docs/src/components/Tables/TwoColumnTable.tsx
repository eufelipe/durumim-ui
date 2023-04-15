import "./styles.css";

interface TwoColumnTableProps {
  tokens: Record<string, string>;
}

export function TwoColumnTable({ tokens }: TwoColumnTableProps) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TwoColumnTable;
