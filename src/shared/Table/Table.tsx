interface ITableProps<T> {
  items: T[];
}

const Table = <T extends object,>({
  items,
}: ITableProps<T>) => {
  return (
    <table>
      <tbody>
        {items.map((row, idxRow) => (
          <tr key={`row-${idxRow}`}>
            {Object.keys(row).map((key, idxCell) => (
              <td key={`cell-${idxCell}`}>
                {row[key as keyof typeof row]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default Table;