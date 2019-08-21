import { Transaction } from './Transaction'

// This will be imported from a package, just adding for demo
export interface Block {
  id: number
  transactions: Transaction[]
}