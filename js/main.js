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
    let newElement;
    let itemClassName;
    let tagName = 'li';
    items.forEach(function(item) {
        itemClassName = 'dropDownList';
        newElement = document.createElement(tagName);
        element.appendChild(newElement);
        newElement.setAttribute('class', `${item.name} ${itemClassName}`);
        newElement.textContent = item.name;

        item.items.forEach(function(subItem) {
            itemClassName = 'listComponents';
            newSubElement = document.createElement(tagName);
            newElement.appendChild(newSubElement);
            newSubElement.setAttribute('class', `${subItem.name} ${itemClassName}`);
            newSubElement.textContent = subItem.name;
        })
    })
}
bulidMenu(mainList, items);


function expandList(e) {
    let otherElements = document.querySelectorAll('.listComponents');
    otherElements.forEach(function(list) {
        if (list.parentNode !== e.target) {
            list.style.display = 'none';
        }
    })
    let element = e.target.children;
    for (let i = 0; i < element.length; i++) {
        let elemStyles = window.getComputedStyle(element[i]).getPropertyValue('display');
        if (elemStyles !== 'none') {
            element[i].style.display = 'none';
        } else {
            element[i].style.display = 'block';
        }
    }
}

const listElements = document.querySelectorAll('.listComponents')

//for preventing of call parent element function expandList, added e.stopPropagation() to child element;
function relflectListName(e) {
    e.stopPropagation();
    listElements.forEach(function(elem) {
        if (e.target.parentNode === elem.parentNode) {
            mainSectionHeader.textContent = e.target.textContent;
        }
    })
}

const expandedLists = document.querySelectorAll('.dropDownList');

expandedLists.forEach(list => list.addEventListener('click', expandList));
listElements.forEach(elem => elem.addEventListener('click', relflectListName));