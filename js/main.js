const items = [
    { name: 'Libraries', items: [{ name: 'React' }, { name: 'jQuery' }, ], },
    { name: 'Frameworks', items: [{ name: 'Angular' }, { name: 'Vue' }, ], }
]

const containerBlock = document.querySelector('.container');

const rightSidebar = document.createElement('div');
const mainSection = document.createElement('div');
const mainSectionHeader = document.createElement('h1');
mainSection.appendChild(mainSectionHeader);
const titleMainSec = document.createTextNode('React');
mainSectionHeader.appendChild(titleMainSec);
const mainList = document.createElement('ul');

containerBlock.appendChild(rightSidebar);
containerBlock.appendChild(mainSection);
rightSidebar.appendChild(mainList);
rightSidebar.setAttribute('class', 'rightSidebar');
mainSection.setAttribute('class', 'mainSection');

function bulidMenu(element, items, tagName) {
    let newElement;
    Object.keys(items).forEach(function(key) {
        let item = items[key];
        Object.keys(item).forEach(function(key) {
            let subItem;
            if (!Array.isArray(item[key])) {
                subItem = item[key];
                newElement = document.createElement(tagName);
                element.appendChild(newElement);
                newElement.setAttribute('class', `${subItem} listComponents`);
                let text = document.createTextNode(subItem);
                newElement.appendChild(text);
            } else {
                bulidMenu(newElement, item[key], 'li');
                if (newElement.children) {
                    newElement.classList.add('dropDownList');
                    newElement.classList.remove('listComponents');
                }
            }

        })
    });

}
bulidMenu(mainList, items, 'li');

function expandList(e) {
    let element = e.target.children;
    for (let i = 0; i < element.length; i++) {
        if (element[i].style.display !== 'none') {
            element[i].style.display = 'none';
        } else {
            element[i].style.display = 'inherit';
        }
    }
}

const libraries = document.querySelector('.Libraries');
const frameworks = document.querySelector('.Frameworks');
libraries.addEventListener('click', expandList);
frameworks.addEventListener('click', expandList);