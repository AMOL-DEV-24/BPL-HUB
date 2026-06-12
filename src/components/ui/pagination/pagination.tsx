"use client";

import { PaginationMeta } from "../Table/table.types";

interface PaginationProps {
  meta: PaginationMeta;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  meta,
  onPageChange,
}: PaginationProps) {
  const {
    page,
    limit,
    total,
    totalPages,
  } = meta;

  const startItem =
    total === 0
      ? 0
      : (page - 1) * limit + 1;

  const endItem = Math.min(
    page * limit,
    total,
  );

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <div className="pagination">

      {/* LEFT */}

      <div className="pagination__info">
        Showing {startItem}-{endItem} of {total} Players
      </div>

      {/* CENTER */}

      <div className="pagination__controls">

        <button
          className="pagination__button"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
        >
          ◀ Previous
        </button>

        <div className="pagination__pages">
          {pages.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`pagination__page ${
                page === pageNumber
                  ? "pagination__page--active"
                  : ""
              }`}
              onClick={() =>
                onPageChange(pageNumber)
              }
            >
              {pageNumber}
            </button>
          ))}
        </div>

        <button
          className="pagination__button"
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          Next ▶
        </button>

      </div>

      {/* RIGHT */}

      <div className="pagination__footer">
        {total} Players • Page {page} of {totalPages}
      </div>

    </div>
  );
}