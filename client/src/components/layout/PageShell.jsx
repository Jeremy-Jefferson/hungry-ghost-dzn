export default function PageShell({ children }) {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            {children}
        </div>
    );
}