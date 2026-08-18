import type { Age } from '../dist/age'
import type { Event } from '../dist/event'

/**
 * 古代·科举 时间线的全部事件。
 * 事件 ID 使用 5 开头（50001~），与原现代时间线（10000~40084）不冲突。
 * 效果字段为可选，参考 Event 类型；`grade` 表示稀有度（0 普通 / 1 稀有 / 2 史诗 / 3 传说）。
 */
export const tangEvents: Event[] = [
    // === 童年（0~14 岁） ===
    {
        id: 50001,
        event: '你生于寒门，父母节衣缩食也要供你读书识字。',
        grade: 0,
        effect: { INT: 1, SPR: 1 },
    },
    {
        id: 50002,
        event: '你周岁便能背诵《千字文》，乡里啧啧称奇。',
        grade: 2,
        effect: { INT: 3 },
    },
    {
        id: 50003,
        event: '父亲经商得利，家中家境渐渐殷实起来。',
        grade: 0,
        effect: { MNY: 2 },
    },
    {
        id: 50004,
        event: '父亲生意失败，家中一贫如洗。',
        grade: 0,
        effect: { MNY: -3, SPR: -1, STR: -1 },
    },
    {
        id: 50005,
        event: '你自幼体弱多病，汤药不断。',
        grade: 0,
        effect: { STR: -2 },
    },
    {
        id: 50006,
        event: '你过目成诵，神童之名传遍乡里。',
        grade: 1,
        effect: { INT: 2, CHR: 2 },
    },
    {
        id: 50007,
        event: '你贪玩逃学，被夫子抓回祠堂罚跪抄书。',
        grade: 0,
        effect: { INT: -1, SPR: 1 },
    },
    {
        id: 50008,
        event: '一位致仕名儒见你聪慧可喜，收你为关门弟子。',
        grade: 1,
        effect: { INT: 2, CHR: 1 },
    },
    {
        id: 50009,
        event: '连年大旱，家中粮仓见底，日子过得格外艰难。',
        grade: 0,
        effect: { STR: -2, MNY: -2, SPR: -2 },
    },
    {
        id: 50010,
        event: '你与邻家玩伴两小无猜，约定将来同游长安。',
        grade: 1,
        effect: { SPR: 3 },
    },

    // === 求学科举（15~29 岁） ===
    {
        id: 50020,
        event: '你通过县试，成了童生。',
        grade: 0,
        effect: { INT: 2 },
    },
    {
        id: 50021,
        event: '府试你名列前茅，夫子对你赞不绝口。',
        grade: 0,
        effect: { INT: 2, CHR: 1 },
    },
    {
        id: 50022,
        event: '你考中秀才，正式取得生员资格。',
        grade: 1,
        effect: { INT: 3, CHR: 1, SPR: 1 },
    },
    {
        id: 50023,
        event: '为应乡试，你挑灯夜读，废寝忘食。',
        grade: 0,
        effect: { INT: 3, SPR: -1 },
    },
    {
        id: 50024,
        event: '乡试一鸣惊人，你高中举人！',
        grade: 2,
        effect: { INT: 3, CHR: 2, SPR: 2 },
    },
    {
        id: 50025,
        event: '乡试落第，你长叹命运弄人。',
        grade: 0,
        effect: { SPR: -3, INT: 1 },
    },
    {
        id: 50026,
        event: '你变卖家产，千里赴京参加会试。',
        grade: 0,
        effect: { STR: 1, MNY: -2 },
    },
    {
        id: 50027,
        event: '会试你榜上无名，怏怏返乡。',
        grade: 0,
        effect: { SPR: -3, INT: 1 },
    },
    {
        id: 50028,
        event: '赶考途中你遭了劫匪，盘缠尽失。',
        grade: 0,
        effect: { MNY: -3, STR: -1 },
    },
    {
        id: 50029,
        event: '一位富商赏识你的才学，赠你盘缠继续赶考。',
        grade: 1,
        effect: { MNY: 3, SPR: 1 },
    },
    {
        id: 50030,
        event: '你入宫殿试，对答如流，圣人龙颜大悦。',
        grade: 2,
        effect: { INT: 4, CHR: 2, SPR: 2, MNY: 1 },
    },
    {
        id: 50031,
        event: '你高中状元，跨马游街，风光无两！',
        grade: 3,
        effect: { INT: 5, CHR: 4, SPR: 4, MNY: 2 },
    },
    {
        id: 50032,
        event: '当朝宰相榜下捉婿，招你为东床快婿。',
        grade: 2,
        effect: { CHR: 2, MNY: 3, SPR: 2 },
    },

    // === 仕途（30~59 岁） ===
    {
        id: 50040,
        event: '你补授官职，正式踏入仕途。',
        grade: 0,
        effect: { INT: 1, MNY: 1 },
    },
    {
        id: 50041,
        event: '你勤于政务，百姓皆称你有古人之风。',
        grade: 1,
        effect: { INT: 1, CHR: 2, MNY: 1, SPR: 2 },
    },
    {
        id: 50042,
        event: '你治下仓廪充实、狱无留讼，官声极佳。',
        grade: 1,
        effect: { MNY: 3, SPR: 2 },
    },
    {
        id: 50043,
        event: '你因刚直不阿得罪权贵，被贬外放。',
        grade: 0,
        effect: { MNY: -2, SPR: -3 },
    },
    {
        id: 50044,
        event: '你犯颜直谏，触怒圣颜，被罚廷杖。',
        grade: 1,
        effect: { STR: -1, INT: 2, CHR: 1, SPR: -3 },
    },
    {
        id: 50045,
        event: '属下贪墨事泄，你受牵连下狱。',
        grade: 0,
        effect: { MNY: -4, SPR: -4, STR: -1, LIF: -2 },
    },
    {
        id: 50046,
        event: '你两袖清风，得百姓拥戴，称赞颇多。',
        grade: 1,
        effect: { CHR: 3, SPR: 2 },
    },
    {
        id: 50047,
        event: '你受命平定边患，凯旋受赏。',
        grade: 2,
        effect: { STR: 3, CHR: 2, MNY: 2, SPR: 3 },
    },
    {
        id: 50048,
        event: '圣上命你主考本年春闱，门生遍天下。',
        grade: 2,
        effect: { INT: 2, CHR: 2, SPR: 2 },
    },
    {
        id: 50049,
        event: '你被卷入党争，贬谪岭南烟瘴之地。',
        grade: 1,
        effect: { STR: -2, SPR: -4, MNY: -2, LIF: -3 },
    },
    {
        id: 50050,
        event: '你提携后进，门生故吏遍布朝野。',
        grade: 1,
        effect: { INT: 2, CHR: 2, SPR: 2 },
    },
    {
        id: 50051,
        event: '你官至宰辅，位极人臣，权倾朝野。',
        grade: 3,
        effect: { INT: 2, MNY: 4, CHR: 3, STR: 2, SPR: 3 },
    },

    // === 晚年（60~500 岁） ===
    {
        id: 50060,
        event: '你上疏乞骸骨，得蒙恩准，荣归故里。',
        grade: 0,
        effect: { SPR: 3, MNY: -1 },
    },
    {
        id: 50061,
        event: '你含饴弄孙，尽享天伦之乐。',
        grade: 0,
        effect: { SPR: 3, CHR: 1 },
    },
    {
        id: 50062,
        event: '你年事已高，旧疾复发，卧床不起。',
        grade: 0,
        effect: { STR: -3, LIF: -3 },
    },
    {
        id: 50063,
        event: '你在睡梦中安详离世。',
        grade: 0,
        effect: { LIF: -5 },
    },
    {
        id: 50064,
        event: '你晚年著书立说，流传后世。',
        grade: 2,
        effect: { INT: 2, SPR: 2 },
    },
    {
        id: 50065,
        event: '你出资修桥铺路，被乡里尊为贤达。',
        grade: 1,
        effect: { CHR: 2, SPR: 2, MNY: -1 },
    },
    {
        id: 50066,
        event: '你身体硬朗，儿孙绕膝，人瑞之名远扬。',
        grade: 2,
        effect: { STR: 1, SPR: 2, LIF: 2 },
    },
    {
        id: 50067,
        event: '你回首此生，想起未竟的抱负，怅然若失。',
        grade: 0,
        effect: { SPR: -2 },
    },
]

