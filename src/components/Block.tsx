import * as React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Block } from '../core'

interface QueryBlockParams {
  id: string
}

const GET_BLOCK = gql`
  query getRocketInventory($id: String!) {
    block(id: $id) {
      id
      transactions {
        hash
      }
    }
  }
`

export const BlockView: React.SFC<QueryBlockParams> = ({id}) => {
  const { loading, data } = useQuery<Block[], QueryBlockParams>(
    GET_BLOCK,
    { variables: { id } }
  )

  return (
    <div>
      <h3>Block</h3>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <p>{JSON.stringify(data)}</p>
      )}
    </div>
  )
}