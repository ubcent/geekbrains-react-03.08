
export default class Helper  {
   

    /**
     * return DateToStr
     */
    static DateToStr(date) {
     let dateStr = date.getFullYear().toString() + 
                  date.getMonth().toString() + 
                  date.getDate().toString() +
                  date.getHours().toString() + 
                  date.getMinutes().toString() + 
                  date.getSeconds().toString();

        return `${dateStr}`;
    }
}