// alert('hola, you know the drill!');

// -->> A.  The Temperature Converter - It’s cold out! Let's make a converter based on the steps below and display the converted temperature result.Use template literals Only to display the result
// • Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".
// • Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

// --> A":

function temperatureConverter(letNum) {
    letNum = parseFloat(letNum);
    document.getElementById("outputCelcius").innerHTML = (letNum - 32) / 1.8;
}



function temperatureConverter(letFar) {
    letFar = parseFloat(letFar);
    document.getElementById("outputFahrenheit").innerHTML = (letFar * 1.8) + 32;
}