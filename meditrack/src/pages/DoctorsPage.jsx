import { useMemo, useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import { doctors } from "../data/doctors";

import DoctorsFilterBar from "../components/doctors/DoctorsFilterBar";
import DoctorsListPanel from "../components/doctors/DoctorsListPanel";
import DoctorProfilePanel from "../components/doctors/DoctorProfilePanel";


export default function DoctorsPage() {
    const [viewMode, setViewMode] = useState("card");
    const [selectedDoctorId, setSelectedDoctorId] = useState(null);
    const [filterDoctorId, setFilterDoctorId] = useState("all");

    const filteredDoctors = useMemo(() => {
        if (filterDoctorId === "all") return doctors;
        return doctors.filter((doc) => doc.id === filterDoctorId);
    }, [filterDoctorId]);

    const selectedDoctor = useMemo(
        () => doctors.find((doc) => doc.id === selectedDoctorId) || null,
        [selectedDoctorId]
    );

    const handleFilterChange = (doctorId) => {
        setFilterDoctorId(doctorId);
        setSelectedDoctorId(null);
    };

    const handleSelectDoctor = (doctorId) => {
        setSelectedDoctorId(doctorId);
    };

    const handleBackToList = () => {
        setSelectedDoctorId(null);
    };

    return (
        <PageContainer title="Doctors">
            <DoctorsFilterBar
                doctors={doctors}
                filterDoctorId={filterDoctorId}
                onFilterChange={handleFilterChange}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
            />

            {selectedDoctor ? (
                <DoctorProfilePanel doctor={selectedDoctor} onBack={handleBackToList} />
            ) : (
                <DoctorsListPanel
                    doctors={filteredDoctors}
                    viewMode={viewMode}
                    onSelectDoctor={handleSelectDoctor}
                />
            )}
        </PageContainer>
    );
}