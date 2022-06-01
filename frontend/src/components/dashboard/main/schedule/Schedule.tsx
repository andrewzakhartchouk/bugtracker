import { CalendarBlock } from "components";

export const Schedule = () => {
  function dayList(): Array<Date> {
    let list: Array<Date> = [];
    let currentDate: Date = new Date();
    for (var i = 0; i < 5; i++) {
      list.push(currentDate);
      let tomorrow: Date = getTomorrow(currentDate);
      currentDate = tomorrow;
    }
    return list;
  }

  function getTomorrow(date: Date) {
    return new Date(date.getTime() + 24 * 60 * 60 * 1000);
  }

  const dates: Array<Date> = dayList();

  return (
    <div className="w-full overflow-x-scroll no-scrollbar">
      <div className="w-full pb-3 font-bold text-2xl text-gray-700">
        Schedule
      </div>
      <div className="flex w-full gap-1 relative">
        {dates.map((date, index) => {
          return (
            <CalendarBlock key={index} date={date}>
              <div></div>
            </CalendarBlock>
          );
        })}
      </div>
    </div>
  );
};
