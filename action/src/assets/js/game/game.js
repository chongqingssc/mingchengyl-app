
let games = [
  {"id":1,"showName":"新加坡30秒彩","shortName":"t1s30","frequency":"self","type":1,"times":2880,"stopDelay":0,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":0,"description":"开奖时间：0点至24点，开奖频率：30秒一期，每日期数：2880期。"},
  {"id":2,"showName":"美国一分彩","shortName":"t1s60","frequency":"self","type":1,"times":1440,"stopDelay":0,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":0,"description":"开奖时间：0点至24点，开奖频率：60秒一期，每日期数：1440期。"},
  {"id":3,"showName":"韩国1.5分彩","shortName":"t1s90","frequency":"self","type":1,"times":960,"stopDelay":0,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":0,"description":"开奖时间：0点至24点，开奖频率：90秒一期，每日期数：960期。"},
  {"id":4,"showName":"新德里1.5分彩","shortName":"t1s90a","frequency":"self","type":1,"times":960,"stopDelay":0,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":0,"description":"开奖时间：0点至24点，开奖频率：90秒一期，每日期数：960期。"},
  {"id":5,"showName":"俄罗斯1.5分彩","shortName":"t1s90b","frequency":"self","type":1,"times":960,"stopDelay":0,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":0,"description":"开奖时间：0点至24点，开奖频率：90秒一期，每日期数：960期。"},
  {"id":6,"showName":"印度1.5分彩","shortName":"t1s90c","frequency":"self","type":1,"times":960,"stopDelay":0,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":0,"description":"开奖时间：0点至24点，开奖频率：90秒一期，每日期数：960期。"},
  {"id":7,"showName":"东京1.5分彩","shortName":"t1s90d","frequency":"self","type":1,"times":960,"stopDelay":0,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":0,"description":"开奖时间：0点至24点，开奖频率：90秒一期，每日期数：960期。"},
  {"id":8,"showName":"缅甸三分彩","shortName":"t1s180","frequency":"self","type":1,"times":480,"stopDelay":0,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":0,"description":"开奖时间：0点至24点，开奖频率：180秒一期，每日期数：480期。"},
  {"id":21,"showName":"纽约11选5","shortName":"t2s30","frequency":"self","type":2,"times":2880,"stopDelay":0,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":100000.0,"sort":0,"status":0,"description":"开奖时间：0点至24点，开奖频率：30秒一期，每日期数：2880期。"},
  {"id":22,"showName":"加拿大11选5","shortName":"t2s90","frequency":"self","type":2,"times":960,"stopDelay":0,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":100000.0,"sort":0,"status":0,"description":"开奖时间：0点至24点，开奖频率：90秒一期，每日期数：960期。"},
  {"id":31,"showName":"吉隆坡快3","shortName":"t3s90","frequency":"self","type":3,"times":960,"stopDelay":0,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":100000.0,"sort":0,"status":-1,"description":"开奖时间：0点至24点，开奖频率：90秒一期，每日期数：960期。"},
  {"id":32,"showName":"新西兰快3","shortName":"t3s120","frequency":"self","type":3,"times":720,"stopDelay":0,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":100000.0,"sort":0,"status":-1,"description":"开奖时间：0点至24点，开奖频率：120秒一期，每日期数：720期。"},
  {"id":61,"showName":"英国120秒赛车","shortName":"t6s120","frequency":"self","type":6,"times":720,"stopDelay":0,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":100000.0,"sort":0,"status":0,"description":"开奖时间：0点至24点，开奖频率：120秒一期，每日期数：720期。"},
  {"id":62,"showName":"英国180秒赛车","shortName":"t6s180","frequency":"self","type":6,"times":480,"stopDelay":0,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":100000.0,"sort":0,"status":0,"description":"开奖时间：0点至24点，开奖频率：180秒一期，每日期数：480期。"},
  {"id":63,"showName":"幸运飞艇","shortName":"t6s300","frequency":"self","type":6,"times":480,"stopDelay":0,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":100000.0,"sort":0,"status":0,"description":"开奖时间：0点至24点，开奖频率：180秒一期，每日期数：480期。"},

  {"id":101,"showName":"重庆时时彩","shortName":"cqssc","frequency":"high","type":1,"times":120,"stopDelay":0,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":-10,"maxBonus":200000.0,"sort":0,"status":0,"description":"开奖时间：10点至22点，10分钟一期，22点至凌晨2点，5分钟一期，每日期数：120期。"},
  {"id":102,"showName":"天津时时彩","shortName":"tjssc","frequency":"high","type":1,"times":84,"stopDelay":180,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":-1,"description":"开奖时间：9点至23点，开奖频率：10分钟一期，每日期数：84期。"},
  {"id":103,"showName":"新疆时时彩","shortName":"xjssc","frequency":"high","type":1,"times":96,"stopDelay":140,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":-10,"maxBonus":200000.0,"sort":0,"status":0,"description":"开奖时间：10点至凌晨2点，开奖频率：10分钟一期，每日期数：96期。"},
  {"id":104,"showName":"北京时时彩","shortName":"bjssc","frequency":"high","type":1,"times":179,"stopDelay":70,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":-1,"description":"开奖时间：9点至24点，开奖频率：5分钟一期，每日期数：179期。"},
  {"id":105,"showName":"韩国时时彩","shortName":"hgssc","frequency":"high","type":1,"times":880,"stopDelay":5,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":-1,"description":"开奖时间：凌晨0点至5点，7点至24点，开奖频率：90秒一期，凌晨200期，7点后680期，每日期数：880期。"},
  {"id":106,"showName":"台湾时时彩","shortName":"twssc","frequency":"high","type":1,"times":203,"stopDelay":100,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":-1,"description":"开奖时间：7点至24点，开奖频率：5分钟一期，每日期数：203期。"},
  {"id":107,"showName":"东京时时彩","shortName":"jpssc","frequency":"high","type":1,"times":920,"stopDelay":10,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":-1,"description":"开奖时间：凌晨0点到7点，8点至24点，开奖频率：90秒一期，凌晨320期，8点后600期，每日期数：920期。"},
  {"id":108,"showName":"新加坡2分彩","shortName":"sgssc","frequency":"high","type":1,"times":660,"stopDelay":35,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":-1,"description":"开奖时间：0点至24点，开奖频率：1分钟一期，每日期数：1440期。"},
  {"id":109,"showName":"腾讯分分彩","shortName":"qqmin","frequency":"high","type":1,"times":720,"stopDelay":7,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":0,"description":"开奖时间：凌晨0点至24点，开奖频率：1分钟一期，每日期数：1440期。"},
  {"id":110,"showName":"幸运十分彩","shortName":"t1s600","frequency":"high","type":1,"times":720,"stopDelay":7,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":0,"description":"开奖时间：凌晨0点至24点，开奖频率：1分钟一期，每日期数：1440期。"},
  {"id":111,"showName":"河内5分彩","shortName":"t1s300","frequency":"high","type":1,"times":720,"stopDelay":7,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":0,"description":"开奖时间：凌晨0点至24点，开奖频率：1分钟一期，每日期数：1440期。"},
  {"id":112,"showName":"腾讯5分彩","shortName":"qq5fen","frequency":"high","type":1,"times":720,"stopDelay":7,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":0,"description":"开奖时间：凌晨0点至24点，开奖频率：1分钟一期，每日期数：1440期。"},

  {"id":113,"showName":"腾讯十分彩","shortName":"qq10fen","frequency":"high","type":1,"times":720,"stopDelay":7,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":0,"description":"开奖时间：凌晨0点至24点，开奖频率：1分钟一期，每日期数：1440期。"},
  {"id":114,"showName":"幸运分分彩","shortName":"t1s60a","frequency":"high","type":1,"times":720,"stopDelay":7,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":0,"description":"开奖时间：凌晨0点至24点，开奖频率：1分钟一期，每日期数：1440期。"},
  {"id":115,"showName":"快乐2分彩","shortName":"t1s120","frequency":"high","type":1,"times":720,"stopDelay":7,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":0,"description":"开奖时间：凌晨0点至24点，开奖频率：1分钟一期，每日期数：1440期。"},
  {"id":116,"showName":"幸运5分彩","shortName":"t1s300a","frequency":"high","type":1,"times":720,"stopDelay":7,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":200000.0,"sort":0,"status":0,"description":"开奖时间：凌晨0点至24点，开奖频率：1分钟一期，每日期数：1440期。"},

  {"id":201,"showName":"广东11选5","shortName":"gd11x5","frequency":"high","type":2,"times":84,"stopDelay":56,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":-20,"maxBonus":100000.0,"sort":0,"status":0,"description":"开奖时间：9点至23点，开奖频率：10分钟一期，每日期数：84期。"},
  {"id":202,"showName":"江西11选5","shortName":"jx11x5","frequency":"high","type":2,"times":84,"stopDelay":120,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":-20,"maxBonus":100000.0,"sort":0,"status":0,"description":"开奖时间：9点至23点，开奖频率：10分钟一期，每日期数：84期。"},
  {"id":203,"showName":"安徽11选5","shortName":"ah11x5","frequency":"high","type":2,"times":81,"stopDelay":120,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":-20,"maxBonus":100000.0,"sort":0,"status":0,"description":"开奖时间：8点30分至22点，开奖频率：10分钟一期，每日期数：81期。"},
  {"id":204,"showName":"上海11选5","shortName":"sh11x5","frequency":"high","type":2,"times":90,"stopDelay":120,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":-20,"maxBonus":100000.0,"sort":0,"status":0,"description":"开奖时间：9点至24期，开奖频率：10分钟一期，每日期数：90期。"},
  {"id":205,"showName":"山东11选5","shortName":"sd11x5","frequency":"high","type":2,"times":87,"stopDelay":30,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":-20,"maxBonus":100000.0,"sort":0,"status":0,"description":"开奖时间：9点至22点，开奖频率：五分钟一期，每日期数：78期。"},
  {"id":206,"showName":"辽宁11选5","shortName":"ln11x5","frequency":"high","type":2,"times":83,"stopDelay":0,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":-20,"maxBonus":100000.0,"sort":0,"status":0,"description":"开奖时间：8点至22点，开奖频率：十分钟一期，每日期数：83期。"},
  {"id":301,"showName":"江苏快3","shortName":"jsk3","frequency":"high","type":3,"times":82,"stopDelay":120,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":100000.0,"sort":0,"status":-1,"description":"开奖时间：8点40分至22点，开奖频率：10分钟一期，每日期数：82期。"},
  {"id":302,"showName":"安徽快3","shortName":"ahk3","frequency":"high","type":3,"times":80,"stopDelay":120,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":100000.0,"sort":0,"status":-1,"description":"开奖时间：8点50分至22点，开奖频率：10分钟一期，每日期数：80期。"},
  {"id":303,"showName":"湖北快3","shortName":"hbk3","frequency":"high","type":3,"times":78,"stopDelay":120,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":100000.0,"sort":0,"status":-1,"description":"开奖时间：9点10分至22点，开奖频率：10分钟一期，每日期数：78期。"},
  {"id":304,"showName":"吉林快3","shortName":"jlk3","frequency":"high","type":3,"times":79,"stopDelay":120,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":100000.0,"sort":0,"status":-1,"description":"开奖时间：8点30分至21点，开奖频率：10分钟一期，每日期数：79期。"},
  {"id":401,"showName":"福彩3D","shortName":"fc3d","frequency":"low","type":4,"times":1,"stopDelay":-2400,"downCode":1920,"fenDownCode":1880,"liDownCode":1860,"floatBonus":0,"maxBonus":100000.0,"sort":0,"status":-1,"description":"开奖时间：20点30分，开奖频率：一天一期，每日期数：1期。"},
  {"id":402,"showName":"排列三","shortName":"pl3","frequency":"low","type":4,"times":1,"stopDelay":-2700,"downCode":1920,"fenDownCode":1880,"liDownCode":1860,"floatBonus":0,"maxBonus":100000.0,"sort":0,"status":0,"description":"开奖时间：20点30分，开奖频率：一天一期，每日期数：1期。"},
  {"id":501,"showName":"北京快乐8","shortName":"bjkl8","frequency":"high","type":5,"times":179,"stopDelay":130,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":100000.0,"sort":0,"status":-1,"description":"开奖时间：9点至24点，开奖频率：5分钟一期，每日期数：179期。"},
  {"id":502,"showName":"韩国快乐8","shortName":"hgkl8","frequency":"high","type":5,"times":880,"stopDelay":0,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":100000.0,"sort":0,"status":-1,"description":"开奖时间：凌晨0点至5点，7点至24点，开奖频率：90秒一期，凌晨200期，7点后680期，每日期数：880期。"},
  {"id":503,"showName":"台湾快乐8","shortName":"twkl8","frequency":"high","type":5,"times":203,"stopDelay":90,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":100000.0,"sort":0,"status":-1,"description":"开奖时间：7点至24点，开奖频率：5分钟一期，每日期数：203期。"},
  {"id":504,"showName":"东京快乐8","shortName":"jpkl8","frequency":"high","type":5,"times":920,"stopDelay":15,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":100000.0,"sort":0,"status":-1,"description":"开奖时间：凌晨0点到7点，8点至24点，开奖频率：90秒一期，凌晨320期，8点后600期，每日期数：920期。"},
  {"id":505,"showName":"新加坡快乐8","shortName":"sgkl8","frequency":"high","type":5,"times":660,"stopDelay":20,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":0,"maxBonus":100000.0,"sort":0,"status":-1,"description":"开奖时间：凌晨0点到6点，8点至24点，开奖频率：2分钟一期，凌晨180期，8点后480期，每日期数：660期。"},
  {"id":601,"showName":"北京PK拾","shortName":"bjpk10","frequency":"high","type":6,"times":179,"stopDelay":20,"downCode":0,"fenDownCode":0,"liDownCode":0,"floatBonus":-20,"maxBonus":100000.0,"sort":0,"status":0,"description":"开奖时间：9点至24点，开奖频率：5分钟一期，每日期数：179期。"},
];

export let GameList = {'list': games, 'cache': games.reduce((a, b) => {
  a[b.shortName] = b; return a;
}, {})};
