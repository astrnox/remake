import type { Age } from '../dist/age'
import type { Event } from '../dist/event'

/**
 * 乱世·争霸 时间线的全部事件。
 * 事件 ID 使用 6 开头（60001~），与原现代时间线（10000~40084）、
 * 古代·科举（50001~）不冲突。
 */
export const warEvents: Event[] = [
    // === 童年（0~14 岁） ===
    {
        id: 60001,
        event: '你生于边陲小村，自幼跟着父辈劳作，浑身是胆。',
        grade: 0,
        effect: { STR: 1 },
    },
    {
        id: 60002,
        event: '你天生神力，十岁便能举起家中磨盘。',
        grade: 2,
        effect: { STR: 3 },
    },
    {
        id: 60003,
        event: '乡里豪强横行，你立志习武，好护一方乡邻。',
        grade: 0,
        effect: { STR: 2, SPR: 1 },
    },
    {
        id: 60004,
        event: '你读过几年私塾，虽非读书种子，却粗通文墨。',
        grade: 0,
        effect: { INT: 2 },
    },
    {
        id: 60005,
        event: '乱世将至，粮价飞涨，家中日子一日不如一日。',
        grade: 0,
        effect: { MNY: -2, SPR: -1 },
    },
    {
        id: 60006,
        event: '你随父进山打猎，练就一双鹰眼和一身胆识。',
        grade: 0,
        effect: { STR: 2 },
    },
    {
        id: 60007,
        event: '战火蔓延到家乡，你随家人仓皇逃难。',
        grade: 0,
        effect: { STR: -1, SPR: -2 },
    },
    {
        id: 60008,
        event: '你见义勇为，赤手放倒两个泼皮，名声初起。',
        grade: 1,
        effect: { STR: 2, CHR: 1 },
    },
    {
        id: 60009,
        event: '一名败退的军汉授你一套枪法，你如获至宝勤练不辍。',
        grade: 1,
        effect: { STR: 2, INT: 1 },
    },
    {
        id: 60010,
        event: '你与几个玩伴歃血为盟，许下同生共死的誓言。',
        grade: 1,
        effect: { SPR: 3 },
    },

    // === 从军·闯荡（15~29 岁） ===
    {
        id: 60020,
        event: '你投军入伍，开始了刀口舔血的日子。',
        grade: 0,
        effect: { STR: 2 },
    },
    {
        id: 60021,
        event: '初阵你便斩将夺旗，一鸣惊人。',
        grade: 1,
        effect: { STR: 3, CHR: 1, MNY: 2 },
    },
    {
        id: 60022,
        event: '阵前你身陷重围，浴血突围，落下几道刀疤。',
        grade: 0,
        effect: { STR: -1 },
    },
    {
        id: 60023,
        event: '你随大军攻城略地，暗地里攒下不少浮财。',
        grade: 0,
        effect: { MNY: 3, STR: 1 },
    },
    {
        id: 60024,
        event: '你结识一群绿林好汉，彼此以命相托。',
        grade: 1,
        effect: { CHR: 2, MNY: -1 },
    },
    {
        id: 60025,
        event: '你拒不克扣军饷，手下士卒无不心服。',
        grade: 1,
        effect: { CHR: 2, SPR: 1, MNY: -1 },
    },
    {
        id: 60026,
        event: '一场混战你率亲卫杀出重围，一战成名。',
        grade: 2,
        effect: { STR: 3, MNY: 2, SPR: 2 },
    },
    {
        id: 60027,
        event: '你错信小人，遭出卖被俘，受尽折辱。',
        grade: 0,
        effect: { MNY: -2, STR: -2 },
    },
    {
        id: 60028,
        event: '你凭三寸不烂之舌，说动敌将临阵倒戈。',
        grade: 1,
        effect: { INT: 2, CHR: 2 },
    },
    {
        id: 60029,
        event: '你立下头功，被擢升为裨将，帐中设宴庆贺。',
        grade: 1,
        effect: { MNY: 2, CHR: 2 },
    },
    {
        id: 60030,
        event: '一位乱世枭雄看中你的勇略，延揽你做帐前猛将。',
        grade: 2,
        effect: { STR: 2, MNY: 3, SPR: 3 },
    },
    {
        id: 60031,
        event: '你于月下独酌，感叹天下大乱、生民涂炭。',
        grade: 0,
        effect: { SPR: -3, INT: 1 },
    },
    {
        id: 60032,
        event: '你阵前斩杀敌酋，声威大震，得号"万人敌"。',
        grade: 3,
        effect: { STR: 3, CHR: 3, MNY: 4 },
    },

    // === 征战·立业（30~59 岁） ===
    {
        id: 60040,
        event: '你独当一面，据守要塞，屡退强敌。',
        grade: 1,
        effect: { INT: 2, CHR: 2 },
    },
    {
        id: 60041,
        event: '你开仓济民，治下百姓感念你活命之恩。',
        grade: 1,
        effect: { SPR: 2, CHR: 1, MNY: -1 },
    },
    {
        id: 60042,
        event: '你身先士卒，中箭坠马，仍不下火线。',
        grade: 1,
        effect: { CHR: 3, STR: -1 },
    },
    {
        id: 60043,
        event: '你扩充部曲、练兵屯田，实力与日俱增。',
        grade: 1,
        effect: { MNY: 3, INT: 2, STR: 1 },
    },
    {
        id: 60044,
        event: '军中粮草被劫，你率奇兵连夜夺回，化险为夷。',
        grade: 1,
        effect: { INT: 2, MNY: 2 },
    },
    {
        id: 60045,
        event: '你功高震主，遭主上猜忌，处处掣肘。',
        grade: 0,
        effect: { SPR: -3, MNY: -1 },
    },
    {
        id: 60046,
        event: '你礼贤下士，广纳贤才，帐下谋士如云。',
        grade: 2,
        effect: { INT: 3, CHR: 2 },
    },
    {
        id: 60047,
        event: '你率军平定一方，百姓扶老携幼，奉你为明主。',
        grade: 2,
        effect: { CHR: 3, SPR: 3, MNY: 2 },
    },
    {
        id: 60048,
        event: '一场恶战，与你同生共死的老部将战死沙场。',
        grade: 1,
        effect: { SPR: -4, STR: -1 },
    },
    {
        id: 60049,
        event: '你于乱世开国称王，剑指四方，号令一方。',
        grade: 3,
        effect: { MNY: 5, CHR: 4, STR: 3 },
    },
    {
        id: 60050,
        event: '连年征战，你旧伤复发，自知天命将至。',
        grade: 1,
        effect: { STR: -3 },
    },
    {
        id: 60051,
        event: '你终于一统山河，铸剑为犁，与民休息。',
        grade: 3,
        effect: { INT: 3, CHR: 3, SPR: 3 },
    },

    // === 晚年（60~500 岁） ===
    {
        id: 60060,
        event: '你上表归乡，金盆洗手，还老卒一身轻。',
        grade: 0,
        effect: { SPR: 3, MNY: -1 },
    },
    {
        id: 60061,
        event: '你闲来追忆往昔，与当年兄弟把酒话当年。',
        grade: 0,
        effect: { SPR: 3, CHR: 1 },
    },
    {
        id: 60062,
        event: '你年事已高，旧日战伤时时作痛，卧床不起。',
        grade: 0,
        effect: { STR: -3 },
    },
    {
        id: 60063,
        event: '你在梦中回望金戈铁马，含笑而终。',
        grade: 0,
        effect: { LIF: -5 },
    },
    {
        id: 60064,
        event: '你晚年整理戎马心得，著《兵略》传于后人。',
        grade: 2,
        effect: { INT: 3, SPR: 2 },
    },
    {
        id: 60065,
        event: '你出资建义庄、修桥铺路，乡里尊为贤长。',
        grade: 1,
        effect: { CHR: 2, SPR: 2, MNY: -1 },
    },
    {
        id: 60066,
        event: '你身体硬朗，晨起仍能开三石强弓，人瑞之名远扬。',
        grade: 2,
        effect: { STR: 1, SPR: 2 },
    },
    {
        id: 60067,
        event: '你目睹乱世渐平、繁华又起，一时百感交集。',
        grade: 0,
        effect: { SPR: -2 },
    },
]

