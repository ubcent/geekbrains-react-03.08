export default class Config {
  // не совсем уверен, что решение верное
  // но как вариант, вместо Config здесь мог бы быть класс
  // подгружающий данные с БД
  // можно конечно было использовать JSON и грузить с него?
  // в общем, надо смотреть как обычно люди делают :)
  static menu = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Posts', href: '/posts' },
  ]

}
