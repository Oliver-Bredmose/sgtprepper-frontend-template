import { request } from "../services/fetch.js"

const url = `http://localhost:4000/api/cart`

/** 
 * funtion til at hente kurv med
 * 
 * @returns Array
 */
export const getCartList = async () => {
    try {
        const data = await request(url)
        if(data) {
            return data
        }
        
    } catch (error) {
        console.error(`Fejl i kald af indkøbskurv model list: ${error}`)
    }
}

export const cartList = [];

export function removeFromCart (productId) {
  const index = cartList.findIndex(item => item.id === productId);
  if (index !== -1) {
    cartList.splice(index, 1);
  }
}


/**
 * Funktion til at opdatere kurv med
 * @param {Number} productId 
 * @param {Number} quantity 
 * @returns boolean
 */
export const addToCart = async (productId, quantity) => {
    try {
        const data = await request(url, 'POST', {
            productId, quantity
        })
        return data
    } catch (error) {
        console.error(`Fejl i cart model addToCart: ${error}`);
        
    }
}