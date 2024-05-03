const req = async function() {
    const resp = await fetch('http://localhost:5173/src/php/index.php');
    const json = await resp.json();
    console.log(json);
}
req();