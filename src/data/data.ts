interface answersTS {
  value: string;
  correct: boolean;
}
interface quizTS {
  id: number;
  question: string;
  answers: answersTS[];
}
export const quiz: quizTS[] = [
  {
    id: 1,
    question: "Когда мое день рождение?",
    answers: [
      { value: "15.10.2003", correct: true },
      { value: "15.11.2004", correct: false },
      { value: "15.10.2004", correct: false },
      { value: "18.10.2003", correct: false },
    ],
  },
  {
    id: 2,
    question: "Мой любивый цвет?",
    answers: [
      { value: "Синий", correct: false },
      { value: "Белый", correct: false },
      { value: "Черный", correct: true },
      { value: "Красный", correct: false },
    ],
  },
  {
    id: 3,
    question: "Кто мой любимый исполнитель ?",
    answers: [
      { value: "Konfuz", correct: false },
      { value: "ALEKS ATAMAN, FINIK", correct: false },
      { value: "Markul", correct: true },
      { value: "MORGENSHTERN", correct: false },
    ],
  },
  {
    id: 4,
    question: "Куда я хотел поступать в начале 11 классе ?",
    answers: [
      { value: "ВАРБ", correct: true },
      { value: "МЧС", correct: false },
      { value: "ГГУ им. Сухого", correct: false },
      { value: "БГТУ", correct: false },
    ],
  },
  {
    id: 5,
    question: "Какого цветы мои глаза?",
    answers: [
      { value: "Карие", correct: true },
      { value: "Зеленые", correct: false },
      { value: "Влюбленные", correct: false },
      { value: "Голубые", correct: false },
    ],
  },
  {
    id: 6,
    question: "Какое имя меня преследует (жен) ?",
    answers: [
      { value: "Диана", correct: false },
      { value: "Дарья", correct: true },
      { value: "Маргарита", correct: false },
      { value: "Анна", correct: false },
    ],
  },
  {
    id: 7,
    question: "Какой язык программирования мой самый любимый?",

    answers: [
      { value: "JS", correct: true },
      { value: "C++", correct: false },
      { value: "Python", correct: false },
      { value: "C#", correct: false },
    ],
  },
  {
    id: 8,
    question: "Какой у меня рекорд по планке ?",

    answers: [
      { value: "5 минут", correct: false },
      { value: "10 минут", correct: false },
      { value: "15 минут", correct: true },
      { value: "20 минут", correct: false },
    ],
  },
  {
    id: 9,
    question: "Сколько раз я был в Германии ?",

    answers: [
      { value: "1", correct: false },
      { value: "2", correct: true },
      { value: "3", correct: false },
      { value: "4", correct: false },
    ],
  },
  {
    id: 10,
    question: "Какаой у меня велосипед ?",
    answers: [
      { value: "Stells", correct: false },
      { value: "BMX", correct: false },
      { value: "Аист", correct: false },
      { value: "Stinger", correct: true },
    ],
  },
];
