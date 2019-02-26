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

    Object.keys(items).forEach(function(key) {
        let item = items[key];
        //console.log(item)
        Object.keys(item).forEach(function(key) {
          console.log(item[key])
            let subItem;
            let tagName = 'li';
            if (!Array.isArray(item[key])) {
                subItem = item[key];
                newElement = document.createElement(tagName);
                element.appendChild(newElement);
                newElement.setAttribute('class', `${subItem} listComponents`);
                newElement.textContent = subItem;
            } else {
                bulidMenu(newElement, item[key]);
                if (newElement.children) {
                    newElement.classList.add('dropDownList');
                    newElement.classList.remove('listComponents');
                }
            }
        })
    });

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
            element[i].style.display = 'inherit';
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