document.addEventListener("DOMContentLoaded", function () {

    let alertButton = document.createElement('button');
    let btnText = document.createTextNode('Press me!');
    alertButton.append(btnText);
    alertButton.className = 'button-styles';
    document.body.appendChild(alertButton);

    alertButton.addEventListener("click", function () {
        let alertbox = document.createElement('div');
        alertbox.className = 'alertBox'
        let boxMessage = document.createElement('h2');
        let boxText = document.createTextNode('Sorry, Please try again.');
        boxMessage.className = 'boxMessage';

        boxMessage.appendChild(boxText);
        alertbox.appendChild(boxMessage);
        document.body.appendChild(alertbox);
    })

    let subButton = document.getElementById('submissionButton');
    let yourSubmission = document.getElementById('yourSubmission');
    let output = document.getElementById('output1');

    subButton.addEventListener("click", function (event) {
        event.preventDefault();
        output.textContent = yourSubmission.value;
    })

    let hoverBtn = document.getElementById('hovered');


    hoverBtn.addEventListener('mouseenter', function () {
        hoverBtn.style.backgroundColor = 'orange';
    })

    hoverBtn.addEventListener('mouseleave', function () {
        hoverBtn.style.backgroundColor = "lightcoral";
    })

    let textColor = document.getElementById('colored-paragraph');

    textColor.addEventListener("dblclick", function () {
        let colors = ['blue', 'green', 'red', 'purple', 'yellow', 'orange', 'gray', 'brown'];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        textColor.style.color = randomColor;

    })


    let spanButton = document.getElementById('spanButton');

    spanButton.addEventListener("click", function () {
        let textDiv = document.getElementById('emptyDiv');
        let spanElement = document.createElement('span');
        let spanText = document.createTextNode('Thy name is Nathaniel');

        spanElement.appendChild(spanText);
        textDiv.appendChild(spanElement);
        document.body.appendChild(textDiv);


    })

    let listedButton = document.getElementById('listedButton');
    let friendCount

    function addFriend() {
        let list = document.getElementById('friends');
       
        for (let i = 0; i < friends.length; i++) {
            let names = document.createElement('li');
            let friendNames = document.createTextNode(friends[i]);
            names.appendChild(friendNames);
            list.appendChild(names);


        }
    }

    let friends = ['Nate', 'Jordan', 'Noelle', 'Nick', 'Courtney', 'Silas', 'Roux', 'Hargrave', 'Knuckles'];

    listedButton.addEventListener("click", addFriend);


})