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
        imageElement.src = 'assets/tok_map.png';
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
        helloText.innerHTML = 'In 1923, Tokyo\'s streets, blending traditional wooden structures with emerging modern buildings, mirrored the city\'s transition with whispers of resilience and cultural evolution amid cobbled alleys and bustling markets.';
        helloText.style.color = 'white';
        helloText.style.fontSize = '24px';
        helloText.style.fontFamily = 'Orbitron, sans-serif';
        helloText.style.position = 'absolute';
        helloText.style.top = '70px'; 
        helloText.style.left = '10px'; 
        infoOverlay.appendChild(helloText);

        var helloText2 = document.createElement('div');
        helloText2.innerHTML = 'In 1923, life in Tokyo unfolded against a backdrop of<br> cultural dynamism and societal transformation. The city\'s<br> inhabitants experienced a kaleidoscope of traditions and<br> modernity, with bustling markets, traditional tea houses,<br> and emerging urban spaces. ';
        helloText2.style.color = 'white';
        helloText2.style.fontSize = '24px';
        helloText2.style.fontFamily = 'Orbitron, sans-serif';
        helloText2.style.position = 'absolute';
        helloText2.style.top = '200px'; 
        helloText2.style.left = '10px'; 
        infoOverlay.appendChild(helloText2);

        var tokembImage = document.createElement('img');
        tokembImage.src = 'assets/tokemb.png';
        tokembImage.style.width = '15%'; 
        tokembImage.style.height = 'auto';
        tokembImage.style.display = 'block';
        tokembImage.style.top = '360px'; 
        tokembImage.style.left = '20px'; 
        tokembImage.style.position = 'absolute';
        tokembImage.style.bottom = '0'; 
        infoOverlay.appendChild(tokembImage);

        var tokcoinImage = document.createElement('img');
        tokcoinImage.src = 'assets/tok_coin.png';
        tokcoinImage.style.width = '18%'; 
        tokcoinImage.style.height = 'auto';
        tokcoinImage.style.display = 'block';
        tokcoinImage.style.top = '350px'; 
        tokcoinImage.style.left = '240px'; 
        tokcoinImage.style.position = 'absolute';
        tokcoinImage.style.bottom = '0'; 
        infoOverlay.appendChild(tokcoinImage);

        var tokflagImage = document.createElement('img');
        tokflagImage.src = 'assets/tok_flag.png';
        tokflagImage.style.width = '18%'; 
        tokflagImage.style.height = 'auto';
        tokflagImage.style.display = 'block';
        tokflagImage.style.top = '370px'; 
        tokflagImage.style.left = '500px'; 
        tokflagImage.style.position = 'absolute';
        tokflagImage.style.bottom = '0'; 
        infoOverlay.appendChild(tokflagImage);
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

        var tokembImage = infoOverlay.querySelector('img[src="assets/tokemb.png"]');
        if (tokembImage) {
            infoOverlay.removeChild(tokembImage);
        }

        var tokcoinImage = infoOverlay.querySelector('img[src="assets/tok_coin.png"]');
        if (tokcoinImage) {
            infoOverlay.removeChild(tokcoinImage);
        }

        var tokflagImage = infoOverlay.querySelector('img[src="assets/tok_flag.png"]');
        if (tokflagImage) {
            infoOverlay.removeChild(tokflagImage);
        }
    }
}

function toggleExtra() {
var infoOverlay2 = document.getElementById('infoOverlay2');

var isVisible = window.getComputedStyle(infoOverlay2).getPropertyValue('display') !== 'none';

if (!isVisible) {
infoOverlay2.style.display = 'block';

var hText = document.createElement('div');
hText.innerHTML = 'TOKYO’S HISTORY, GEOGRAPHY, AND POPULATION by Tokyo Metropolitan Government-';
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
link2.href = 'https://www.metro.tokyo.lg.jp/ENGLISH/ABOUT/HISTORY/history01.htm';
link2.innerHTML = 'https://www.metro.tokyo.lg.jp/ENGLISH/ABOUT/HISTORY/history01.htm';
link2.style.color = 'lightblue';
link2.style.textDecoration = 'underline';
hText2.appendChild(link2);

var hText3 = document.createElement('div');
hText3.innerHTML = '1920\'s Tokyo Japan | Nostalgic History in Color-<br>';
hText3.style.color = 'white';
hText3.style.fontSize = '24px';
hText3.style.fontFamily = 'Orbitron, sans-serif';
hText3.style.position = 'absolute';
hText3.style.top = '180px';
hText3.style.left = '10px';
infoOverlay2.appendChild(hText3);

var link3 = document.createElement('a');
link3.href = 'https://www.youtube.com/watch?v=_pM6m9Z-vxE';
link3.innerHTML = 'https://www.youtube.com/watch?v=_pM6m9Z-vxE';
link3.style.color = 'lightblue';
link3.style.textDecoration = 'underline';
hText3.appendChild(link3);

infoOverlay2.appendChild(hText2);

} else {
infoOverlay2.style.display = 'none';
}
}