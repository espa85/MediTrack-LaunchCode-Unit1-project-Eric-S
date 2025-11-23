export default function PageContainer({ title, children }) {
    return (
        <section className="page-container">
            {title && <h2 className="page-title">{title}</h2>}
            {children}
        </section>
    );
}