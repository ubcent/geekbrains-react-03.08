export default class Content {
  // не совсем уверен, что решение верное
  // но как вариант, вместо Config здесь мог бы быть класс
  // подгружающий данные с БД
  // можно конечно было использовать JSON и грузить с него?
  // в общем, надо смотреть как обычно люди делают :)
  static menu = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'POSTS', href: '/posts' },
  ]

}
