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
        imageElement.src = 'assets/mon_map.png';
        imageElement.style.width = '30%'; 
        imageElement.style.height = 'auto';
        imageElement.style.display = 'block';
        imageElement.style.margin = '0 auto'; 
        imageElement.style.position = 'absolute';
        imageElement.style.top = '5%'; 
        imageElement.style.right = '5%'; 

        imageElement.style.transform = 'translateY(50%)';
        infoOverlay.appendChild(imageElement);

        var helloText = document.createElement('div');
        helloText.innerHTML = 'In 1923, Montreal\'s streets whispered tales of cultural richness and dynamic city life. The urban thoroughfares echoed the vibrancy of the time, where diverse communities converged amid a backdrop of evolving societal narratives and the city\'s unique historical rhythm.';
        helloText.style.color = 'white';
        helloText.style.fontSize = '24px';
        helloText.style.fontFamily = 'Orbitron, sans-serif';
        helloText.style.position = 'absolute';
        helloText.style.top = '70px'; 
        helloText.style.left = '10px';
        infoOverlay.appendChild(helloText);

        var helloText2 = document.createElement('div');
        helloText2.innerHTML = 'In 1923, Montreal thrived with a vibrant cultural tapestry<br> and significant societal moments. The city\'s pulse reflected<br> a dynamic blend of cultural richness, societal evolution,<br> and noteworthy events, shaping its unique narrative.';
        helloText2.style.color = 'white';
        helloText2.style.fontSize = '24px';
        helloText2.style.fontFamily = 'Orbitron, sans-serif';
        helloText2.style.position = 'absolute';
        helloText2.style.top = '200px'; 
        helloText2.style.left = '10px'; 
        infoOverlay.appendChild(helloText2);

        var monembImage = document.createElement('img');
        monembImage.src = 'assets/monemb.png';
        monembImage.style.width = '13%'; 
        monembImage.style.height = 'auto';
        monembImage.style.display = 'block';
        monembImage.style.top = '320px'; 
        monembImage.style.left = '20px'; 
        monembImage.style.position = 'absolute';
        monembImage.style.bottom = '0'; 
        infoOverlay.appendChild(monembImage);

        var moncoinImage = document.createElement('img');
        moncoinImage.src = 'assets/mon_coin.jpg';
        moncoinImage.style.width = '22%'; 
        moncoinImage.style.height = 'auto';
        moncoinImage.style.display = 'block';
        moncoinImage.style.top = '380px'; 
        moncoinImage.style.left = '210px'; 
        moncoinImage.style.position = 'absolute';
        moncoinImage.style.bottom = '0'; 
        infoOverlay.appendChild(moncoinImage);

        var monflagImage = document.createElement('img');
        monflagImage.src = 'assets/monflag.png';
        monflagImage.style.width = '22%'; 
        monflagImage.style.height = 'auto';
        monflagImage.style.display = 'block';
        monflagImage.style.top = '380px'; 
        monflagImage.style.left = '500px'; 
        monflagImage.style.position = 'absolute';
        monflagImage.style.bottom = '0'; 
        infoOverlay.appendChild(monflagImage);
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

        var monembImage = infoOverlay.querySelector('img[src="assets/monemb.png"]');
        if (monembImage) {
            infoOverlay.removeChild(monembImage);
        }

        var moncoinImage = infoOverlay.querySelector('img[src="assets/mon_coin.png"]');
        if (moncoinImage) {
            infoOverlay.removeChild(moncoinImage);
        }

        var monflagImage = infoOverlay.querySelector('img[src="assets/monflag.png"]');
        if (monflagImage) {
            infoOverlay.removeChild(monflagImage);
        }
    }
}

function toggleExtra() {
var infoOverlay2 = document.getElementById('infoOverlay2');

var isVisible = window.getComputedStyle(infoOverlay2).getPropertyValue('display') !== 'none';

if (!isVisible) {
infoOverlay2.style.display = 'block';

var hText = document.createElement('div');
hText.innerHTML = 'Montreal History by key date-';
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
link2.href = 'https://imtl.org/montreal/histoire.php?periode=1920';
link2.innerHTML = 'https://imtl.org/montreal/histoire.php?periode=1920';
link2.style.color = 'lightblue';
link2.style.textDecoration = 'underline';
hText2.appendChild(link2);

var hText3 = document.createElement('div');
hText3.innerHTML = 'Bonsecours Market, Montreal, 1923 by James Lillie Graham on Alan Klinkoff Gallery- ';
hText3.style.color = 'white';
hText3.style.fontSize = '24px';
hText3.style.fontFamily = 'Orbitron, sans-serif';
hText3.style.position = 'absolute';
hText3.style.top = '180px';
hText3.style.left = '10px';
infoOverlay2.appendChild(hText3);

var link3 = document.createElement('a');
link3.href = 'https://www.klinkhoff.ca/notable-sales/9039-james-lillie-graham-bonsecours-market-montreal-1923-circa/';
link3.innerHTML = 'https://www.klinkhoff.ca/notable-sales/9039-james-lillie-graham-bonsecours-market-montreal-1923-circa/';
link3.style.color = 'lightblue';
link3.style.textDecoration = 'underline';
hText3.appendChild(link3);

infoOverlay2.appendChild(hText2);

} else {
infoOverlay2.style.display = 'none';
}
}