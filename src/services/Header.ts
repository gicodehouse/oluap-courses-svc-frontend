export const defaultHeader = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            'Cache-Control': 'no-cache'
        }
    }
}