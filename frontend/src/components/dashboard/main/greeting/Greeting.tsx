interface User {
  name: string;
}

export const Greeting = (user: User) => {
  function getGreeting() {
    let dt = new Date();
    let time = dt.getHours();

    return greetingAtTime(time);
  }

  function greetingAtTime(hour: number) {
    let greeting: string = "Hello";
    if (4 < hour && hour < 13) {
      greeting = "Good morning";
    } else if (12 < hour && hour < 19) {
      greeting = "Good afternoon";
    } else if (18 < hour && hour < 25) {
      greeting = "Good evening";
    }
    return greeting;
  }

  return (
    <div className="text-xl md:text-2xl lg:text-3xl">
      <span className="text-gray-500">{getGreeting() + ","}&nbsp;</span>
      <span className="font-bold text-gray-700">{user.name}</span>
    </div>
  );
};
