import React, { useMemo, useState } from "react";
import PageContainer from "../layout/PageContainer";
import DoctorsFilterBar from "../doctors/DoctorsFilterBar";
import DoctorsListPanel from "../doctors/DoctorsListPanel";
import DoctorProfilePanel from "../doctors/DoctorProfilePanel";
import baseDoctors from "../data/doctors";
import { useAuth } from "../auth/AuthContext";
import {
  canManageAllDoctors,
  canEditDoctorProfile,
  canEditDoctorCredentials,
} from "../auth/permissions";

function DoctorsPage() {
  const { user } = useAuth();

  const [doctors, setDoctors] = useState(baseDoctors);
  const [viewMode, setViewMode] = useState("card");
  const [selectedDoctorId, setSelectedDoctorId] = useState("");
  const [filterDoctorId, setFilterDoctorId] = useState("");

  const filteredDoctors = useMemo(() => {
    if (!filterDoctorId) return doctors;
    return doctors.filter((doctor) => doctor.id === filterDoctorId);
  }, [doctors, filterDoctorId]);

  const selectedDoctor = useMemo(() => {
    if (!selectedDoctorId) return null;
    return doctors.find((doctor) => doctor.id === selectedDoctorId) || null;
  }, [doctors, selectedDoctorId]);

  const handleSelectDoctor = (doctorId) => {
    setSelectedDoctorId(doctorId);
  };

  const handleAddDoctor = () => {
    if (!canManageAllDoctors(user)) return;

    const newDoctor = {
      id: `doc-${Date.now()}`,
      firstName: "New",
      lastName: "Doctor",
      displayName: "Dr. New Doctor",
      role: "Physician",
      specialty: "",
      specialtyCode: "",
      department: "",
      facility: "",
      photoUrl: "",
      email: "",
      phone: "",
      credentials: [],
    };

    setDoctors((prev) => [...prev, newDoctor]);
    setSelectedDoctorId(newDoctor.id);
  };

  const handleRemoveDoctor = (doctorId) => {
    if (!canManageAllDoctors(user)) return;

    setDoctors((prev) => prev.filter((d) => d.id !== doctorId));

    if (selectedDoctorId === doctorId) {
      setSelectedDoctorId("");
    }
    if (filterDoctorId === doctorId) {
      setFilterDoctorId("");
    }
  };

  const handleUpdateDoctor = (updatedDoctor) => {
    setDoctors((prev) =>
      prev.map((d) => (d.id === updatedDoctor.id ? updatedDoctor : d))
    );
  };

  const handleAddCredential = (doctorId) => {
    if (!canEditDoctorCredentials(user)) return;

    setDoctors((prev) =>
      prev.map((d) => {
        if (d.id !== doctorId) return d;
        const newCredential = {
          id: `cred-inst-${Date.now()}`,
          credentialId: "",
          status: "Active",
          licenseNumber: "",
          issueDate: "",
          expiryDate: "",
          primary: false,
        };
        return {
          ...d,
          credentials: [...(d.credentials || []), newCredential],
        };
      })
    );
  };

  const handleRemoveCredential = (doctorId, credentialId) => {
    if (!canEditDoctorCredentials(user)) return;

    setDoctors((prev) =>
      prev.map((d) => {
        if (d.id !== doctorId) return d;
        return {
          ...d,
          credentials: (d.credentials || []).filter(
            (c) => c.id !== credentialId
          ),
        };
      })
    );
  };

  const handleUpdateCredential = (doctorId, credentialId, changes) => {
    if (!canEditDoctorCredentials(user)) return;

    setDoctors((prev) =>
      prev.map((d) => {
        if (d.id !== doctorId) return d;

        return {
          ...d,
          credentials: (d.credentials || []).map((c) =>
            c.id === credentialId ? { ...c, ...changes } : c
          ),
        };
      })
    );
  };

  const allowProfileEdit =
    selectedDoctor && canEditDoctorProfile(user, selectedDoctor);
  const allowCredentialEdit =
    selectedDoctor && canEditDoctorCredentials(user, selectedDoctor);

  return (
    <PageContainer title="Doctors">
      {canManageAllDoctors(user) && (
        <div className="doctors-page-toolbar">
          <button
            type="button"
            className="primary-button"
            onClick={handleAddDoctor}
          >
            + Add Doctor
          </button>
        </div>
      )}

      <DoctorsFilterBar
        doctors={doctors}
        filterDoctorId={filterDoctorId}
        onFilterChange={setFilterDoctorId}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      <div className="doctors-page-layout">
        <div className="doctors-list-column">
          <DoctorsListPanel
            doctors={filteredDoctors}
            viewMode={viewMode}
            onSelectDoctor={handleSelectDoctor}
          />
        </div>

        <div className="doctors-profile-column">
          <DoctorProfilePanel doctor={selectedDoctor} />

          {selectedDoctor && allowProfileEdit && (
            <DoctorProfileEditor
              doctor={selectedDoctor}
              user={user}
              onChange={handleUpdateDoctor}
              onRemove={
                canManageAllDoctors(user)
                  ? () => handleRemoveDoctor(selectedDoctor.id)
                  : null
              }
            />
          )}

          {selectedDoctor && allowCredentialEdit && (
            <DoctorCredentialsEditor
              doctor={selectedDoctor}
              onAddCredential={() => handleAddCredential(selectedDoctor.id)}
              onRemoveCredential={(credId) =>
                handleRemoveCredential(selectedDoctor.id, credId)
              }
              onUpdateCredential={(credId, changes) =>
                handleUpdateCredential(selectedDoctor.id, credId, changes)
              }
            />
          )}
        </div>
      </div>
    </PageContainer>
  );
}

