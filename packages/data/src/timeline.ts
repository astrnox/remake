import type { Age } from '../dist/age'
import { default as modernAges } from '../dist/age'
import { tangAges } from './tang'

/** 全部可用时间线的 ID */
export const timelineIds = ['modern', 'tang'] as const
/** 时间线 ID 类型 */
export type TimelineId = (typeof timelineIds)[number]

/** 时间线元信息 */
export interface Timeline {
    /** 唯一 ID */
    readonly id: TimelineId
    /** 展示名 */
    readonly name: string
    /** 展示图标 */
    readonly emoji: string
    /** 简介 */
    readonly description: string
}

/** 时间线列表（顺序即展示顺序） */
export const timelines: Timeline[] = [
    {
        id: 'modern',
        name: '现代',
        emoji: '🏙️',
        description: '霓虹与高楼，信息爆炸的当代人生。',
    },
    {
        id: 'tang',
        name: '古代·科举',
        emoji: '🏮',
        description: '十年寒窗，金榜题名，走一条庙堂江湖之路。',
    },
]

/** 按 ID 查询时间线 */
export const timelineById = new Map(timelines.map(t => [t.id, t]))

/** 默认时间线 */
export const defaultTimeline: TimelineId = 'modern'

/** 各时间线的逐岁事件池（age -> 事件池） */
export const agesByTimeline = new Map<TimelineId, Map<number, Age>>([
    ['modern', modernAges],
    ['tang', tangAges],
])