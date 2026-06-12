import { TableColumn } from "../table.types";

interface Props<T> {
  columns: TableColumn<T>[];
}

export default function TableHeader<T>({
  columns,
}: Props<T>) {
  return (
    <thead>
      <tr className="table__header">

        {columns.map((column) => (
          <th
            key={column.title}
            className="table__head-cell"
          >
            {column.title}
          </th>
        ))}

      </tr>
    </thead>
  );
}