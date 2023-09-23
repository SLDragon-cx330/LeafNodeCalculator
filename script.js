let degreeCount = 1;

function addDegree() {
    degreeCount++;
    const container = document.getElementById('degrees-container');
    const inputDiv = document.createElement('div');
    inputDiv.classList.add('input-container');
    inputDiv.setAttribute('id', `degree-input-${degreeCount}`);
    
    const label = document.createElement('label');
    label.setAttribute('for', `degree${degreeCount}`);
    label.innerText = `度为${degreeCount}的节点数量:`;

    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('id', `degree${degreeCount}`);
    input.value = 0;

    inputDiv.appendChild(label);
    inputDiv.appendChild(input);
    container.appendChild(inputDiv);
}

function calculateLeafNodes() {
    let totalNodes = 0;
    let nonLeafNodes = 0;
    
    for (let i = 2; i <= degreeCount; i++) {
        const nodeValue = parseInt(document.getElementById(`degree${i}`).value);
        totalNodes += nodeValue;
        nonLeafNodes += nodeValue;
    }

    const leafNodes = totalNodes - nonLeafNodes + parseInt(document.getElementById('degree1').value);
    document.getElementById('result').innerText = leafNodes;
}

document.getElementById('add-degree').addEventListener('click', addDegree);
