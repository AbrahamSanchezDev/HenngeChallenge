export class DateObj {
  day: number;
  month: number;
  year: number;
  text: string;
  date: Date;
  move: boolean;

  constructor() {}
  updateData(date: Date) {
    if (date == null) return;
    this.date = date;
    this.day = date.getDate();
    this.month = date.getMonth();
    this.year = date.getFullYear();
    this.text = this.getDateAsText(date);
  }
  //Sets and updates the date
  setMonth(month: number, day: number) {
    this.date.setMonth(month, day);
    this.updateData(new Date(this.date));
  }
  //Updates the variables besed in the date
  updateBasedOnDate() {
    this.updateData(this.date);
  }
  //Returns my date as text
  getMyDateAsText(): string {
    return this.year + '/' + +(this.month + 1) + '/' + this.date;
  }
  //Retuns the given date as text
  getDateAsText(date: Date): string {
    return (
      date.getFullYear() +
      '/' +
      +(date.getMonth() + 1).toString().slice(-2) +
      '/' +
      date.getDate().toString().slice(-2)
    );
  }
  //Retuns if the other date is the same is this one
  equals(other: DateObj): boolean {
    return (
      this.day == other.day &&
      this.month == other.month &&
      this.year == other.month
    );
  }
}
