interface Props {
  columns: number;
}

export default function TableSkeleton({
  columns,
}: Props) {
  return (
    <tbody>

      {Array.from({ length: 5 }).map((_, rowIndex) => (
        <tr key={rowIndex}>

          {Array.from({
            length: columns,
          }).map((_, cellIndex) => (
            <td
              key={cellIndex}
              className="table__skeleton"
            >
              Loading...
            </td>
          ))}

        </tr>
      ))}

    </tbody>
  );
}