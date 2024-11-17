import css from "./TransactionHistory.module.css";

function TransactionHistory({ items = [] }) {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id} className={css.data}>
              <td className={css.type}>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
         }) }
      </tbody>
    </table>
  );
 }

export default TransactionHistory;