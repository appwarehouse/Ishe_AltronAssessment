import { ColumnType } from "../components/organisms/Table";

export interface Column {
  label: string;
  key: string;
  type?: ColumnType;
  onClick?: any;
}
