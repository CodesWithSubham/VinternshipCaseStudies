import Case01 from "./01/App";
import Case02 from "./02/App";

type CS = {
  path: string;
  title: string;
  component: React.FC;
};

export const caseList: CS[] = [
  { path: "/casestudies/01", title: "CS01 - Smart Portfolio Dashboard", component: Case01 },
  { path: "/casestudies/02", title: "CS02 - Secure Banking Dashboard", component: Case02 },
];
