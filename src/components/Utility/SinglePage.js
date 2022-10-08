export function SinglePage(props) {
    return (
        <div style={{ height: window.innerHeight, width: window.innerWidth }}
            className={props.style}>
            {props.children}
        </div>)
}