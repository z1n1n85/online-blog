import React from 'react';
import TransactionList from '../transaction-list/transaction-list';
import { Button } from 'components/UI/button'
import {
  Card,
  CardContent,
} from "components/UI/card"
import { Separator } from 'components/UI/separator';
import TransactionFilter from 'pages/home/components/transaction-filter/transaction-filter';
import ModalTransactionCreate from 'pages/home/components/modal-transaction-create/modal-transaction-create';

export default function TransactionMain() {
  return (
    <>
      <Card>
        <CardContent className="pt-6 flex flex-col h-full items-start">
          <ModalTransactionCreate
            triggerElement={
              <Button className='block mb-2'>
                Добавить операцию
              </Button>
            }
          />
          <Separator className='my-4' />
          <TransactionFilter />
          <TransactionList />
        </CardContent>
      </Card>
    </>
  )
}
