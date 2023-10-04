$(document).ready(function () {
    let scaryButton = $('#scaryButton');
    let fullContainer = $('#container');
    let responseContainer = $('#responseContainer');
    let submissionContainer = $('#submissionContainer');
    let scaryButtonResponse = $('#scaryButtonResponse');
    let yourResponse = $('#yourResponse');
    let outPut = $('#outputJQ');
    let hoveredElement = $('#hoveredContainer');
    let coloredParagraph = $('#paragraphSelector');
    let differentButton = $('#horribleButton');
    let usefulButton = $('#usefulButton');
   




    scaryButton.on("click", function () {

        let alertMessage = $('<div id="alertClass">Sorry, Try Again Later</div>');

        alertMessage.css({

            'text-align': 'center',
            'justify-content': 'center',
            'color': 'black',
            'font': 'bolder',
            'font-size': '40px'
        })
        responseContainer.append(alertMessage);



    });

    scaryButtonResponse.on("click", function (event) {
        event.preventDefault();
        yourNameJQ = yourResponse.val();
        let responseText = document.createTextNode(yourNameJQ);
        outPut.append(responseText);

        outPut.css({
            'text-align': 'center',
            'justify-content': 'center',
            'color': 'black',
            'font': 'bolder',
            'font-size': '40px'
        })

    });

    hoveredElement.on("mouseenter", function () {
        hoveredElement.css({
            'background-color': 'brown',
            'font': 'bolder',
            'font-size': '40px',
            'color': 'orange'
        })

    })

    hoveredElement.on("mouseleave", function () {
        hoveredElement.css({
            'background-color': 'grey',
            'font': 'bolder',
            'font-size': '40px',
            'color': 'black'
        })

    })


    coloredParagraph.on("dblclick", function () {
        let colors = ['blue', 'green', 'red', 'purple', 'yellow', 'orange', 'gray', 'brown'];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];

        coloredParagraph.css({
            'color': randomColor,
            'cursor': 'pointer',

        })
    })

    let emptydivJQ = $('<div></div>').css({
        'padding': 'auto',
        'display': 'flex',
        'flex-direction': 'column',
        'text-align': 'center',
        'margin': 'auto',
        'height': '200px',
        'width': '400px',
        'justify-content': 'center',
        'align-items': 'center'
    }).insertAfter(usefulButton);

    usefulButton.on("click", function () {
        let spanElementJQ = $('<span class="red">Nate Mills</span>');

        spanElementJQ.css({
            'font': 'italic',
            'font-size': '25px'
        })

        emptydivJQ.append(spanElementJQ);
    })


    let friendsJQ = ['Nate', 'Jordan', 'Noelle', 'Nick', 'Courtney', 'Silas', 'Roux', 'Hargrave', 'Knuckles']
    let friendCount = 0;




    differentButton.on("click", function () {
        let listJQ = $('#friendsList');
        if (friendCount >= friendsJQ.length) {
            return;
        }
        let listedNames = $('<li class="red"></li>');
        listedNames.id = "friend-li-" + friendCount;
        let friendsNames = document.createTextNode(friendsJQ[friendCount]);
        listedNames.append(friendsNames);
        listJQ.append(listedNames);

        friendCount++;

    })









    //CSS below




    responseContainer.css({
        'padding': 'auto',
        'display': 'flex',
        'flex-direction': 'column',
        'text-align': 'center',
        'margin': 'auto',
        'height': '200px',
        'width': '400px',
        'justify-content': 'center',
        'align-items': 'center'


    })


    submissionContainer.css({
        'padding': 'auto',
        'display': 'flex',
        'flex-direction': 'column',
        'text-align': 'center',
        'margin': 'auto',
        'height': '200px',
        'width': '400px',
        'justify-content': 'center',
        'align-items': 'center'


    })

    hoveredElement.css({
        'background-color': 'lightgrey',
        'padding': 'auto',
        'display': 'flex',
        'flex-direction': 'column',
        'text-align': 'center',
        'margin': 'auto',
        'height': '200px',
        'width': '400px',
        'justify-content': 'center',
        'align-items': 'center'


    })


    fullContainer.css({
        'text-align': 'center',
        'display': 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
        'align-items': 'center',
        'margin': 'auto',
        'padding': 'auto'
    })

    scaryButtonResponse.css({
        'border': '40px',
        'cursor': 'pointer',
        'border': 'red dashed 1em',
        'padding': '1em',
        'margin': '1em'

    })


    usefulButton.css({
        'border': '15px',
        'cursor': 'pointer',
        'border': 'lightblue solid 1em',
        'padding': '1em',
        'margin': '1em'
    })

    scaryButton.css({
        'border': '40px',
        'cursor': 'pointer',
        'border': 'red dashed 1em',
        'padding': '1em',
        'margin': '1em'

    })

    differentButton.css({
        'border': '15px',
        'cursor': 'pointer',
        'border': 'lightblue solid 1em',
        'padding': '1em',
        'margin': '1em'
    })

    hoveredElement.css({
        'font': 'bolder',
        'font-size': '40px'

    })
    coloredParagraph.css({
        'font': 'bolder',
        'font-size': '25px'
    })


})

