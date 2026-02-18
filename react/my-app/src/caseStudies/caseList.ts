import Case01 from "./01/App";

type CS = {
  path: string;
  title: string;
  component: React.FC;
};

export const caseList: CS[] = [
  { path: "/casestudies/01", title: "CS01 - Smart Portfolio Dashboard", component: Case01 },
];
