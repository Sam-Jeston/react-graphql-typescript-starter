import * as React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Block } from '../core'

interface QueryBlockParams {
  id: string
}

const GET_BLOCK = gql`
  query getBlock($id: ID!) {
    block(id: $id) {
      id
      transactions {
        hash
      }
    }
  }
`

export class BlockSelector extends React.Component {
  state = { block: '1', submittedBlock: '1' }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ block: event.currentTarget.value })
  }

  handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    this.setState({ submittedBlock: this.state.block })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Block ID:
            <input type="text" value={this.state.block} onChange={(e) => this.handleChange(e)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <BlockView id={this.state.submittedBlock} />
      </div>
    )
  }
}

const BlockView: React.SFC<QueryBlockParams> = ({ id }) => {
  const { loading, data } = useQuery<Block[], QueryBlockParams>(
    GET_BLOCK,
    { variables: { id } }
  )

  return (
    <div>
      <h3>Block</h3>
      { loading ? (
        <p>Loading ...</p>
      ) : (
        <p>{JSON.stringify(data)}</p>
      )}
    </div>
  )
}