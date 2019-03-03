const items = [
    { name: 'Libraries', items: [{ name: 'React' }, { name: 'jQuery' }, ], },
    { name: 'Frameworks', items: [{ name: 'Angular' }, { name: 'Vue' }, ], }
]

const containerBlock = document.querySelector('.container');

const rightSidebar = document.createElement('div');
const mainSection = document.createElement('div');
const mainSectionHeader = document.createElement('h1');
mainSection.appendChild(mainSectionHeader);
mainSectionHeader.textContent = 'React';
const mainList = document.createElement('ul');

containerBlock.appendChild(rightSidebar);
containerBlock.appendChild(mainSection);
rightSidebar.appendChild(mainList);
rightSidebar.classList.add('rightSidebar');
mainSection.classList.add('mainSection');

function bulidMenu(element, items) {
    let tagName = 'li';
    items.forEach(item => {
        const newElement = document.createElement(tagName);
        element.appendChild(newElement);
        newElement.classList.add('dropDownList');
        newElement.textContent = item.name;

        item.items.forEach(subItem => {
            const newSubElement = document.createElement(tagName);
            newElement.appendChild(newSubElement);
            newSubElement.classList.add('listComponents');
            newSubElement.textContent = subItem.name;
        })
    })
}
bulidMenu(mainList, items);


function expandList(e) {
    const otherElements = document.querySelectorAll('.listComponents');
    otherElements.forEach(list => {
        if (list.parentNode !== e.target) {
            list.style.display = 'none';
        }
    })
    const elements = Array.from(e.target.children);
    elements.forEach(element => {
        const elemStyles = window.getComputedStyle(element).getPropertyValue('display');
        if (elemStyles !== 'none') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    })
}

const listElements = document.querySelectorAll('.listComponents')

//for preventing of call parent element function expandList, added e.stopPropagation() to child element;
function relflectListName(e) {
    e.stopPropagation();
    listElements.forEach(elem => {
        if (e.target.parentNode === elem.parentNode) {
            mainSectionHeader.textContent = e.target.textContent;
        }
    })
}

const expandedLists = document.querySelectorAll('.dropDownList');

expandedLists.forEach(list => list.addEventListener('click', expandList));
listElements.forEach(elem => elem.addEventListener('click', relflectListName));