export const request = async (url, method = 'GET', body = {}) => {
    if (!url) throw new Error('URL is required')
    
    const hasbody = body !== undefined && body !== null && method !== 'GET'


    const options = {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        ...(hasbody ? {body: JSON.stringify(body)} : {})
    }

    try {
        const response = await fetch(url, options)
        if(response.ok) {
            return await response.json()
        } else {
            throw new Error("Kunne ikke kalde API'et");            
        }
        
    } catch (error) {
        console.error(error);
        
    }
}