interface Props {
  children: any;
  date: Date;
}

export const CalendarBlock = (props: Props) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="w-full whitespace-nowrap bg-gray-200">
      <div className="flex text-xs font-bold text-gray-400 justify-between p-2">
        {days[props.date.getDay()]}
        <span className="text-lg">{props.date.getDate()}</span>
      </div>
      <div className="w-full px-1">{props.children}</div>
    </div>
  );
};
