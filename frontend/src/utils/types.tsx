import { Url } from "url";

export enum Priority {
  None = 0,
  High = 1,
  Medium = 2,
  Low = 3,
}

export enum Deadline {
  Past = 0,
  ThisWeek = 1,
  NextWeek = 2,
  Future = 3,
}

export interface RegisterEventTarget {
  name: { value: string };
  email: { value: string };
  password: { value: string };
  password_confirm: { value: string };
}

export interface NavTab {
  name: string;
  icon: JSX.Element;
  link: string;
}

export interface TabObject {
  name: string;
  icon: JSX.Element;
  page: Url;
}

export interface CompleteTask {
  id: number;
  name: string;
  priority: number;
  tags: string;
  start_at: string;
  end_at: string;
  project: ProjectLabel;
  stage: Stage;
  assigned_members: Array<User>;
  description: string;
  submitted_by: User;
  comments: Array<CommentType>;
}

export interface User {
  id: number;
  name: string;
  project_lead?: boolean;
  image: string;
}

export interface CommentType {
  id: number;
  comment: string;
  user: User;
  created_at: string;
}

export interface ActivityType {
  id: number;
  project: ProjectLabel;
  message: string;
  created_at: string;
}

export interface ProjectLabel {
  id: number;
  name: string;
  stages: Array<Stage>;
  members: Array<User>;
}

export interface ProjectOverview {
  id: number;
  name: string;
  team: string;
  members: Array<User>;
  stages: Array<Stage>;
}

export interface ProjectBlock {
  id: number;
  name: string;
  team: string;
  members: Array<User>;
  stages: Array<Stage>;
  tasks: Array<ListTask>;
}

export interface CompleteProject {
  id: number;
  name: string;
  team: Team;
  members: Array<User>;
  stages: Array<Stage>;
}

export interface Team {
  id: number;
  name: string;
}

export interface Stage {
  id: number;
  name: string;
  count?: number;
  order: number;
  color: string;
}

export interface ListTask {
  id: number;
  project: { id: number; name: string };
  stage: Stage;
  priority: Priority;
  tags: string | null;
  end_at: string;
  name: string;
  comment_count: number | null;
  checked: boolean;
}

export interface SortedCategory {
  title: string;
  data: Array<ListTask>;
  order: number;
}

export interface CommentType {
  id: number;
  comment: string;
  submitted_by: User;
  created_at: string;
}

export interface TeamType {
  id: number;
  name: string;
  members: Array<User>;
  projects: Array<ProjectLabel>;
}