/** 事件池：事件 ID 与对应的随机权重 */
type EventPool = Array<[Event['id'], number]>

/** 童年（0~14 岁）事件池 */
const childPool: EventPool = [
    [50001, 4],
    [50003, 4],
    [50004, 3],
    [50005, 4],
    [50007, 5],
    [50009, 2],
    [50002, 0.3],
    [50006, 0.5],
    [50008, 0.2],
    [50010, 0.5],
]

/** 求学科举（15~29 岁）事件池 */
const examPool: EventPool = [
    [50020, 4],
    [50021, 4],
    [50022, 3],
    [50023, 4],
    [50025, 4],
    [50027, 4],
    [50028, 2],
    [50026, 3],
    [50024, 1],
    [50029, 0.4],
    [50030, 0.2],
    [50032, 0.1],
    [50031, 0.05],
]

/** 仕途（30~59 岁）事件池 */
const careerPool: EventPool = [
    [50040, 4],
    [50041, 3],
    [50043, 4],
    [50046, 3],
    [50045, 0.5],
    [50042, 2],
    [50049, 0.3],
    [50050, 0.5],
    [50044, 0.5],
    [50047, 0.2],
    [50048, 0.15],
    [50051, 0.05],
]

/** 晚年（60~500 岁）事件池（含随年龄递增的寿终概率） */
function oldPool(age: number): EventPool {
    // 寿终（50063）权重随年龄快速上升，确保寿命能自然走到终点
    const deathWeight = age < 60 ? 0 : (age - 59) * (age - 59) * 0.0004 + 0.2
    return [
        [50060, 4],
        [50061, 5],
        [50062, 2],
        [50067, 3],
        [50064, 0.8],
        [50065, 1],
        [50066, 0.3],
        [50063, deathWeight],
    ]
}

/** 各年龄段上限（含） */
const CHILDHOOD_MAX = 14
const EXAM_MAX = 29
const CAREER_MAX = 59
const OLD_MAX = 500

/** 按照 0~500 岁逐岁生成的事件池映射 */
function buildTangAges(): Map<number, Age> {
    const ages = new Map<number, Age>()
    for (let age = 0; age <= OLD_MAX; age++) {
        const pool: EventPool =
            age <= CHILDHOOD_MAX
                ? childPool
                : age <= EXAM_MAX
                  ? examPool
                  : age <= CAREER_MAX
                    ? careerPool
                    : oldPool(age)
        ages.set(age, { age, event: pool })
    }
    return ages
}

export const tangAges: Map<number, Age> = buildTangAges()