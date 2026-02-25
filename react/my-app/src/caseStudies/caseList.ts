import Case01 from "./01/App";
import Case02 from "./02/App";
import Case03 from "./03/App";
import Case04 from "./04/App";
import Case05 from "./05/App";

type CS = {
  path: string;
  title: string;
  component: React.FC;
};

export const caseList: CS[] = [
  { path: "/casestudies/01", title: "CS01 - Smart Portfolio Dashboard", component: Case01 },
  { path: "/casestudies/02", title: "CS02 - Secure Banking Dashboard", component: Case02 },
  { path: "/casestudies/03/*", title: "CS03 - Medix Patient Portal", component: Case03 },
  { path: "/casestudies/04", title: "CS04 - TaskFlow Project Management", component: Case04 },
  { path: "/casestudies/05", title: "CS05 - Testing & Debugging React Apps", component: Case05 },
];
