# PRD：多元时间线系统（现在 / 过去 / 未来）

> 项目：《人生重开模拟器》改造
> 目标仓库：`astrnox/remake`（fork 自 `VickScarlet/remake`）
> 技术栈：沿用原项目 TypeScript + React + Jotai + pnpm monorepo（H5/JS/CSS 为呈现载体）
> 状态：待评审

---

## 1. 背景与目标

### 1.1 背景
原版游戏只有一条"现代人生"时间线（`modern`，数据由 `age.xlsx` / `event.xlsx` 经 `v-transform` 生成）。目前分支 `feature/timeline` 已初步加入第二条"古代·科举"（`tang`）时间线，验证了"多时间线"的可行性。
但时间线应当是**多元**的，覆盖**现在、过去、未来**三个大类，让玩家在选择出生时代时有真正的差异感。

### 1.2 目标
1. 建立一套**可扩展的多时间线体系**：按"过去 / 现在 / 未来"分类，每条时间线拥有独立的主题、事件池、年龄池与视觉表现。
2. 至少落地三条主线各一条具体时间线（见下），证明分类可以延伸。
3. 玩家在开局可自由选择时间线，游戏全程遵循所选时间线的数据与风格。

### 1.3 非目标（本期不做）
- 不在本期做时间线之间的"跳转/穿越"玩法。
- 不做时间线自由"叠加"（如上个世纪末 + 赛博朋克）。
- 不改变原版"天赋 → 分配 → 事件 → 总结 / 成就 → 结局"的核心玩法链路。

---

## 2. 现状分析

| 项 | 现状 |
| --- | --- |
| 时间线注册 | `packages/data/src/timeline.ts`：`timelineIds`、`timelines`、`agesByTimeline`、`defaultTimeline` |
| 事件合并 | `packages/data/src/index.ts`：`eventsMerged` = 现代事件 + `tangEvents` |
| core | `GameState.timeline`；`game.next()` 按时间线取 ages（带越界防护） |
| hooks | `Step.Timeline`、`timelineAtom`、`useTimelineChoose`、`useStart` 传入 timeline |
| web | `containers/Timeline.tsx` 选择界面 + `Game.tsx` 路由 |

**当前缺口**：只有"现代 / 古代·科举"两条，未形成"过去 / 现在 / 未来"的分类结构与多元选择；未来时间线（赛博朋克）尚未落地；各时间线视觉/主题差异化不足。

---

## 3. 需求范围

### 3.1 时间线分类与条目
时间线以"纪元大类"组织，界面分组展示。本期落地：

| 大类 | 时间线 ID | 名称 | 主题要点 | 事件池特点 |
| --- | --- | --- | --- | --- |
| 现在 (present) | `modern` | 现代 | 霓虹高楼、信息爆炸的当代人生 | 沿用现有 `age.xlsx`/`event.xlsx`（默认） |
| 过去 (past) | `tang` | 古代·科举 | 十年寒窗、金榜题名 | 已实现（`tang.ts`，50001~50067） |
| 过去 (past) | `war`（建议新增） | 乱世·争霸 | 战火纷飞、群雄逐鹿 | 新增 `war.ts`，6xxxx 事件池 |
| 未来 (future) | `cyber`（建议新增） | 未来·赛博朋克 | 义体改造、霓虹雨夜、大公司 | 新增 `cyber.ts`，7xxxx 事件池 |

> `war` 与 `cyber` 为建议项，可视工期取舍；**最低交付**为 `modern` + `tang` + `cyber`（保证现在 / 过去 / 未来三类各至少一条）。

### 3.2 核心功能需求

#### F1 时间线选择（已初步实现，需增强）
- 开局后先进入"选择时间线"界面。
- 界面**按大类分组**（过去 / 现在 / 未来），每组显示时间线卡片：emoji + 名称 + 一句话简介。
- 默认选中 `modern`；玩家点击某一时间线即进入下一步（按原逻辑：首次进天赋抽取，复玩进入模式选择）。
- 支持从选择界面返回首页。

#### F2 时间线数据隔离
- 每条时间线独立维护：**事件表**（`Event`）、**逐岁事件池**（`age → EventWithWeight[]`）。ID 全局唯一，按区间划分避免冲突：
  - 现代：1xxxx~4xxxx（沿用 xlsx）
  - 古代：5xxxx（科举）、6xxxx（乱世）
  - 未来：7xxxx（赛博朋克）
- 全局事件表 `eventsMerged` 合并全部时间线事件，供成就/事件判定使用。

#### F3 时间线主题化表现
- 每条时间线提供主题元信息：主题色 `themeColor`、背景描述 `background`。
- 游戏进行页（Play）顶部展示当前时间线名称/emoji，可选用主题色来区分不同时代（如未来线用青紫霓虹色、过去线用暖黄古色）。

#### F4 事件池差异化（各时间线独立设计）
- 按"童年 / 成年 / 中年 / 晚年"或更贴合时代的分段设计事件池。
- 通过控制事件池中影响寿命（`LIF`）事件的权重，使不同时间线呈现不同的寿命分布（例：过去寿命偏短，现在/未来更长，未来接近永生的可能性更高）。
- 所有事件需通过 `sim.ts` 式模拟验证：平均寿命、极端寿命、事件覆盖率在合理区间。

