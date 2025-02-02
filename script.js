document.addEventListener('DOMContentLoaded', function() {
    let isCelsius = false; 

    document.getElementById('temp-unit').addEventListener('click', function() {
        const tempValueElement = document.getElementById('temp-value');
        const lowTempElement = document.getElementById('low-temp');
        const highTempElement = document.getElementById('high-temp');
        const feelsLikeTempElement = document.getElementById('feels-like-temp');

        let currentTemp = parseFloat(tempValueElement.textContent);
        let lowTemp = parseFloat(lowTempElement.textContent);
        let highTemp = parseFloat(highTempElement.textContent);
        let feelsLikeTemp = parseFloat(feelsLikeTempElement.textContent);

        
        const hourlyTemps = [
            document.getElementById('hourly-temp-0'),
            document.getElementById('hourly-temp-1'),
            document.getElementById('hourly-temp-2'),
            document.getElementById('hourly-temp-3'),
            document.getElementById('hourly-temp-4'),
            document.getElementById('hourly-temp-5')
        ];

        const weeklyTemps = [
            { low: document.getElementById('monday-low'), high: document.getElementById('monday-high') },
            { low: document.getElementById('tuesday-low'), high: document.getElementById('tuesday-high') },
            { low: document.getElementById('wednesday-low'), high: document.getElementById('wednesday-high') },
            { low: document.getElementById('thursday-low'), high: document.getElementById('thursday-high') },
            { low: document.getElementById('friday-low'), high: document.getElementById('friday-high') },
            { low: document.getElementById('saturday-low'), high: document.getElementById('saturday-high') }
        ];

        if (isCelsius) {
            currentTemp = (currentTemp * 9/5) + 32;
            lowTemp = (lowTemp * 9/5) + 32;
            highTemp = (highTemp * 9/5) + 32;
            feelsLikeTemp = (feelsLikeTemp * 9/5) + 32;

            hourlyTemps.forEach((tempElement) => {
                let hourlyTemp = parseFloat(tempElement.textContent);
                tempElement.textContent = Math.round((hourlyTemp * 9/5) + 32) + '°';
            });

            weeklyTemps.forEach(({ low, high }) => {
                let lowTemp = parseFloat(low.textContent);
                let highTemp = parseFloat(high.textContent);
                low.textContent = Math.round((lowTemp * 9/5) + 32) + '°';
                high.textContent = Math.round((highTemp * 9/5) + 32) + '°';
            });

            tempValueElement.textContent = Math.round(currentTemp);
            lowTempElement.textContent = Math.round(lowTemp);
            highTempElement.textContent = Math.round(highTemp);
            feelsLikeTempElement.textContent = Math.round(feelsLikeTemp);
            this.textContent = '°F';
        } else {
            currentTemp = (currentTemp - 32) * 5/9;
            lowTemp = (lowTemp - 32) * 5/9;
            highTemp = (highTemp - 32) * 5/9;
            feelsLikeTemp = (feelsLikeTemp - 32) * 5/9;

            hourlyTemps.forEach((tempElement) => {
                let hourlyTemp = parseFloat(tempElement.textContent);
                tempElement.textContent = Math.round((hourlyTemp - 32) * 5/9) + '°';
            });

            weeklyTemps.forEach(({ low, high }) => {
                let lowTemp = parseFloat(low.textContent);
                let highTemp = parseFloat(high.textContent);
                low.textContent = Math.round((lowTemp - 32) * 5/9) + '°';
                high.textContent = Math.round((highTemp - 32) * 5/9) + '°';
            });

            tempValueElement.textContent = Math.round(currentTemp);
            lowTempElement.textContent = Math.round(lowTemp);
            highTempElement.textContent = Math.round(highTemp);
            feelsLikeTempElement.textContent = Math.round(feelsLikeTemp);
            this.textContent = '°C';
        }

        isCelsius = !isCelsius; 
    });
}); 