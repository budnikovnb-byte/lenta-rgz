let currentRate = 0;

// Получение текущего курса
async function loadCurrentRate(){

    const response = await fetch(
        'https://www.cbr-xml-daily.ru/daily_json.js'
    );

    const data = await response.json();

    currentRate = data.Valute.JPY.Value / data.Valute.JPY.Nominal;

    document.getElementById('currentRate').textContent =
        currentRate.toFixed(4) + ' RUB';
}

loadCurrentRate();

// Конвертация RUB → JPY
document.getElementById('rubToJpy')
.addEventListener('click', () => {

    const rub = parseFloat(
        document.getElementById('rubInput').value
    );

    if(isNaN(rub)) return;

    const jpy = rub / currentRate;

    document.getElementById('result').textContent =
        rub + ' RUB = ' + jpy.toFixed(2) + ' JPY';

});

// Конвертация JPY → RUB
document.getElementById('jpyToRub')
.addEventListener('click', () => {

    const jpy = parseFloat(
        document.getElementById('jpyInput').value
    );

    if(isNaN(jpy)) return;

    const rub = jpy * currentRate;

    document.getElementById('result').textContent =
        jpy + ' JPY = ' + rub.toFixed(2) + ' RUB';

});

// График
const labels = [
    '1','2','3','4','5','6','7',
    '8','9','10','11','12','13','14',
    '15','16','17','18','19','20',
    '21','22','23','24','25','26',
    '27','28','29','30'
];

const values = [
    0.58,0.57,0.59,0.60,0.61,
    0.60,0.59,0.58,0.57,0.58,
    0.59,0.60,0.61,0.62,0.63,
    0.64,0.63,0.62,0.61,0.60,
    0.59,0.58,0.57,0.58,0.59,
    0.60,0.61,0.62,0.61,0.60
];

const ctx = document.getElementById('currencyChart');

const chart = new Chart(ctx, {

    type: 'bar',

    data: {

        labels: labels,

        datasets: [{

            label: 'JPY',

            data: values,

            backgroundColor: '#FFD400',

            borderColor: '#005BBB',

            borderWidth: 2

        }]

    },

    options: {

        responsive: true,

        onClick: (event, elements) => {

            if(elements.length > 0){

                const index = elements[0].index;

                const day = labels[index];

                const value = values[index];

                document.getElementById('chartInfo')
                .textContent =
                    'Дата: ' + day +
                    ' мая 2026 — курс: ' +
                    value + ' RUB';

            }

        }

    }

});