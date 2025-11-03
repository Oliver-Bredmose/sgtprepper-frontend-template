import { Div, Heading, Paragraph } from "../views/atoms/index.js"
import { Layout } from "./LayoutController.js"

 export const HomePage = async () => {
     const title = "Välkommen"
     const p = Paragraph()
     p.innerText = "Velkommen Til Sgt. Pepper's webshop!"
     return await Layout(title, p)
 }