function DoctorProfileEditor({ doctor, user, onChange, onRemove }) {
  const isAdmin = user?.role === "admin";
  const [local, setLocal] = useState(doctor);

  const handleFieldChange = (field) => (e) => {
    const value = e.target.value;
    const updated = { ...local, [field]: value };

    if (field === "firstName" || field === "lastName") {
      updated.displayName = `Dr. ${updated.firstName} ${updated.lastName}`.trim();
    }

    setLocal(updated);
    onChange(updated);
  };

  return (
    <div className="doctor-profile-editor">
      <h3>Edit Profile</h3>

      <div className="editor-grid">
        <div className="form-field">
          <label>First Name</label>
          <input
            type="text"
            value={local.firstName}
            onChange={handleFieldChange("firstName")}
          />
        </div>

        <div className="form-field">
          <label>Last Name</label>
          <input
            type="text"
            value={local.lastName}
            onChange={handleFieldChange("lastName")}
          />
        </div>

        <div className="form-field">
          <label>Email</label>
          <input
            type="email"
            value={local.email}
            onChange={handleFieldChange("email")}
          />
        </div>

        <div className="form-field">
          <label>Phone</label>
          <input
            type="text"
            value={local.phone}
            onChange={handleFieldChange("phone")}
          />
        </div>

        {isAdmin && (
          <>
            <div className="form-field">
              <label>Role</label>
              <input
                type="text"
                value={local.role}
                onChange={handleFieldChange("role")}
              />
            </div>

            <div className="form-field">
              <label>Specialty</label>
              <input
                type="text"
                value={local.specialty}
                onChange={handleFieldChange("specialty")}
              />
            </div>

            <div className="form-field">
              <label>Specialty Code</label>
              <input
                type="text"
                value={local.specialtyCode}
                onChange={handleFieldChange("specialtyCode")}
              />
            </div>

            <div className="form-field">
              <label>Department</label>
              <input
                type="text"
                value={local.department}
                onChange={handleFieldChange("department")}
              />
            </div>

            <div className="form-field">
              <label>Facility</label>
              <input
                type="text"
                value={local.facility}
                onChange={handleFieldChange("facility")}
              />
            </div>
          </>
        )}
      </div>

      {onRemove && (
        <button
          type="button"
          className="danger-button"
          onClick={onRemove}
          style={{ marginTop: "1rem" }}
        >
          Remove Doctor
        </button>
      )}
    </div>
  );
}

function DoctorCredentialsEditor({
  doctor,
  onAddCredential,
  onRemoveCredential,
  onUpdateCredential,
}) {
  const credentials = doctor.credentials || [];

  const handleFieldChange = (credId, field) => (e) => {
    const value = field === "primary" ? e.target.checked : e.target.value;
    onUpdateCredential(credId, { [field]: value });
  };

  return (
    <div className="doctor-credentials-editor">
      <h3>Edit Credentials</h3>

      <button
        type="button"
        className="secondary-button"
        onClick={onAddCredential}
        style={{ marginBottom: "0.5rem" }}
      >
        + Add Credential
      </button>

      {!credentials.length && <p>No credentials on file.</p>}

      {credentials.map((cred) => (
        <div key={cred.id} className="credential-editor-row">
          <div className="editor-grid">
            <div className="form-field">
              <label>Credential ID</label>
              <input
                type="text"
                value={cred.credentialId}
                onChange={handleFieldChange(cred.id, "credentialId")}
              />
            </div>

            <div className="form-field">
              <label>Status</label>
              <input
                type="text"
                value={cred.status || ""}
                onChange={handleFieldChange(cred.id, "status")}
              />
            </div>

            <div className="form-field">
              <label>License #</label>
              <input
                type="text"
                value={cred.licenseNumber || ""}
                onChange={handleFieldChange(cred.id, "licenseNumber")}
              />
            </div>

            <div className="form-field">
              <label>Issue Date</label>
              <input
                type="date"
                value={cred.issueDate || ""}
                onChange={handleFieldChange(cred.id, "issueDate")}
              />
            </div>

            <div className="form-field">
              <label>Expiry Date</label>
              <input
                type="date"
                value={cred.expiryDate || ""}
                onChange={handleFieldChange(cred.id, "expiryDate")}
              />
            </div>

            <div className="form-field checkbox-field">
              <label>
                <input
                  type="checkbox"
                  checked={!!cred.primary}
                  onChange={handleFieldChange(cred.id, "primary")}
                />
                Primary
              </label>
            </div>
          </div>

          <button
            type="button"
            className="danger-button"
            onClick={() => onRemoveCredential(cred.id)}
          >
            Remove Credential
          </button>
        </div>
      ))}
    </div>
  );
}

export default DoctorsPage;