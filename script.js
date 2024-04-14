const shortBtn = document.getElementById('shorten-btn');
const reloadBtn = document.getElementById('reload-btn');

shortBtn.addEventListener('click', () => {
    const longUrl = document.getElementById('longUrl').value;
    const accessToken = 'c4cc4ee3ff99429f3156e3372ad34d94ebe55b6e'; 
    const apiUrl = `https://api-ssl.bitly.com/v4/shorten`;
    const shortUrlTextarea = document.getElementById("shortUrl");

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            long_url: longUrl
        })
    })
    .then(response => response.json())
    .then(data => {
        shortUrlTextarea.value = data.link;
    })
    .catch(error => {
        console.error('Error:', error);
        shortUrlTextarea.value = "Error: Unable to Shorten URL";
    });
});

reloadBtn.addEventListener('click', () => location.reload());

const shortUrlTextarea = document.getElementById("shortUrl");
const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener('click', () => {
    shortUrlTextarea.select();
    document.execCommand('copy');
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
        copyBtn.textContent = 'Copy';
    }, 1500); 
});