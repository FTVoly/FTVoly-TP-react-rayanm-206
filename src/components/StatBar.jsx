import './StatBar.css'

function StatBar({ name, value, max, type }) {
    const tauxRemplissage = max > 0 ? Math.min(100, (value / max) * 100) : 0

    return (
        <div className={`stat-bar stat-bar--${type}`}>
            <div className="stat-bar__label">
                <span className="stat-bar__name">{name}</span>
                <span className="stat-bar__value">{value} / {max}</span>
            </div>
            <div className="stat-bar__track">
                <div
                    className="stat-bar__fill"
                    style={{ width: `${tauxRemplissage}%` }}
                ></div>
            </div>
        </div>
    )
}

export default StatBar
