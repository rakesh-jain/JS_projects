function customRender(reactElement, container) {
    const element = document.createElement(reactElement.type);
    
    if (reactElement.props) {
        for (const [key, value] of Object.entries(reactElement.props)) {
            if (value != null && value !== undefined) {
                if (key in element) {
                    element[key] = value;
                } else {
                    element.setAttribute(key, value);
                }
            }
        }
    }

    if (reactElement.children) {
        if (typeof reactElement.children === 'string' || typeof reactElement.children === 'number') {
            element.textContent = reactElement.children;
        } else if (Array.isArray(reactElement.children)) {
            reactElement.children.forEach(child => customRender(child, element));
        }
    }

    console.log('Appending Element:', element); // Debug log
    container.appendChild(element);
}



const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'click here'
};

const reactElement1 = {
    type: 'p',
    children: 'hello i am paragraph'
};

const reactElement2 = {
    type: 'img',
    props: {
        src: 'https://picsum.photos/200',
        alt: "description",
        width: '1000',
        height:'800'
    }
};

const container = document.querySelector('#root');

customRender(reactElement, container);
customRender(reactElement1, container);
customRender(reactElement2, container);