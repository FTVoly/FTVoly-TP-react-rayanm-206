import './StatBar.css'

function StatBar({ name, value, max, type }) {
    return (
        <div className={`stat-bar stat-bar--${type}`}>
            <div className="stat-bar__label">
                <span className="stat-bar__name">{name}</span>
                <span className="stat-bar__value">{value} / {max}</span>
            </div>
            <div className="stat-bar__track">
                <div className="stat-bar__fill"></div>
            </div>
        </div>
    )
}

export default StatBar
