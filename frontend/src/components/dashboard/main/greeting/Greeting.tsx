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
    <>
      <span className="text-3xl text-gray-500">
        {getGreeting() + ","}&nbsp;
      </span>
      <span className="text-3xl font-bold text-gray-700">{user.name}</span>
    </>
  );
};
