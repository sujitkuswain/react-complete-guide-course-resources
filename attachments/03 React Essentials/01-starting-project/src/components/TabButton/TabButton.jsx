export default function TabButton({children, whenClicked, isCurrentlySelected, ...props}) {
    return (
        <li>
            <button
                className={isCurrentlySelected ? "active" : ""}
                {...props}>
                {children}
            </button>
        </li>
    )
}