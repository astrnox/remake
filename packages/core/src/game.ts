import type { Achievement, Event, Talent } from '@remake/data'
import {
    agesByTimeline,
    AchievementOpportunity as Ao,
} from '@remake/data'
import type { GameState, ProfileState } from './state'
import { createState, nextProfile, propsEffect } from './state'
import { summary as stateSummary } from './state'
import type { ReplacementResult, AdditionalPoints } from './talent'
import { pull, exclude, replacement, additionalPoints } from './talent'
import { trigger as ttr } from './talent'
import { trigger as atr } from './achievement'
import { trigger as etr, check as ec } from './event'
import type { RNG } from '@remake/vitex'
import { pickWeight } from '@remake/vitex'
import { produce, enableMapSet } from 'immer'
enableMapSet()

export interface TriggerResult<T> {
    state: GameState
    triggers: T[]
}
export interface PickResult {
    talents: ReplacementResult
    additionalPoints: AdditionalPoints
}
export function pick(talents: Iterable<Talent['id']>, rng?: RNG): PickResult {
    const r = replacement(talents, rng)
    const ap = additionalPoints(r.talents)
    return { talents: r, additionalPoints: ap }
}

export interface StartResult {
    state: GameState
    achievements: Achievement['id'][]
}
export function start(
    profile: ProfileState,
    ...args: Parameters<typeof createState>
): StartResult {
    const state = createState(...args)
    const ar = atr(Ao.Start, state, profile)
    return { state: ar.state, achievements: ar.triggers }
}
export interface NextResult {
    state: GameState
    age: number
    achievements: Achievement['id'][]
    events: Event['id'][]
    talents: Talent['id'][]
    end: boolean
}

export function next(
    state: GameState,
    profile: ProfileState,
    rng?: RNG,
): NextResult {
    let s = produce(state, draft => {
        draft.props = propsEffect(state.props, { age: 1 })
    })
    const age = s.props.current.age
    const tr = ttr(s, profile, rng)
    const event = pickAgedEvent(age, state.timeline, tr.state, profile, rng)
    const er = event == null ? { state: tr.state, triggers: [] } : etr(
        event,
        tr.state,
        profile,
    )
    const ar = atr(Ao.Trajectory, er.state, profile)
    const end = ar.state.life < 1
    return {
        state: ar.state,
        age,
        achievements: ar.triggers,
        events: er.triggers,
        talents: tr.triggers,
        end,
    }
}

/**
 * 依据当前时间线，从该年龄的事件池中抽取一个满足条件的事件。
 * 若时间线缺失或多个原因抽不到事件，返回 null（走到 end 判定前）。
 */
function pickAgedEvent(
    age: number,
    timeline: GameState['timeline'],
    state: GameState,
    profile: ProfileState,
    rng?: RNG,
): Event['id'] | null {
    const ages = agesByTimeline.get(timeline)
    if (!ages) return null
    // 超过时间线覆盖的最大年龄时，回退到最大年龄，保证不会越界
    const maxAge = Math.max(...ages.keys())
    const safeAge = Math.min(age, maxAge)
    const pool = ages.get(safeAge)?.event ?? []
    const event = pool.filter(([e]) => ec(e, state, profile))
    return pickWeight(event, rng) ?? null
}

export interface SummaryResult {
    state: GameState
    summary: number
    achievements: Achievement['id'][]
}
export function summary(
    state: GameState,
    profile: ProfileState,
): SummaryResult {
    const ar = atr(Ao.Summary, state, profile)
    const s = stateSummary(ar.state)
    return { state: ar.state, summary: s, achievements: ar.triggers }
}

export interface EndResult {
    profile: ProfileState
    achievements: Achievement['id'][]
}

export function end(
    state: GameState,
    profile: ProfileState,
    locked?: Talent['id'][],
) {
    const ar = atr(Ao.End, state, profile)
    const p = nextProfile(profile, ar.state, locked)
    return { profile: p, achievements: ar.triggers }
}

export { pull, exclude }
