import { useOutletContext } from '@remix-run/react'
import { StrapiConfig } from '~/utils/format'

export interface GraphQLResponse {
  data?: any
  errors?: any[]
}

export async function fetchGraphQL(query: string): Promise<GraphQLResponse> {
  const url = `${process.env.STRAPI_URL}/graphql`
  const headers = {
    'Content-Type': 'application/json',
  }
  const body = JSON.stringify({
    query,
    variables: {},
  })
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body,
    })
    const result: GraphQLResponse = await response.json()
    if (result.errors) {
      console.error(JSON.stringify(result.errors))
    }
    return result
  } catch (error) {
    console.error('GraphQL Request Error:', error)
  }
}

export async function fetchGraphQLWithURL(
  query: string,
  StrapiUrl: string
): Promise<GraphQLResponse> {
  const url = `${StrapiUrl}/graphql`
  const headers = {
    'Content-Type': 'application/json',
  }
  const body = JSON.stringify({
    query,
    variables: {},
  })
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body,
    })
    const result: GraphQLResponse = await response.json()
    if (result.errors) {
      console.error(JSON.stringify(result.errors))
    }
    return result
  } catch (error) {
    console.error('GraphQL Request Error:', error)
  }
}
