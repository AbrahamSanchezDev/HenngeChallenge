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
  getDateAsText(date: Date): string {
    return (
      date.getFullYear() +
      '-' +
      +(date.getMonth() + 1).toString().slice(-2) +
      '-' +
      date.getDate().toString().slice(-2)
    );
  }
  equals(other: DateObj): boolean {
    return (
      this.day == other.day &&
      this.month == other.month &&
      this.year == other.month
    );
  }
}
