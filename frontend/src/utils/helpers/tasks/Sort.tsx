import { Deadline, ListTask, SortedTasks, Time } from "utils";

interface test {
  key: string;
  list: Array<ListTask>;
}

export function sortTasks(
  sortBy: string,
  tasks: Array<ListTask>
): Array<SortedTasks> | null {
  let sorted: Array<SortedTasks> = [];
  let array = [];

  let object: SortedTasks = { title: null, tasks: null };
  object.title = "test";
  object.tasks = [];

  return sorted;
}

export function sortByDeadline(tasks: Array<ListTask>) {
  let deadlines = tasks;
  deadlines.sort(compareDeadlines);
  return compareDeadlines;
}

export function sortByPriority(tasks: Array<ListTask>) {
  tasks.sort((a: ListTask, b: ListTask) => {
    return a.priority > b.priority ? 1 : -1;
  });
}

export function sortByProject(tasks: Array<ListTask>) {
  tasks.sort((a: ListTask, b: ListTask) => {
    return a.project > b.project ? 1 : -1;
  });
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
