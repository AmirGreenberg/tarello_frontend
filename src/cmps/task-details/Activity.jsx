import { useState } from 'react'
import { IconActivity } from '../../services/icons.service'

export function Activity({ iconProps, activities }) {
    const [isShowDetails, setIsShowDetails] = useState(false)

    return (
        <section className="activity">
            <IconActivity {...{...iconProps, size: 28 }} />
            <div className="title-container">
                <h3>Activity</h3>
                <button
                    className="details-primary-link-btn"
                    onClick={() => setIsShowDetails(prev => ! prev)}
                >
                    {isShowDetails ? 'Hide Details' : 'Show Details'}
                </button>
            </div>
        {
            isShowDetails &&
            <ul>
            {
                activities?.map((activity, i) =>
                    <li key={i}>
                        {activity.txt}
                    </li>
                )
            }
            </ul>
        }
        </section>
    )
}
