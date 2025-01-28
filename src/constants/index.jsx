import { MonitorCheck } from "lucide-react";
import { BotMessageSquare  } from "lucide-react";
import { CirclePercent  } from "lucide-react";
import { Users } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { Import } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Наши преимущества", href: "#features" },
  { label: "Учебный процесс", href: "#work" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Отзывы", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "Очень информативный и полезный курс. Подходит для новичков. Рекомендую!",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Большим плюсом считаю возможность онлайн-общения с менторами.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "После прохождения курса чувствую, что мои знания значительно выросли. Спасибо!",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Обучение проходило в легкой и в то же время познавательной форме. Так держать!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "Лучшие курсы на современном рынке онлайн-обучения. Однозначно советую.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "После прохождения курсов меня приняли на работу в крупную компанию. Спасибо!",
  },
];

export const features = [
  {
    icon: <MonitorCheck />,
    text: "Современная платформа",
    description:
      "Мы организовали учебный процесс на удобной и современной платформе.",
  },
  {
    icon: <BotMessageSquare />,
    text: "Поддержка менторов",
    description:
      "Во время обучения наши менторы буду готовы всегда придти к вам на помощь.",
  },
  {
    icon: <CirclePercent />,
    text: "Удобная ценовая политика",
    description:
      "Для обучения у нас предусмотрено несколько тарифных планов.",
  },
  {
    icon: <Users />,
    text: "Гарантированные стажировки",
    description:
      "Мы обеспечим вас стажировками для получения практического опыта.",
  },
  {
    icon: <BookOpenText />,
    text: "Учебные материалы",
    description:
      "На наших курсах только самые актуальные учебные материалы, написанные простым языком.",
  },
  {
    icon: <Import />,
    text: "Сохраняем ваш прогресс",
    description:
      "Все курсы, которые вы прошли останутся доступными для вас даже после окончания обучения.",
  },
];

export const checklistItems = [
  {
    title: "Открываете учебный материал",
    description:
      "В определенные даты открываются новые блоки с теоретическим учебным материалом.",
  },
  {
    title: "Выполняете практические задания",
    description:
      "После прохождения теории для закрепления материалов нужно выполнить практику.",
  },
  {
    title: "Сдаете финальную работу",
    description:
      "В конце обучения вы готовите финальный проект для подтверждения полученных знаний.",
  },
  {
    title: "Получаете сертификат",
    description:
      "После приёмки финального проекта вам отправляется электронный сертификат об окончании курсов.",
  },
];

export const pricingOptions = [
  {
    title: "Базовый",
    price: "$100",
    features: [
      "Доступ ко всем учебным материалам",
      "Поддержка менторов",
      "1 онлайн-консультация с менторами",
    ],
  },
  {
    title: "Оптимальный",
    price: "$250",
    features: [
		"Доступ ко всем учебным материалам",
		"Поддержка менторов",
      "10 онлайн-консультаций с менторами",

    ],
  },
  {
    title: "VIP",
    price: "$500",
    features: [
		"Доступ ко всем учебным материалам",
		"Поддержка менторов",
      "30 онлайн-консультаций с менторами",

    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Начало обучения" },
  { href: "#", text: "Что нужно знать" },
  { href: "#", text: "Форум студентов" },

];

export const platformLinks = [
  { href: "#", text: "Наши возможности" },
  { href: "#", text: "Инструменты" },
  { href: "#", text: "Требования дл ПК" },

];

export const communityLinks = [
  { href: "#", text: "События VCourses" },
  { href: "#", text: "Стажировки для студентов" },
  { href: "#", text: "Митапы и хакатоны" },

];
