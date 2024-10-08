export async function fetchData(endpoint: string) {
  try {
    const response: Response = await fetch(process.env.STRAPI_URL + endpoint)
    if (!response.ok) {
      console.error(
        `Error fetching data from ${endpoint}: ${response.status} ${response.statusText}`
      )
    }
    const jsonData = await response.json()
    return jsonData.data.attributes
  } catch (error: any) {
    console.error(`Error fetching data from ${endpoint}: ${error.message}`)
  }
}
