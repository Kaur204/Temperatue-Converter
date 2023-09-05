document.addEventListener("DOMContentLoaded", function () {
    const inputTempCelsius = document.getElementById("CTemp");
    const inputTempFahrenheit = document.getElementById("FTemp");
    const inputTempKelvin = document.getElementById("KTemp");

    inputTempCelsius.addEventListener("input", convertCelsius);
    inputTempFahrenheit.addEventListener("input", convertFahrenheit);
    inputTempKelvin.addEventListener("input", convertKelvin);

    function convertCelsius() {
        const celsiusValue = parseFloat(inputTempCelsius.value);
        const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
        const kelvinValue = celsiusValue + 273.15;

        inputTempFahrenheit.value = fahrenheitValue.toFixed(2);
        inputTempKelvin.value = kelvinValue.toFixed(2);
    }

    function convertFahrenheit() {
        const fahrenheitValue = parseFloat(inputTempFahrenheit.value);
        const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
        const kelvinValue = celsiusValue + 273.15;

        inputTempCelsius.value = celsiusValue.toFixed(2);
        inputTempKelvin.value = kelvinValue.toFixed(2);
    }
    function convertKelvin() {
        const kelvinValue = parseFloat(inputTempKelvin.value);
        const celsiusValue = kelvinValue - 273.15;
        const fahrenheitValue = (celsiusValue * 9 / 5) + 32;

        inputTempCelsius.value = celsiusValue.toFixed(2);
        inputTempFahrenheit.value = fahrenheitValue.toFixed(2);
    }


});
