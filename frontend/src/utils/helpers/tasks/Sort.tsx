import { Deadline, ListTask, SortedCategory, Time } from "utils";
import { Priority } from "utils";

export function sortTasks(
  sortBy: string,
  tasks: Array<ListTask>
): Array<SortedCategory> {
  let sorted: Array<SortedCategory> = sortByDeadline(tasks);

  switch (sortBy) {
    case "deadline":
      sorted = sortByDeadline(tasks);
      break;
    case "priority":
      sorted = sortByPriority(tasks);
      break;
    case "project":
      sorted = sortByProject(tasks);
      break;
    case "stage":
      sorted = sortByStage(tasks);
      break;
  }
  return sorted;
}

function sortByDeadline(tasks: Array<ListTask>): Array<SortedCategory> {
  let sorted: Array<SortedCategory> = [
    { title: "Past", data: [], order: 0 },
    { title: "This week", data: [], order: 1 },
    { title: "Next week", data: [], order: 2 },
    { title: "Future", data: [], order: 3 },
  ];

  tasks.forEach((task) => {
    const deadline: Deadline = getDeadline(task.end_at);
    switch (deadline) {
      case Deadline.Past:
        sorted[0].data.push(task);
        break;
      case Deadline.ThisWeek:
        sorted[1].data.push(task);
        break;
      case Deadline.NextWeek:
        sorted[2].data.push(task);
        break;
      case Deadline.Future:
        sorted[3].data.push(task);
        break;
    }
  });

  return sorted;
}

function sortByPriority(tasks: Array<ListTask>): Array<SortedCategory> {
  let sorted: Array<SortedCategory> = [
    { title: "High", data: [], order: Priority.High },
    { title: "Medium", data: [], order: Priority.Medium },
    { title: "Low", data: [], order: Priority.Low },
    { title: "None", data: [], order: Priority.None },
  ];

  tasks.forEach((task) => {
    switch (task.priority) {
      case Priority.High:
        sorted[0].data.push(task);
        break;
      case Priority.Medium:
        sorted[1].data.push(task);
        break;
      case Priority.Low:
        sorted[2].data.push(task);
        break;
      case Priority.None:
        sorted[3].data.push(task);
        break;
    }
  });

  return sorted;
}

function sortByProject(tasks: Array<ListTask>) {
  let sorted: Array<SortedCategory> = [];

  tasks.forEach((task) => {
    const objectIndex: number = sorted.findIndex(
      (category) => category.title == task.project.name
    );
    if (objectIndex === -1) {
      sorted.push({
        title: task.project.name,
        data: [task],
        order: task.project.id,
      });
    } else {
      sorted[objectIndex].data.push(task);
    }
  });

  sorted.sort((a, b) => (a.order > b.order ? 1 : -1));
  return sorted;
}

function sortByStage(tasks: Array<ListTask>) {
  let sorted: Array<SortedCategory> = [];

  tasks.forEach((task) => {
    const objectIndex: number = sorted.findIndex(
      (category) => category.title == task.stage.name
    );
    if (objectIndex === -1) {
      sorted.push({
        title: task.stage.name,
        data: [task],
        order: task.stage.order,
      });
    } else {
      sorted[objectIndex].data.push(task);
    }
  });

  sorted.sort((a, b) => (a.order > b.order ? 1 : -1));
  return sorted;
}

const compareDeadlines = (a: ListTask, b: ListTask) => {
  let order: any = {};
  order[Deadline.Past] = 0;
  order[Deadline.ThisWeek] = 1;
  order[Deadline.NextWeek] = 2;
  order[Deadline.Future] = 3;

  return order[getDeadline(a.end_at)] > order[getDeadline(b.end_at)] ? 1 : -1;
};

function getDeadline(dt: string) {
  let daysAway: number = Time.getDaysFromNow(dt);
  let deadline: Deadline = Time.whenDeadlineDue(daysAway);
  return deadline;
}
