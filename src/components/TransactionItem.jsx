import React from 'react';
import Button from './UI/Button/Button';

export default function PostTransaction({
    transaction,
    removeTransaction,
    setVisibleFormUpdate,
    setTransactionsUpdate,
  }) {
  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return Intl.DateTimeFormat('ru', options).format(date);
  }
  
  return(
    <div className='Item'>
      <h2>{transaction.cost}</h2>
      <h4>{transaction.tags.map((tag, index) =>
        <span
          className='Tag' key={index}>{tag}</span>
      )}</h4>
      <p>Счёт: {transaction.account_name}</p>
      <p>{transaction.description}</p>
      <p>{formatDate(transaction.time)}</p>
      <Button onClick={() => removeTransaction(transaction.id)}>
        Удалить
      </Button>
      <Button onClick={() => {
        setTransactionsUpdate(transaction);
        setVisibleFormUpdate(true);
      }}>
        Редактировать
      </Button>
    </div>
  )
}