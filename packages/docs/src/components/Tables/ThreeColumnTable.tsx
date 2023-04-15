import "./styles.css";

interface ThreeColumnTableProps {
  tokens: Record<string, string>;
}

const BASE_FONT_SIZE = 16;

export function ThreeColumnTable({ tokens }: ThreeColumnTableProps) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          <th>Pixels</th>
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              <td>{Number(value.replace("rem", "")) * BASE_FONT_SIZE}px</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ThreeColumnTable;
