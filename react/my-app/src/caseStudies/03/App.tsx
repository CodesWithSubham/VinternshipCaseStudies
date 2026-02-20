import { Routes, Route } from "react-router-dom";
import DoctorList from "./DoctorList";
import DoctorPatientDetails from "./DoctorPatientDetails";

const Case03: React.FC = () => {
  return (
    <Routes>
      <Route index element={<DoctorList />} />

      {/* Type-safe dynamic route */}
      <Route path="doctors/:doctorId/patients/:patientId" element={<DoctorPatientDetails />} />
    </Routes>
  );
};

export default Case03;
