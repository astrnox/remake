import type { Age } from '../dist/age'
import { default as modernAges } from '../dist/age'
import { tangAges } from './tang'
import { warAges } from './war'
import { cyberAges } from './cyber'

/** 全部可用时间线的 ID */
export const timelineIds = ['modern', 'tang', 'war', 'cyber'] as const
/** 时间线 ID 类型 */
export type TimelineId = (typeof timelineIds)[number]

/** 时间线纪元大类 */
export type TimelineEra = 'past' | 'present' | 'future'

/** 时间线起始属性偏置（在初始分配基础上叠加；键名遵循属性分配命名） */
export type TimelineStartEffect = Partial<
    Record<'charm' | 'intelligence' | 'strength' | 'money' | 'spirit', number>
>

/** 时间线元信息 */
export interface Timeline {
    /** 唯一 ID */
    readonly id: TimelineId
    /** 所属纪元大类 */
    readonly era: TimelineEra
    /** 展示名 */
    readonly name: string
    /** 展示图标 */
    readonly emoji: string
    /** 简介 */
    readonly description: string
    /** 主题色（用于界面差异化） */
    readonly themeColor?: string
    /** 背景氛围描述 */
    readonly background?: string
    /** 出生称号 */
    readonly title?: string
    /** 出生属性偏置 */
    readonly startEffect?: TimelineStartEffect
}

/** 纪元大类展示信息（顺序即展示顺序） */
export const timelineEraOrder: TimelineEra[] = ['past', 'present', 'future']
export const timelineEraLabels: Record<TimelineEra, string> = {
    past: '过去',
    present: '现在',
    future: '未来',
}

/** 时间线列表（顺序即展示顺序） */
export const timelines: Timeline[] = [
    {
        id: 'tang',
        era: 'past',
        name: '古代·科举',
        emoji: '🏮',
        description: '十年寒窗，金榜题名，庙堂江湖只在一念之间。',
        themeColor: '#c9a227',
        background: '晨钟暮鼓，青灯黄卷，一条以笔墨丈量前程的仕途。',
        title: '寒窗书生',
        startEffect: { intelligence: 2, spirit: 1 },
    },
    {
        id: 'war',
        era: 'past',
        name: '乱世·争霸',
        emoji: '⚔️',
        description: '烽火连天，群雄逐鹿，刀剑之上见真章。',
        themeColor: '#c0392b',
        background: '马革裹尸，王侯将相，宁有种乎。',
        title: '无双猛将',
        startEffect: { strength: 2, money: 1 },
    },
    {
        id: 'modern',
        era: 'present',
        name: '现代',
        emoji: '🏙️',
        description: '霓虹与高楼，信息爆炸的当代人生。',
        themeColor: '#4f8df5',
        background: '高楼林立，流量与理想交织的日常。',
        title: '都市行者',
    },
    {
        id: 'cyber',
        era: 'future',
        name: '未来·赛博朋克',
        emoji: '🌆',
        description: '义体改造、霓虹雨夜，属于巨型公司统治的电子未来。',
        themeColor: '#9c6bff',
        background: '义体与代码浇筑的夜之城，霓虹永不熄灭。',
        title: '义体游侠',
        startEffect: { intelligence: 1, strength: 1 },
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
    ['war', warAges],
    ['cyber', cyberAges],
])