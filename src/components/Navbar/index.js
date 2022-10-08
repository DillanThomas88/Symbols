import React from "react";

export function Navbar(props) {

    return (<nav className={`fixed z-50 bg-white top-0 h-20 flex justify-between uppercase items-center px-20 w-full border-b`}>

        <div className="text-xl opacity-75">{props.header ? props.header : 'props.header'}</div>
        <div className="flex justify-between">
            {props.children ? 
            React.Children.map(props.children, child => {
                return React.cloneElement(child, {
                    onClick: props.onClick,
                    tab: props.tab
                })
            }) 
            : 'Props.children'}</div>
            
            
        </nav>)
}

export function NavItem (props) {
    return (<div onClick={props.onClick}
        className={`relative uppercase ml-4 w-[100px] font-medium text-center ${props.title === props.tab && 'text-sky-600'}`}>
            <div className={`absolute pointer-events-none w-full opacity-0 bottom-0 right-0 border-b border-sky-600 ${props.title === props.tab && 'animate-select'}`}></div>
        {props.title ? props.title : 'EXAMPLE'}
        </div>)
}
