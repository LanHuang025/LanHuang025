async function getdata(url) {
    // Storing response
    const response = await fetch(url)
  
    // Storing data in form of JSON
    var data = await response.json();
    return data
}