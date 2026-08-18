import { default as baseEvents } from '../dist/event'
import { tangEvents } from './tang'
import { warEvents } from './war'
import { cyberEvents } from './cyber'

export * from '../dist/achievement'
export { default as achievements } from '../dist/achievement'
export * from '../dist/age'
export { default as ages } from '../dist/age'
export * from '../dist/character'
export { default as characters } from '../dist/character'
export * from '../dist/event'
export * from '../dist/specialthanks'
export { default as specialThanks } from '../dist/specialthanks'
export * from '../dist/talent'
export { default as talents } from '../dist/talent'
export * from './timeline'

/** 全局事件表：现代事件 + 各时间线新增事件（ID 全局唯一） */
const timelineEvents = [
    ...tangEvents,
    ...warEvents,
    ...cyberEvents,
]
const eventsMerged = new Map(baseEvents)
for (const event of timelineEvents) {
    if (eventsMerged.has(event.id))
        throw new Error(`Duplicate timeline event id: ${event.id}`)
    eventsMerged.set(event.id, event)
}
export const events = eventsMerged
