import React, { useState } from 'react';

export function Tabs({children}) {
    const childrenTabs = React.Children.toArray(children)
    const [current, setCurrent] = useState(childrenTabs[0].key)
    const newChildren = childrenTabs.map(child => {
        return React.cloneElement(child, {selected: child.key === current})
    })
   
    return <div>
        <nav>
            {childrenTabs.map(child => (
                <button onClick={() => setCurrent(child.key)} href="#" 
                key={child.key}>{child.props.title}</button>
            ))}
        </nav>

        <section>
            {newChildren}
        </section>
    </div>
}

export function Tab({children, selected}) {
    return <div hidden={!selected}>
        {children}
    </div>
}