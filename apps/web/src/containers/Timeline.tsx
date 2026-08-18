import { useTimelineChoose } from '@remake/hooks'
import {
    timelines,
    timelineEraOrder,
    timelineEraLabels,
} from '@remake/data'
import './Timeline.css'

export function Timeline() {
    const choose = useTimelineChoose()
    return (
        <div className="screen timeline">
            <div className="head">
                <h2 className="title">选择人生</h2>
                <p className="subtitle">三条纪元、四段命运，你愿重开往哪一界？</p>
            </div>
            {timelineEraOrder.map(era => (
                <section className="era" key={era}>
                    <h3 className="era-label">{timelineEraLabels[era]}</h3>
                    <ul>
                        {timelines
                            .filter(tl => tl.era === era)
                            .map(tl => (
                                <li
                                    key={tl.id}
                                    style={{ ['--tl-color' as string]: tl.themeColor }}
                                >
                                    <button
                                        className="primary"
                                        onClick={() => choose(tl.id)}
                                    >
                                        <span className="emoji" aria-hidden="true">
                                            {tl.emoji}
                                        </span>
                                        <span className="name">{tl.name}</span>
                                    </button>
                                    <p>{tl.description}</p>
                                </li>
                            ))}
                    </ul>
                </section>
            ))}
        </div>
    )
}

export default Timeline