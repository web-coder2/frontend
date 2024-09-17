  const calculateButton = document.getElementById('calculate-button');
   const resultDiv = document.getElementById('result');

   calculateButton.addEventListener('click', () => {
     const area = parseFloat(document.getElementById('area').value);
     const type = document.getElementById('type').value;

     // Проверка на заполненность полей
     if (isNaN(area) || area <= 0) {
       alert('Пожалуйста, введите корректную площадь!');
       return;
     }

     // Расчет стоимости (замените на ваш алгоритм)
     let price = 0;
     if (type === 'cosmetic') {
       price = area * 1000; // 1000 рублей за м² для косметического ремонта
     } else if (type === 'капитальный') {
       price = area * 2000; // 2000 рублей за м² для капитального ремонта
     }

     // Вывод результата
     resultDiv.innerHTML = 'Примерная стоимость: ' + price + ' рублей';
   });