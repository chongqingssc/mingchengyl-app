import $ from 'jquery'
// 时时彩玩法
var SscMethod = {};
// 五星直选
SscMethod['wxzhixfs'] = {
    showname: '复式',
    shortname: 'wxzhixfs',
    realname: '[五星_复式]',
    tips: '从个、十、百、千、万位各选一个号码组成一注。',
    example: '投注方案：23456；<br />开奖号码：23456，即中奖<br />',
    help: '从万位、千位、百位、十位、个位中选择一个5位数号码组成一注，所选号码与开奖号码全部相同，且顺序一致，即为中奖。',
    select: {
        layout: [{
            title: '万位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '千位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '百位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '十位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '个位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['wxzhixds'] = {
    showname: '单式',
    shortname: 'wxzhixds',
    realname: '[五星_单式]',
    tips: '手动输入号码，至少输入1个五位数号码组成一注。',
    example: '投注方案：23456； 开奖号码：23456，即中五星直选一等奖',
    help: '手动输入一个5位数号码组成一注，所选号码的万位、千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。',
    textarea: {},
    compress: true
};
// 五星组选
SscMethod['wxzux120'] = {
    showname: '组选120',
    shortname: 'wxzux120',
    realname: '[五星_组选120]',
    tips: '从0-9中选择5个号码组成一注。',
    example: '投注方案：02568，开奖号码的五个数字只要包含0、2、5、6、8，即可中五星组选120一等奖。',
    help: '从0-9中任意选择5个号码组成一注，所选号码与开奖号码的万位、千位、百位、十位、个位相同，顺序不限，即为中奖。',
    select: {
        layout: [{
            title: '选号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['wxzux60'] = {
    showname: '组选60',
    shortname: 'wxzux60',
    realname: '[五星_组选60]',
    tips: '从“二重号”选择一个号码，“单号”中选择三个号码组成一注。',
    example: '投注方案：二重号：8，单号：0、2、5，只要开奖的5个数字包括 0、2、5、8、8，即可中五星组选60一等奖。',
    help: '选择1个二重号码和3个单号号码组成一注，所选的单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。',
    select: {
        layout: [{
            title: '二重号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '单　号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['wxzux30'] = {
    showname: '组选30',
    shortname: 'wxzux30',
    realname: '[五星_组选30]',
    tips: '从“二重号”选择两个号码，“单号”中选择一个号码组成一注。',
    example: '投注方案：二重号：2、8，单号：0，只要开奖的5个数字包括 0、2、2、8、8，即可中五星组选30一等奖。',
    help: '选择2个二重号和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选的2个二重号码分别在开奖号码中出现了2次，即为中奖。',
    select: {
        layout: [{
            title: '二重号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '单　号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['wxzux20'] = {
    showname: '组选20',
    shortname: 'wxzux20',
    realname: '[五星_组选20]',
    tips: '从“三重号”选择一个号码，“单号”中选择两个号码组成一注。',
    example: '投注方案：三重号：8，单号：0、2，只要开奖的5个数字包括 0、2、8、8、8，即可中五星组选20一等奖。',
    help: '选择1个三重号码和2个单号号码组成一注，所选的单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。',
    select: {
        layout: [{
            title: '三重号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '单　号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['wxzux10'] = {
    showname: '组选10',
    shortname: 'wxzux10',
    realname: '[五星_组选10]',
    tips: '从“三重号”选择一个号码，“二重号”中选择一个号码组成一注。',
    example: '投注方案：三重号：8，二重号：2，只要开奖的5个数字包括 2、2、8、8、8，即可中五星组选10一等奖。',
    help: '选择1个三重号码和1个二重号码，所选三重号码在开奖号码中出现3次，并且所选二重号码在开奖号码中出现了2次，即为中奖。',
    select: {
        layout: [{
            title: '三重号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '二重号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['wxzux5'] = {
    showname: '组选5',
    shortname: 'wxzux5',
    realname: '[五星_组选5]',
    tips: '从“四重号”选择一个号码，“单号”中选择一个号码组成一注。',
    example: '投注方案：四重号：8，单号：2，只要开奖的5个数字包括 2、8、8、8、8，即可中五星组选5一等奖。',
    help: '选择1个四重号码和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选四重号码在开奖号码中出现了4次，即为中奖。',
    select: {
        layout: [{
            title: '四重号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '单　号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['wxhzdxds'] = {
    showname: '和值大小单双',
    shortname: 'wxhzdxds',
    realname: '[五星_和值大小单双]',
    tips: '从大、小、单、双中选择任意一个形态组成一注。',
    example: '投注方案：单，开奖号码12345和值等于15为单数，即中五星和值大小单双一等奖。',
    help: '从大、小、单、双中选择任意一个形态组成一注，只要开奖号码5个数相加总和（5个数相加总和0-22为小，23-45为大，总和单数为单，总和双数为双）形态与所选形态相同，即为中奖。',
    select: {
        layout: [{
            title: '和值',
            balls: ['大', '小', '单', '双'],
            tools: 'min'
        }]
    },
    css: {
        width: 128
    }
};
SscMethod['wxbdw1m'] = {
    showname: '一码',
    shortname: 'wxbdw1m',
    realname: '[五星_一码不定胆]',
    tips: '从0-9中任意选择1个或1个以上号码组成一注。',
    example: '投注方案：5，开奖号码中有5，即中五星不定胆1码一等奖。',
    help: '从0-9中选择1个号码，每注由一个号码组成，只要开奖号码的万位、千位、百位、十位、个位中包含所选号码，即为中奖。',
    select: {
        layout: [{
            title: '选号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['wxbdw2m'] = {
    showname: '二码',
    shortname: 'wxbdw2m',
    realname: '[五星_二码不定胆]',
    tips: '从0-9中任意选择两个号码组成一注。',
    example: '投注方案：3 5，开奖号码中同时有3和5，即中五星不定胆2码一等奖。',
    help: '从0-9中选择两个号码，每注由两个号码组成，只要开奖号码的万位、千位、百位、十位、个位中同时包含所选的两个号码，即为中奖。',
    select: {
        layout: [{
            title: '选号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['wxbdw3m'] = {
    showname: '三码',
    shortname: 'wxbdw3m',
    realname: '[五星_三码不定胆]',
    tips: '从0-9中任意选择3个号码组成一注。',
    example: '投注方案：1 2 3，开奖号码中同时有1 2 3即中五星不定胆3码一等奖。',
    help: '从0-9中选择3个号码，每注由3个号码组成，只要开奖号码的万位、千位、百位、十位、个位中同时包含所选的3个号码，即为中奖。',
    select: {
        layout: [{
            title: '选号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
// 后四直选
SscMethod['sixzhixfsh'] = {
    showname: '复式',
    shortname: 'sixzhixfsh',
    realname: '[后四星_复式]',
    tips: '从千位、百位、十位、个位中选择一个4位数号码组成一注',
    example: '投注方案：3456；开奖号码：*3456，即中四星直选。',
    help: '从千位、百位、十位、个位中选择一个4位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。',
    select: {
        layout: [{
            title: '千位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '百位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '十位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '个位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['sixzhixdsh'] = {
    showname: '单式',
    shortname: 'sixzhixdsh',
    realname: '[后四星_单式]',
    tips: '手动输入号码，至少输入1个四位数号码组成一注。',
    example: '投注方案：3456； 开奖号码：3456，即中四星直选一等奖',
    help: '手动输入一个4位数号码组成一注，所选号码的千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。',
    textarea: {},
    compress: true
};
// 后四组选
SscMethod['sixzux24h'] = {
    showname: '组选24',
    shortname: 'sixzux24h',
    realname: '[后四星_组选24]',
    tips: '从0-9中选择4个号码组成一注。',
    example: '投注方案：0568，开奖号码的四个数字只要包含0、5、6、8，即可中四星组选24一等奖。',
    help: '从0-9中任意选择4个号码组成一注，所选号码与开奖号码的千位、百位、十位、个位相同，且顺序不限，即为中奖。',
    select: {
        layout: [{
            title: '选号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['sixzux12h'] = {
    showname: '组选12',
    shortname: 'sixzux12h',
    realname: '[后四星_组选12]',
    tips: '从“二重号”选择一个号码，“单号”中选择两个号码组成一注。',
    example: '投注方案：二重号：8，单号：0、6，只要开奖的四个数字包括 0、6、8、8，即可中四星组选12一等奖。',
    help: '选择1个二重号码和2个单号号码组成一注，所选单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。',
    select: {
        layout: [{
            title: '二重号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '单　号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['sixzux6h'] = {
    showname: '组选6',
    shortname: 'sixzux6h',
    realname: '[后四星_组选6]',
    tips: '从“二重号”选择两个号码组成一注。',
    example: '投注方案：二重号：6、8，只要开奖的四个数字从小到大排列为 6、6、8、8，即可中四星组选6。',
    help: '选择2个二重号码组成一注，所选的2个二重号码在开奖号码中分别出现了2次，即为中奖。',
    select: {
        layout: [{
            title: '二重号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['sixzux4h'] = {
    showname: '组选4',
    shortname: 'sixzux4h',
    realname: '[后四星_组选4]',
    tips: '从“三重号”选择一个号码，“单号”中选择两个号码组成一注。',
    example: '投注方案：三重号：8，单号：2，只要开奖的四个数字从小到大排列为 2、8、8、8，即可中四星组选4。',
    help: '选择1个三重号码和1个单号号码组成一注，所选单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。',
    select: {
        layout: [{
            title: '三重号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '单　号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
// 前四直选
SscMethod['sixzhixfsq'] = {
    showname: '复式',
    shortname: 'sixzhixfsq',
    realname: '[前四星_复式]',
    tips: '从万位、千位、百位、十位中选择一个4位数号码组成一注',
    example: '投注方案：3456；开奖号码：3456*，即中四星直选。',
    help: '从万位、千位、百位、十位中选择一个4位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。',
    select: {
        layout: [{
            title: '万位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '千位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '百位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '十位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['sixzhixdsq'] = {
    showname: '单式',
    shortname: 'sixzhixdsq',
    realname: '[前四星_单式]',
    tips: '手动输入号码，至少输入1个四位数号码组成一注。',
    example: '投注方案：3456； 开奖号码：3456，即中四星直选一等奖',
    help: '手动输入一个4位数号码组成一注，所选号码的千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。',
    textarea: {},
    compress: true
};
// 前四组选
SscMethod['sixzux24q'] = {
    showname: '组选24',
    shortname: 'sixzux24q',
    realname: '[前四星_组选24]',
    tips: '从0-9中选择4个号码组成一注。',
    example: '投注方案：0568，开奖号码的四个数字只要包含0、5、6、8，即可中四星组选24一等奖。',
    help: '从0-9中任意选择4个号码组成一注，所选号码与开奖号码的万位、千位、百位、十位相同，且顺序不限，即为中奖。',
    select: {
        layout: [{
            title: '选号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['sixzux12q'] = {
    showname: '组选12',
    shortname: 'sixzux12q',
    realname: '[前四星_组选12]',
    tips: '从“二重号”选择一个号码，“单号”中选择两个号码组成一注。',
    example: '投注方案：二重号：8，单号：0、6，只要开奖的四个数字包括 0、6、8、8，即可中四星组选12一等奖。',
    help: '选择1个二重号码和2个单号号码组成一注，所选单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。',
    select: {
        layout: [{
            title: '二重号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '单　号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['sixzux6q'] = {
    showname: '组选6',
    shortname: 'sixzux6q',
    realname: '[前四星_组选6]',
    tips: '从“二重号”选择两个号码组成一注。',
    example: '投注方案：二重号：6、8，只要开奖的四个数字从小到大排列为 6、6、8、8，即可中四星组选6。',
    help: '选择2个二重号码组成一注，所选的2个二重号码在开奖号码中分别出现了2次，即为中奖。',
    select: {
        layout: [{
            title: '二重号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['sixzux4q'] = {
    showname: '组选4',
    shortname: 'sixzux4q',
    realname: '[前四星_组选4]',
    tips: '从“三重号”选择一个号码，“单号”中选择两个号码组成一注。',
    example: '投注方案：三重号：8，单号：2，只要开奖的四个数字从小到大排列为 2、8、8、8，即可中四星组选4。',
    help: '选择1个三重号码和1个单号号码组成一注，所选单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。',
    select: {
        layout: [{
            title: '三重号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '单　号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
// 后三直选
SscMethod['sxzhixfsh'] = {
    showname: '复式',
    shortname: 'sxzhixfsh',
    realname: '[后三码_复式]',
    tips: '从个、十、百位各选一个号码组成一注。',
    example: '投注方案：345；<br>投注方案：345；<br>即中后三直选一等奖',
    help: '从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码后3位相同，且顺序一致，即为中奖。',
    select: {
        layout: [{
            title: '百位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '十位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '个位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['sxzhixdsh'] = {
    showname: '单式',
    shortname: 'sxzhixdsh',
    realname: '[后三码_单式]',
    tips: '手动输入号码，至少输入1个三位数号码组成一注。',
    example: '投注方案：345； 开奖号码：345，即中后三直选一等奖',
    help: '手动输入一个3位数号码组成一注，所选号码的百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。',
    textarea: {},
    compress: true
};
SscMethod['sxzhixhzh'] = {
    showname: '直选和值',
    shortname: 'sxzhixhzh',
    realname: '[后三码_和值]',
    tips: '从0-27中任意选择1个或1个以上号码',
    example: '投注方案：和值1；开奖号码后三位：001,010,100,即中后三直选一等奖',
    help: '所选数值等于开奖号码的百位、十位、个位三个数字相加之和，即为中奖。',
    select: {
        layout: [{
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
            cls: 'hz'
        }]
    }
};
// 后三组选
SscMethod['sxzuxzsh'] = {
    showname: '组三',
    shortname: 'sxzuxzsh',
    realname: '[后三码_组三]',
    tips: '从0-9中任意选择2个或2个以上号码。',
    example: '投注方案：5,8,8；开奖号码后三位：1个5，2个8 (顺序不限)，即中后三组选三一等奖。',
    help: '从0-9中选择2个数字组成两注，所选号码与开奖号码的百位、十位、个位相同，且顺序不限，即为中奖。',
    select: {
        layout: [{
            title: '组三',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['sxzuxzlh'] = {
    showname: '组六',
    shortname: 'sxzuxzlh',
    realname: '[后三码_组六]',
    tips: '从0-9中任意选择3个或3个以上号码。',
    example: '投注方案：2,5,8；开奖号码后三位：1个2、1个5、1个8 (顺序不限)，即中后三组选六一等奖。',
    help: '从0-9中任意选择3个号码组成一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。',
    select: {
        layout: [{
            title: '组六',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['sxhhzxh'] = {
    showname: '混合组选',
    shortname: 'sxhhzxh',
    realname: '[后三码_混合组选]',
    tips: '手动输入号码，至少输入1个三位数号码。',
    example: '投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码后三位包括：(1)0,0,1，顺序不限，即中得组三一等奖；或者(2)1,2,3，顺序不限，即中得组六一等奖。',
    help: '键盘手动输入购买号码，3个数字为一注，开奖号码的百位、十位、个位符合后三组三或组六均为中奖。',
    textarea: {}
};
// 中三直选
SscMethod['sxzhixfsz'] = {
    showname: '复式',
    shortname: 'sxzhixfsz',
    realname: '[中三码_复式]',
    tips: '从千、百、十位各选一个号码组成一注。',
    example: '投注方案：456； 开奖号码：456，即中中三直选一等奖',
    help: '从千位、百位、十位中选择一个3位数号码组成一注，所选号码与开奖号码的中间3位相同，且顺序一致，即为中奖。',
    select: {
        layout: [{
            title: '千位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '百位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '十位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['sxzhixdsz'] = {
    showname: '单式',
    shortname: 'sxzhixdsz',
    realname: '[中三码_单式]',
    tips: '手动输入号码，至少输入1个三位数号码组成一注。',
    example: '投注方案：345； 开奖号码：345，即中中三直选一等奖',
    help: '手动输入一个3位数号码组成一注，所选号码的千位、百位、十位与开奖号码相同，且顺序一致，即为中奖。',
    textarea: {},
    compress: true
};
SscMethod['sxzhixhzz'] = {
    showname: '直选和值',
    shortname: 'sxzhixhzz',
    realname: '[中三码_和值]',
    tips: '从0-27中任意选择1个或1个以上号码',
    example: '投注方案：和值1；开奖号码中间三位：01001,00010,00100,即中中三直选一等奖',
    help: '所选数值等于开奖号码的千位、百位、十位三个数字相加之和，即为中奖。',
    select: {
        layout: [{
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
            cls: 'hz'
        }]
    }
};
// 中三组选
SscMethod['sxzuxzsz'] = {
    showname: '组三',
    shortname: 'sxzuxzsz',
    realname: '[中三码_组三]',
    tips: '从0-9中任意选择2个或2个以上号码。',
    example: '投注方案：5,8,8；开奖号码中间三位：1个5，2个8 (顺序不限)，即中中三组选三一等奖。',
    help: '从0-9中选择2个数字组成两注，所选号码与开奖号码的千位、百位、十位相同，且顺序不限，即为中奖。',
    select: {
        layout: [{
            title: '组三',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['sxzuxzlz'] = {
    showname: '组六',
    shortname: 'sxzuxzlz',
    realname: '[中三码_组六]',
    tips: '从0-9中任意选择3个或3个以上号码。',
    example: '投注方案：2,5,8；开奖号码中间三位：1个2、1个5、1个8 (顺序不限)，即中中三组选六一等奖。',
    help: '从0-9中任意选择3个号码组成一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖。',
    select: {
        layout: [{
            title: '组六',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['sxhhzxz'] = {
    showname: '混合组选',
    shortname: 'sxhhzxz',
    realname: '[中三码_混合组选]',
    tips: '手动输入号码，至少输入1个三位数号码。',
    example: '投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码中间三位包括：(1)0,0,1，顺序不限，即中得组三一等奖；或者(2)1,2,3，顺序不限，即中得组六一等奖。',
    help: '键盘手动输入购买号码，3个数字为一注，开奖号码的千位、百位、十位符合中三组三或组六均为中奖。',
    textarea: {}
};
// 前三直选
SscMethod['sxzhixfsq'] = {
    showname: '复式',
    shortname: 'sxzhixfsq',
    realname: '[前三码_复式]',
    tips: '从万、千、百位各选一个号码组成一注。',
    example: '投注方案：345； 开奖号码：345，即中前三直选一等奖',
    help: '从万位、千位、百位中选择一个3位数号码组成一注，所选号码与开奖号码的前3位相同，且顺序一致，即为中奖。',
    select: {
        layout: [{
            title: '万位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '千位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '百位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['sxzhixdsq'] = {
    showname: '单式',
    shortname: 'sxzhixdsq',
    realname: '[前三码_单式]',
    tips: '手动输入号码，至少输入1个三位数号码组成一注。',
    example: '投注方案：345； 开奖号码：345，即中前三直选一等奖',
    help: '手动输入一个3位数号码组成一注，所选号码的万位、千位、百位与开奖号码相同，且顺序一致，即为中奖。',
    textarea: {},
    compress: true
};
SscMethod['sxzhixhzq'] = {
    showname: '直选和值',
    shortname: 'sxzhixhzq',
    realname: '[前三码_和值]',
    tips: '从0-27中任意选择1个或1个以上号码',
    example: '投注方案：和值1；开奖号码前三位：001,010,100,即中前三直选一等奖',
    help: '所选数值等于开奖号码的万位、千位、百位三个数字相加之和，即为中奖。',
    select: {
        layout: [{
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
            cls: 'hz'
        }]
    }
};
// 前三组选
SscMethod['sxzuxzsq'] = {
    showname: '组三',
    shortname: 'sxzuxzsq',
    realname: '[前三码_组三]',
    tips: '从0-9中任意选择2个或2个以上号码。',
    example: '投注方案：5,8,8；开奖号码前三位：1个5，2个8 (顺序不限)，即中前三组选三一等奖。',
    help: '从0-9中选择2个数字组成两注，所选号码与开奖号码的万位、千位、百位相同，且顺序不限，即为中奖。',
    select: {
        layout: [{
            title: '组三',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['sxzuxzlq'] = {
    showname: '组六',
    shortname: 'sxzuxzlq',
    realname: '[前三码_组六]',
    tips: '从0-9中任意选择3个或3个以上号码。',
    example: '投注方案：2,5,8；开奖号码前三位：1个2、1个5、1个8 (顺序不限)，即中前三组选六一等奖。',
    help: '从0-9中任意选择3个号码组成一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。',
    select: {
        layout: [{
            title: '组六',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['sxhhzxq'] = {
    showname: '混合组选',
    shortname: 'sxhhzxq',
    realname: '[前三码_混合组选]',
    tips: '手动输入号码，至少输入1个三位数号码。',
    example: '投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码前三位包括：(1)0,0,1，顺序不限，即中得组三一等奖；或者(2)1,2,3，顺序不限，即中得组六一等奖。',
    help: '键盘手动输入购买号码，3个数字为一注，开奖号码的万位、千位、百位符合后三组三或组六均为中奖。',
    textarea: {}
};
// 后二星 直选
SscMethod['exzhixfsh'] = {
    showname: '复式',
    shortname: 'exzhixfsh',
    realname: '[后二码_直选_复式]',
    tips: '从十、个位各选一个号码组成一注。',
    example: '投注方案：58；开奖号码后二位：58，即中后二直选一等奖。',
    help: '从十位、个位中选择一个2位数号码组成一注，所选号码与开奖号码的十位、个位相同，且顺序一致，即为中奖。',
    select: {
        layout: [{
            title: '十位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '个位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['exzhixdsh'] = {
    showname: '单式',
    shortname: 'exzhixdsh',
    realname: '[后二码_直选_单式]',
    tips: '手动输入号码，至少输入1个两位数号码。',
    example: '投注方案：58；开奖号码后二位：58，即中后二直选一等奖。',
    help: '手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。',
    textarea: {},
    compress: true
};
SscMethod['exzhixhzh'] = {
    showname: '直选和值',
    shortname: 'exzhixhzh',
    realname: '[后二码_直选_和值]',
    tips: '从0-18中任意选择1个或1个以上的和值号码。',
    example: '投注方案：和值1；开奖号码后二位：01,10，即中后二直选。',
    help: '所选数值等于开奖号码的十位、个位二个数字相加之和，即为中奖。',
    select: {
        layout: [{
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
            cls: 'hz'
        }]
    }
};
SscMethod['dxdsh'] = {
    showname: '大小单双',
    shortname: 'dxdsh',
    realname: '[后二星_大小单双]',
    tips: '从十位、个位中的“大、小、单、双”中至少各选一个组成一注。',
    example: '投注方案：大单；开奖号码十位与个位：大单，即中后二大小单双一等奖。',
    help: '对十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。',
    select: {
        layout: [{
            title: '十位',
            balls: ['大', '小', '单', '双'],
            tools: 'min'
        }, {
            title: '个位',
            balls: ['大', '小', '单', '双'],
            tools: 'min'
        }]
    }
};
// 后二星 组选
SscMethod['exzuxfsh'] = {
    showname: '复式',
    shortname: 'exzuxfsh',
    realname: '[后二码_组选_复式]',
    tips: '从0-9中任意选择2个或2个以上号码。',
    example: '投注方案：5,8；开奖号码后二位：1个5，1个8 (顺序不限)，即中后二组选一等奖。',
    help: '从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限，即中奖。',
    select: {
        layout: [{
            title: '组选',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['exzuxdsh'] = {
    showname: '单式',
    shortname: 'exzuxdsh',
    realname: '[后二码_组选_单式]',
    tips: '手动输入号码，至少输入1个两位数号码。',
    example: '投注方案：5,8；开奖号码后二位：1个5，1个8 (顺序不限)，即中后二组选一等奖。',
    help: '手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，顺序不限，即为中奖。',
    textarea: {},
    compress: true
};
// 前二星 直选
SscMethod['exzhixfsq'] = {
    showname: '复式',
    shortname: 'exzhixfsq',
    realname: '[前二码_直选_复式]',
    tips: '从万、千位各选一个号码组成一注。',
    example: '投注方案：58；开奖号码前二位：58，即中前二直选一等奖。',
    help: '从万位、千位中选择一个2位数号码组成一注，所选号码与开奖号码的前2位相同，且顺序一致，即为中奖。',
    select: {
        layout: [{
            title: '万位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '千位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['exzhixdsq'] = {
    showname: '单式',
    shortname: 'exzhixdsq',
    realname: '[前二码_直选_单式]',
    tips: '手动输入号码，至少输入1个两位数号码。',
    example: '投注方案：58；开奖号码前二位：58，即中前二直选一等奖。',
    help: '手动输入一个2位数号码组成一注，所选号码的万位、千位与开奖号码相同，且顺序一致，即为中奖。',
    textarea: {},
    compress: true
};
SscMethod['exzhixhzq'] = {
    showname: '直选和值',
    shortname: 'exzhixhzq',
    realname: '[前二码_直选_和值]',
    tips: '从0-18中任意选择1个或1个以上的和值号码。',
    example: '投注方案：和值1；开奖号码前二位：01,10，即中前二直选。',
    help: '所选数值等于开奖号码的万位、千位二个数字相加之和，即为中奖。',
    select: {
        layout: [{
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
            cls: 'hz'
        }]
    }
};
SscMethod['dxdsq'] = {
    showname: '大小单双',
    shortname: 'dxdsq',
    realname: '[前二星_大小单双]',
    tips: '从万位、千位中的“大、小、单、双”中至少各选一个组成一注。',
    example: '投注方案：小双；开奖号码万位与千位：小双，即中前二大小单双一等奖。',
    help: '对百位、十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。',
    select: {
        layout: [{
            title: '万位',
            balls: ['大', '小', '单', '双'],
            tools: 'min'
        }, {
            title: '千位',
            balls: ['大', '小', '单', '双'],
            tools: 'min'
        }]
    }
};
// 前二星 组选
SscMethod['exzuxfsq'] = {
    showname: '复式',
    shortname: 'exzuxfsq',
    realname: '[前二码_组选_复式]',
    tips: '从0-9中任意选择2个或2个以上号码。',
    example: '投注方案：5,8；开奖号码前二位：1个5，1个8 (顺序不限)，即中前二组选一等奖。',
    help: '从0-9中选2个号码组成一注，所选号码与开奖号码的万位、千位相同，顺序不限，即中奖。',
    select: {
        layout: [{
            title: '组选',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['exzuxdsq'] = {
    showname: '单式',
    shortname: 'exzuxdsq',
    realname: '[前二码_组选_单式]',
    tips: '手动输入号码，至少输入1个两位数号码。',
    example: '投注方案：5,8；开奖号码前二位：1个5，1个8 (顺序不限)，即中前二组选一等奖。',
    help: '手动输入一个2位数号码组成一注，所选号码的万位、千位与开奖号码相同，顺序不限，即为中奖。',
    textarea: {},
    compress: true
};
// 定位胆
SscMethod['dw'] = {
    showname: '定位胆',
    shortname: 'dw',
    realname: '定位胆',
    tips: '在万千百十个位任意位置上任意选择1个或1个以上号码。',
    example: '投注方案：1；开奖号码万位：1，即中定位胆万位一等奖。',
    help: '从万位、千位、百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。',
    select: {
        layout: [{
            title: '万位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '千位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '百位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '十位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '个位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
// 不定胆
SscMethod['bdw1mh'] = {
    showname: '后三一码',
    shortname: 'bdw1mh',
    realname: '[不定胆_后三一码]',
    tips: '从0-9中任意选择1个以上号码。',
    example: '投注方案：1；开奖号码后三位：至少出现1个1，即中后三一码不定胆一等奖。',
    help: '从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的百位、十位、个位中包含所选号码，即为中奖。',
    select: {
        layout: [{
            title: '不定胆',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['bdw2mh'] = {
    showname: '后三二码',
    shortname: 'bdw2mh',
    realname: '[不定胆_后三二码]',
    tips: '从0-9中任意选择2个以上号码。',
    example: '投注方案：1,2；开奖号码后三位：至少出现1和2各1个，即中后三二码不定胆一等奖。',
    help: '从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的百位、十位、个位中同时包含所选的2个号码，即为中奖。',
    select: {
        layout: [{
            title: '不定胆',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['bdw1mz'] = {
    showname: '中三一码',
    shortname: 'bdw1mz',
    realname: '[不定胆_中三一码]',
    tips: '从0-9中任意选择1个以上号码。',
    example: '投注方案：1；开奖号码中间三位：至少出现1个1，即中中三一码不定胆一等奖。',
    help: '从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的千位、百位、十位中包含所选号码，即为中奖。',
    select: {
        layout: [{
            title: '不定胆',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['bdw2mz'] = {
    showname: '中三二码',
    shortname: 'bdw2mz',
    realname: '[不定胆_中三二码]',
    tips: '从0-9中任意选择2个以上号码。',
    example: '投注方案：1,2；开奖号码中间三位：至少出现1和2各1个，即中中三二码不定胆一等奖。',
    help: '从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的千位、百位、十位中同时包含所选的2个号码，即为中奖。',
    select: {
        layout: [{
            title: '不定胆',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['bdw1mq'] = {
    showname: '前三一码',
    shortname: 'bdw1mq',
    realname: '[不定胆_前三一码]',
    tips: '从0-9中任意选择1个以上号码。',
    example: '投注方案：1；开奖号码前三位：至少出现1个1，即中前三一码不定胆一等奖。',
    help: '从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的万位、千位、百位中包含所选号码，即为中奖。',
    select: {
        layout: [{
            title: '不定胆',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['bdw2mq'] = {
    showname: '前三二码',
    shortname: 'bdw2mq',
    realname: '[不定胆_前三二码]',
    tips: '从0-9中任意选择2个以上号码。',
    example: '投注方案：1,2；开奖号码前三位：至少出现1和2各1个，即中前三二码不定胆一等奖。',
    help: '从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位中同时包含所选的2个号码，即为中奖。',
    select: {
        layout: [{
            title: '不定胆',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
// 任选二 复式
SscMethod['rx2fs'] = {
    showname: '复式',
    shortname: 'rx2fs',
    realname: '[任选二_复式]',
    tips: '万、千、百、十、个任意2位，开奖号分别对应且顺序一致即中奖',
    example: '万位买0，千位买1，百位买2，开奖01234，则中奖。',
    help: '从万、千、百、十、个中至少2个位置各选一个或多个号码，将各个位置的号码进行组合，所选号码的各位与开奖号码相同则中奖。',
    select: {
        layout: [{
            title: '万位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '千位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '百位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '十位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '个位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
// 任选二
SscMethod['rx2ds'] = {
    showname: '单式',
    shortname: 'rx2ds',
    realname: '[任选二_单式]',
    tips: '手动输入号码，至少输入1个两位数号码和至少选择两个位置',
    example: '输入号码01并选择万、千位置位，如开奖号码为01***； 则中奖',
    help: '手动输入一注或者多注的两个号码和至少两个位置，如果选中的号码与位置和开奖号码对应则中奖',
    checkbox: {
        layout: [{
            title: '位置',
            value: ['万位', '千位', '百位', '十位', '个位']
        }],
        defCheck: ['十位', '个位'],
        message: [
            '温馨提示：您选择了0个位置，系统将自动生成0个方案',
            '温馨提示：您选择了1个位置，系统将自动生成0个方案',
            '温馨提示：您选择了2个位置，系统将自动生成1个方案',
            '温馨提示：您选择了3个位置，系统将自动生成3个方案',
            '温馨提示：您选择了4个位置，系统将自动生成6个方案',
            '温馨提示：您选择了5个位置，系统将自动生成10个方案'
        ]
    },
    textarea: {
        cls: 'rx'
    },
    compress: true
};
SscMethod['rx2zx'] = {
    showname: '组选',
    shortname: 'rx2zx',
    realname: '[任选二_组选]',
    tips: '从0-9中任意选择2个或2个以上号码和任意两个位置',
    example: '位置选择万、千，号码选择01；开奖号码为01***、则中奖',
    help: '从0-9中任意选择2个或2个以上号码和万、千、百、十、个任意的两个位置，如果组合的号码与开奖号码对应则中奖',
    checkbox: {
        layout: [{
            title: '位置',
            value: ['万位', '千位', '百位', '十位', '个位']
        }],
        defCheck: ['十位', '个位'],
        message: [
            '温馨提示：您选择了0个位置，系统将自动生成0个方案',
            '温馨提示：您选择了1个位置，系统将自动生成0个方案',
            '温馨提示：您选择了2个位置，系统将自动生成1个方案',
            '温馨提示：您选择了3个位置，系统将自动生成3个方案',
            '温馨提示：您选择了4个位置，系统将自动生成6个方案',
            '温馨提示：您选择了5个位置，系统将自动生成10个方案'
        ]
    },
    select: {
        layout: [{
            title: '号码',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
// 任选三
SscMethod['rx3fs'] = {
    showname: '复式',
    shortname: 'rx3fs',
    realname: '[任选三_复式]',
    tips: '万、千、百、十、个任意3位，开奖号分别对应且顺序一致即中奖',
    example: '万位买0，千位买1，百位买2，十位买3，开奖01234，则中奖。',
    help: '从万、千、百、十、个中至少3个位置各选一个或多个号码，将各个位置的号码进行组合，所选号码的各位与开奖号码相同则中奖。',
    select: {
        layout: [{
            title: '万位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '千位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '百位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '十位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '个位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['rx3ds'] = {
    showname: '单式',
    shortname: 'rx3ds',
    realname: '[任选三_单式]',
    tips: '手动输入号码，至少输入1个三位数号码和至少选择三个位置',
    example: '输入号码012选择万、千、百位置，如开奖号码为012**； 则中奖',
    help: '手动输入一注或者多注的三个号码和至少三个位置，如果选中的号码与位置和开奖号码对应则中奖',
    checkbox: {
        layout: [{
            title: '位置',
            value: ['万位', '千位', '百位', '十位', '个位']
        }],
        defCheck: ['百位', '十位', '个位'],
        message: [
            '温馨提示：您选择了0个位置，系统将自动生成0个方案',
            '温馨提示：您选择了1个位置，系统将自动生成0个方案',
            '温馨提示：您选择了2个位置，系统将自动生成0个方案',
            '温馨提示：您选择了3个位置，系统将自动生成1个方案',
            '温馨提示：您选择了4个位置，系统将自动生成4个方案',
            '温馨提示：您选择了5个位置，系统将自动生成10个方案'
        ]
    },
    textarea: {
        cls: 'rx'
    },
    compress: true
};
SscMethod['rx3z3'] = {
    showname: '组三',
    shortname: 'rx3z3',
    realname: '[任选三_组三]',
    tips: '从0-9中任意选择2个或2个以上号码和任意三个位置',
    example: '位置选择万、千、百，号码选择01；开奖号码为110**、则中奖',
    help: '从0-9中任意选择2个或2个以上号码和万、千、百、十、个任意的三个位置，如果组合的号码与开奖号码对应则中奖',
    checkbox: {
        layout: [{
            title: '位置',
            value: ['万位', '千位', '百位', '十位', '个位']
        }],
        defCheck: ['百位', '十位', '个位'],
        message: [
            '温馨提示：您选择了0个位置，系统将自动生成0个方案',
            '温馨提示：您选择了1个位置，系统将自动生成0个方案',
            '温馨提示：您选择了2个位置，系统将自动生成0个方案',
            '温馨提示：您选择了3个位置，系统将自动生成1个方案',
            '温馨提示：您选择了4个位置，系统将自动生成4个方案',
            '温馨提示：您选择了5个位置，系统将自动生成10个方案'
        ]
    },
    select: {
        layout: [{
            title: '号码',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['rx3z6'] = {
    showname: '组六',
    shortname: 'rx3z6',
    realname: '[任选三_组六]',
    tips: '从0-9中任意选择3个或3个以上号码和任意三个位置',
    example: '位置选择万、千、百，号码选择012；开奖号码为012**、则中奖',
    help: '从0-9中任意选择3个或3个以上号码和万、千、百、十、个任意的三个位置，如果组合的号码与开奖号码对应则中奖',
    checkbox: {
        layout: [{
            title: '位置',
            value: ['万位', '千位', '百位', '十位', '个位']
        }],
        defCheck: ['百位', '十位', '个位'],
        message: [
            '温馨提示：您选择了0个位置，系统将自动生成0个方案',
            '温馨提示：您选择了1个位置，系统将自动生成0个方案',
            '温馨提示：您选择了2个位置，系统将自动生成0个方案',
            '温馨提示：您选择了3个位置，系统将自动生成1个方案',
            '温馨提示：您选择了4个位置，系统将自动生成4个方案',
            '温馨提示：您选择了5个位置，系统将自动生成10个方案'
        ]
    },
    select: {
        layout: [{
            title: '号码',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['rx3hh'] = {
    showname: '混合组选',
    shortname: 'rx3hh',
    realname: '[任选三_混合组选]',
    tips: '手动输入号码，至少输入1个三位数号码和任意三个位置',
    example: '投注方案：选择对应位置：百，十，个，开奖号码顺序不限：**345，即为中奖.',
    help: '3个数字为一注，所选开奖号码符合对应所选位置的组三或组六均为中奖。',
    checkbox: {
        layout: [{
            title: '位置',
            value: ['万位', '千位', '百位', '十位', '个位']
        }],
        defCheck: ['百位', '十位', '个位'],
        message: [
            '温馨提示：您选择了0个位置，系统将自动生成0个方案',
            '温馨提示：您选择了1个位置，系统将自动生成0个方案',
            '温馨提示：您选择了2个位置，系统将自动生成0个方案',
            '温馨提示：您选择了3个位置，系统将自动生成1个方案',
            '温馨提示：您选择了4个位置，系统将自动生成4个方案',
            '温馨提示：您选择了5个位置，系统将自动生成10个方案'
        ]
    },
    textarea: {
        cls: 'rx'
    }
};
// 任选四
SscMethod['rx4fs'] = {
    showname: '复式',
    shortname: 'rx4fs',
    realname: '[任选四_复试]',
    tips: '万、千、百、十、个任意4位，开奖号分别对应且顺序一致即中奖',
    example: '万位买0，千位买1，百位买2，十位买3，个位买4，开奖01234，则中奖。',
    help: '从万、千、百、十、个中至少4个位置各选一个或多个号码，将各个位置的号码进行组合，所选号码的各位与开奖号码相同则中奖。',
    select: {
        layout: [{
            title: '万位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '千位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '百位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '十位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '个位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['rx4ds'] = {
    showname: '单式',
    shortname: 'rx4ds',
    realname: '[任选四_单式]',
    tips: '手动输入号码，至少输入1个四位数号码和至少选择四个位置',
    example: '输入号码0123选择万、千、百、十位置，如开奖号码为0123*； 则中奖',
    help: '手动输入一注或者多注的四个号码和至少四个位置，如果选中的号码与位置和开奖号码对应则中奖',
    checkbox: {
        layout: [{
            title: '位置',
            value: ['万位', '千位', '百位', '十位', '个位']
        }],
        defCheck: ['千位', '百位', '十位', '个位'],
        message: [
            '温馨提示：您选择了0个位置，系统将自动生成0个方案',
            '温馨提示：您选择了1个位置，系统将自动生成0个方案',
            '温馨提示：您选择了2个位置，系统将自动生成0个方案',
            '温馨提示：您选择了3个位置，系统将自动生成0个方案',
            '温馨提示：您选择了4个位置，系统将自动生成1个方案',
            '温馨提示：您选择了5个位置，系统将自动生成5个方案'
        ]
    },
    textarea: {
        cls: 'rx'
    },
    compress: true
};
// 跨度玩法
SscMethod['kdqs'] = {
    showname: '前三跨度',
    shortname: 'kdqs',
    realname: '跨度_前三',
    tips: '至少选择一个号码组成一注。',
    example: '投注方案：选择5, 等于开奖号前三位2,5,7的最大数7与最小数字2的差值，即为中奖。',
    help: '玩法：选择0-9，若所选号码与开奖号前三位的最大最小数字的差值相等，即中奖。',
    select: {
        layout: [{
            title: '选号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['kdzs'] = {
    showname: '中三跨度',
    shortname: 'kdzs',
    realname: '跨度_中三',
    tips: '至少选择一个号码组成一注。',
    example: '投注方案：选择5, 等于开奖号中三位2,5,7的最大数7与最小数字2的差值，即为中奖。',
    help: '玩法：选择0-9，若所选号码与开奖号中三位的最大最小数字的差值相等，即中奖。',
    select: {
        layout: [{
            title: '选号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['kdhs'] = {
    showname: '后三跨度',
    shortname: 'kdhs',
    realname: '跨度_后三',
    tips: '至少选择一个号码组成一注。',
    example: '投注方案：选择5, 等于开奖号后三位2,5,7的最大数7与最小数字2的差值，即为中奖。',
    help: '玩法：选择0-9，若所选号码与开奖号后三位的最大最小数字的差值相等，即中奖。',
    select: {
        layout: [{
            title: '选号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['kdqe'] = {
    showname: '前二跨度',
    shortname: 'kdqe',
    realname: '跨度_前二',
    tips: '至少选择一个号码组成一注。',
    example: '投注方案：选择5, 等于开奖号前二位2,7的最大数7与最小数字2的差值，即为中奖。',
    help: '玩法：选择0-9，若所选号码与开奖号前二位的最大最小数字的差值相等，即中奖。',
    select: {
        layout: [{
            title: '选号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['kdhe'] = {
    showname: '后二跨度',
    shortname: 'kdhe',
    realname: '跨度_后二',
    tips: '至少选择一个号码组成一注。',
    example: '投注方案：选择5, 等于开奖号后二位2,7的最大数7与最小数字2的差值，即为中奖。',
    help: '玩法：选择0-9，若所选号码与开奖号后二位的最大最小数字的差值相等，即中奖。。',
    select: {
        layout: [{
            title: '选号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
// 趣味玩法
SscMethod['qwyffs'] = {
    showname: '一帆风顺',
    shortname: 'qwyffs',
    realname: '[特殊_一帆风顺]',
    tips: '从0-9中任意选择1个以上号码。',
    example: '投注方案：8；开奖号码：至少出现1个8，即中一帆风顺。',
    help: '从0-9中任意选择1个号码组成一注，只要开奖号码的万位、千位、百位、十位、个位中包含所选号码，即为中奖。',
    select: {
        layout: [{
            title: '选号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['qwhscs'] = {
    showname: '好事成双',
    shortname: 'qwhscs',
    realname: '[特殊_好事成双]',
    tips: '从0-9中任意选择1个以上的二重号码。',
    example: '投注方案：8；开奖号码：至少出现2个8，即中好事成双。',
    help: '从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现2次，即为中奖。',
    select: {
        layout: [{
            title: '选号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['qwsxbx'] = {
    showname: '三星报喜',
    shortname: 'qwsxbx',
    realname: '[特殊_三星报喜]',
    tips: '从0-9中任意选择1个以上的三重号码。',
    example: '投注方案：8；开奖号码：至少出现3个8，即中三星报喜。',
    help: '从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现3次，即为中奖。',
    select: {
        layout: [{
            title: '选号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
SscMethod['qwsjfc'] = {
    showname: '四季发财',
    shortname: 'qwsjfc',
    realname: '[特殊_四季发财]',
    tips: '从0-9中任意选择1个以上的四重号码。',
    example: '投注方案：8；开奖号码：至少出现4个8，即中四季发财。',
    help: '从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现4次，即为中奖。',
    select: {
        layout: [{
            title: '选号',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
// 龙虎
SscMethod['lhwq'] = {
    showname: '万千',
    shortname: 'lhwq',
    realname: '[龙虎_万千]',
    tips: '从万位、千位上选择一个形态组成一注。',
    example: '投注方案：龙；开奖号码万位大于千位：龙，即中奖。',
    help: '根据万位、千位号码数值比大小，万位号码大于千位号码为龙，万位号码小于千位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。',
    select: {
        layout: [{
            title: '龙虎',
            balls: ['龙', '虎', '和']
        }]
    }
};
SscMethod['lhwb'] = {
    showname: '万百',
    shortname: 'lhwb',
    realname: '[龙虎_万百]',
    tips: '从万位、百位上选择一个形态组成一注。',
    example: '投注方案：龙；开奖号码万位大于百位：龙，即中奖。',
    help: '根据万位、百位号码数值比大小，万位号码大于百位号码为龙，万位号码小于百位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。',
    select: {
        layout: [{
            title: '龙虎',
            balls: ['龙', '虎', '和']
        }]
    }
};
SscMethod['lhws'] = {
    showname: '万十',
    shortname: 'lhws',
    realname: '[龙虎_万十]',
    tips: '从万位、十位上选择一个形态组成一注。',
    example: '投注方案：龙；开奖号码万位大于十位：龙，即中奖。',
    help: '根据万位、十位号码数值比大小，万位号码大于十位号码为龙，万位号码小于十位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。',
    select: {
        layout: [{
            title: '龙虎',
            balls: ['龙', '虎', '和']
        }]
    }
};
SscMethod['lhwg'] = {
    showname: '万个',
    shortname: 'lhwg',
    realname: '[龙虎_万个]',
    tips: '从万位、个位上选择一个形态组成一注。',
    example: '投注方案：龙；开奖号码万位大于个位：龙，即中奖。',
    help: '根据万位、个位号码数值比大小，万位号码大于个位号码为龙，万位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。',
    select: {
        layout: [{
            title: '龙虎',
            balls: ['龙', '虎', '和']
        }]
    }
};
SscMethod['lhqb'] = {
    showname: '千百',
    shortname: 'lhqb',
    realname: '[龙虎_千百]',
    tips: '从千位、百位上选择一个形态组成一注。',
    example: '投注方案：龙；开奖号码千位大于百位：龙，即中奖。',
    help: '根据千位、百位号码数值比大小，千位号码大于百位号码为龙，千位号码小于百位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。',
    select: {
        layout: [{
            title: '龙虎',
            balls: ['龙', '虎', '和']
        }]
    }
};
SscMethod['lhqs'] = {
    showname: '千十',
    shortname: 'lhqs',
    realname: '[龙虎_千十]',
    tips: '从千位、十位上选择一个形态组成一注。',
    example: '投注方案：龙；开奖号码千位大于十位：龙，即中奖。',
    help: '根据千位、十位号码数值比大小，千位号码大于十位号码为龙，千位号码小于十位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。',
    select: {
        layout: [{
            title: '龙虎',
            balls: ['龙', '虎', '和']
        }]
    }
};
SscMethod['lhqg'] = {
    showname: '千个',
    shortname: 'lhqg',
    realname: '[龙虎_千个]',
    tips: '从千位、个位上选择一个形态组成一注。',
    example: '投注方案：龙；开奖号码千位大于个位：龙，即中奖。',
    help: '根据千位、个位号码数值比大小，千位号码大于个位号码为龙，千位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。',
    select: {
        layout: [{
            title: '龙虎',
            balls: ['龙', '虎', '和']
        }]
    }
};
SscMethod['lhbs'] = {
    showname: '百十',
    shortname: 'lhbs',
    realname: '[龙虎_百十]',
    tips: '从百位、十位上选择一个形态组成一注。',
    example: '投注方案：龙；开奖号码百位大于十位：龙，即中奖。',
    help: '根据百位、十位号码数值比大小，百位号码大于十位号码为龙，百位号码小于十位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。',
    select: {
        layout: [{
            title: '龙虎',
            balls: ['龙', '虎', '和']
        }]
    }
};
SscMethod['lhbg'] = {
    showname: '百个',
    shortname: 'lhbg',
    realname: '[龙虎_百个]',
    tips: '从百位、个位上选择一个形态组成一注。',
    example: '投注方案：龙；开奖号码百位大于个位：龙，即中奖。',
    help: '根据百位、个位号码数值比大小，百位号码大于个位号码为龙，百位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。',
    select: {
        layout: [{
            title: '龙虎',
            balls: ['龙', '虎', '和']
        }]
    }
};
SscMethod['lhsg'] = {
    showname: '十个',
    shortname: 'lhsg',
    realname: '[龙虎_十个]',
    tips: '从十位、个位上选择一个形态组成一注。',
    example: '投注方案：龙；开奖号码十位大于个位：龙，即中奖。',
    help: '根据十位、个位号码数值比大小，十位号码大于个位号码为龙，十位号码小于个位号码为虎，号码相同则为和。所选形态与开奖号码形态一致，即为中奖。',
    select: {
        layout: [{
            title: '龙虎',
            balls: ['龙', '虎', '和']
        }]
    }
};
// 时时彩布局
var SscLayout = [
  {
    title: '五星',
    rows: [[{
        title: '五星直选',
        columns: ['wxzhixfs', 'wxzhixds']
    }, {
        title: '不定胆',
        columns: ['wxbdw1m', 'wxbdw2m', 'wxbdw3m']
    }], [{
        title: '五星和值',
        columns: ['wxhzdxds']
    }, {
        title: '五星组选',
        columns: ['wxzux120', 'wxzux60', 'wxzux30', 'wxzux20', 'wxzux10', 'wxzux5']
    }]]
},
  {
    title: '四星',
    rows: [[{
        title: '后四直选',
        columns: ['sixzhixfsh', 'sixzhixdsh']
    }, {
        title: '后四组选',
        columns: ['sixzux24h', 'sixzux12h', 'sixzux6h', 'sixzux4h']
    }], [{
        title: '前四直选',
        columns: ['sixzhixfsq', 'sixzhixdsq']
    }, {
        title: '前四组选',
        columns: ['sixzux24q', 'sixzux12q', 'sixzux6q', 'sixzux4q']
    }]]
},
  {
    title: '后三',
    rows: [[{
        title: '后三直选',
        columns: ['sxzhixfsh', 'sxzhixdsh', 'sxzhixhzh']
    }, {
        title: '后三组选',
        columns: ['sxzuxzsh', 'sxzuxzlh', 'sxhhzxh']
    }]]
}, {
    title: '中三',
    rows: [[{
        title: '中三直选',
        columns: ['sxzhixfsz', 'sxzhixdsz', 'sxzhixhzz']
    }, {
        title: '中三组选',
        columns: ['sxzuxzsz', 'sxzuxzlz', 'sxhhzxz']
    }]]
}, {
    title: '前三',
    rows: [[{
        title: '前三直选',
        columns: ['sxzhixfsq', 'sxzhixdsq', 'sxzhixhzq']
    }, {
        title: '前三组选',
        columns: ['sxzuxzsq', 'sxzuxzlq', 'sxhhzxq']
    }]]
}, {
    title: '后二星',
    rows: [[{
        title: '后二星直选',
        columns: ['exzhixfsh', 'exzhixdsh', 'exzhixhzh', 'dxdsh']
    }, {
        title: '后二星组选',
        columns: ['exzuxfsh', 'exzuxdsh']
    }]]
}, {
    title: '前二星',
    rows: [[{
        title: '前二星　直选',
        columns: ['exzhixfsq', 'exzhixdsq', 'exzhixhzq', 'dxdsq']
    }, {
        title: '前二星　组选',
        columns: ['exzuxfsq', 'exzuxdsq']
    }]]
}, {
    title: '定位胆',
    rows: [[{
        title: '定位胆',
        columns: ['dw']
    }]]
}, {
    title: '不定胆',
    rows: [[{
        title: '不定胆',
        columns: ['bdw1mh', 'bdw2mh', 'bdw1mz', 'bdw2mz', 'bdw1mq', 'bdw2mq']
    }]]
}, {
    title: '任二',
    rows: [[{
        title: '任二',
        columns: ['rx2fs', 'rx2ds', 'rx2zx']
    }]]
}, {
    title: '任三',
    rows: [[{
        title: '任三',
        columns: ['rx3fs', 'rx3ds', 'rx3z3', 'rx3z6', 'rx3hh']
    }]]
}, {
    title: '任四',
    rows: [[{
        title: '任四',
        columns: ['rx4fs', 'rx4ds']
    }]]
}, {
    title: '跨度',
    rows: [[{
        title: '跨度',
        columns: ['kdqs', 'kdzs', 'kdhs', 'kdqe', 'kdhe']
    }]]
}, {
    title: '趣味',
    rows: [[{
        title: '特殊',
        columns: ['qwyffs', 'qwhscs', 'qwsxbx', 'qwsjfc']
    }]]
}, {
    title: '龙虎',
    rows: [[{
        title: '龙虎',
        columns: ['lhwq', 'lhwb', 'lhws', 'lhwg', 'lhqb', 'lhqs', 'lhqg', 'lhbs', 'lhbg', 'lhsg']
    }]]
}];

// 11选5玩法
var X511Method = {};
// 前三直选
X511Method['sanmzhixfsq'] = {
    showname: '复式',
    shortname: 'sanmzhixfsq',
    realname: '[前三直选_复式]',
    tips: '从第一位、第二位、第三位中至少各选择1个号码。',
    example: '案列；    第一位选择01、第二位选择02、第三位选择03进行投注，开奖号码为01 02 03**即为中奖。',
    help: '从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。',
    select: {
        layout: [{
            title: '第一位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            tools: 'simple'
        }, {
            title: '第二位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            tools: 'simple'
        }, {
            title: '第三位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            tools: 'simple'
        }]
    }
};
X511Method['sanmzhixdsq'] = {
    showname: '单式',
    shortname: 'sanmzhixdsq',
    realname: '[前三直选_单式]',
    tips: '手动输入号码，至少输入1个三位数号码组成一注。',
    example: '案列；    手动输入01 02 03 组成一注进行投注，开奖号码为01 02 03**即为中奖。',
    help: '手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。',
    textarea: {}
};
// 前三组选
X511Method['sanmzuxfsq'] = {
    showname: '复式',
    shortname: 'sanmzuxfsq',
    realname: '[前三组选_复式]',
    tips: '从0-9中任意选择3个或3个以上号码。',
    example: '案列；    选择01 02 03组成一注进行投注，开奖号码为03 01 02**即为中奖。',
    help: '从01-11中共11个号码中选择3个号码，所选号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。',
    select: {
        layout: [{
            title: '选号',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            tools: 'simple'
        }]
    }
};
X511Method['sanmzuxdsq'] = {
    showname: '单式',
    shortname: 'sanmzuxdsq',
    realname: '[前三组选_单式]',
    tips: '手动输入号码，至少输入1个三位数号码组成一注。',
    example: '案列；    手动输入01 02 03 组成一注进行投注，开奖号码为03 01 02**即为中奖。',
    help: '手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。',
    textarea: {}
};
// 前二直选
X511Method['ermzhixfsq'] = {
    showname: '复式',
    shortname: 'ermzhixfsq',
    realname: '[前二直选_复式]',
    tips: '从第一位、第二位中至少各选择1个号码。',
    example: '第一位选择01、第二位选择02进行投注，开奖号码为01 02 ***即为中奖。',
    help: '从01-11共11个号码中选择2个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即为中奖。',
    select: {
        layout: [{
            title: '第一位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            tools: 'simple'
        }, {
            title: '第二位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            tools: 'simple'
        }]
    }
};
X511Method['ermzhixdsq'] = {
    showname: '单式',
    shortname: 'ermzhixdsq',
    realname: '[前二直选_单式]',
    tips: '手动输入号码，至少输入1个两位数号码组成一注。',
    example: '手动输入01 02 组成一注进行投注，开奖号码为01 02 ***即为中奖。',
    help: '手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即为中奖。',
    textarea: {}
};
// 前二组选
X511Method['ermzuxfsq'] = {
    showname: '复式',
    shortname: 'ermzuxfsq',
    realname: '[前二组选_复式]',
    tips: '从0-9中任意选择2个或2个以上号码。',
    example: '案列；    选择01 03组成一注进行投注，开奖号码为03 01 ***即为中奖。',
    help: '从01-11中共11个号码中选择2个号码，所选号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。',
    select: {
        layout: [{
            title: '选号',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            tools: 'simple'
        }]
    }
};
X511Method['ermzuxdsq'] = {
    showname: '单式',
    shortname: 'ermzuxdsq',
    realname: '[前二组选_单式]',
    tips: '手动输入号码，至少输入1个两位数号码组成一注。',
    example: '案列；    手动输入01 03 组成一注进行投注，开奖号码为03 01 ***即为中奖。',
    help: '手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。',
    textarea: {}
};
// 不定胆
X511Method['bdw'] = {
    showname: '前三位',
    shortname: 'bdw',
    realname: '[不定胆_前三位]',
    tips: '从01-11中任意选择1个或1个以上号码。',
    example: '案列；投注方案：1；开奖号码前三位：出现1个1即为中奖。',
    help: '从01-11中共11个号码中选择1个号码，每注由1个号码组成，只要当期顺序摇出的第一位、第二位、第三位开奖号码中包含所选号码，即为中奖。',
    select: {
        layout: [{
            title: '选号',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            tools: 'simple'
        }]
    }
};
// 定位胆
X511Method['dwd'] = {
    showname: '定位胆',
    shortname: 'dwd',
    realname: '[定位胆]',
    tips: '从第一位，第二位，第三位任意位置上任意选择1个或1个以上号码。',
    example: '案列；投注方案：第一位选择1；开奖号码第一位：1，即为中奖。',
    help: '从第一位，第二位，第三位任意1个位置或多个位置上选择1个号码，所选号码与相同位置上的开奖号码一致，即为中奖。',
    select: {
        layout: [{
            title: '第一位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            tools: 'simple'
        }, {
            title: '第二位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            tools: 'simple'
        }, {
            title: '第三位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            tools: 'simple'
        }]
    }
};
// 趣味型
X511Method['dds'] = {
    showname: '定单双',
    shortname: 'dds',
    realname: '[定单双]',
    tips: '从不同的单双组合中任意选择1个或1个以上的组合。',
    example: '投注方案：4单1双，开奖号码01 03 05 07 10，即为中奖。<br/>投注方案：3单2双，开奖号码01 03 05 08 10，即为中奖。<br/>投注方案：2单3双，开奖号码01 03 06 08 10，即为中奖。<br/>投注方案：1单4双，开奖号码01 04 06 08 10，即为中奖。<br/>投注方案：0单5双，开奖号码02 04 06 08 10，即为中奖。',
    help: '从5种单双个数组合中选择1种组合，当期开奖号码的单双个数与所选单双组合一致，即为中奖。',
    select: {
        layout: [{
            title: '定单双',
            balls: ['5单0双', '4单1双', '3单2双', '2单3双', '1单4双', '0单5双'],
            cls: 'large'
        }]
    }
};
X511Method['czw'] = {
    showname: '猜中位',
    shortname: 'czw',
    realname: '[猜中位]',
    tips: '从3-9中任意选择1个或1个以上数字。',
    example: '投注方案：选择3，开奖号码01 02 03 07 11，即为中奖。<br/>投注方案：选择4，开奖号码01 02 04 07 11，即为中奖。<br/>投注方案：选择5，开奖号码01 02 05 07 11，即为中奖。<br/>投注方案：选择6，开奖号码01 02 06 07 11，即为中奖。<br/>投注方案：选择7，开奖号码01 02 07 10 11，即为中奖。<br/>投注方案：选择8，开奖号码01 02 08 10 11，即为中奖。<br/>投注方案：选择9，开奖号码01 02 09 10 11，即为中奖。',
    help: '从3-9中选择1个号码进行购买，所选号码与5个开奖号码按照大小顺序排列后的第3个号码相同，即为中奖。',
    select: {
        layout: [{
            title: '猜中位',
            balls: ['03', '04', '05', '06', '07', '08', '09'],
            tools: 'simple'
        }]
    }
};
// 任选复式
X511Method['rx1fs'] = {
    showname: '一中一',
    shortname: 'rx1fs',
    realname: '[任选复式_一中一]',
    tips: '从01-11中任意选择1个或1个以上号码。',
    example: '案列：投注方案：选择：01，开奖号码01 02 04 05 08，即为中奖',
    help: '从01-11共11个号码中选择1个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
    select: {
        layout: [{
            title: '一中一',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            tools: 'simple'
        }]
    }
};
X511Method['rx2fs'] = {
    showname: '二中二',
    shortname: 'rx2fs',
    realname: '[任选复式_二中二]',
    tips: '从01-11中任意选择2个或2个以上号码。',
    example: '案列：投注方案：选择：01  02，开奖号码01 02 04 05 08，即为中奖',
    help: '从01-11共11个号码中选择2个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
    select: {
        layout: [{
            title: '二中二',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            tools: 'simple'
        }]
    }
};
X511Method['rx3fs'] = {
    showname: '三中三',
    shortname: 'rx3fs',
    realname: '[任选复式_三中三]',
    tips: '从01-11中任意选择3个或3个以上号码。',
    example: '案列：投注方案：选择：01 02 04，开奖号码01 02 04 05 08，即为中奖',
    help: '从01-11共11个号码中选择3个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
    select: {
        layout: [{
            title: '三中三',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            tools: 'simple'
        }]
    }
};
X511Method['rx4fs'] = {
    showname: '四中四',
    shortname: 'rx4fs',
    realname: '[任选复式_四中四]',
    tips: '从01-11中任意选择4个或4个以上号码。',
    example: '案列：投注方案：选择：01 02 04 05，开奖号码01 02 04 05 08，即为中奖',
    help: '从01-11共11个号码中选择4个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
    select: {
        layout: [{
            title: '四中四',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            tools: 'simple'
        }]
    }
};
X511Method['rx5fs'] = {
    showname: '五中五',
    shortname: 'rx5fs',
    realname: '[任选复式_五中五]',
    tips: '从01-11中任意选择5个或5个以上号码。',
    example: '案列：投注方案：选择：01 02 04 05 08，开奖号码01 02 04 05 08，即为中奖',
    help: '从01-11共11个号码中选择5个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
    select: {
        layout: [{
            title: '五中五',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            tools: 'simple'
        }]
    }
};
X511Method['rx6fs'] = {
    showname: '六中五',
    shortname: 'rx6fs',
    realname: '[任选复式_六中五]',
    tips: '从01-11中任意选择6个或6个以上号码。',
    example: '案列：投注方案：选择：01 02 04 05 08 10，开奖号码01 02 04 05 08，即为中奖',
    help: '从01-11共11个号码中选择6个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
    select: {
        layout: [{
            title: '六中五',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            tools: 'simple'
        }]
    }
};
X511Method['rx7fs'] = {
    showname: '七中五',
    shortname: 'rx7fs',
    realname: '[任选复式_七中五]',
    tips: '从01-11中任意选择7个或7个以上号码。',
    example: '案列：投注方案：选择：01 02 04 05 06 08 10，开奖号码01 02 04 05 08，即为中奖',
    help: '从01-11共11个号码中选择7个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
    select: {
        layout: [{
            title: '七中五',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            tools: 'simple'
        }]
    }
};
X511Method['rx8fs'] = {
    showname: '八中五',
    shortname: 'rx8fs',
    realname: '[任选复式_八中五]',
    tips: '从01-11中任意选择8个或8个以上号码。',
    example: '案列：投注方案：选择：01 02 04 05 06 08 09 10，开奖号码01 02 04 05 08，即为中奖',
    help: '从01-11共11个号码中选择8个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
    select: {
        layout: [{
            title: '八中五',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
            tools: 'simple'
        }]
    }
};
// 任选单式
X511Method['rx1ds'] = {
    showname: '一中一',
    shortname: 'rx1ds',
    realname: '[任选单式_一中一]',
    tips: '手动输入号码，从01-11中任意输入1个号码组成一注。',
    example: '案列：投注方案：手动输入01，开奖号码01 02 04 05 08，即为中奖',
    help: '从01-11共11个号码中选择1个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
    textarea: {
        cls: 'rx'
    }
};
X511Method['rx2ds'] = {
    showname: '二中二',
    shortname: 'rx2ds',
    realname: '[任选单式_二中二]',
    tips: '手动输入号码，从01-11中任意输入2个号码组成一注。',
    example: '案列：投注方案：手动输入01 02，开奖号码01 02 04 05 08，即为中奖',
    help: '从01-11共11个号码中选择2个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
    textarea: {
        cls: 'rx'
    }
};
X511Method['rx3ds'] = {
    showname: '三中三',
    shortname: 'rx3ds',
    realname: '[任选单式_三中三]',
    tips: '手动输入号码，从01-11中任意输入3个号码组成一注。。',
    example: '案列：投注方案：手动输入01 02 04，开奖号码01 02 04 05 08，即为中奖',
    help: '从01-11共11个号码中选择3个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
    textarea: {
        cls: 'rx'
    }
};
X511Method['rx4ds'] = {
    showname: '四中四',
    shortname: 'rx4ds',
    realname: '[任选单式_四中四]',
    tips: '手动输入号码，从01-11中任意输入4个号码组成一注。',
    example: '案列：投注方案：手动输入01 02 04 05，开奖号码01 02 04 05 08，即为中奖',
    help: '从01-11共11个号码中选择4个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
    textarea: {
        cls: 'rx'
    }
};
X511Method['rx5ds'] = {
    showname: '五中五',
    shortname: 'rx5ds',
    realname: '[任选单式_五中五]',
    tips: '手动输入号码，从01-11中任意输入5个号码组成一注。',
    example: '案列：投注方案：手动输入01 02 04 05 08，开奖号码01 02 04 05 08，即为中奖',
    help: '从01-11共11个号码中选择5个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
    textarea: {
        cls: 'rx'
    }
};
X511Method['rx6ds'] = {
    showname: '六中五',
    shortname: 'rx6ds',
    realname: '[任选单式_六中五]',
    tips: '手动输入号码，从01-11中任意输入6个号码组成一注。',
    example: '案列：投注方案：手动输入01 02 04 05 08 10，开奖号码01 02 04 05 08，即为中奖',
    help: '从01-11共11个号码中选择6个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
    textarea: {
        cls: 'rx'
    }
};
X511Method['rx7ds'] = {
    showname: '七中五',
    shortname: 'rx7ds',
    realname: '[任选单式_七中五]',
    tips: '手动输入号码，从01-11中任意输入7个号码组成一注。',
    example: '案列：投注方案：手动输入01 02 04 05 06 08 10，开奖号码01 02 04 05 08，即为中奖',
    help: '从01-11共11个号码中选择7个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
    textarea: {
        cls: 'rx'
    }
};
X511Method['rx8ds'] = {
    showname: '八中五',
    shortname: 'rx8ds',
    realname: '[任选单式_八中五]',
    tips: '手动输入号码，从01-11中任意输入8个号码组成一注。',
    example: '案列：投注方案：手动输入01 02 04 05 06 08 09 10，开奖号码01 02 04 05 08，即为中奖',
    help: '从01-11共11个号码中选择8个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。',
    textarea: {
        cls: 'rx'
    }
};
// 11选5布局
var X511Layout = [{
    title: '三码',
    rows: [[{
        title: '前三直选',
        columns: ['sanmzhixfsq', 'sanmzhixdsq']
    }, {
        title: '前三组选',
        columns: ['sanmzuxfsq', 'sanmzuxdsq']
    }]]
}, {
    title: '二码',
    rows: [[{
        title: '前二直选',
        columns: ['ermzhixfsq', 'ermzhixdsq']
    }, {
        title: '前二组选',
        columns: ['ermzuxfsq', 'ermzuxdsq']
    }]]
}, {
    title: '不定胆',
    rows: [[{
        title: '不定胆',
        columns: ['bdw']
    }]]
}, {
    title: '定位胆',
    rows: [[{
        title: '定位胆',
        columns: ['dwd']
    }]]
}, {
    title: '趣味型',
    rows: [[{
        title: '趣味型',
        columns: ['dds', 'czw']
    }]]
}, {
    title: '任选',
    rows: [[{
        title: '任选复式',
        columns: ['rx1fs', 'rx2fs', 'rx3fs', 'rx4fs', 'rx5fs', 'rx6fs', 'rx7fs', 'rx8fs']
    }], [{
        title: '任选单式',
        columns: ['rx1ds', 'rx2ds', 'rx3ds', 'rx4ds', 'rx5ds', 'rx6ds', 'rx7ds', 'rx8ds']
    }]]
}];

// 快3玩法
var K3Method = {};
// 二不同号
K3Method['ebthdx'] = {
    showname: '标准选号',
    shortname: 'ebthdx',
    realname: '[二不同号_标准选号]',
    tips: '从1-6中任意选择2个或2个以上号码。',
    example: '投注方案：2,5；开奖号码中出现：1个2、1个5 (顺序不限)，即中奖。',
    help: '从1-6中任意选择2个号码组成一注，顺序不限。开奖号码中出现所选的两个号码即为中奖。',
    select: {
        layout: [{
            title: '号码',
            balls: [1, 2, 3, 4, 5, 6]
        }]
    }
};
K3Method['ebthds'] = {
    showname: '手动选号',
    shortname: 'ebthds',
    realname: '[二不同号_手动选号]',
    tips: '手动输入号码，至少输入1-6中两个不同的数字组成一注号码。',
    example: '投注方案：56；开奖号码：536，即中奖。',
    help: '开奖号码中至少包含所输入的两个数字即为中奖。',
    textarea: {}
};
K3Method['ebthdt'] = {
    showname: '胆拖选号',
    shortname: 'ebthdt',
    realname: '[二不同号_胆拖选号]',
    tips: '从1-6中任意选择1个胆码以及1个以上的号码作为拖码。',
    example: '选择胆码1 拖码2，开奖号码1 2 6，即为中奖。',
    help: '从1-6中选择一个胆码和至少一个拖码，如果开奖号码中不重复数字至少包含胆码所选号码即为中奖',
    select: {
        layout: [{
            title: '胆码',
            balls: [1, 2, 3, 4, 5, 6],
            trigger: 'only'
        }, {
            title: '拖码',
            balls: [1, 2, 3, 4, 5, 6]
        }]
    }
};
// 二同号
K3Method['ethdx'] = {
    showname: '标准选号',
    shortname: 'ethdx',
    realname: '[二同号_标准选号]',
    tips: '选择1个对子（11,22,33,44,55,66）和1个不同号码(1,2,3,4,5,6)投注。',
    example: '投注方案：112；开奖号码为112,121,211中任意一个，即中奖。',
    help: '选择1个对子（11,22,33,44,55,66）和1个不同号码(1,2,3,4,5,6)投注，选号与开奖号码一致即中奖。',
    select: {
        layout: [{
            title: '二同号',
            balls: ['11', '22', '33', '44', '55', '66'],
            values: [1, 2, 3, 4, 5, 6],
            trigger: 'only'
        }, {
            title: '不同号',
            balls: [1, 2, 3, 4, 5, 6]
        }]
    }
};
K3Method['ethds'] = {
    showname: '手动选号',
    shortname: 'ethds',
    realname: '[二同号_手动选号]',
    tips: '手动输入号码，至少输入1个三位数号码组成一注。',
    example: '投注方案：112；开奖号码为112,121,211中任意一个，即中奖。',
    help: '手动输入号码，至少输入1个三位数号码，选号与开奖号码一致即中奖。',
    textarea: {}
};
K3Method['ethfx'] = {
    showname: '二同号复选',
    shortname: 'ethfx',
    realname: '[二同号_复选]',
    tips: '选择对子(11*,22*,33*,44*,55*,66*)进行投注。',
    example: '投注方案：11*；开奖号码为：112,211,121,即中奖。',
    help: '选择对子(11*,22*,33*,44*,55*,66*)投注，开奖号码中包含选择的对子即中奖。',
    select: {
        layout: [{
            title: '二同号',
            balls: ['11*', '22*', '33*', '44*', '55*', '66*'],
            values: [1, 2, 3, 4, 5, 6],
            cls: 'medium'
        }]
    }
};
// 三不同号
K3Method['sbthdx'] = {
    showname: '标准选号',
    shortname: 'sbthdx',
    realname: '[三不同号_标准选号]',
    tips: '选择任意三个或以上的号码进行投注。',
    example: '投注方案：2,5,6；开奖号码中出现：256,562,625(顺序不限)即中奖。',
    help: '从1-6中任意选择3个（或以上）不相同号码组成一注，顺序不限，若其中三位与开奖号码相同即为中奖。',
    select: {
        layout: [{
            title: '号码',
            balls: [1, 2, 3, 4, 5, 6]
        }]
    }
};
K3Method['sbthds'] = {
    showname: '手动选号',
    shortname: 'sbthds',
    realname: '[三不同号_手动选号]',
    tips: '对三个各不相同的号码进行投注。',
    example: '投注方案：258；开奖号码中出现：1个2、1个5、1个8 (顺序不限)，即中奖。。',
    help: '从1-6中任意选择3个或3个以上各不相同号码组成一注，顺序不限，若开奖号码与所选号码相同，即为中奖。',
    textarea: {}
};
// 三同号
K3Method['sthdx'] = {
    showname: '三同号单选',
    shortname: 'sthdx',
    realname: '[三同号单选]',
    tips: '选择任意一组以上三位相同的号码。',
    example: '投注方案：222；开奖号码为：3个2，即中奖。',
    help: '从111,222,333,444,555，666中选择任意一组或一组以上的号码，若和开奖号相同即为中奖。',
    select: {
        layout: [{
            title: '号码',
            balls: ['111', '222', '333', '444', '555', '666'],
            values: [1, 2, 3, 4, 5, 6],
            cls: 'medium'
        }]
    }
};
K3Method['sthtx'] = {
    showname: '三同号通选',
    shortname: 'sthtx',
    realname: '[三同号通选]',
    tips: '对所有三同号（111,222,333,444,555,666）进行投注。',
    example: '投注方案：通选；开奖号码中出现：222或3个其他数字，即中奖。',
    help: '投注后，开奖号码为任意数字的三重号，即为中奖。',
    select: {
        layout: [{
            title: '胆码',
            balls: ['111', '222', '333', '444', '555', '666'],
            cls: 'medium',
            trigger: 'all'
        }]
    }
};
// 三连号
K3Method['slhtx'] = {
    showname: '三连号通选',
    shortname: 'slhtx',
    realname: '[三同号连选]',
    tips: '对所有三个相连的号码进行投注。',
    example: '投注方案：三连号通选 开奖号码：123或234或345或456	即为中奖',
    help: '开奖号码为3连号（123,234,345,456）即为中奖',
    select: {
        layout: [{
            title: '号码',
            balls: ['123', '234', '345', '456'],
            cls: 'medium',
            trigger: 'all'
        }]
    }
};
// 和值
K3Method['hezhi'] = {
    showname: '和值',
    shortname: 'hezhi',
    realname: '[和值]',
    tips: '从3-18中任意选择1个或1个以上号码。',
    example: '投注方案：和值4；开奖号码：112,即中奖。',
    help: '所选数值等于开奖号码三个数字相加之和，即为中奖。注意:和值为3或18一等奖；4或17二等奖；5或16三等奖；6或15四等奖；7或14五等奖；8或13六等奖；9或12七等奖；10或11八等奖',
    select: {
        layout: [{
            balls: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
            cls: 'hz'
        }]
    }
};
// K3Method[''] = ;
// 快3布局
var K3Layout = [{
    title: '二不同号',
    rows: [[{
        title: '二不同号',
        columns: ['ebthdx', 'ebthds', 'ebthdt']
    }]]
}, {
    title: '二同号',
    rows: [[{
        title: '二同号单选',
        columns: ['ethdx', 'ethds']
    }, {
        title: '二同号复选',
        columns: ['ethfx']
    }]]
}, {
    title: '三不同号',
    rows: [[{
        title: '三不同号',
        columns: ['sbthdx', 'sbthds']
    }]]
}, {
    title: '三同号',
    rows: [[{
        title: '三同号单选',
        columns: ['sthdx']
    }, {
        title: '三同号通选',
        columns: ['sthtx']
    }]]
}, {
    title: '三连号',
    rows: [[{
        title: '三连号通选',
        columns: ['slhtx']
    }]]
}, {
    title: '和值',
    rows: [[{
        title: '和值',
        columns: ['hezhi']
    }]]
}];

// 福彩3D系列玩法
var D3Method = {};
// 三码直选
D3Method['sanxzhixfs'] = {
    showname: '复式',
    shortname: 'sanxzhixfs',
    realname: '[三码_复式]',
    tips: '从个、十、百位各选一个号码组成一注。',
    example: '投注方案：345； 开奖号码：345，即为中奖。',
    help: '从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。',
    select: {
        layout: [{
            title: '百位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '十位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '个位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
D3Method['sanxzhixds'] = {
    showname: '单式',
    shortname: 'sanxzhixds',
    realname: '[三码_单式]',
    tips: '手动输入号码，至少输入1个三位数号码组成一注。',
    example: '投注方案：345； 开奖号码：345，即为中奖。',
    help: '手动输入一个3位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。',
    textarea: {}
};
D3Method['sanxzhixhz'] = {
    showname: '直选和值',
    shortname: 'sanxzhixhz',
    realname: '[三码_和值]',
    tips: '从0-27中任意选择1个或1个以上号码',
    example: '投注方案：和值1；开奖号码三位：001,010,100,即为中奖。',
    help: '所选数值等于开奖号码的三个数字相加之和，即为中奖。',
    select: {
        layout: [{
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
            cls: 'hz'
        }]
    }
};
// 三码组选
D3Method['sanxzs'] = {
    showname: '组三',
    shortname: 'sanxzs',
    realname: '[三码_组三]',
    tips: '从0-9中任意选择2个或2个以上号码。',
    example: '投注方案：5,8；开奖号码：1个5，2个8 (顺序不限)，即为中奖。',
    help: '从0-9中选择2个数字组成两注，所选号码与开奖号码相同，且顺序不限，即为中奖。',
    select: {
        layout: [{
            title: '组三',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
D3Method['sanxzl'] = {
    showname: '组六',
    shortname: 'sanxzl',
    realname: '[三码_组六]',
    tips: '从0-9中任意选择3个或3个以上号码。',
    example: '投注方案：2,5,8；开奖号码：1个2、1个5、1个8 (顺序不限)，即为中奖。',
    help: '从0-9中任意选择3个号码组成一注，所选号码与开奖号码相同，顺序不限，即为中奖。',
    select: {
        layout: [{
            title: '组六',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
D3Method['sanxhhzx'] = {
    showname: '混合组选',
    shortname: 'sanxhhzx',
    realname: '[后三码_混合组选]',
    tips: '手动输入号码，至少输入1个三位数号码。',
    example: '投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码后三位包括：(1)0,0,1，顺序不限，即组三中奖；或者(2)1,2,3，顺序不限，即组六中奖。',
    help: '键盘手动输入购买号码，3个数字为一注，开奖号码符合组三或组六均为中奖。',
    textarea: {}
};
// 后二码 直选
D3Method['exzhixfsh'] = {
    showname: '复式',
    shortname: 'exzhixfsh',
    realname: '[后二码_直选_复式]',
    tips: '从十、个位各选一个号码组成一注。',
    example: '投注方案：1,2 ；开奖号码：*,1,2，即为中奖。',
    help: '从十位、个位中选择一个2位数号码组成一注，所选号码与开奖号码的十位、个位相同，且顺序一致，即为中奖。',
    select: {
        layout: [{
            title: '十位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '个位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
D3Method['exzhixdsh'] = {
    showname: '单式',
    shortname: 'exzhixdsh',
    realname: '[后二码_直选_单式]',
    tips: '手动输入号码，至少输入1个两位数号码。',
    example: '投注方案：1,2 ；开奖号码：*,1,2，即为中奖。',
    help: '手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。',
    textarea: {}
};
D3Method['exzhixhzh'] = {
    showname: '直选和值',
    shortname: 'exzhixhzh',
    realname: '[后二码_直选_和值]',
    tips: '从0-18中任意选择1个或1个以上的和值号码。',
    example: '投注方案：10；开奖号码：*,7,3，即为中奖。',
    help: '所选数值等于开奖号码的十位、个位二个数字相加之和，即为中奖。',
    select: {
        layout: [{
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
            cls: 'hz'
        }]
    }
};
// 后二码 组选
D3Method['exzuxfsh'] = {
    showname: '复式',
    shortname: 'exzuxfsh',
    realname: '[后二码_组选_复式]',
    tips: '从0-9中任意选择2个或2个以上号码。',
    example: '投注方案：1,2 ；开奖号码：*,1,2，或*,2,1，即为中奖。',
    help: '从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限，即中奖。',
    select: {
        layout: [{
            title: '组选',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
D3Method['exzuxdsh'] = {
    showname: '单式',
    shortname: 'exzuxdsh',
    realname: '[后二码_组选_单式]',
    tips: '手动输入号码，至少输入1个两位数号码。',
    example: '投注方案：1,2 ；开奖号码：*,1,2，或*,2,1，即为中奖。',
    help: '手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，顺序不限，即为中奖。',
    textarea: {}
};
// 前二码 直选
D3Method['exzhixfsq'] = {
    showname: '复式',
    shortname: 'exzhixfsq',
    realname: '[前二码_直选_复式]',
    tips: '从百、十位各选一个号码组成一注。',
    example: '投注方案：1,2 ；开奖号码：1,2,*，即为中奖。',
    help: '从百位、十位中选择一个2位数号码组成一注，所选号码与开奖号码的前2位相同，且顺序一致，即为中奖。',
    select: {
        layout: [{
            title: '百位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '十位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
D3Method['exzhixdsq'] = {
    showname: '单式',
    shortname: 'exzhixdsq',
    realname: '[前二码_直选_单式]',
    tips: '手动输入号码，至少输入1个两位数号码。',
    example: '投注方案：1,2 ；开奖号码：1,2,*，即为中奖。',
    help: '手动输入一个2位数号码组成一注，所选号码的百位、十位与开奖号码相同，且顺序一致，即为中奖。',
    textarea: {}
};
D3Method['exzhixhzq'] = {
    showname: '直选和值',
    shortname: 'exzhixhzq',
    realname: '[前二码_直选_和值]',
    tips: '从0-18中任意选择1个或1个以上的和值号码。',
    example: '投注方案：10 ；开奖号码：6,4,*，即为中奖。',
    help: '所选数值等于开奖号码的百位、十位二个数字相加之和，即为中奖。',
    select: {
        layout: [{
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
            cls: 'hz'
        }]
    }
};
// 前二码 组选
D3Method['exzuxfsq'] = {
    showname: '复式',
    shortname: 'exzuxfsq',
    realname: '[前二码_组选_复式]',
    tips: '从0-9中任意选择2个或2个以上号码。',
    example: '投注方案：1,2 ；开奖号码：1,2,*，或2,1,*，即为中奖。',
    help: '从0-9中选2个号码组成一注，所选号码与开奖号码的百位、十位相同，顺序不限，即中奖。',
    select: {
        layout: [{
            title: '组选',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
D3Method['exzuxdsq'] = {
    showname: '单式',
    shortname: 'exzuxdsq',
    realname: '[前二码_组选_单式]',
    tips: '手动输入号码，至少输入1个两位数号码。',
    example: '投注方案：1,2 ；开奖号码：1,2,*，或2,1,*，即为中奖。',
    help: '手动输入一个2位数号码组成一注，所选号码的百位、十位与开奖号码相同，顺序不限，即为中奖。',
    textarea: {}
};
// 定位胆
D3Method['dwd'] = {
    showname: '定位胆',
    shortname: 'dwd',
    realname: '定位胆',
    tips: '在百位，十位，个位任意位置上任意选择1个或1个以上号码。',
    example: '投注方案：1；开奖号码百位：1，即中定位胆百位一等奖。',
    help: '从百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。',
    select: {
        layout: [{
            title: '百位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '十位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }, {
            title: '个位',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    }
};
// 不定胆
D3Method['yimabdw'] = {
    showname: '一码不定胆',
    shortname: 'yimabdw',
    realname: '[不定胆_后三一码]',
    tips: '从0-9中任意选择1个以上号码。',
    example: '投注方案：1；开奖号码：至少出现1个1，即中后三一码不定胆一等奖。',
    help: '从0-9中选择1个号码，每注由1个号码组成，只要开奖号码包含所选号码，即为中奖。',
    select: {
        layout: [{
            title: '不定胆',
            balls: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tools: 'full'
        }]
    },
    bwd: true
};
// 福彩3D系列布局
var D3Layout = [{
    title: '三码',
    rows: [[{
        title: '直选',
        columns: ['sanxzhixfs', 'sanxzhixds', 'sanxzhixhz']
    }, {
        title: '组选',
        columns: ['sanxzs', 'sanxzl', 'sanxhhzx']
    }]]
}, {
    title: '后二码',
    rows: [[{
        title: '直选',
        columns: ['exzhixfsh', 'exzhixdsh', 'exzhixhzh']
    }, {
        title: '组选',
        columns: ['exzuxfsh', 'exzuxdsh']
    }]]
}, {
    title: '前二码',
    rows: [[{
        title: '直选',
        columns: ['exzhixfsq', 'exzhixdsq', 'exzhixhzq']
    }, {
        title: '组选',
        columns: ['exzuxfsq', 'exzuxdsq']
    }]]
}, {
    title: '定位胆',
    rows: [[{
        title: '定位胆',
        columns: ['dwd']
    }]]
}, {
    title: '不定胆',
    rows: [[{
        title: '不定胆',
        columns: ['yimabdw']
    }]]
}];

// 快乐8玩法
var Kl8Method = {};
// 趣味
Kl8Method['hezhids'] = {
    showname: '和值单双',
    shortname: 'hezhids',
    realname: '[趣味_和值单双]',
    tips: '选择20个开奖号码总和值的单双属性。',
    example: '投注方案：和值单双“双”<br>开奖号码：01 02 03 04 05 06 07 08 09 10<br>　　　　　11 12 13 14 15 16 17 18 19 20<br>中奖结果：和值单双“双”',
    help: '20个开奖号码的总和值为奇数时中“单”，为偶数时中“双”。',
    select: {
        layout: [{
            title: '和值单双',
            balls: ['单', '双'],
            cls: 'medium'
        }]
    }
};
Kl8Method['hezhidx'] = {
    showname: '和值大小',
    shortname: 'hezhidx',
    realname: '[趣味_和值大小]',
    tips: '选择20个开奖号码总和值的大小属性。',
    example: '投注方案：和值大小“小”<br>开奖号码：01 02 03 04 05 06 07 08 09 10<br>　　　　　11 12 13 14 15 16 17 18 19 20<br>中奖结果：和值大小“小”',
    help: '选择20个开奖号码总和值的大小属性：小于810为小，等于810为和，大于810为大。',
    select: {
        layout: [{
            title: '和值大小',
            balls: ['小(210~809)', '和(810)', '大(811~1410)'],
            values: ['小', '和', '大'],
            cls: 'x-large'
        }]
    }
};
Kl8Method['jopan'] = {
    showname: '奇偶盘',
    shortname: 'jopan',
    realname: '[趣味_奇偶盘]',
    tips: '选择20个开奖号码中包含奇偶号码个数多少的关系。',
    example: '投注方案：奇偶盘“和”<br>开奖号码：01 02 03 04 05 06 07 08 09 10<br>　　　　　11 12 13 14 15 16 17 18 19 20<br>中奖结果：奇偶盘“和”',
    help: '任选一个奇偶盘属性，当开奖结果的20个号码的奇偶盘属性与所投注的结果一致，即为中奖。',
    select: {
        layout: [{
            title: '奇偶',
            balls: ['奇(奇>偶)', '和(奇=偶)', '偶(奇<偶)'],
            values: ['奇', '和', '偶'],
            cls: 'x-large'
        }]
    }
};
Kl8Method['sxpan'] = {
    showname: '上下盘',
    shortname: 'sxpan',
    realname: '[趣味_上下盘]',
    tips: '开奖号码中包含上盘(01-40)与下盘(41-80)号码个数多少的关系。',
    example: '投注方案：上下盘“上”<br>开奖号码：01 02 03 04 05 06 07 08 09 10<br>　　　　　11 12 13 14 15 16 17 18 19 20<br>中奖结果：上下盘“上”',
    help: '任选一个上下盘属性，当开奖结果的20个号码的上下盘属性与所投注的结果一致，即为中奖。',
    select: {
        layout: [{
            title: '上下',
            balls: ['上(上>下)', '中(上=下)', '下(上<下)'],
            values: ['上', '中', '下'],
            cls: 'x-large'
        }]
    }
};
Kl8Method['hzdxds'] = {
    showname: '和值大小盘',
    shortname: 'hzdxds',
    realname: '[趣味_和值大小盘]',
    tips: '选择20个开奖号码总和值的大小单双属性',
    example: '投注方案：和值大小单双“小双”<br>开奖号码：01 02 03 04 05 06 07 08 09 10<br>　　　　　11 12 13 14 15 16 17 18 19 20<br>中奖结果：和值大小单双“小双”',
    help: '任选一个和值大小单双属性，当开奖结果的20个号码的和值大小单双属性与所投注的结果一致，即为中奖。',
    select: {
        layout: [{
            title: '大小单双',
            balls: ['大&单', '大&双', '小&单', '小&双'],
            values: ['大单', '大双', '小单', '小双'],
            cls: 'large'
        }]
    }
};
// 任选
Kl8Method['rx1'] = {
    showname: '任选1',
    shortname: 'rx1',
    realname: '[任选_任选1]',
    tips: '从01-80中任选1个以上号码',
    example: '投注方案：01<br>开奖号码：01 02 03 04 05 06 07 08 21 22<br>　　　　　71 72 73 74 75 76 77 78 79 80<br>中奖结果：中1个号码',
    help: '从01-80中选择1个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。',
    select: {
        layout: [{
            title: '上',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'],
            cls: 'sxp'
        }, {
            title: '下',
            balls: ['41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80'],
            cls: 'sxp'
        }]
    }
};
Kl8Method['rx2'] = {
    showname: '任选2',
    shortname: 'rx2',
    realname: '[任选_任选2]',
    tips: '从01-80中任选2-8个以上号码',
    example: '投注方案：01 02<br>开奖号码：01 02 03 04 05 06 07 08 21 22<br>　　　　　71 72 73 74 75 76 77 78 79 80<br>中奖结果：中2个号码',
    help: '从01-80中选择2个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。',
    select: {
        layout: [{
            title: '上',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'],
            cls: 'sxp'
        }, {
            title: '下',
            balls: ['41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80'],
            cls: 'sxp'
        }],
        maxLength: 8
    }
};
Kl8Method['rx3'] = {
    showname: '任选3',
    shortname: 'rx3',
    realname: '[任选_任选3]',
    tips: '从01-80中任选3-8个以上号码',
    example: '投注方案：01 02 03<br>开奖号码：01 02 03 04 05 06 07 08 21 22<br>　　　　　71 72 73 74 75 76 77 78 79 80<br>中奖结果：中3个号码',
    help: '从01-80中选择3个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。',
    select: {
        layout: [{
            title: '上',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'],
            cls: 'sxp'
        }, {
            title: '下',
            balls: ['41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80'],
            cls: 'sxp'
        }],
        maxLength: 8
    }
};
Kl8Method['rx4'] = {
    showname: '任选4',
    shortname: 'rx4',
    realname: '[任选_任选4]',
    tips: '从01-80中任选4-8个以上号码',
    example: '投注方案：01 02 03 04<br>开奖号码：01 02 03 04 05 06 07 08 21 22<br>　　　　　71 72 73 74 75 76 77 78 79 80<br>中奖结果：中4个号码',
    help: '从01-80中选择4个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。',
    select: {
        layout: [{
            title: '上',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'],
            cls: 'sxp'
        }, {
            title: '下',
            balls: ['41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80'],
            cls: 'sxp'
        }],
        maxLength: 8
    }
};
Kl8Method['rx5'] = {
    showname: '任选5',
    shortname: 'rx5',
    realname: '[任选_任选5]',
    tips: '从01-80中任选5-8个以上号码',
    example: '投注方案：01 02 03 04 05<br>开奖号码：01 02 03 04 05 06 07 08 21 22<br>　　　　　71 72 73 74 75 76 77 78 79 80<br>中奖结果：中5个号码',
    help: '从01-80中选择5个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。',
    select: {
        layout: [{
            title: '上',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'],
            cls: 'sxp'
        }, {
            title: '下',
            balls: ['41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80'],
            cls: 'sxp'
        }],
        maxLength: 8
    }
};
Kl8Method['rx6'] = {
    showname: '任选6',
    shortname: 'rx6',
    realname: '[任选_任选6]',
    tips: '从01-80中任选6-8个以上号码',
    example: '投注方案：01 02 03 04 05 06<br>开奖号码：01 02 03 04 05 06 07 08 21 22<br>　　　　　71 72 73 74 75 76 77 78 79 80<br>中奖结果：中6个号码',
    help: '从01-80中选择6个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。',
    select: {
        layout: [{
            title: '上',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'],
            cls: 'sxp'
        }, {
            title: '下',
            balls: ['41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80'],
            cls: 'sxp'
        }],
        maxLength: 8
    }
};
Kl8Method['rx7'] = {
    showname: '任选7',
    shortname: 'rx7',
    realname: '[任选_任选7]',
    tips: '从01-80中任选7-8个以上号码',
    example: '投注方案：01 02 03 04 05 06 07<br>开奖号码：01 02 03 04 05 06 07 08 21 22<br>　　　　　71 72 73 74 75 76 77 78 79 80<br>中奖结果：中7个号码',
    help: '从01-80中选择7个号码组成一注，当期开奖结果的20个号码中包含所选号码，即可中奖。',
    select: {
        layout: [{
            title: '上',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'],
            cls: 'sxp'
        }, {
            title: '下',
            balls: ['41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80'],
            cls: 'sxp'
        }],
        maxLength: 8
    }
};
// 五行
Kl8Method['hezhiwx'] = {
    showname: '五行',
    shortname: 'hezhiwx',
    realname: '[五行]',
    tips: '选择20个开奖号码总和值的五行属性。',
    example: '投注方案：金<br>开奖号码：01 02 03 04 05 06 07 08 09 10<br>11 12 13 14 15 16 17 18 19 20 和值大于209小于696<br>及为中奖',
    help: '选择一个五行，总和数值范开出的20分号码总和数值分在五个数段中，即可中奖。',
    select: {
        layout: [{
            balls: ['金(210～695)', '木(696～763)', '水(764～855)', '火(856～923)', '土(924～1410)'],
            values: ['金', '木', '水', '火', '土'],
            styles: ['metal', 'tree', 'water', 'fire', 'earth'],
            cls: 'x-large'
        }]
    }
};
// 快乐8布局
var Kl8Layout = [{
    title: '趣味',
    rows: [[{
        title: '趣味型',
        columns: ['hezhids', 'hezhidx', 'jopan', 'sxpan', 'hzdxds']
    }]]
}, {
    title: '任选',
    rows: [[{
        title: '任选',
        columns: ['rx1', 'rx2', 'rx3', 'rx4', 'rx5', 'rx6', 'rx7']
    }]]
}, {
    title: '五行',
    rows: [[{
        title: '五行',
        columns: ['hezhiwx']
    }]]
}];

// PK拾玩法
var PK10Method = {};
// 前一
PK10Method['qianyi'] = {
    showname: '前一',
    shortname: 'qianyi',
    realname: '[前一]',
    tips: '从第一位中选择1个以上号码。',
    example: '投注方案：01，开奖号码第一位01，即为中奖。',
    help: '选号与开奖号码中第一位一致即中奖。',
    select: {
        layout: [{
            title: '第一位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }]
    }
};
// 前二
PK10Method['qianerzxfs'] = {
    showname: '前二复式',
    shortname: 'qianerzxfs',
    realname: '[前二_复式]',
    tips: '从第一位、第二位中至少格选一个号码。',
    example: '投注方案：第一位选择01 第二位选择02，开奖号码前二位01,02，即为中奖。',
    help: '选号与开奖号码中前二位数字一致即中奖。',
    select: {
        layout: [{
            title: '第一位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }, {
            title: '第二位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }]
    }
};
PK10Method['qianerzxds'] = {
    showname: '前二单式',
    shortname: 'qianerzxds',
    realname: '[前二_单式]',
    tips: '手动输入号码，至少输入2个二位数号码组成一注。',
    example: '投注方案：手动输入01 02，开奖号码前二位01,02，即为中奖。',
    help: '输入的号码中有与开奖号码中前二位数字一致的号码即中奖。',
    textarea: {}
};
PK10Method['qianerhz'] = {
    showname: '前二和值',
    shortname: 'qianerhz',
    realname: '[前二_和值]',
    tips: '从3-19中任意选择1个或1个以上的和值号码。',
    example: '投注方案：和值3；开奖号码前二位：01,02，即为中奖',
    help: '所选数值等于开奖号码的前二位数字相加之和，即为中奖。',
    select: {
        layout: [{
            balls: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
            cls: 'hz'
        }]
    }
};
// 前三
PK10Method['qiansanzxfs'] = {
    showname: '前三复式',
    shortname: 'qiansanzxfs',
    realname: '[前三_复式]',
    tips: '从第一位、第二位、第三位中至少各选择1个号码。',
    example: '投注方案：第一位到第三位依次选择01,02,03，开奖号码前三位01,02,03，即为中奖。',
    help: '选号与开奖号码中前三位数字一致即中奖。',
    select: {
        layout: [{
            title: '第一位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }, {
            title: '第二位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }, {
            title: '第三位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }]
    }
};
PK10Method['qiansanzxds'] = {
    showname: '前三单式',
    shortname: 'qiansanzxds',
    realname: '[前三_单式]',
    tips: '手动输入号码，至少输入3个二位数号码组成一注。',
    example: '投注方案：手动输入01 02 03，开奖号码前三位01,02,03，即为中奖。',
    help: '输入的号码中有与开奖号码中前三位数字一致的号码即中奖。',
    textarea: {}
};
PK10Method['qiansanhz'] = {
    showname: '前三和值',
    shortname: 'qiansanhz',
    realname: '[前三_和值]',
    tips: '从6-27中任意选择1个或1个以上的和值号码。',
    example: '投注方案：和值6；开奖号码前二位：01,02,03，即为中奖',
    help: '所选数值等于开奖号码的前三位数字相加之和，即为中奖。',
    select: {
        layout: [{
            balls: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
            cls: 'hz'
        }]
    }
};
// 前四
PK10Method['qiansizxfs'] = {
    showname: '前四复式',
    shortname: 'qiansizxfs',
    realname: '[前四_复式]',
    tips: '从第一位、第二位、第三位、第四位中至少各选择1个号码。',
    example: '投注方案：第一位到第四位依次选择01,02,03,04，开奖号码前四位01,02,03,04，即为中奖。',
    help: '选号与开奖号码中前四位数字一致即中奖。',
    select: {
        layout: [{
            title: '第一位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }, {
            title: '第二位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }, {
            title: '第三位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }, {
            title: '第四位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }]
    }
};
PK10Method['qiansizxds'] = {
    showname: '前四单式',
    shortname: 'qiansizxds',
    realname: '[前四_单式]',
    tips: '手动输入号码，至少输入4个二位数号码组成一注。',
    example: '投注方案：手动输入01 02 03 04，开奖号码前四位01,02,03,04，即为中奖。',
    help: '输入的号码中有与开奖号码中前四位数字一致的号码即中奖。',
    textarea: {}
};
// 前五
PK10Method['qianwuzxfs'] = {
    showname: '前五复式',
    shortname: 'qianwuzxfs',
    realname: '[前五_复式]',
    tips: '从第一位、第二位、第三位、第四位、第五位中至少各选择1个号码。',
    example: '投注方案：第一位到第五位依次选择01,02,03,04,05，开奖号码前五位01,02,03,04,05，即为中奖。',
    help: '选号与开奖号码中前五位数字一致即中奖。',
    select: {
        layout: [{
            title: '第一位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }, {
            title: '第二位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }, {
            title: '第三位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }, {
            title: '第四位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }, {
            title: '第五位',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }]
    }
};
PK10Method['qianwuzxds'] = {
    showname: '前五单式',
    shortname: 'qianwuzxds',
    realname: '[前五_单式]',
    tips: '手动输入号码，至少输入5个二位数号码组成一注。',
    example: '投注方案：手动输入01 02 03 04 05，开奖号码前四位01,02,03,04,05，即为中奖。',
    help: '输入的号码中有与开奖号码中前五位数字一致的号码即中奖。',
    textarea: {}
};
// 定位胆
PK10Method['dwqian'] = {
    showname: '第1~5名',
    shortname: 'dwqian',
    realname: '[定位胆_第1~5名]',
    tips: '在一、二、三、四、五名任意位置上任意选择1个或1个以上号码。',
    example: '投注方案：第一名选择01，开奖号码第一位为01，即为中奖',
    help: '选择的号码与开奖的号码相对应，即为中奖。如选择第一位购买号码为1,第一位开奖号码为1，即为中奖。',
    select: {
        layout: [{
            title: '第一名',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }, {
            title: '第二名',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }, {
            title: '第三名',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }, {
            title: '第四名',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }, {
            title: '第五名',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }]
    }
};
PK10Method['dwhou'] = {
    showname: '第6~10名',
    shortname: 'dwhou',
    realname: '[定位胆_第6~10名]',
    tips: '在第六、七、八、九、十名任意位置上任意选择1个或1个以上号码。',
    example: '投注方案：第六名选择01，开奖号码第六位为01，即为中奖',
    help: '选择的号码与开奖的号码相对应，即为中奖。如选择第六位购买号码为1,第六位开奖号码为1，即为中奖。',
    select: {
        layout: [{
            title: '第六名',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }, {
            title: '第七名',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }, {
            title: '第八名',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }, {
            title: '第九名',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }, {
            title: '第十名',
            balls: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
            tools: 'full'
        }]
    }
};
// 大小
PK10Method['dxd1'] = {
    showname: '第一名',
    shortname: 'dxd1',
    realname: '[大小_第一名]',
    tips: '选择第一名车号大小为一注。',
    example: '投注方案；大，开奖号码第一位为大（06,07,08,09,10），即为中奖。',
    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为大，开奖号码为大（6,7,8,9,10）即为中奖。',
    select: {
        layout: [{
            title: '第一名',
            balls: ['大', '小']
        }]
    }
};
PK10Method['dxd2'] = {
    showname: '第二名',
    shortname: 'dxd2',
    realname: '[大小_第二名]',
    tips: '选择第二名车号大小为一注。',
    example: '投注方案；大，开奖号码第二位为大（06,07,08,09,10），即为中奖。',
    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为大，开奖号码为大（6,7,8,9,10）即为中奖。',
    select: {
        layout: [{
            title: '第二名',
            balls: ['大', '小']
        }]
    }
};
PK10Method['dxd3'] = {
    showname: '第三名',
    shortname: 'dxd3',
    realname: '[大小_第三名]',
    tips: '选择第三名车号大小为一注。',
    example: '投注方案；大，开奖号码第三位为大（06,07,08,09,10），即为中奖。',
    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为大，开奖号码为大（6,7,8,9,10）即为中奖。',
    select: {
        layout: [{
            title: '第三名',
            balls: ['大', '小']
        }]
    }
};
PK10Method['dxd4'] = {
    showname: '第四名',
    shortname: 'dxd4',
    realname: '[大小_第四名]',
    tips: '选择第四名车号大小为一注。',
    example: '投注方案；大，开奖号码第四位为大（06,07,08,09,10），即为中奖。',
    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为大，开奖号码为大（6,7,8,9,10）即为中奖。',
    select: {
        layout: [{
            title: '第四名',
            balls: ['大', '小']
        }]
    }
};
PK10Method['dxd5'] = {
    showname: '第五名',
    shortname: 'dxd5',
    realname: '[大小_第五名]',
    tips: '选择第五名车号大小为一注。',
    example: '投注方案；大，开奖号码第五位为大（06,07,08,09,10），即为中奖。',
    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为大，开奖号码为大（6,7,8,9,10）即为中奖。',
    select: {
        layout: [{
            title: '第五名',
            balls: ['大', '小']
        }]
    }
};
PK10Method['dxd6'] = {
    showname: '第六名',
    shortname: 'dxd6',
    realname: '[大小_第六名]',
    tips: '选择第六名车号大小为一注。',
    example: '投注方案；大，开奖号码第六位为大（06,07,08,09,10），即为中奖。',
    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为大，开奖号码为大（6,7,8,9,10）即为中奖。',
    select: {
        layout: [{
            title: '第六名',
            balls: ['大', '小']
        }]
    }
};
PK10Method['dxd7'] = {
    showname: '第七名',
    shortname: 'dxd7',
    realname: '[大小_第七名]',
    tips: '选择第七名车号大小为一注。',
    example: '投注方案；大，开奖号码第七位为大（06,07,08,09,10），即为中奖。',
    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为大，开奖号码为大（6,7,8,9,10）即为中奖。',
    select: {
        layout: [{
            title: '第七名',
            balls: ['大', '小']
        }]
    }
};
PK10Method['dxd8'] = {
    showname: '第八名',
    shortname: 'dxd8',
    realname: '[大小_第八名]',
    tips: '选择第八名车号大小为一注。',
    example: '投注方案；大，开奖号码第八位为大（06,07,08,09,10），即为中奖。',
    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为大，开奖号码为大（6,7,8,9,10）即为中奖。',
    select: {
        layout: [{
            title: '第八名',
            balls: ['大', '小']
        }]
    }
};
PK10Method['dxd9'] = {
    showname: '第九名',
    shortname: 'dxd9',
    realname: '[大小_第九名]',
    tips: '选择第九名车号大小为一注。',
    example: '投注方案；大，开奖号码第九位为大（06,07,08,09,10），即为中奖。',
    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为大，开奖号码为大（6,7,8,9,10）即为中奖。',
    select: {
        layout: [{
            title: '第九名',
            balls: ['大', '小']
        }]
    }
};
PK10Method['dxd10'] = {
    showname: '第十名',
    shortname: 'dxd10',
    realname: '[大小_第十名]',
    tips: '选择第十名车号大小为一注。',
    example: '投注方案；大，开奖号码第十位为大（06,07,08,09,10），即为中奖。',
    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为大，开奖号码为大（6,7,8,9,10）即为中奖。',
    select: {
        layout: [{
            title: '第十名',
            balls: ['大', '小']
        }]
    }
};
// 单双
PK10Method['dsd1'] = {
    showname: '第一名',
    shortname: 'dsd1',
    realname: '[单双_第一名]',
    tips: '选择第一名车号单双为一注。',
    example: '投注方案；单，开奖号码第一位为单（01,03,05,07,09），即为中奖。',
    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为单，开奖号码为单（1,3,5,7,9）即为中奖。',
    select: {
        layout: [{
            title: '第一名',
            balls: ['单', '双']
        }]
    }
};
PK10Method['dsd2'] = {
    showname: '第二名',
    shortname: 'dsd2',
    realname: '[单双_第二名]',
    tips: '选择第二名车号单双为一注。',
    example: '投注方案；单，开奖号码第二位为单（01,03,05,07,09），即为中奖。',
    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为单，开奖号码为单（1,3,5,7,9）即为中奖。',
    select: {
        layout: [{
            title: '第二名',
            balls: ['单', '双']
        }]
    }
};
PK10Method['dsd3'] = {
    showname: '第三名',
    shortname: 'dsd3',
    realname: '[单双_第三名]',
    tips: '选择第三名车号单双为一注。',
    example: '投注方案；单，开奖号码第三位为单（01,03,05,07,09），即为中奖。',
    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为单，开奖号码为单（1,3,5,7,9）即为中奖。',
    select: {
        layout: [{
            title: '第三名',
            balls: ['单', '双']
        }]
    }
};
PK10Method['dsd4'] = {
    showname: '第四名',
    shortname: 'dsd4',
    realname: '[单双_第四名]',
    tips: '选择第四名车号单双为一注。',
    example: '投注方案；单，开奖号码第四位为单（01,03,05,07,09），即为中奖。',
    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为单，开奖号码为单（1,3,5,7,9）即为中奖。',
    select: {
        layout: [{
            title: '第四名',
            balls: ['单', '双']
        }]
    }
};
PK10Method['dsd5'] = {
    showname: '第五名',
    shortname: 'dsd5',
    realname: '[单双_第五名]',
    tips: '选择第五名车号单双为一注。',
    example: '投注方案；单，开奖号码第五位为单（01,03,05,07,09），即为中奖。',
    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为单，开奖号码为单（1,3,5,7,9）即为中奖。',
    select: {
        layout: [{
            title: '第五名',
            balls: ['单', '双']
        }]
    }
};
PK10Method['dsd6'] = {
    showname: '第六名',
    shortname: 'dsd6',
    realname: '[单双_第六名]',
    tips: '选择第六名车号单双为一注。',
    example: '投注方案；单，开奖号码第六位为单（01,03,05,07,09），即为中奖。',
    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为单，开奖号码为单（1,3,5,7,9）即为中奖。',
    select: {
        layout: [{
            title: '第六名',
            balls: ['单', '双']
        }]
    }
};
PK10Method['dsd7'] = {
    showname: '第七名',
    shortname: 'dsd7',
    realname: '[单双_第七名]',
    tips: '选择第七名车号单双为一注。',
    example: '投注方案；单，开奖号码第七位为单（01,03,05,07,09），即为中奖。',
    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为单，开奖号码为单（1,3,5,7,9）即为中奖。',
    select: {
        layout: [{
            title: '第七名',
            balls: ['单', '双']
        }]
    }
};
PK10Method['dsd8'] = {
    showname: '第八名',
    shortname: 'dsd8',
    realname: '[单双_第八名]',
    tips: '选择第八名车号单双为一注。',
    example: '投注方案；单，开奖号码第八位为单（01,03,05,07,09），即为中奖。',
    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为单，开奖号码为单（1,3,5,7,9）即为中奖。',
    select: {
        layout: [{
            title: '第八名',
            balls: ['单', '双']
        }]
    }
};
PK10Method['dsd9'] = {
    showname: '第九名',
    shortname: 'dsd9',
    realname: '[单双_第九名]',
    tips: '选择第九名车号单双为一注。',
    example: '投注方案；单，开奖号码第九位为单（01,03,05,07,09），即为中奖。',
    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为单，开奖号码为单（1,3,5,7,9）即为中奖。',
    select: {
        layout: [{
            title: '第九名',
            balls: ['单', '双']
        }]
    }
};
PK10Method['dsd10'] = {
    showname: '第十名',
    shortname: 'dsd10',
    realname: '[单双_第十名]',
    tips: '选择第十名车号单双为一注。',
    example: '投注方案；单，开奖号码第十位为单（01,03,05,07,09），即为中奖。',
    help: '选择的号码与开奖号码相对应，即为中奖，如第一位购买号码为单，开奖号码为单（1,3,5,7,9）即为中奖。',
    select: {
        layout: [{
            title: '第十名',
            balls: ['单', '双']
        }]
    }
};
// 龙虎
PK10Method['lhd1'] = {
    showname: '冠军',
    shortname: 'lhd1',
    realname: '[龙虎_第一名]',
    tips: '选择第一名开奖结果龙虎为一注。',
    example: '投注方案；龙，开奖号码第一位大于第十位为龙，即为中奖。',
    help: '根据第一名，第十名号码数值比大小，第一名号码大第十名号码为龙，反之则为虎。所选形态与开奖号码形态一致，即为中奖。',
    select: {
        layout: [{
            title: '第一名',
            balls: ['龙', '虎']
        }]
    }
};
PK10Method['lhd2'] = {
    showname: '亚军',
    shortname: 'lhd2',
    realname: '[龙虎_第二名]',
    tips: '选择第二名开奖结果龙虎为一注。',
    example: '投注方案；龙，开奖号码第二位大于第九位为龙，即为中奖。',
    help: '根据第二名，第九名号码数值比大小，第二名号码大第九名号码为龙，反之则为虎。所选形态与开奖号码形态一致，即为中奖。',
    select: {
        layout: [{
            title: '第二名',
            balls: ['龙', '虎']
        }]
    }
};
PK10Method['lhd3'] = {
    showname: '季军',
    shortname: 'lhd3',
    realname: '[龙虎_第三名]',
    tips: '选择第三名开奖结果龙虎为一注。',
    example: '投注方案；龙，开奖号码第三位大于第八位为龙，即为中奖。',
    help: '根据第三名，第八名号码数值比大小，第三名号码大第八名号码为龙，反之则为虎。所选形态与开奖号码形态一致，即为中奖。',
    select: {
        layout: [{
            title: '第三名',
            balls: ['龙', '虎']
        }]
    }
};
PK10Method['lhd4'] = {
    showname: '第四名',
    shortname: 'lhd4',
    realname: '[龙虎_第四名]',
    tips: '选择第四名开奖结果龙虎为一注。',
    example: '投注方案；龙，开奖号码第四位大于第七位为龙，即为中奖。',
    help: '根据第四名，第七名号码数值比大小，第四名号码大第七名号码为龙，反之则为虎。所选形态与开奖号码形态一致，即为中奖。',
    select: {
        layout: [{
            title: '第四名',
            balls: ['龙', '虎']
        }]
    }
};
PK10Method['lhd5'] = {
    showname: '第五名',
    shortname: 'lhd5',
    realname: '[龙虎_第五名]',
    tips: '选择第五名开奖结果龙虎为一注。',
    example: '投注方案；龙，开奖号码第五位大于第六位为龙，即为中奖。',
    help: '根据第五名，第六名号码数值比大小，第五名号码大第六名号码为龙，反之则为虎。所选形态与开奖号码形态一致，即为中奖。',
    select: {
        layout: [{
            title: '第五名',
            balls: ['龙', '虎']
        }]
    }
};
// PK拾布局
var PK10Layout = [{
    title: '定位胆',
    rows: [[{
        title: '定位胆',
        columns: ['dwqian', 'dwhou']
    }]]
}, {
    title: '前一',
    rows: [[{
        title: '前一',
        columns: ['qianyi']
    }]]
}, {
    title: '前二',
    rows: [[{
        title: '前二',
        columns: ['qianerzxfs', 'qianerzxds', 'qianerhz']
    }]]
}, {
    title: '前三',
    rows: [[{
        title: '前三',
        columns: ['qiansanzxfs', 'qiansanzxds', 'qiansanhz']
    }]]
}, {
    title: '前四',
    rows: [[{
        title: '前四',
        columns: ['qiansizxfs', 'qiansizxds']
    }]]
}, {
    title: '前五',
    rows: [[{
        title: '前五',
        columns: ['qianwuzxfs', 'qianwuzxds']
    }]]
}, {
    title: '大小单双',
    rows: [[{
        title: '大小',
        columns: ['dxd1', 'dxd2', 'dxd3', 'dxd4', 'dxd5', 'dxd6', 'dxd7', 'dxd8', 'dxd9', 'dxd10']
    }], [{
        title: '单双',
        columns: ['dsd1', 'dsd2', 'dsd3', 'dsd4', 'dsd5', 'dsd6', 'dsd7', 'dsd8', 'dsd9', 'dsd10']
    }]]
}, {
    title: '龙虎',
    rows: [[{
        title: '龙虎',
        columns: ['lhd1', 'lhd2', 'lhd3', 'lhd4', 'lhd5']
    }]]
}];

export const GAMES = [
    {'method': SscMethod, 'layout': SscLayout, 'type': 1, 'name': 'SSC'},
    {'method': X511Method, 'layout': X511Layout, 'type': 2, 'name': 'X511'},
    {'method': K3Method, 'layout': K3Layout, 'type': 3, 'name': 'K3'},
    {'method': D3Method, 'layout': D3Layout, 'type': 4, 'name': 'D3'},
    {'method': Kl8Method, 'layout': Kl8Layout, 'type': 5, 'name': 'Kl8'},
    {'method': PK10Method, 'layout': PK10Layout, 'type': 6, 'name': 'PK10'}
]
