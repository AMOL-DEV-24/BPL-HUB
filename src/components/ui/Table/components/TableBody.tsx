import { TableColumn } from "../table.types";
import TableSkeleton from "./TableSkelton";

interface Props<T extends object> {
  columns: TableColumn<T>[];
  data: T[];

  loading?: boolean;

  rowKey: (row: T) => string;

  onRowClick?: (row: T) => void;

  emptyMessage?: string;
}

export default function TableBody<T extends object>({
  columns,
  data,
  loading,
  rowKey,
  onRowClick,
  emptyMessage = "No records found",
}: Props<T>) {

  if (loading) {
    return <TableSkeleton columns={columns.length} />;
  }

  if (!data.length) {
    return (
      <tbody>
        <tr>
          <td
            colSpan={columns.length}
            className="table__empty"
          >
            {emptyMessage}
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>

      {data.map((row, index) => (
        <tr
          key={rowKey(row)}
          className="table__row"
          onClick={() => onRowClick?.(row)}
        >
          {columns.map((column) => {

            const value =
              column.key in row
                ? row[column.key as keyof T]
                : undefined;

            return (
              <td
                key={String(column.key)}
                className="table__cell"
                data-label={column.title}
              >
                {column.render
                  ? column.render(
                      value,
                      row,
                      index
                    )
                  : String(value ?? "-")}
              </td>
            );
          })}
        </tr>
      ))}

    </tbody>
  );
}