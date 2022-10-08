export function Grid(props) {
    return (<div className={`grid content-center justify-center grid-cols-4 gap-4 py-5`}>
        {props.children}
    </div>) 
}