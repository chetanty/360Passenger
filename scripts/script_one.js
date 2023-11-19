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
        imageElement.src = 'assets/lon_map.png';
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
        helloText.innerHTML = 'In 1923, London\'s streets exuded an air of post-war resilience and burgeoning modernity, with a blend of elegant Edwardian architecture, bustling markets, and the occasional glimpse of fashionable flapper style.';
        helloText.style.color = 'white';
        helloText.style.fontSize = '24px';
        helloText.style.fontFamily = 'Orbitron, sans-serif';
        helloText.style.position = 'absolute';
        helloText.style.top = '70px'; 
        helloText.style.left = '10px'; 
        infoOverlay.appendChild(helloText);

        var helloText2 = document.createElement('div');
        helloText2.innerHTML = 'In 1923, London exuded an electrifying blend of post-war<br> resurgence and cultural dynamism, where cobblestone<br>  streets whispered tales of resilience, and the city\'s <br>heartbeat echoed a harmonious rhythm of economic<br> prosperity and vibrant innovation.';
        helloText2.style.color = 'white';
        helloText2.style.fontSize = '24px';
        helloText2.style.fontFamily = 'Orbitron, sans-serif';
        helloText2.style.position = 'absolute';
        helloText2.style.top = '200px'; 
        helloText2.style.left = '10px'; 
        infoOverlay.appendChild(helloText2);

        var lonembImage = document.createElement('img');
        lonembImage.src = 'assets/lonemb.png';
        lonembImage.style.width = '15%'; 
        lonembImage.style.height = 'auto';
        lonembImage.style.display = 'block';
        lonembImage.style.top = '350px'; 
        lonembImage.style.left = '20px'; 
        lonembImage.style.position = 'absolute';
        lonembImage.style.bottom = '0'; 
        infoOverlay.appendChild(lonembImage);

        var loncoinImage = document.createElement('img');
        loncoinImage.src = 'assets/loncoin.png';
        loncoinImage.style.width = '14%'; 
        loncoinImage.style.height = 'auto';
        loncoinImage.style.display = 'block';
        loncoinImage.style.top = '360px'; 
        loncoinImage.style.left = '280px'; 
        loncoinImage.style.position = 'absolute';
        loncoinImage.style.bottom = '0'; 
        infoOverlay.appendChild(loncoinImage);

        var lonflagImage = document.createElement('img');
        lonflagImage.src = 'assets/lonflag.png';
        lonflagImage.style.width = '18%'; 
        lonflagImage.style.height = 'auto';
        lonflagImage.style.display = 'block';
        lonflagImage.style.top = '390px'; 
        lonflagImage.style.left = '540px'; 
        lonflagImage.style.position = 'absolute';
        lonflagImage.style.bottom = '0'; 
        infoOverlay.appendChild(lonflagImage);
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

        var nedembImage = infoOverlay.querySelector('img[src="assets/lonemb.png"]');
        if (nedembImage) {
            infoOverlay.removeChild(nedembImage);
        }

        var nedcoinImage = infoOverlay.querySelector('img[src="assets/loncoin.png"]');
        if (nedcoinImage) {
            infoOverlay.removeChild(nedcoinImage);
        }

        var lonflagImage = infoOverlay.querySelector('img[src="assets/lonflag.png"]');
        if (lonflagImage) {
            infoOverlay.removeChild(lonflagImage);
        }
    }
}

function toggleExtra() {
var infoOverlay2 = document.getElementById('infoOverlay2');

var isVisible = window.getComputedStyle(infoOverlay2).getPropertyValue('display') !== 'none';

if (!isVisible) {
infoOverlay2.style.display = 'block';

var hText = document.createElement('div');
hText.innerHTML = 'The 1920s in Britain by Historic UK-';
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
link2.href = 'https://www.historic-uk.com/HistoryUK/HistoryofBritain/The-1920s-in-Britain/';
link2.innerHTML = 'https://www.historic-uk.com/HistoryUK/HistoryofBritain/The-1920s-in-Britain/';
link2.style.color = 'lightblue';
link2.style.textDecoration = 'underline';
hText2.appendChild(link2);

var hText3 = document.createElement('div');
hText3.innerHTML = '1920s London: Birth of the Modern City by City of London-';
hText3.style.color = 'white';
hText3.style.fontSize = '24px';
hText3.style.fontFamily = 'Orbitron, sans-serif';
hText3.style.position = 'absolute';
hText3.style.top = '180px';
hText3.style.left = '10px';
infoOverlay2.appendChild(hText3);

var link3 = document.createElement('a');
link3.href = 'https://www.cityoflondon.gov.uk/things-to-do/history-and-heritage/london-metropolitan-archives/collections/1920s-london-birth-of-the-modern-city';
link3.innerHTML = 'https://www.cityoflondon.gov.uk/things-to-do/history-and-heritage/london-metropolitan-archives/collections/1920s-london-birth-of-the-modern-city';
link3.style.color = 'lightblue';
link3.style.textDecoration = 'underline';
hText3.appendChild(link3);

infoOverlay2.appendChild(hText2);

} else {
infoOverlay2.style.display = 'none';
}
}