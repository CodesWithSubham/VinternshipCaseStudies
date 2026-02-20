import { useParams } from "react-router-dom";

type DoctorPatientParams = {
  doctorId?: string;
  patientId?: string;
};

const DoctorPatientDetails: React.FC = () => {
  const { doctorId, patientId } = useParams<DoctorPatientParams>();

  // Validate existence
  if (!doctorId || !patientId) {
    return <div>Missing route parameters</div>;
  }

  // Convert to number safely
  const numericDoctorId = Number(doctorId);
  const numericPatientId = Number(patientId);

  if (isNaN(numericDoctorId) || isNaN(numericPatientId)) {
    return <div>Invalid ID format. IDs must be numeric.</div>;
  }

  return (
    <div>
      <h1>Doctor ID: {numericDoctorId}</h1>
      <h2>Patient ID: {numericPatientId}</h2>
    </div>
  );
};

export default DoctorPatientDetails;
