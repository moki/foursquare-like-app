var express  = require('express');
var limit    = require('../middleware/limit');
var router   = express.Router();

router.get('/meetings/tags/:category', limit, function (req, res) {
  var category = req.params.category;
  var tags = {
    movies : [
      'Артхаус', 'Биография', 'Боевик', 'Вестерн', 'Военный', 'Детектив', 'Детский',
      'Документальный', 'Драма', 'История', 'Комедия', 'Криминал', 'Мелодрама', 'Мюзикл',
      'Мультфильм', 'Приключение', 'Фэнтези', 'Спорт', 'Триллер', 'Ужасы', 'Фантастика', 'Прочее'
    ],
    food   : [
      'Американская', 'Армянская', 'Вегетарианская', 'Восточная', 'Грузинская',
      'Европейская', 'Индийская', 'Итальянская', 'Китайская', 'Мексиканская', 'Русская',
      'Украинская', 'Французкая', 'Экзотическая', 'Японская', 'Прочая'
    ],
    sports   : [
      'Альпинизм', 'Бадминтон', 'Баскетбол', 'Бег', 'Бодибилдинг', 'Бокс', 'Боулинг',
      'Бильярд', 'Велосипедный спорт', 'Верховая езда', 'Воллейбол', 'Гимнастика', 'Гольф',
      'Дайвинг', 'Дельтапланеризм', 'Единоборства', 'Йога', 'Керлинг', 'Коньки', 'Лыжный спорт',
      'Парашютный спорт', 'Паркур', 'Парусный спорт', 'Пейнтбол', 'Плавание', 'Прыжки', 'Рафтинг',
      'Санный спорт', 'Серфинг', 'Скейтборд', 'Сноуборд', 'Стрельба', 'Теннис', 'Фехтование',
      'Фитнес', 'Фристайл', 'Футбол', 'Ходьба', 'Шахматы', 'Прочее'
    ],
    arts     : [
      'Дом и Творчество', 'Архитектура', 'Бодиарт', 'Ведение блога', 'Вязание и Рукоделие',
      'Гончарное дело', 'Граффити', 'Дети', 'Дизайн', 'Живопись', 'Книги', 'Коллекционирование',
      'Кулинария', 'Мозаика', 'Ораторство', 'Проектирование моделей', 'Психология и отношения',
      'Пчеловодство', 'Роспись по дереву', 'Сад и огород', 'Семья', 'Скульптура', 'Столярное дело',
      'Цветоводство', 'Ювелирное дело', 'Прочее'
    ],
    eco      : [
      'Дикая природа', 'Домашние животные', 'Кладоискательство', 'Космос', 'Охота',
      'Походы', 'Растения', 'Рыбалка', 'Собирание грибов', 'Туризм в городе/за городом',
      'Туризм за рубежом', 'Прочее'
    ],
    dance    : [
      'Балет', 'Блюз', 'Брейк данс', 'Буги-вуги', 'Вальс', 'Гоу-гоу', 'Дабстеп',
      'Джаз франк', 'Джаз-модерн', 'Ирландские танцы', 'Испанские Танцы', 'Капоэйра',
      'Клубные танцы', 'Ламбада', 'Лезгинка', 'Мамбо', 'Народные танцы', 'Пасодобль',
      'РнБ', 'Робот', 'Рок-н-Ролл', 'Румба', 'Сальса', 'Самба', 'Степ', 'Стретчинг',
      'Стрип танцы', 'Танго', 'Танец Живота', 'Танцевальная аэробика', 'Тверк', 'Твист',
      'Тектоник', 'Уличные танцы', 'Фокстрот', 'Хастл', 'Хип-хоп', 'Ча-ча-ча', 'Шаффл',
      'Прочие'
    ],
    music    : [
      'Альтернатива', 'Вокал', 'Джаз и блюз', 'Инди', 'Классическая', 'Метал', 'Народная',
      'Панк', 'Поп-музыка', 'Регги', 'Рок', 'Романсы', 'Фолк', 'Хип-хоп и рэп', 'Шансон',
      'Электронная', 'Эстрадная', 'Прочая'
    ],
    cars     : [
      'Багги', 'Велосипеды', 'Вертолеты', 'Внедорожники', 'Воздушные шары', 'Гидроциклы',
      'Гироскутеры', 'Грузовые автомобили', 'Дельтапланы', 'Дирижабли', 'Карты',
      'Катера и лодки', 'Квадроциклы', 'Корабли', 'Легковые автомобили', 'Мотоциклы',
      'Поезда', 'Ретро-автомобили', 'Самолеты', 'Скутеры', 'Танки', 'Трамваи', 'Яхты',
      'Прочий'
    ],
    theatre  : [
      'Балет', 'Водевиль', 'Драмматургия', 'Комедии', 'Мим', 'Монодрама', 'Мюзикл',
      'Оперетта', 'Пародия', 'Пьеса', 'Трагедия', 'Уличные спектакли', 'Фарс',
      'Феерия', 'Прочий'
    ],
    it       : [
      'Железо и ПО', 'Видеоигры', 'Фотография', 'Видео', 'Аудио', 'Радио', 'Анимация', 'Прочая'
    ],
    science  : [
      'Археология', 'Астрономия', 'Биология', 'Генетика', 'История', 'Литература', 'Математика',
      'Психология', 'Политика', 'Технологии', 'Уфология', 'Физика', 'Философия', 'Химия',
      'Экология', 'Экономика', 'Прочая',
    ],
    mystic   : [
      'Гадания', 'Гороскопы', 'Магия', 'Мистика', 'Парапсихология', 'Фокус',
      'Эзотерика', 'Экстрасенсорика', 'Прочая',
    ],
    charity  : [
      'Бездомные', 'Волонтерство', 'Детская', 'Для животных', 'Добровольное Пожертвование',
      'Донорство', 'Меценатство', 'Социально-благотворительные программы',
      'Социальное инвестировние', 'Спонсорство', 'Прочая'
    ]
  };
  if (tags.hasOwnProperty(category)) return res.status(200).send({ [category] : tags[category] });
  return res.status(404).send({ message : 'No Such Tag Category Exists.' });
});

module.exports = router;