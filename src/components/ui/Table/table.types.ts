import { ReactNode } from "react";

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface TableColumn<T> {
  key: keyof T | string;
  title: string;

  render?: (
    value: T[keyof T] | undefined,
    row: T,
    index: number
  ) => ReactNode;
}

export interface TableProps<T extends object> {
  columns: TableColumn<T>[];
  data: T[];

  loading?: boolean;

  rowKey: (row: T) => string;

  onRowClick?: (row: T) => void;

  meta?: PaginationMeta;

  onPageChange?: (page: number) => void;

  emptyMessage?: string;
}