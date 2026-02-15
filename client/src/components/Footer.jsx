export default function footer({ variant }) {

    if (variant === 'none') return null

    return (
        <>
            {variant === 'auth' ? (
                <footer className="form-footer">
                    <p>© CV Manager</p>
                    <p>La solution intelligente pour vos candidatures</p>
                </footer>
            ) : (
                <footer className="default-footer"></footer>
            )}
        </>
    )
    
}