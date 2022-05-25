interface ProjectSet {
  project: Project;
  team: Team;
  stages: Array<Stage>;
}

interface Project {
  name: string;
}

interface User {}

interface Team {
  users: Array<User>;
}

interface Stage {
  name: string;
  count: number;
  color: string;
}

export const Project = (props: ProjectSet) => {
  return (
    <div className="flex flex-col">
      <div className="font-bold text-lg">{props.project.name}</div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col">
          <div>Team</div>
        </div>
        <div className="flex flex-col">
          <div>Stages</div>
        </div>
      </div>
    </div>
  );
};
