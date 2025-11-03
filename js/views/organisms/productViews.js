import { price2Dkk } from "../../utils/index.js";
import { Div, Fragment, Heading, Image, Paragraph } from "../atoms/index.js"

export const ProductListView = (products) => {
    const element = Fragment()
        
    products.forEach(product => {
        console.log(product);
        
        const { imageUrl, name, price, slug, stockText, stockCalss, teaser } = product
        
        const div = Div('border flex justify-between')
        const img = Image(`http://localhost:4000${imageUrl}`, name, 'max-w-[200px]')
        div.append(img)

        const info = Div()
        const h2 = Heading(name,2)
        const p = Paragraph()
        p.innerHTML = teaser
        info.append(h2, p)
        div.append(info)

        const cost = Div('text-right border')
        cost.innerText = price2Dkk()

        const stockElm = Paragraph(stockCalss)
        stockElm.innerText = stockText
        cost.append(stockElm)

        div.append(cost)

        element.append(div)
    })

    return element
}

export const ProductDetailsView = (product) => {
    const { id, name, imageUrl, description, price, } = product
    
    const element = Div('flex justify-between gap-4 p-4 border rounded-lg')

    const imageCol = Div('shrink-0 w-[120px]')
    const img = Image(`http://localhost:4000${product.imageUrl}`, name, 'w-[80px]')
    element.append(img)

    const div1 = Div()
    const h3 = Heading(name,3)
    div1.append(h3)
    
    const p = Paragraph()
    p.innerHTML = description
    div1.append(p)

    const priceSection = Paragraph()
    priceSection.innerHTML = price2Dkk(price)
    div1.append(priceSection)


    element.append(div1)
    
    return element
}