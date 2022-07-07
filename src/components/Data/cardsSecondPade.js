import one from "../../assets/images/one.png";
import two from "../../assets/images/two.png";
import three from "../../assets/images/three.png";

import main_gif_tablet from "../../assets/images/main_gif_tablet.gif";
import cardGif_3 from "../../assets/images/cardGif_3.gif";
import arrow_navi_right from "../../assets/images/arrow_navi_right.png";
import link from "../../assets/images/link.png";
import tekla from "../../assets/images/tekla.png";
import trimble from "../../assets/images/trimble.png";

export const cardsContent = [
  {
    id: 0,
    number: one,
    alt: 1,
    header: "эскизное 3d-моделирование",
    gif: main_gif_tablet,
    navi: [
      {
        id: 0,
        src: link,
        alt: "link",
        text: "sketchup",
        href: "javascript:void(0)",
        src2: arrow_navi_right,
        alt2: "arrow_navi_right",
      },
    ],
    items: [
      {
        id: 0,
        text: "Быстрое, простое и качественное создание 3D-моделей любых объектов по чертежу, изображению, фотографии и т.д.",
      },
      {
        id: 1,
        text: "Оформление проектной документации по требованиям ЕСКД и СПДС, создание отчётов и спецификаций",
      },
      {
        id: 2,
        text: "Крупнейшая библиотека бесплатных 3D-моделей",
      },
      {
        id: 3,
        text: "Просмотр модели в виртуальной реальности ",
      },
      {
        id: 4,
        text: "Обмер помещений непосредственно в SketchUp",
      },
    ],
  },
  {
    id: 2,
    number: two,
    alt: 2,
    header: "моделирование и деталировка",
    gif: cardGif_3,
    navi: [
      {
        id: 1,
        src: tekla,
        alt: "link",
        text: "tekla structures",
        href: "javascript:void(0)",
        src2: arrow_navi_right,
        alt2: "arrow_navi_right",
      },
      {
        id: 2,
        src: tekla,
        alt: "link",
        text: "tekla model sharing",
        href: "javascript:void(0)",
        src2: arrow_navi_right,
        alt2: "arrow_navi_right",
      },
    ],
    items: [
      {
        id: 0,
        text: "Создание информационной модели с высоким уровнем детализации (LOD 500)",
      },
      {
        id: 1,
        text: "Совместная работа над проектом с неограниченным количеством участников ",
      },
      {
        id: 2,
        text: "Создание отчетов и экспорт ЧПУ файлов",
      },
      {
        id: 3,
        text: "Экономическая оценка конструкций на этапе планирования  ",
      },
      {
        id: 4,
        text: "Проверка на коллизии в один клик",
      },
    ],
  },
  {
    id: 3,
    number: three,
    alt: 3,
    header: "доступ к проектной информации",
    gif: main_gif_tablet,
    navi: [
      {
        id: 3,
        src: trimble,
        alt: "link",
        text: "trimble connect",
        href: "javascript:void(0)",
        src2: arrow_navi_right,
        alt2: "arrow_navi_right",
      },
    ],
    items: [
      {
        id: 0,
        text: "Совместная работа над проектом из любой точки мира",
      },
      {
        id: 1,
        text: "Неограниченное облачное хранилище документов и моделей",
      },
      {
        id: 2,
        text: "Контроль изменений в проекте ",
      },
      {
        id: 3,
        text: "Назначение статуса и определение сроков выполнения задач",
      },
      {
        id: 4,
        text: "Просмотр сведения о проекте в мобильном приложении Trimble Connect или VR-гарнитуре",
      },
    ],
  },
];
