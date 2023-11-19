document.getElementById('scene').addEventListener('loaded', function () {

    setTimeout(function () {

        var camera = document.querySelector('[camera]');

        camera.components['look-controls'].yawObject.rotation.y += Math.PI;
    }, 100);
});

function toggleInfo() {
    var infoOverlay = document.getElementById('infoOverlay');
    if (infoOverlay.style.display === 'none') {
        infoOverlay.style.display = 'block';

        var imageElement = document.createElement('img');
        imageElement.src = 'assets/ams_map1.png';
        imageElement.style.width = '30%'; 
        imageElement.style.height = 'auto';
        imageElement.style.display = 'block';
        imageElement.style.margin = '0 auto'; 
        imageElement.style.position = 'absolute';
        imageElement.style.top = '-5%'; 
        imageElement.style.right = '5%'; 

        imageElement.style.transform = 'translateY(50%)'; 
        infoOverlay.appendChild(imageElement);

        var helloText = document.createElement('div');
        helloText.innerHTML = 'Amsterdam in 1923 whispered tales of gaslit canals and a bohemian spirit. Cobblestone alleys painted a picturesque scene, and the city\'s intimate spaces echoed with timeless traditions.';
        helloText.style.color = 'white';
        helloText.style.fontSize = '24px';
        helloText.style.fontFamily = 'Orbitron, sans-serif';
        helloText.style.position = 'absolute';
        helloText.style.top = '70px'; 
        helloText.style.left = '10px'; 
        infoOverlay.appendChild(helloText);

        var helloText2 = document.createElement('div');
        helloText2.innerHTML = 'In 1923, the Netherlands enjoyed a period of economic<br> stability following the aftermath of World War I.<br>Queen Wilhelmina\'s reign provided a steady hand in<br> guiding the country, contributing to a relatively calm<br> and prosperous atmosphere.';
        helloText2.style.color = 'white';
        helloText2.style.fontSize = '24px';
        helloText2.style.fontFamily = 'Orbitron, sans-serif';
        helloText2.style.position = 'absolute';
        helloText2.style.top = '200px'; 
        helloText2.style.left = '10px'; 
        infoOverlay.appendChild(helloText2);

        var nedembImage = document.createElement('img');
        nedembImage.src = 'assets/nedemb.png';
        nedembImage.style.width = '15%'; 
        nedembImage.style.height = 'auto';
        nedembImage.style.display = 'block';
        nedembImage.style.top = '350px'; 
        nedembImage.style.left = '20px'; 
        nedembImage.style.position = 'absolute';
        nedembImage.style.bottom = '0'; 
        infoOverlay.appendChild(nedembImage);

        var nedcoinImage = document.createElement('img');
        nedcoinImage.src = 'assets/nedcoin.png';
        nedcoinImage.style.width = '15%'; 
        nedcoinImage.style.height = 'auto';
        nedcoinImage.style.display = 'block';
        nedcoinImage.style.top = '370px'; 
        nedcoinImage.style.left = '280px'; 
        nedcoinImage.style.position = 'absolute';
        nedcoinImage.style.bottom = '0'; 
        infoOverlay.appendChild(nedcoinImage);

        var nedflagImage = document.createElement('img');
        nedflagImage.src = 'assets/nedflag.png';
        nedflagImage.style.width = '15%'; 
        nedflagImage.style.height = 'auto';
        nedflagImage.style.display = 'block';
        nedflagImage.style.top = '390px'; 
        nedflagImage.style.left = '540px'; 
        nedflagImage.style.position = 'absolute';
        nedflagImage.style.bottom = '0'; 
        infoOverlay.appendChild(nedflagImage);
    } else {
        infoOverlay.style.display = 'none';

        var imageElement = infoOverlay.querySelector('img');
        var helloText = infoOverlay.querySelector('div');
        if (imageElement) {
            infoOverlay.removeChild(imageElement);
        }
        if (helloText) {
            infoOverlay.removeChild(helloText);
        }

        var nedembImage = infoOverlay.querySelector('img[src="assets/nedemb.png"]');
        if (nedembImage) {
            infoOverlay.removeChild(nedembImage);
        }

        var nedcoinImage = infoOverlay.querySelector('img[src="assets/nedcoin.png"]');
        if (nedcoinImage) {
            infoOverlay.removeChild(nedcoinImage);
        }

        var nedflagImage = infoOverlay.querySelector('img[src="assets/nedflag.png"]');
        if (nedflagImage) {
            infoOverlay.removeChild(nedflagImage);
        }
    }
}
function toggleExtra() {
var infoOverlay2 = document.getElementById('infoOverlay2');

var isVisible = window.getComputedStyle(infoOverlay2).getPropertyValue('display') !== 'none';

if (!isVisible) {
infoOverlay2.style.display = 'block';

var hText = document.createElement('div');
hText.innerHTML = 'Amsterdam in 1923 By Local Amsterdam Authority-';
hText.style.color = 'white';
hText.style.fontSize = '24px';
hText.style.fontFamily = 'Orbitron, sans-serif';
hText.style.position = 'absolute';
hText.style.top = '70px';
hText.style.left = '10px';
infoOverlay2.appendChild(hText);

var hText2 = document.createElement('div');
hText2.style.color = 'white';
hText2.style.fontSize = '24px';
hText2.style.fontFamily = 'Orbitron, sans-serif';
hText2.style.position = 'absolute';
hText2.style.top = '100px';
hText2.style.left = '10px';

var link2 = document.createElement('a');
link2.href = 'https://www.amsterdam.nl/nieuws/achtergrond/amsterdam-1923/';
link2.innerHTML = 'https://www.amsterdam.nl/nieuws/achtergrond/amsterdam-1923/';
link2.style.color = 'lightblue';
link2.style.textDecoration = 'underline';
hText2.appendChild(link2);

var hText3 = document.createElement('div');
hText3.innerHTML = 'Video: incredible footage of 1920s Amsterdam in colour-';
hText3.style.color = 'white';
hText3.style.fontSize = '24px';
hText3.style.fontFamily = 'Orbitron, sans-serif';
hText3.style.position = 'absolute';
hText3.style.top = '180px';
hText3.style.left = '10px';
infoOverlay2.appendChild(hText3);

var link3 = document.createElement('a');
link3.href = 'https://dutchreview.com/culture/video-incredible-footage-of-1920s-amsterdam-in-colour/';
link3.innerHTML = 'https://dutchreview.com/culture/video-incredible-footage-of-1920s-amsterdam-in-colour/';
link3.style.color = 'lightblue';
link3.style.textDecoration = 'underline';
hText3.appendChild(link3);

infoOverlay2.appendChild(hText2);

} else {
infoOverlay2.style.display = 'none';
}
}