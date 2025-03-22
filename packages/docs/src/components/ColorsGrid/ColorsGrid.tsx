import { colors } from "@durumim-ui/design-tokens";
import { getContrast } from "polished";

type Color = {
  key: number;
  value: string;
};

type ColorObject = {
  [name: string]: Color[];
};

export function ColorsGrid() {
  const getNumberedColors = (): ColorObject => {
    const colorObject: ColorObject = {};

    for (const propName in colors) {
      const match = propName.match(/\d+/);
      if (match !== null) {
        const key = parseInt(match[0]);
        const value = colors[propName];
        const colorName = propName.replace(match[0], "").toLowerCase();

        if (colorObject[colorName] === undefined) {
          colorObject[colorName] = [];
        }
        colorObject[colorName].push({ key, value });
      }
    }

    for (const colorName in colorObject) {
      colorObject[colorName].sort((a, b) => a.key - b.key);
    }

    return colorObject;
  };

  const numberedColors = getNumberedColors();

  const getColor = (value: string) =>
    getContrast(value, "#FFF") < 3.5 ? "#000" : "#FFF";

  return (
    <div style={{ flex: 1 }}>
      {Object.entries(numberedColors).map(([name, shades]) => (
        <div key={name}>
          <h3>{name}</h3>
          <div style={styles.container}>
            {shades.map(({ key, value }) => (
              <div key={key}>
                <div
                  style={{
                    ...styles.box,
                    backgroundColor: value,
                  }}
                />

                <div
                  style={{
                    ...styles.title,
                    color: getColor(value),
                  }}
                >
                  <p>
                    <strong>
                      {name}.{key}
                    </strong>
                    <br />
                    <span
                      style={{
                        ...styles.label,
                      }}
                    >
                      {value}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
  },
  box: {
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    marginRight: 5,
    width: 80,
    height: 80,
  },
  title: {
    fontFamily: "monospace",
    color: "white",
  },
  label: {
    color: "white",
    fontSize: 12,
  },
};

export default ColorsGrid;
