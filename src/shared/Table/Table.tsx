interface ITableProps<T> {
  items: T[];
}

const Table = <T extends object,>({
  items,
}: ITableProps<T>) => (
  <table>
    <tbody>
      {items.map((row, idxRow) => (
        <tr key={`row-${idxRow}`}>
          {Object.keys(row).map((key, idxCell) => (
            <td key={`cell-${idxCell}`}>
              {row[key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
