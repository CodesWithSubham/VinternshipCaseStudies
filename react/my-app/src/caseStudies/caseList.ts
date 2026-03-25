import Case01 from "./01/App";
import Case02 from "./02/App";
import Case03 from "./03/App";
import Case04 from "./04/App";
import Case05 from "./05/App";
import Case06 from "./06/App";
import Case07 from "./07/App";
import Case08 from "./08/App";
import Case09 from "./09/App";
import Case10 from "./10/App";

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
  {
    path: "/casestudies/06",
    title: "CS06 - Zustand Slices & Modular Architecture",
    component: Case06,
  },
  { path: "/casestudies/07", title: "CS07 - Advanced Zustand", component: Case07 },
  { path: "/casestudies/08", title: "CS08 - Memoization", component: Case08 },
  { path: "/casestudies/09/*", title: "CS09 - Lazy Loading", component: Case09 },
  { path: "/casestudies/10", title: "CS10 - Bundle Analysis", component: Case10 },
];
