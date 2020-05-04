export const apiGetHelper = async (url) => {
  try {
    const response = await fetch(url, { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' })
    return response.json()
  }
  catch (error) {
    return error
  }
}