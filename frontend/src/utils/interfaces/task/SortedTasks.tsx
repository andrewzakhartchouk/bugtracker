import { ListTask } from "utils";

export interface SortedTasks {
  title: string | null;
  tasks: Array<ListTask> | null;
}
