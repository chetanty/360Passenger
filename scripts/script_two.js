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
        imageElement.src = 'assets/usmap.png';
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
        helloText.innerHTML = 'In 1923, San Francisco\'s streets radiated a dynamic energy, embodying a resilient spirit post-earthquake, characterized by a fusion of historic Victorian architecture, vibrant markets, and occasional glimpses of the latest Roaring Twenties fashion.';
        helloText.style.color = 'white';
        helloText.style.fontSize = '24px';
        helloText.style.fontFamily = 'Orbitron, sans-serif';
        helloText.style.position = 'absolute';
        helloText.style.top = '70px'; 
        helloText.style.left = '10px'; 
        infoOverlay.appendChild(helloText);

        var helloText2 = document.createElement('div');
        helloText2.innerHTML = 'In 1923, San Francisco pulsated with a dynamic political<br> scene, marked by civic engagement and pivotal events.<br> The city\'s political heartbeat echoed tales of societal<br> progress and historic milestones in the United States.';
        helloText2.style.color = 'white';
        helloText2.style.fontSize = '24px';
        helloText2.style.fontFamily = 'Orbitron, sans-serif';
        helloText2.style.position = 'absolute';
        helloText2.style.top = '200px'; 
        helloText2.style.left = '10px'; 
        infoOverlay.appendChild(helloText2);

        var usembImage = document.createElement('img');
        usembImage.src = 'assets/usa_emb.png';
        usembImage.style.width = '15%'; 
        usembImage.style.height = 'auto';
        usembImage.style.display = 'block';
        usembImage.style.top = '350px'; 
        usembImage.style.left = '20px'; 
        usembImage.style.position = 'absolute';
        usembImage.style.bottom = '0'; 
        infoOverlay.appendChild(usembImage);

        var uscoinImage = document.createElement('img');
        uscoinImage.src = 'assets/uscoin.png';
        uscoinImage.style.width = '20%'; 
        uscoinImage.style.height = 'auto';
        uscoinImage.style.display = 'block';
        uscoinImage.style.top = '350px'; 
        uscoinImage.style.left = '280px'; 
        uscoinImage.style.position = 'absolute';
        uscoinImage.style.bottom = '0'; 
        infoOverlay.appendChild(uscoinImage);

        var usflagImage = document.createElement('img');
        usflagImage.src = 'assets/usflag.png';
        usflagImage.style.width = '18%'; 
        usflagImage.style.height = 'auto';
        usflagImage.style.display = 'block';
        usflagImage.style.top = '380px'; 
        usflagImage.style.left = '540px'; 
        usflagImage.style.position = 'absolute';
        usflagImage.style.bottom = '0'; 
        infoOverlay.appendChild(usflagImage);
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

        var usembImage = infoOverlay.querySelector('img[src="assets/us_emb.png"]');
        if (usembImage) {
            infoOverlay.removeChild(usembImage);
        }

        var uscoinImage = infoOverlay.querySelector('img[src="assets/uscoin.png"]');
        if (uscoinImage) {
            infoOverlay.removeChild(uscoinImage);
        }

        var usflagImage = infoOverlay.querySelector('img[src="assets/usflag.png"]');
        if (usflagImage) {
            infoOverlay.removeChild(usflagImage);
        }
    }
}
function toggleExtra() {
var infoOverlay2 = document.getElementById('infoOverlay2');

var isVisible = window.getComputedStyle(infoOverlay2).getPropertyValue('display') !== 'none';

if (!isVisible) {
infoOverlay2.style.display = 'block';

var hText = document.createElement('div');
hText.innerHTML = 'This is what San Francisco looked like exactly 100 years ago by SFGATE-';
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
link2.href = 'https://sfgate.com/sfhistory/article/san-francisco-100-years-ago-17683461.php';
link2.innerHTML = 'sfgate.com/sfhistory/article/san-francisco-100-years-ago-17683461.php';
link2.style.color = 'lightblue';
link2.style.textDecoration = 'underline';
hText2.appendChild(link2);

var hText3 = document.createElement('div');
hText3.innerHTML = 'Streetwise: A Look-Back To 1923 Across San Francisco by OpenSFHistory-';
hText3.style.color = 'white';
hText3.style.fontSize = '24px';
hText3.style.fontFamily = 'Orbitron, sans-serif';
hText3.style.position = 'absolute';
hText3.style.top = '180px';
hText3.style.left = '10px';
infoOverlay2.appendChild(hText3);

var link3 = document.createElement('a');
link3.href = 'https://www.opensfhistory.org/osfhcrucible/2023/01/27/streetwise-a-look-back-to-1923-across-san-francisco/';
link3.innerHTML = 'https://www.opensfhistory.org/osfhcrucible/2023/01/27/streetwise-a-look-back-to-1923-across-san-francisco/';
link3.style.color = 'lightblue';
link3.style.textDecoration = 'underline';
hText3.appendChild(link3);

infoOverlay2.appendChild(hText2);

} else {
infoOverlay2.style.display = 'none';
}
}