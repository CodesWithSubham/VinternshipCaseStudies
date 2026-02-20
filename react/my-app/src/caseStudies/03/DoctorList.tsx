import { Link } from "react-router-dom";

interface Doctor {
  id: number;
  name: string;
}

const doctors: Doctor[] = [
  { id: 1, name: "Dr. Smith" },
  { id: 2, name: "Dr. Johnson" }
];

const DoctorList: React.FC = () => {
  return (
    <div>
      <h1>Doctor List</h1>

      {doctors.map((doctor) => (
        <div key={doctor.id}>
          <h3>{doctor.name}</h3>

          {/* Example patient ID hardcoded for demo */}
          <Link to={`doctors/${doctor.id}/patients/101`}>
            View Patient 101
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DoctorList;
