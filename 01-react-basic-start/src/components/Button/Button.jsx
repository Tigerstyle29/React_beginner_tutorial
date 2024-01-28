import './Button.css'

export default function Button ({ children, onClick, isActive }) {
    // let classes = 'button'
    // if (isActive) classes += ' Active'
    return ( 
        <button className={isActive ? 'button active' : 'button'} onClick={onClick}>
            {children}
        </button>
    )
}