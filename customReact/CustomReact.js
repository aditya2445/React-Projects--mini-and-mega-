function customRender(element,container){
    const domElement=document.createElement(element.type)
    domElement.innerHTML=element.children
    // domElement.setAttribute('href',element.props.href)
    // domElement.setAttribute('target',element.props.target)
    // container.appendChild(domElement);
    for (const prop in reactElement.props) {
        if(prop=='children') continue
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.append(domElement);
}
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click Me to visit Google'
}

const maincontainer=document.getElementById('root');

customRender(reactElement,maincontainer);
