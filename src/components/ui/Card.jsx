export default function Card({ children, className = "" }) {
    return (
        <div className={`bg-bg-surface border border-bg-elevated hover:border-accent transition-colors duration-300 p-4 rounded-lg ${className}`}>
            {children}
        </div>
    );
}