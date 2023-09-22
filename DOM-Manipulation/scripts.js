document.addEventListener("DOMContentLoaded", function() {
    
    let alertButton = document.createElement('button');
    let btnText = document.createTextNode('Press me!');
    alertButton.append(btnText);
    alertButton.className = 'button-styles';
    document.body.appendChild(alertButton);

    alertButton.addEventListener("click", function() {
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
    
    subButton.addEventListener("click", function(event) {
        event.preventDefault();
        output.textContent = yourSubmission.value;
    })

    let hoverBtn = document.getElementById('hovered');

    let colors = ['blue', 'green', 'red', 'purple', 'yellow', 'orange', 'gray', 'brown'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    hoverBtn.addEventListener('mouseenter', function(){
        hoverBtn.style.backgroundColor = 'orange';
    })

    hoverBtn.addEventListener('mouseleave', function() {
        hoverBtn.style.backgroundColor = "lightcoral";
    })
    

   
})