### 3.3 用户故事
1. 作为玩家，我能在一开始看到清晰的"过去 / 现在 / 未来"分组并选择出生时代。
2. 作为玩家，选择"古代·科举"后，我经历的是科考、仕途、晚年相关事件，而不是手机和热搜。
3. 作为玩家，选择"未来·赛博朋克"后，遇到义体、黑客、大公司等事件，寿命可远超今世。
4. 作为玩家，我能凭界面主题色一眼区分当前处于哪个时代。

---

## 4. 交互流程

```
首页(Idle)
  └─ 立即重开 → 选择时间线(Timeline)
        ├─ 分组：过去 / 现在 / 未来
        ├─ 选择时间线 → (首次) 天赋抽取(Pick) / (复玩) 模式选择(Mode) → Alloc → Play
        └─ 返回 → 首页
Play 中：按所选时间线的 age 事件池驱动每一岁事件，头顶展示时间线主题
```

Choice 语义：时间线选择**早于**模式选择与天赋抽取，是"人生起点之前"的决定。

---

## 5. 数据结构设计

### 5.1 `timeline.ts` 扩展
```ts
export type TimelineEra = 'past' | 'present' | 'future'
export interface Timeline {
    id: TimelineId            // 'modern' | 'tang' | 'war' | 'cyber'
    era: TimelineEra          // 所属大类
    name: string
    emoji: string
    description: string
    themeColor?: string       // 主题色（可选）
}
export const timelines: Timeline[]   // 分组按 era 排序展示
```

### 5.2 事件组织
沿用 `Event` 类型（`event.types.ts`）。每条时间线一个数据文件（如 `tang.ts`、`war.ts`、`cyber.ts`），导出：
- `xxxEvents: Event[]`
- `xxxAges: Map<number, Age>`（逐岁事件池）

### 5.3 合并与导出
`data/src/index.ts`：
```ts
const eventsMerged = new Map(baseEvents)
for (const events of [tangEvents, warEvents, cyberEvents])
    for (const e of events) eventsMerged.set(e.id, e)
export const events = eventsMerged
export * from './timeline'
```

---

## 6. 功能清单（MoSCoW）

| 优先级 | 需求 |
| --- | --- |
| Must | 时间线按"过去 / 现在 / 未来"分类展示与选择 |
| Must | `modern` + `tang` + `cyber` 三条时间线可用（三类各一） |
| Must | 各时间线独立事件池，寿命分布经模拟验证合理 |
| Must | 事件 ID 全局唯一，无冲突 |
| Should | 时间线主题色/背景差异化 |
| Should | 新增 `war`（乱世·争霸）第四条时间线 |
| Could | 时间线 CSV/XLSX 化，用 `v-transform` 纳入数据构建流程 |
| Won't | 穿越/跳转、时间线叠加 |

---

## 7. 非功能需求
- **性能**：事件抽取 `Math.max(...ages.keys())` 建议预计算，避免每 tick 全量展开。
- **可维护**：新增时间线 = 新建一个数据文件 + 在 `timeline.ts` 注册 + 在 `index.ts` 合并；不改核心玩法代码。
- **兼容**：现代时间线行为与数据保持与 master 一致，不破坏旧存档/成就判定。
- **测试**：core 层为每条新增时间线增加确定性用例；全仓 `lint` / `build` / `test` 保持全绿。

---

## 8. 里程碑与验收标准
1. M1：`timeline.ts` 引入 `era` + 主题字段，选择界面分组渲染。验收：界面出现"过去 / 现在 / 未来"分组。
2. M2：落地 `cyber`（赛博朋克）事件池与年龄池并接入。验收：选择未来时间线可正常开局到总结，事件为未来主题。
3. M3（Should）：落地 `war`（乱世）。验收同 M2。
4. M4：模拟校验 + 全仓 CI 绿 + 提交（参与者仅 astrnox）。

每条时间线模拟验收阈值（SMART）：
- 平均寿命在合理区间（过去 40~60，现在 55~80，未来 60~100+）；
- 时间线专属事件覆盖率 > 60%；
- 无崩溃、无越界、无重复触发同一事件于同一局之外的异常。

---

## 9. 风险与开放问题
- **R1 数据量**：每时间线需 40~70 条事件，需保证主题相关性，工作量主要在内容。缓解：先保证 `cyber` 落地，`war` 作为 Should。
- **R2 寿命平衡**：未来线"更长寿"与现有成就/总结的年龄评级（上限 500）的兼容。缓解：复用现有 500 上限，仅调事件权重。
- **R3 视觉主题**：主题色需与现有 `colors.css` 变量体系兼容。
- **Q1**：`war` 乱世时间线本期是否必须？（建议：是则加，否可延后）
- **Q2**：每条时间线是否需要专属"初始特殊天赋/称号"？（本期建议不做，保持统一天赋池）

---

## 10. 附：本期改动文件预估
- `packages/data/src/timeline.ts`（era/主题字段）
- `packages/data/src/cyber.ts`（新增，future 数据）
- `packages/data/src/war.ts`（新增，Should）
- `packages/data/src/index.ts`（合并）
- `apps/web/src/containers/Timeline.tsx` / `.css`（分组渲染）
- `apps/web/src/containers/Play.tsx` / `.css`（主题展示）
- `packages/hooks/src/play.ts`（如需传递 era/主题）
- `packages/core/src/sim.ts`（模拟校验工具，提交前移除）