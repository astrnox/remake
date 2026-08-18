import type { Age } from '../dist/age'
import type { Event } from '../dist/event'

/**
 * 未来·赛博朋克 时间线的全部事件。
 * 事件 ID 使用 7 开头（70001~），与原现代时间线（10000~40084）、
 * 古代·科举（50001~）、乱世·争霸（60001~）均不冲突。
 */
export const cyberEvents: Event[] = [
    // === 童年·脑插（0~14 岁） ===
    {
        id: 70001,
        event: '你出身夜之城下城区，从小看惯了霓虹下的黑暗。',
        grade: 0,
        effect: { INT: 1, SPR: -1 },
    },
    {
        id: 70002,
        event: '你天生对电子设备如鱼得水，是邻里皆知的小天才。',
        grade: 2,
        effect: { INT: 3 },
    },
    {
        id: 70003,
        event: '你接种了基因强化疫苗，体格胜过同龄人。',
        grade: 0,
        effect: { STR: 2 },
    },
    {
        id: 70004,
        event: '你父亲在巨型公司混得风生水起，家境优渥。',
        grade: 0,
        effect: { MNY: 2 },
    },
    {
        id: 70005,
        event: '你的父母死于公司间的黑吃黑，你一夜沦为孤儿。',
        grade: 0,
        effect: { MNY: -2, SPR: -3 },
    },
    {
        id: 70006,
        event: '你靠组装二手插件维生，早早学会讨价还价。',
        grade: 0,
        effect: { MNY: 2, INT: 1 },
    },
    {
        id: 70007,
        event: '一名退隐的老黑客收你为徒，带你畅游网络世界。',
        grade: 1,
        effect: { INT: 3 },
    },
    {
        id: 70008,
        event: '你在义体黑市淘到一副废弃却完好的数据眼镜。',
        grade: 1,
        effect: { INT: 2 },
    },
    {
        id: 70009,
        event: '街头帮派欺压弱者，你心底暗暗发誓要出人头地。',
        grade: 0,
        effect: { STR: 1, SPR: 2 },
    },
    {
        id: 70010,
        event: '你初见全息巨幕，幻想有一天站上公司的顶点。',
        grade: 1,
        effect: { SPR: 3 },
    },

    // === 出道·夜之城（15~29 岁） ===
    {
        id: 70020,
        event: '你接下第一单见不得光的活计，初次触到大公司的边缘。',
        grade: 0,
        effect: { MNY: 3, INT: 1 },
    },
    {
        id: 70021,
        event: '你植入第一对顶级义眼，眼前的世界从此不同。',
        grade: 1,
        effect: { INT: 2, STR: 1 },
    },
    {
        id: 70022,
        event: '你在酒吧一掷千金，引得一众看客侧目。',
        grade: 0,
        effect: { CHR: 2, MNY: -2 },
    },
    {
        id: 70023,
        event: '你被一伙佣兵打了冷枪，命悬一线。',
        grade: 0,
        effect: { STR: -2 },
    },
    {
        id: 70024,
        event: '你黑进一家安保公司，破解加密，套现走人。',
        grade: 1,
        effect: { INT: 3, MNY: 3 },
    },
    {
        id: 70025,
        event: '你拒绝为公司铤而走险，丢掉第一份体面工作。',
        grade: 0,
        effect: { MNY: -2, SPR: -1 },
    },
    {
        id: 70026,
        event: '你结识了一群流浪的游侠，彼此把对方当成家人。',
        grade: 1,
        effect: { CHR: 2, SPR: 2 },
    },
    {
        id: 70027,
        event: '你在帮派火并中一战成名，名声迅速传遍街区。',
        grade: 1,
        effect: { STR: 3, MNY: 2 },
    },
    {
        id: 70028,
        event: '你受雇贴身保护一位顶流，意外结下善缘。',
        grade: 1,
        effect: { CHR: 2, MNY: 3 },
    },
    {
        id: 70029,
        event: '你沉迷改造，透支身体，落下难以痊愈的隐疾。',
        grade: 0,
        effect: { STR: -2 },
    },
    {
        id: 70030,
        event: '你破解了巨型公司的核心机密，一跃成为传奇。',
        grade: 3,
        effect: { INT: 5, MNY: 4, CHR: 3 },
    },
    {
        id: 70031,
        event: '你看着不眠的霓虹，忽然怀疑这一切究竟有什么意义。',
        grade: 0,
        effect: { SPR: -3, INT: 1 },
    },
    {
        id: 70032,
        event: '你加入一支传奇雇佣小队，从此行踪成谜。',
        grade: 2,
        effect: { STR: 2, CHR: 2, MNY: 3 },
    },

    // === 生涯·大公司（30~59 岁） ===
    {
        id: 70040,
        event: '你升任部门主管，大刀阔斧推出一系列新体系。',
        grade: 1,
        effect: { INT: 3, MNY: 2 },
    },
    {
        id: 70041,
        event: '你在公司内斗中笑到最后，铁腕手段令人胆寒。',
        grade: 1,
        effect: { INT: 2, MNY: 2, SPR: -1 },
    },
    {
        id: 70042,
        event: '你押注义体实验室，突破性成果带来滚滚回报。',
        grade: 2,
        effect: { MNY: 5, INT: 2 },
    },
    {
        id: 70043,
        event: '你遭对手暗算，重要项目被窃，损失惨重。',
        grade: 0,
        effect: { MNY: -3, INT: -1 },
    },
    {
        id: 70044,
        event: '你推出划时代的义体产品，风靡整个夜之城。',
        grade: 2,
        effect: { INT: 3, MNY: 4, CHR: 2 },
    },
    {
        id: 70045,
        event: '你过度依赖神经芯片，记忆开始出现错乱。',
        grade: 1,
        effect: { INT: -1, SPR: -2 },
    },
    {
        id: 70046,
        event: '你周旋于各方势力之间，游刃有余，无人敢小觑。',
        grade: 1,
        effect: { CHR: 4, INT: 2 },
    },
    {
        id: 70047,
        event: '你资助反抗公司垄断的义体诊所，广施善缘。',
        grade: 1,
        effect: { SPR: 3, CHR: 2, MNY: -2 },
    },
    {
        id: 70048,
        event: '你遭遇一场生化袭击，肉身损毁，险些身亡。',
        grade: 1,
        effect: { STR: -3 },
    },
    {
        id: 70049,
        event: '你登上巨型公司的最高之位，权倾整座夜之城。',
        grade: 3,
        effect: { MNY: 5, CHR: 3, INT: 3 },
    },
    {
        id: 70050,
        event: '你夜以继日地操劳，身体逐渐被掏空。',
        grade: 0,
        effect: { STR: -3, SPR: -2 },
    },
    {
        id: 70051,
        event: '你把意识完整备份上云，从此破除了生死的桎梏。',
        grade: 3,
        effect: { INT: 4, MNY: 2, SPR: 2 },
    },

    // === 晚年·超梦（60~500 岁） ===
    {
        id: 70060,
        event: '你淡出浮华，在海边买下一座玻璃屋，静看潮起潮落。',
        grade: 0,
        effect: { SPR: 3, MNY: -1 },
    },
    {
        id: 70061,
        event: '你躺在超梦里回放一生，恍惚如同隔世。',
        grade: 0,
        effect: { SPR: 3, INT: 1 },
    },
    {
        id: 70062,
        event: '你体内的旧义体开始排斥，故障频出，卧床不起。',
        grade: 0,
        effect: { STR: -3 },
    },
    {
        id: 70063,
        event: '你的意识上传完成，肉身在睡梦中归于寂灭。',
        grade: 0,
        effect: { LIF: -5 },
    },
    {
        id: 70064,
        event: '你晚年把自己的毕生代码与智慧写入公共神经网。',
        grade: 2,
        effect: { INT: 4, SPR: 2 },
    },
    {
        id: 70065,
        event: '你把大半身家用于建设义体普惠网络，受万人敬仰。',
        grade: 1,
        effect: { CHR: 3, SPR: 2, MNY: -3 },
    },
    {
        id: 70066,
        event: '你换上一套最新版义体，精神矍铄，不输当年。',
        grade: 2,
        effect: { STR: 1, SPR: 2 },
    },
    {
        id: 70067,
        event: '你望着依旧不眠的霓虹，笑着合上了数据终端。',
        grade: 0,
        effect: { SPR: 1 },
    },
]

