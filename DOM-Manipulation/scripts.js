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
        let spanText = document.createTextNode('This button creates text within a span element');
        spanText.className = 'spanText';


        spanElement.appendChild(spanText);
        textDiv.appendChild(spanElement);
        document.body.appendChild(textDiv);


    })



    let friends = ['Nate', 'Jordan', 'Noelle', 'Nick', 'Courtney', 'Silas', 'Roux', 'Hargrave', 'Knuckles']

    let friendIndex = 0;
    let listedButton = document.getElementById('listedButton');

    listedButton.addEventListener("click", function () {


        let list = document.getElementById('friends');
        // This checks to see if the friend index is 10 or higher and then stops the function so we don't run out of friends
        if (friendIndex >= friends.length) {
            return;
        }

        let name = document.createElement('li');
        // The id will be the text of "friend-li-" & index position of which friend we're currently on, like <li id="friend-li-5">
        // Not fully necessary but I love descriptive IDs and it's something that you will need later on when we get to React
        name.id = "friend-li-" + friendIndex;
        let friendName = document.createTextNode(friends[friendIndex]);
        name.appendChild(friendName);
        list.appendChild(name);
        // After each friend li is created, we'll then go ahead and bump the next index up
        friendIndex++;





    })




})