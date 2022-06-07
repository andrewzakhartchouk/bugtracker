import { Key } from "react";
import { Priority, Stage } from "utils";

export interface ListTask {
  id: Key;
  project: { id: Key; name: string };
  stage: Stage;
  priority: Priority;
  tags: string | null;
  end_date: string;
  description: string;
  comment_number: number | null;
}
