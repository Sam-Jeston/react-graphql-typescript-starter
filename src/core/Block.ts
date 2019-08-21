import { Transaction } from './Transaction'

export interface Block {
  id: number
  transactions: Transaction[]
}