/** 事件池：事件 ID 与对应的随机权重 */
type EventPool = Array<[Event['id'], number]>

/** 童年（0~14 岁）事件池 */
const childPool: EventPool = [
    [60001, 4],
    [60003, 4],
    [60004, 3],
    [60005, 4],
    [60006, 4],
    [60007, 2],
    [60002, 0.3],
    [60008, 0.5],
    [60009, 0.2],
    [60010, 0.5],
]

/** 从军·闯荡（15~29 岁）事件池 */
const wanderPool: EventPool = [
    [60020, 4],
    [60021, 3],
    [60022, 4],
    [60023, 3],
    [60025, 3],
    [60027, 3],
    [60031, 3],
    [60026, 1],
    [60028, 0.4],
    [60029, 0.3],
    [60024, 0.5],
    [60030, 0.15],
    [60032, 0.05],
]

/** 征战·立业（30~59 岁）事件池 */
const careerPool: EventPool = [
    [60040, 4],
    [60041, 3],
    [60043, 4],
    [60044, 3],
    [60045, 4],
    [60048, 2],
    [60042, 1],
    [60046, 0.5],
    [60047, 0.2],
    [60050, 0.3],
    [60049, 0.05],
    [60051, 0.05],
]

/** 晚年（60 岁后）非寿终事件池 */
const oldPool: EventPool = [
    [60060, 4],
    [60061, 5],
    [60062, 1],
    [60067, 3],
    [60064, 0.8],
    [60065, 1],
    [60066, 0.4],
]

// 乱世命途险恶：约 43 岁起死亡概率随年龄抬升，寿命普遍偏短
const DEATH_START = 43
const DEATH_COEFF = 0.05

/** 依据年龄计算寿终事件（60063）的权重 */
function deathWeight(age: number): number {
    if (age < DEATH_START) return 0
    const t = age - (DEATH_START - 1)
    return t * t * DEATH_COEFF
}

/** 为事件池追加随年龄递增的寿终权重 */
const withDeath = (pool: EventPool, age: number): EventPool => {
    const dw = deathWeight(age)
    return dw === 0 ? pool : [...pool, [60063, dw]]
}

const CHILDHOOD_MAX = 14
const WANDER_MAX = 29
const CAREER_MAX = 59
const OLD_MAX = 500

/** 按照 0~500 岁逐岁生成的事件池映射 */
function buildWarAges(): Map<number, Age> {
    const ages = new Map<number, Age>()
    for (let age = 0; age <= OLD_MAX; age++) {
        const pool: EventPool =
            age <= CHILDHOOD_MAX
                ? childPool
                : age <= WANDER_MAX
                  ? wanderPool
                  : age <= CAREER_MAX
                    ? withDeath(careerPool, age)
                    : withDeath(oldPool, age)
        ages.set(age, { age, event: pool })
    }
    return ages
}

export const warAges: Map<number, Age> = buildWarAges()