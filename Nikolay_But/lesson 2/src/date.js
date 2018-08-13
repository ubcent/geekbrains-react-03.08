import './../vendor/moment-with-locales.min.js'

export class MyGetDate {
  constructor(date) {
    this.date = date
  }

  set() {
    this.date = moment().format('dd.mm.yyyy');
  }

  get() {
    return this.date;
  }

  display() {
    this.get();

    let dd = this.date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = this.date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = this.date.getFullYear();

    return `${dd}.${mm}.${yy}`;
  }
}