function doIt()
{
    //randomly pick phrase
    //display it
    //alert("Figure It ");
    var myTargetParagraph = document.getElementById('fortune');
    //way to refer to paragraph element
    var randomFortune = [
        "You've know the answer all the time",
        'No, but maybe',
        'How should I know',
        'What do you think',
        'Probably, but highly unlikely'
    ]; //0-8 Index need to created to contain all fortunes to choose from

    var randomNumber = Math.floor(Math.random() * randomFortune.length);
    //create an array to hold the differnt fortunes
    myTargetParagraph.innerHTML = randomFortune[randomNumber];
}

