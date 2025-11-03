import { Div, Heading, Input, Label, Li, Link, Paragraph, Ul } from "../atoms/index.js"

export const HeaderView = (className = '') => {
    const header = document.createElement('header');
    header.className = 'bg-slate-500 shadow-md border rounded-lg p-4 text-white'
    const h1 = Heading (1)
    h1.textContent = 'Sgt. Pepper';
    header.append(h1)
    const p = Paragraph()
    const a = Link('/index.htm#/login', 'Login here')
    p.append(a)
    header.append(p)
    return header
}

export const NavBarView = arrNavItems => {
    
    const element = document.createElement('nav');
    element.className = 'bg-slate-300 shadow-md border rounded-lg mb-4'
    const ul = Ul('flex')

    arrNavItems.forEach(item => {
        const { url, title } = item

        const li = Li()
        const item1 = Link(url, title, `block p-4 ${item.textColor}`)
        li.append(item1)
        ul.append(li)
    });

    element.append(ul)
    return element
}

export const MainView = (title, content) => {
    const main = document.createElement('main');
    const h1 = Heading(title)
    main.append(h1, content)
    return main
}

export const FooterView = (className = '') => {
    const fotter = document.createElement('fotter');
    Element.innerHTML = '&copy; TECHCOLLEGE 2025 ';
    return fotter
}

export const FormGroup = (title, name, placeholder, type, value) => {
    const element = Div()
    const label = Label(title, name)
    const input = Input(name, placeholder, type, value)
    element.append(label, input)
    return element
}