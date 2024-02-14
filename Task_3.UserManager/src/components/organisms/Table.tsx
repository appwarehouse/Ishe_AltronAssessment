import React from "react";
import { Table, Input, Button } from "reactstrap";
import { Column } from "../../interfaces/Column";

export enum ColumnType {
  Checkbox = "checkbox",
  Text = "text",
  Button = "button",
}

interface DataItem {
  [key: string]: any;
}

interface Props {
  data: DataItem[] | [];
  columns: Column[];
}

const ResponsiveTable: React.FC<Props> = ({ data, columns }) => {
  const renderCell = (column: Column, value: any, buttonAction: any) => {
    switch (column.type) {
      case ColumnType.Checkbox:
        return <Input type="checkbox" readOnly checked={value} />;
      case ColumnType.Button:
        return (
          <Button onClick={() => buttonAction(value)}>{column.label}</Button>
        );
      default:
        return value;
    }
  };

  const handleButtonClick = (column: Column, value: any) => {
    // Handle button click action here
    console.log(`Button clicked for ${column.label}: ${value}`);
  };

  return (
    <>
      {data.length === 0 && <div>No Data to display</div>}
      {data.length > 0 && (
        <Table responsive>
          <thead>
            <tr>
              {columns.map((column, i) => (
                <th key={i}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex}>
                    {renderCell(column, row[column.key], column.onClick)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ResponsiveTable;
