import { Deadline, ListTask, Time } from "utils";
import { Priority } from "utils/enums";

interface GroupedObject {
  [key: string]: {
    title: string;
    data: Array<ListTask>;
  };
}

export function sortTasks(
  sortBy: string,
  tasks: Array<ListTask>
): GroupedObject {
  let sorted: GroupedObject = sortByDeadline(tasks);

  if (sortBy == "deadline") {
    sorted = sortByDeadline(tasks);
  } else if (sortBy == "priority") {
    sorted = sortByPriority(tasks);
  } else if (sortBy == "project") {
    sorted = sortByProject(tasks);
  }
  return sorted;
}

export function sortByDeadline(tasks: Array<ListTask>): GroupedObject {
  let sorted: GroupedObject = {
    past: { title: "Past", data: [] },
    thisWeek: { title: "This week", data: [] },
    nextWeek: { title: "Next week", data: [] },
    future: { title: "Future", data: [] },
  };

  tasks.forEach((task) => {
    let deadline: Deadline = getDeadline(task.end_date);
    if (deadline == Deadline.Past) {
      sorted.past.data.push(task);
    } else if (deadline == Deadline.ThisWeek) {
      sorted.thisWeek.data.push(task);
    } else if (deadline == Deadline.NextWeek) {
      sorted.nextWeek.data.push(task);
    } else if (deadline == Deadline.Future) {
      sorted.future.data.push(task);
    }
  });

  return sorted;
}

export function sortByPriority(tasks: Array<ListTask>) {
  let sorted: GroupedObject = {
    high: { title: "High", data: [] },
    medium: { title: "Medium", data: [] },
    low: { title: "Low", data: [] },
  };

  tasks.forEach((task) => {
    if (task.priority == Priority.High) {
      sorted.high.data.push(task);
    }
    if (task.priority == Priority.Medium) {
      sorted.medium.data.push(task);
    }
    if (task.priority == Priority.Low) {
      sorted.low.data.push(task);
    }
  });

  return sorted;
}

export function sortByProject(tasks: Array<ListTask>) {
  let sorted: GroupedObject = {};

  tasks.forEach((task) => {
    if (task.project.name in sorted) {
      sorted[task.project.name].title = task.project.name;
      sorted[task.project.name].data.push(task);
    } else {
      sorted[task.project.name] = { title: task.project.name, data: [task] };
    }
  });

  return sorted;
}

const compareDeadlines = (a: ListTask, b: ListTask) => {
  let order: any = {};
  order[Deadline.Past] = 0;
  order[Deadline.ThisWeek] = 1;
  order[Deadline.NextWeek] = 2;
  order[Deadline.Future] = 3;

  return order[getDeadline(a.end_date)] > order[getDeadline(b.end_date)]
    ? 1
    : -1;
};

function getDeadline(dt: string) {
  let daysAway: number = Time.getDaysFromNow(dt);
  let deadline: Deadline = Time.whenDeadlineDue(daysAway);
  return deadline;
}
