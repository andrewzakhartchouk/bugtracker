import { Key } from "react";
import { Url } from "url";

export enum Priority {
  High = 0,
  Medium = 1,
  Low = 2,
}

export enum Deadline {
  Past = 0,
  ThisWeek = 1,
  NextWeek = 2,
  Future = 3,
}

export interface LoginEventTarget {
  email: { value: string };
  password: { value: string };
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
  id: Key;
  name: string;
  priority: number;
  tags: Array<string>;
  start_date: string;
  end_date: string;
  project: ProjectLabel;
  stage: Stage;
  assigned: Array<User>;
  description: string;
  submitted_by: User;
  comments: Array<CommentType>;
}

export interface User {
  name: string;
  image: string;
}

export interface CommentType {
  id: number;
  comment: string;
  submitted_by: User;
  created_at: string;
}

export interface ActivityType {
  id: Key;
  project: ProjectLabel;
  message: string;
  created_at: string;
}

export interface ProjectLabel {
  id: Key;
  name: string;
  color?: string;
}

export interface ProjectOverview {
  projectName: string;
  team: Array<User>;
  stages: Array<Stage>;
}

export interface Stage {
  id: Key;
  name: string;
  color?: string;
}

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

export interface SortedCategories {
  [key: string]: {
    title: string;
    data: Array<ListTask>;
  };
}

export interface CommentType {
  id: number;
  comment: string;
  submitted_by: User;
  created_at: string;
}
