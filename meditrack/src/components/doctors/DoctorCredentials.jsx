import { credentialDefinitions } from "../../data/credentialDefinitions";

export default function DoctorCredentials({ doctor }) {
  // doctor.credentials is an array of credential instances with a credentialId field
  const mappedCredentials = (doctor.credentials || [])
    .map((instance) => {
      const definition = credentialDefinitions.find(
        (def) => def.credentialId === instance.credentialId
      );
      if (!definition) return null;
      return { instance, definition };
    })
    .filter(Boolean);

  return (
    <div className="doctor-credentials">
      <h3>Credential Information</h3>
      {mappedCredentials.length === 0 ? (
        <p>No credentials on record.</p>
      ) : (
        <ul>
          {mappedCredentials.map(({ instance, definition }) => (
            <li key={instance.id}>
              <strong>{definition.name}</strong>
              <div>{definition.category}</div>
              {definition.issuingBody && <div>{definition.issuingBody}</div>}
              {definition.defaultRenewalCycle && (
                <div>Default renewal: {definition.defaultRenewalCycle}</div>
              )}
              <div>Status: {instance.status}</div>
              {instance.licenseNumber && (
                <div>License #: {instance.licenseNumber}</div>
              )}
              {instance.issueDate && <div>Issued: {instance.issueDate}</div>}
              {instance.expiryDate && <div>Expires: {instance.expiryDate}</div>}
              {instance.primary && <div>(Primary)</div>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}