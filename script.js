// Массив данных оценок (можно расширять)
let grades = [
  { studentName:'Иван Иванов', subject:'Математика', grade:'5', date:'2023-10-01' },
  { studentName:'Мария Петрова', subject:'Русский язык', grade:'4', date:'2023-10-02' },
];

// Функция для отображения таблицы оценок
function renderGrades() {
  const tbody = document.querySelector('#gradesTable tbody');
  tbody.innerHTML = '';

  grades.forEach((item) => {
      const tr = document.createElement('tr');

      for (let key in item) {
          const td = document.createElement('td');
          td.textContent = item[key];
          tr.appendChild(td);
      }

      tbody.appendChild(tr);
      
      // Добавляем плавное появление строки
      tr.classList.add('fade-in');
  });
}

// Обработчик кнопки показать/скрыть таблицу
document.getElementById('toggleTableBtn').addEventListener('click', () => {
   const section = document.getElementById('gradesSection');
   section.classList.toggle('hidden');
});

// Обработка формы добавления оценки
document.getElementById('addGradeForm').addEventListener('submit', (e) => {
   e.preventDefault();

   const studentName = document.getElementById('studentName').value.trim();
   const subject = document.getElementById('subject').value.trim();
   const grade = document.getElementById('grade').value.trim();
   const date = document.getElementById('date').value;

   if (studentName && subject && grade && date) {
       grades.push({ studentName, subject, grade, date });
       renderGrades();

       // Очистить форму
       e.target.reset();
   }
});

// Изначально отображаем таблицу
renderGrades();
