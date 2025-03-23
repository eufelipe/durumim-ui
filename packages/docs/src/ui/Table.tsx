import React from "react";

import { colors, fonts } from "@durumim-ui/design-tokens";

export interface TableColumn {
  id: string;
  header: string;
}

export interface TableProps {
  tokens: Record<string, any>;
  columns: TableColumn[];
  title?: string;
  description?: string;
  transformers?: Record<string, (value: any, key: string) => any>;
  headerStyle?: React.CSSProperties;
}

export const Table = ({
  tokens,
  columns,
  title,
  description,
  transformers = {},
  headerStyle = { color: colors.secondary },
}: TableProps) => {
  const renderValue = (value: any, columnId: string, rowKey: string) => {
    if (transformers[columnId]) {
      return transformers[columnId](value, rowKey);
    }
    return value;
  };

  return (
    <div style={{ marginBottom: "32px" }}>
      {title && (
        <h3
          style={{
            marginBottom: "12px",
            fontFamily: fonts.heading,
            fontWeight: 600,
            ...headerStyle,
          }}
        >
          {title}
        </h3>
      )}

      {description && (
        <p
          style={{
            marginBottom: "16px",
            color: "#f8f8f8",
            fontFamily: fonts.default,
            lineHeight: 1.5,
          }}
        >
          {description}
        </p>
      )}

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          color: "#f8f8f8",
          backgroundColor: "#242424",
          borderRadius: "4px",
          overflow: "hidden",
          fontFamily: fonts.default,
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#1a1a1a" }}>
            {columns.map((column) => (
              <th
                key={column.id}
                style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  fontFamily: fonts.heading,
                  fontWeight: 600,
                  borderBottom: "1px solid #333",
                }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(tokens).map(([key, value], index) => (
            <tr
              key={key}
              style={{
                backgroundColor: index % 2 === 0 ? "#242424" : "#2a2a2a",
              }}
            >
              {columns.map((column) => (
                <td
                  key={`${key}-${column.id}`}
                  style={{
                    padding: "12px 16px",
                    borderBottom: "1px solid #333",
                  }}
                >
                  {column.id === "name" ? (
                    <span style={{ fontWeight: 500 }}>{key}</span>
                  ) : (
                    renderValue(value, column.id, key)
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 