/** 事件池：事件 ID 与对应的随机权重 */
type EventPool = Array<[Event['id'], number]>

/** 童年·脑插（0~14 岁）事件池 */
const childPool: EventPool = [
    [70001, 4],
    [70003, 4],
    [70004, 4],
    [70005, 3],
    [70006, 4],
    [70009, 3],
    [70002, 0.3],
    [70007, 0.3],
    [70008, 0.5],
    [70010, 0.5],
]

/** 出道·夜之城（15~29 岁）事件池 */
const debutPool: EventPool = [
    [70020, 4],
    [70021, 3],
    [70022, 3],
    [70023, 4],
    [70025, 4],
    [70029, 3],
    [70031, 3],
    [70024, 1],
    [70026, 0.5],
    [70027, 0.3],
    [70028, 0.2],
    [70032, 0.1],
    [70030, 0.05],
]

/** 生涯·大公司（30~59 岁）事件池 */
const careerPool: EventPool = [
    [70040, 4],
    [70041, 4],
    [70043, 4],
    [70046, 3],
    [70050, 3],
    [70045, 1.5],
    [70042, 0.4],
    [70047, 0.5],
    [70044, 0.2],
    [70048, 0.3],
    [70049, 0.05],
    [70051, 0.05],
]

/** 晚年·超梦（60 岁后）非寿终事件池 */
const oldPool: EventPool = [
    [70060, 4],
    [70061, 5],
    [70062, 1.5],
    [70067, 3],
    [70064, 0.8],
    [70065, 1],
    [70066, 0.4],
]

// 未来医学与义体可延年益寿：约 65 岁起死亡概率缓慢抬升，寿命普遍更长
const DEATH_START = 65
const DEATH_COEFF = 0.015

/** 依据年龄计算寿终事件（70063）的权重 */
function deathWeight(age: number): number {
    if (age < DEATH_START) return 0
    const t = age - (DEATH_START - 1)
    return t * t * DEATH_COEFF
}

/** 为事件池追加随年龄递增的寿终权重 */
const withDeath = (pool: EventPool, age: number): EventPool => {
    const dw = deathWeight(age)
    return dw === 0 ? pool : [...pool, [70063, dw]]
}

const CHILDHOOD_MAX = 14
const DEBUT_MAX = 29
const CAREER_MAX = 59
const OLD_MAX = 500

/** 按照 0~500 岁逐岁生成的事件池映射 */
function buildCyberAges(): Map<number, Age> {
    const ages = new Map<number, Age>()
    for (let age = 0; age <= OLD_MAX; age++) {
        const pool: EventPool =
            age <= CHILDHOOD_MAX
                ? childPool
                : age <= DEBUT_MAX
                  ? debutPool
                  : age <= CAREER_MAX
                    ? careerPool
                    : withDeath(oldPool, age)
        ages.set(age, { age, event: pool })
    }
    return ages
}

export const cyberAges: Map<number, Age> = buildCyberAges()