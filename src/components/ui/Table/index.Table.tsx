"use client";

import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";
import Pagination from "../pagination/pagination";

import { TableProps } from "./table.types";

export default function Table<T extends object>({
  columns,
  data,
  loading = false,
  rowKey,
  onRowClick,
  meta,
  onPageChange,
  emptyMessage,
}: TableProps<T>) {
  console.log("🚀 ~ Table ~ meta:", meta)
  return (
    <div className="table">

      <table className="table__wrapper">

        <TableHeader columns={columns} />

        <TableBody
          columns={columns}
          data={data}
          loading={loading}
          rowKey={rowKey}
          onRowClick={onRowClick}
          emptyMessage={emptyMessage}
        />

      </table>

      {meta && onPageChange && (
        <Pagination
          meta={meta}
          onPageChange={onPageChange}
        />
      )}

    </div>
  );
}