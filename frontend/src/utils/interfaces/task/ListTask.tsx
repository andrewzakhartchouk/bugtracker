import { Key } from "react";
import { Priority, Stage } from "utils";

export interface ListTask {
  id: Key;
  project: Key;
  stage: Stage;
  priority: Priority;
  tags: string | null;
  end_date: string;
  description: string;
  comment_number: number | null;
}
