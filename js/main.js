const contentLilbraries = ['React', 'jQuery'];
const contentFrameworks = ['Angular', 'Vue'];
const sidebarContent = ['Libraries', 'Frameworks'];

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
mainSection.setAttribute('class', 'mainSection')

function creatingElements(parrentNode, contentArr, elementName, elementClass) {
    contentArr.forEach(function(item, index) {
        item = document.createElement(elementName);
        item.setAttribute('class', elementClass);
        item.setAttribute('id', contentArr[index]);
        parrentNode.appendChild(item);
        let text = document.createTextNode(contentArr[index]);
        item.appendChild(text);
    })
}
creatingElements(mainList, sidebarContent, 'li', 'drop-down-list');
const libraries = document.getElementById('Libraries');
const frameworks = document.getElementById('Frameworks');
creatingElements(libraries, contentLilbraries, 'li', 'libraries list-components');
creatingElements(frameworks, contentFrameworks, 'li', 'frameworks list-components');

function expandList(e) {
	let element = e.target.children;
	console.log(element.length);
	for (let i = 0; i < element.length; i++){
		if (element[i].style.display !== 'none'){
			element[i].style.display = 'none';
		} else {
			element[i].style.display = 'inherit';
		}
	}	
}

libraries.addEventListener('click', expandList);
frameworks.addEventListener('click', expandList);