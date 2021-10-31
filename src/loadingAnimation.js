var runLoadingAnimation = () => {
    var canvas = document.getElementById('loadingAnimation');
    var context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var letters = 'Console.WriteLine("Hello World!");userCount++;defaultUser.Authenticate();var portfolioName="Matt Stark";var languages = ["C#, Javascript, Powershell, SQL"];return new Portolio(portfolioName, languages);Console.WriteLine("Portfolio set up succesfully");';

    var fontSize = 12;
    var columns = canvas.width / fontSize;

    var drops = [];
    for (var i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    var interval;
    var opacity = 1;
    var letterIndex = 0;

    function draw() {
        for (var i = 0; i < drops.length; i++) {
            var text = letters[letterIndex];
            letterIndex++;
            if (letterIndex >= letters.length) letterIndex = 0;

            context.fillStyle = '#0f0';
            context.fillText(text, i * fontSize, drops[i] * fontSize+1);
            drops[i]++;
            
            if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
                clearInterval(interval);
                FadeCanvasOut();
            }
        }
    }

    function FadeCanvasOut() {
        if (opacity>0) {
           opacity -= .05;
           setTimeout(FadeCanvasOut,30);
        }
        canvas.style.opacity = opacity;
     }

    interval = setInterval(draw, 10);
}

export { runLoadingAnimation };
