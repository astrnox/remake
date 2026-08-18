import { useTimelineChoose } from '@remake/hooks'
import { timelines } from '@remake/data'
import './Timeline.css'

export function Timeline() {
    const choose = useTimelineChoose()
    return (
        <div className="screen timeline">
            <div className="title">选择时间线</div>
            <ul>
                {timelines.map(timeline => (
                    <li key={timeline.id}>
                        <button className="primary" onClick={() => choose(timeline.id)}>
                            <span className="emoji" aria-hidden="true">
                                {timeline.emoji}
                            </span>
                            <span className="name">{timeline.name}</span>
                        </button>
                        <p>{timeline.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Timeline