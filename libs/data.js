// 页面数据来源！
// 中英文 + 界面信息 + 介绍信息

// 文字 trim()!
const data = {
  ch: {
    // 界面信息
    interface: {
      headerInfo: "赛珍珠文化公园",
      mode_guide: "导览",
      mode_explor: "探索",
      szz_age: "赛珍珠（Peral S. Buck）1892-1973",
      szz_introduce: `<span style='font-size: 1.2em; font-weight: 700'>赛珍珠</span>是美国第一位同时获得普利策文学奖和诺贝尔文学奖的女作家，曾在江苏镇江居住18年之久，被称为“一座沟通东西方文明的人桥”，赛珍珠文化公园是为了纪念赛珍珠而建设的，包括赛珍珠故居，赛珍珠纪念馆，大地翰墨书画馆，赛珍珠研究会等。`,
      enterBtnInfo: "进入场景",
      bottomInfo: [
        "公园综述",
        "广场景观",
        "赛珍珠故居",
        "赛珍珠纪念馆",
        "大地翰墨画室",
      ],
    },
    // 广场 - 5
    gc_body: {
      header: "赛珍珠文化公园",
      info: `赛珍珠文化公园位于草木葳蕤、清幽宁静的江苏省镇江市润州区登云山脚下，东临润州山路，南接中山西路，北连登云山路，总面积为1.64公顷。公园于2017年9月开园，是为了纪念获得诺贝尔文学奖、在镇江生活了18年的美国女作家赛珍珠而建设的主题文化公园。<span style='color: red'>公园包括广场雕塑文化景观、珍珠书屋、赛珍珠故居、赛珍珠纪念馆等建筑，现已成为赛学研究的新平台、对外开放的新窗口、城市发展的新坐标、市民活动的新场所</span>`,
      // imgPath: "../imgs/szz-gystone.jpg",
      audioPath: "",
    },
    gc_szzSculpture: {
      header: "赛珍珠坐像",
      info: `赛珍珠坐像由汉白玉雕成，位于圆形广场中心。她目视远方、托腮沉思，仿佛在构思又一部伟大的作品。她的身边高高垒起一摞书，从“书脊”上的文字可知，这些都是赛珍珠创作和翻译的文学作品。她是一位著作等身的伟大作家。`,
      imgPath: "",
      audioPath: "",
    },
    gc_ddzsSculpture: {
      header: "“大地”之书雕塑",
      info: `汉白玉制作,纪念赛珍珠获诺贝尔文学奖的文学代表作《大地》`,
      imgPath: "",
      audioPath: "",
    },
    gc_sxb: {
      header: "思乡碑",
      info: `Where is my home?
      Where shall I find
      Ture freedom for
      The heart and mind…
      何处是桑梓  觅觅复寻寻
      安得真自由  聊以寄吾心……
      碑文的英文是赛珍珠创作的四首诗，出自她的诗集《爱语集》（《爱的琐语》）。清华大学研究员、诗人眭谦将这四首诗翻译成五言古风。英文原诗及中文译诗均镌刻于“思乡碑”之上。`,
      imgPath: "",
      audioPath: "",
    },
    gc_zzsw: {
      header: "珍珠书屋",
      info: `珍珠书屋是一座正面呈半弧形、红砖平顶的建筑，它的色调、造型与广场景观相得益彰。它承担了为一些文化艺术活动、公益活动提供场所的社会功能。`,
      imgPath: "",
      audioPath: "",
    },
    // 大地翰墨
    ddhm_body: {
      header: "大地翰墨画室",
      info: "大地翰墨画室是一个为广大赛研学者、书画艺术家提供学术研讨、艺术交流的空间。由江苏大学图书馆成功主办的“赛珍珠主题诗书画展巡展”便是从这里迈出了走向全国、走向世界的第一步。",
      audioPath: "",
      imgPath: "",
    },
    // 故居 - 4
    gj_body: {
      header: "赛珍珠故居",
      info: `赛珍珠故居位于登云山顶，建于20世纪初，是一座青砖木质的二层小楼，至今保存完好。故居面积400平方米左右，1990年由镇江市和美国坦佩市共同出资修缮，1992年在此建立镇江市友好交流馆（后更名为赛珍珠故居），1993年被公布为市级文物保护单位，2002年被公布为省级文物保护单位。故居内的陈设根据赛珍珠自传及同时代其他著作中的记载还原。`,
      audioPath: "",
      imgPath: "",
    },
    gj_ddgg: {
      header: "吊灯挂钩",
      info: `这是珍贵的赛珍珠故居原始建筑构件——吊灯挂钩。挂钩上清晰地铸有“1872”表示年份的字样，侧面证明了故居的建造历史较为久远。`,
      audioPath: "",
      imgPath: "",
    },
    gj_sg: {
      header: "赛珍珠的书柜",
      info: `书架里陈列的图书大部分是原镇江市友好交流馆的藏书，另一部分由“赛珍珠国际”赠送给故居，是非常珍贵的研究资料。`,
      audioPath: "",
      imgPath: "",
    },
    // gj_sz: {
    //   header: "赛珍珠的书桌",
    //   info: `1922-1934年，赛珍珠主要居住于南京。在此期间，她完成了《东风·西风》《母亲》《大地》《儿子们》《分家》《异邦客》《战斗的天使》等作品。1938年，她由于“对中国农民生活史诗般的描述，这描述是真切而取材丰富的，以及她在传记方面的杰作”荣获诺贝尔文学奖。`,
    //   audioPath: "",
    //   imgPath: "",
    // },

    // 纪念馆 - 24
    jng_body: {
      header: "赛珍珠纪念馆",
      info: `赛珍珠纪念馆建于2008年并对外开放，2017年与赛珍珠文化公园配套，又重建新馆。纪念馆分上下两层，建筑面积1000平方米。通过“故乡镇江”“文学殿堂”“中国情结”“慈善博爱”“珍珠永辉”五个展区，再现了赛珍珠这位杰的出女性横跨东西方的传奇经历、文学成就、人桥精神、慈善情怀及镇江市开展赛珍珠研究的丰硕成果。`,
      audioPath: "",
      imgPath: "",
    },
    jng_szzxx: {
      header: "赛珍珠胸像",
      info: `
      赛珍珠胸像高70cm，宽60cm，厚50cm，用优质汉白玉精心雕刻而成。赛珍珠是美国著名文学家、慈善家和社会活动家。她一生创作了100多部作品，是世界上最多产的作家之一，1938年获诺贝尔文学奖，获奖作品有《大地三部曲》《母亲》《异邦客》《东风•西风》等。</br>
    1892年6月26日，赛珍珠出生于美国西弗吉尼亚州，当年随父母来到中国，先后在镇江居住了近18年，度过了她的童年、少年、青年时代。赛珍珠把镇江当做她的“中国故乡”，而镇江人民则把赛珍珠当成自己的女儿。镇江是赛珍珠成长的摇篮和成功的起点，这是镇江的骄傲。赛珍珠一生积极开展东西方文化交流，反对种族歧视，争取妇女平等权利，力主废除《排华法案》，支持中国人民抗日战争，被中国政府授予“领绶采玉勋章”。晚年创办“欢迎之家”，从事慈善事业。曾担任美国亚洲协会主席、全美作家协会主席等职务，获得美国“十佳妇女”称号和“国际人类服务奖”等数十种荣誉，被美国公众推为“最具世界影响力的杰出女性”。在新中国成立60周年之际，赛珍珠被中国人民对外友好协会等单位评为“十大国际友人”提名奖。
      `,
      audioPath: "",
      imgPath: "",
    },
    // jng_ddzt: {
    //   header: "“大地之土”标本瓶",
    //   info: `这是镇江市赛珍珠文化考察团赴美国宾夕法尼亚州珀可思市青山农场，在赛珍珠故居附近取回的“大地之土”标本瓶。在没有阳光，被抽离了空气和水的标本瓶中，一株小小的绿苗居然破土而出，悄悄生长。它，仿佛告诉我们：赛珍珠回到中国故乡的心愿终于得以实现。`,
    //   audioPath: "",
    //   imgPath: "",
    // },
    jng_szzxjk: {
      header: "赛珍珠学籍卡",
      info: `这是美国梅肯-伦道夫女子学院1914年年刊中的赛珍珠在校履历（复制品），其中的内容清晰地表示，赛珍珠来自“中国镇江”。`,
      audioPath: "",
      imgPath: "",
    },
    jng_nksyl: {
      header: "尼克松语录",
      info: `这是美国总统尼克松及其夫人在赛珍珠逝世时发布的声明：“一座沟通东西方文明的人桥，一位伟大的艺术家，一位敏感而富有同情心的人。`,
      audioPath: "",
      imgPath: "",
    },
    jng_szzyl: {
      header: "赛珍珠语录",
      info: `
      这是赛珍珠公开发表的两段著名语录：</br>
      “啊，我亲爱的中国人民啊！说你们亲爱是由于我整个童年是在中国度过！在我整个青年时期以及作为一个女性，甚至直到我度过了半辈子，我的朋友全都是中国人！我把自己作为你们的终身好友。”</br>
      “中国人是人类历史上杰出的一个民族。现在他们拼命地搞现代化建设，搞工业化建设，你们可以相信，他们会以闪电般的速度完成他们的工业化和现代化建设。”
      `,
      audioPath: "",
      imgPath: "",
    },
    jng_szzjzxqpxb: {
      header: "赛珍珠家族血亲谱系表",
      info: `
      这是《赛珍珠家族血亲谱系表》，从表中可以清楚地了解赛珍珠的家族情况。1921年，赛珍珠的母亲在镇江去世。正在南京任教的赛珍珠赶回镇江，在风雨中将母亲安葬于云台山脚下牛皮坡附近的西侨公墓。至此，赛珍珠有五位亲人长眠于镇江大地：母亲凯丽、两个姐姐、一个哥哥、一个弟弟。
      `,
      audioPath: "",
      imgPath: "",
    },
    // merge
    jng_xx: {
      header: "肖像",
      info: `
      孔先生肖像</br>
      这是赛珍珠的老师孔先生授课国画肖像。孔先生是光绪年间的秀才，他饱读诗书、宅心仁厚，讲一口北京“官话”，曾经历北京义和团运动，对社会有极强的洞察力。赛珍珠不仅在孔先生那里接受了传统的私塾教育，还从孔先生那里学到了初步的人生哲理。</br>
      王妈肖像</br>
      这是赛珍珠的保姆王妈的肖像照片。王妈在赛家生活长达18年，经常给赛珍珠讲故事。赛珍珠对王妈的第一个记忆是“一张和蔼可亲的中国女性的脸，那张脸并不年轻，可她于我却象征着爱和尊严”。赛珍珠说：“在我迈出人生第一步时，我紧紧攥住的，正是这位中国保姆的食指。”王妈也是赛珍珠的启蒙老师，她会用很夸张的语调讲述中国千百年来口口相传的民间故事。这些故事深深打动了赛珍珠那幼小的心灵。</br>
      `,
      audioPath: "",
      imgPath: "",
    },

    // merge
    jng_szzbjc: {
      header: "赛珍珠获奖",
      info: `
      瑞典文学院颁奖辞</br>
      瑞典文学院的颁奖辞是这样表述的：“瑞典学院把今年的诺贝尔文学奖颁给赛珍珠，是由于她对中国农民生活史诗般的描述，这描述是真切而取材丰富的，以及她在传记方面的杰出成就。赛珍珠的作品，为人类的同情心越过遥远的种族壁垒铺平了道路，对人类的理想典范做了深入的研究和伟大而鲜活的艺术展现。为此，瑞典学院觉得这与艾尔弗列德·诺贝尔对于未来的梦想期望和谐一致。”</br>
      赛珍珠授奖演说词</br>
      “今天，如果我不为中国人说话——尽管我是以完全非官方的身份——我也就不忠实于自己了，因为中国人的生活这么多年来也就是我的生活，真的，他们的生活必将永远是我生活的一部分。</br>
是人民始终给予我最大的欢乐与兴趣。当我生活在中国人当中时，是中国人民给了我这些。人家问我，他们是什么样的人，我答不出来。他们既非这样也非那样，他们就是人。我叙述他们跟叙述我自己的亲人一样。我跟他们太亲近，跟他们在一起生活得太密切了。</br>
我属于美国，但是恰恰是中国小说而不是美国小说决定了我在写作上的成就。我最早的小说知识，关于怎样叙述故事和怎样写故事，都是在中国学到的。今天不承认这一点，在我来说就是忘恩负义。</br>
      `,
      audioPath: "",
      imgPath: "",
    },

    //merge
    jng_books: {
      header: "书籍",
      info: `
        《今日和永远》</br>
        本书收录13篇故事。其中，《游击队的妈妈》描写了一位家庭妇女带领战士袭击日寇并取得胜利的故事。</br>
        《龙种》</br>
        本书反映日寇侵略给中国农村带来的巨大灾难，同时让美国人民了解到中国和亚洲盟友令人振奋的抗日故事。</br>
        《诺言》</br>
        本书讲述中国远征军在缅甸战场上与英军协作失败的悲惨故事。</br>
        《爱国者》</br>
        本书以1926-1938年的城市生活为背景，描写抗战爆发前后的故事。</br>
        《滇缅公路的故事》</br>
        本书向世界披露中国老、孤、妇、幼铺筑公路以抗击日寇的奇迹。</br>
        《中国天空》</br>
        本书叙述中国游击队顽强不屈地阻止日本侵略者的故事。</br>
        `,
      audioPath: "",
      imgPath: "",
    },

    jng_zgwrzp: {
      header: "中国文人照片",
      info: `
      这是与赛珍珠交往密切的中国文人照片墙。分别为：赛珍珠与王莹合影照片、老舍照片、赛珍珠与林语堂合影照片、梅兰芳照片、晏阳初照片 、徐志摩照片 、赛珍珠与程及合影照片、黎东方照片等。1945年11月，郭沫若、老舍、叶圣陶、曹靖华、阳翰笙、靳以、冯乃超、陈白尘、梅林、洪深、茅盾、孙伏园、胡风、马彦祥、宋之的、冯雪峰、吴祖光等中国著名作家曾致信赛珍珠和全美作家，希望赛珍珠和全美作家出面影响美国政府，制止中国的内战爆发。
      `,
      audioPath: "",
      imgPath: "",
    },
    jng_szzcssy: {
      header: "赛珍珠慈善事业",
      info: "赛珍珠是一位爱心大使，她身体力行从事慈善事业，与丈夫领养了7个孤儿。1949年，她创办“欢迎之家”，帮助收养具有亚洲血统的美国弃儿。50多年来，共收养了5000多名孤儿，其中半数来自亚洲。为救助韩国的孤儿，赛珍珠投入了很多精力和财力，她因此被授予“首尔荣誉市民”称号，受到韩国总统的会见。赛珍珠晚年将所有财产捐赠给慈善事业，并于1964年成立了赛珍珠基金会。因为赛珍珠在慈善方面的杰出贡献，她于1964年获“人类特殊贡献奖”。 ",
      audioPath: "",
      imgPath: "",
    },
    jng_szzyjcg: {
      header: "赛珍珠研究成果",
      info: "赛珍珠的一生在文学创作、中西交流、种族平等、妇女维权、儿童保护等诸多方面都给后人留下了宝贵的财富。从20世纪70年代起，我市即有一批研究学者从收集史料入手，客观公正地评价赛珍珠。这里展示的是赛珍珠研究的部分成果。镇江市赛珍珠研究会自2003年成立以来，编辑出版《赛珍珠纪念文集》6辑。2021年12月，由镇江赛珍珠研究会会长卢章平教授主编的第一部全英文赛研论集《中国赛珍珠论集》正式出版，为中国赛研优秀成果走向国际首开先河。",
      audioPath: "",
      imgPath: "",
    },
    jng_zgysdgjyr: {
      header: "中国缘·十大国际友人",
      info: "2009年，在中华人民共和国成立60周年之际，中国国际广播电台、中国人民对外友好协会、国家外国专家局共同主办“中国缘·十大国际友人”评选活动，评选的是新中国成立前后百年间对中国贡献最大、最受中国人民爱戴或与中国缘分最深的外国友人。赛珍珠获“十大国际友人”提名奖。",
      audioPath: "",
      imgPath: "",
    },

    // merge
    jng_qhtlh: {
      header: "故居物品",
      info: `
        漆盒</br>
        赛珍珠曾要求随尼克松访华，但未能成行。尼克松访华回国后，特派女儿朱莉将这套从中国带回的五只小巧精致的漆盒赠送给赛珍珠。这里陈设的漆盒由扬州漆器厂仿制。</br>
        提梁壶</br>
        赛珍珠将一把紫砂提梁壶从镇江带到美国。这把壶与赛珍珠终身相伴，寄托着她对镇江的深切思念。这里陈设的壶是根据赛珍珠青山故居的提梁壶仿制的。青山故居复原空间让我们身临其境地感受到赛珍珠当年在美国的生活，以及她对中国故乡深深的眷念。中国文化已经深入她的骨髓，影响了她的一生。</br>
        `,
      imgPath: "",
      audioPath: "",
    },

    // jng_qh: {
    //   header: "漆盒",
    //   info: "赛珍珠曾要求随尼克松访华，但未能成行。尼克松回国后，特派女儿朱莉将这套从中国带回的五只小巧精致的漆盒赠送给赛珍珠。这里陈设的漆盒由扬州漆器厂仿制。",
    //   imgPath: "",
    //   audioPath: "",
    // },
    // jng_tlh: {
    //   header: "提梁壶",
    //   info: "赛珍珠将一把提梁壶从镇江带到美国。这把壶与赛珍珠终身相伴，寄托着她对镇江的深切思念。这里陈设的壶是根据赛珍珠青山故居的提梁壶仿制的。复原的赛珍珠青山故居让我们身临其境地感受到赛珍珠当年在美国的生活，以及她对中国故乡深深的眷念。中国文化已经深入她的骨髓，影响了她的一生。",
    //   audioPath: "",
    //   imgPath: "",
    // },
    jng_jsy: {
      header: "结束语",
      info: `
      赛珍珠的一生，是丰富多彩的一生，她以毕生的精力向东方、西方两个世界的人们传播着跨文化的理解。她的思想和情怀，直到今天仍然具有普适意义，如坚持正义、反对侵略的精神；悲悯善良、慈善友爱的精神；和平和谐、和而不同的精神；东西交流、互相融合的精神，特别是她具备一个地球、天下一家的宽阔视野，对大国小国，东方西方，种族肤色，男女贫富，不存任何偏见，用自己的一生，去实现跨国界、跨民族、跨种族的高尚博爱精神，在今天更有现实的意义。历史已经证明，她的远见卓识具有永久的时空穿透力。</br>
    名如其人，赛珍珠永远像珍珠一样璀璨夺目、熠熠生辉。
      `,
      audioPath: "",
      imgPath: "",
    },
  },

  // 英文。
  en: {
    // 界面信息
    interface: {
      headerInfo: "Pearl S. Buck Cultural Park",
      mode_guide: "Guide",
      mode_explor: "Explore",
      szz_age: "赛珍珠（Peral S. Buck）1892-1973",
      szz_introduce: `<span style='font-size: 1.2em; font-weight: 700'>Pearl S. Buck,</span> is the first American woman writer who won both the Pulitzer Prize and the Nobel Prize for Literature, and lived in Zhenjiang, Jiangsu Province for 18 years, and was called "a bridge between the civilizations of the East and the West". The Sai Pearl Cultural Park was built to commemorate Sai Pearl, including the former residence of Sai Pearl, the Sai Pearl Memorial Hall, the Earth Hanmo Calligraphy and Painting Hall, and the Sai Pearl Research Association.`,
      enterBtnInfo: "Enter",
      bottomInfo: [
        "Park Panorama",
        "Park Landscape",
        "Pearl S. Buck Former Residence",
        "Pearl S. Buck Memorial Hall",
        "Dadi Hanmo Painting Studio",
      ],
    },
    // 广场 - 5
    gc_body: {
      header: "Pearl S. Buck Cultural Park",
      info: `
      Pearl S. Buck Cultural Park is located at the foot of Deng Yun Mountain in Runzhou District, Zhenjiang City, Jiangsu Province, with a total area of 1.64 hectares, bordered by Runzhou Mountain Road in the east, Zhongshan West Road in the south and Deng Yun Mountain Road in the north. Opened in September 2017, the park is a theme cultural park built to commemorate the American female writer Pearl S. Buck, who won the Nobel Prize in Literature and lived in Zhenjiang for 18 years.
      <span style='color: red'>
        The park includes a square sculpture cultural landscape, Pearl House, the former residence of Pearl S. Buck, Pearl S. Buck Memorial Hall and other buildings, has become a new platform for the study of Sai, a new window open to the public, the new coordinates of urban development, a new place for public activities
      </span>
      `,
      // imgPath: "../imgs/szz-gystone.jpg",
      audioPath: "",
    },
    gc_szzSculpture: {
      header: "Seated statue of Pearl S. Buck",
      info: `
      The seated statue of Pearl S. Buck is carved from Chinese white jade and is located in the center of the circular square. She is looking into the distance and contemplating with her cheek, as if she is conceiving another great work. A pile of books is built up beside her, and the text on the "spine" shows that they are all literary works written and translated by Pearl S. Buck. She was a great writer who wrote a lot of books.
      `,
      imgPath: "",
      audioPath: "",
    },
    gc_ddzsSculpture: {
      header: "The Book of Earth sculpture",
      info: `Made of Chinese white jade, the literary masterpiece "The Earth", which commemorates Pearl S. Buck  Nobel Prize in Literature`,
      imgPath: "",
      audioPath: "",
    },
    gc_sxb: {
      header: "Homesickness Monument",
      info: `Where is my home?
      Where shall I find
      Ture freedom for
      The heart and mind…
      Where is the mulberry? Searching and searching
      I have found true freedom... ......
      The inscription in English is a collection of four poems written by Pearl Sai, from her poetry collection Love Words (Love's Trivial Words). The poet Sui Qian, a researcher at Tsinghua University, translated the four poems into five-word ancient style. Both the original English poems and the Chinese translation are engraved on the "Homesickness Monument".
      `,
      imgPath: "",
      audioPath: "",
    },
    gc_zzsw: {
      header: "Pearl Bookstore",
      info: `Pearl Bookstore is a building with a half-arc front and a flat red brick roof, and its hue and shape complement the landscape of the square. It assumes the social function of providing a place for some cultural and artistic activities and public welfare activities.`,
      imgPath: "",
      audioPath: "",
    },
    // 大地翰墨
    ddhm_body: {
      header: "Dadi Hanmo Painting Studio",
      info: "Dadi Hanmo Studio is a space for academic seminars and artistic exchanges for the majority of Sai research scholars, calligraphy and painting artists. From here, the first step towards the country and the world was taken by the 'Touring Exhibition of Poetry, Calligraphy and Painting on the Theme of Pearl S. Buck', which was successfully hosted by Jiangsu University Library.",
      audioPath: "",
      imgPath: "",
    },
    // 故居 - 4
    gj_body: {
      header: "Former Residence of Pearl S. Buck",
      info: `
      The former residence of Pearl S. Buck is located at the top of Dengyun Mountain, built in the early 20th century, is a small two-story building of green brick and wood, which has been well preserved. The former residence area of about 400 square meters, in 1990 by the city of Zhenjiang and the United States Tempe city jointly funded the repair, in 1992 in this establishment of Zhenjiang City Friendship Exchange Museum (later renamed the former residence of Pearl S. Buck), in 1993 was announced as a municipal cultural relics protection units, in 2002 was announced as a provincial cultural relics protection units. The furnishings in the residence were restored according to Pearl S. Buck's autobiography and other writings of her contemporaries.
      `,
      audioPath: "",
      imgPath: "",
    },
    gj_ddgg: {
      header: "Chandelier hooks",
      info: `
      This is a precious chandelier hook, the original architectural component of the former residence of Pearl S. Buck's. The hook is clearly casted with the word "1872" indicating the year, which proves that the residence was built long ago.
      `,
      audioPath: "",
      imgPath: "",
    },
    gj_sg: {
      header: "Pearl S. Buck's bookcase",
      info: `
      Most of the books on display in the shelves are from the former Zhenjiang Friendship Exchange Museum collection, and some of them were given to the residence by "Pearl S. Buck International", which are very valuable research materials.
      `,
      audioPath: "",
      imgPath: "",
    },
    // gj_sz: {
    //   header: "赛珍珠的书桌",
    //   info: `1922-1934年，赛珍珠主要居住于南京。在此期间，她完成了《东风·西风》《母亲》《大地》《儿子们》《分家》《异邦客》《战斗的天使》等作品。1938年，她由于“对中国农民生活史诗般的描述，这描述是真切而取材丰富的，以及她在传记方面的杰作”荣获诺贝尔文学奖。`,
    //   audioPath: "",
    //   imgPath: "",
    // },

    // 纪念馆 - 24
    jng_body: {
      header: "Pearl S. Buck Memorial Hall",
      info: `
      Pearl S. Buck Memorial Hall was built in 2008 and opened to the public, in 2017 with the Pearl S. Buck Cultural Park supporting, and the reconstruction of the new hall. The memorial hall is divided into two floors, construction area of 1000 square meters. Through the "hometown of Zhenjiang" "literary hall" "Chinese complex" "charity fraternity" "Pearl forever" five exhibition areas, reproduce the legendary experience, literary achievements, human bridge spirit, charity and Zhenjiang City to carry out the fruitful results of the study of the Pearl.
      `,
      audioPath: "",
      imgPath: "",
    },
    jng_szzxx: {
      header: "Bust of Pearl S. Buck",
      info: `
      The bust of Pearl S. Buck is 70cm high, 60cm wide and 50cm thick, carefully carved from high-quality Chinese white jade. Pearl S. Buck was a famous American literary scholar, philanthropist and social activist. She created more than 100 works in her life, and was one of the most prolific writers in the world. She was awarded the Nobel Prize for Literature in 1938, and her award-winning works include "The Earth Trilogy", "Mother", "The Foreigner", "East Wind - West Wind", etc.
      <br>
      Born in West Virginia on June 26, 1892, Pearl S. Buck came to China with her parents and lived in Zhenjiang for nearly 18 years, spending her childhood, teenage and young adult years. Pearl S. Buck treats Zhenjiang as her "Chinese hometown", while the people of Zhenjiang treat Pearl S. Buck as their own daughter. Zhenjiang is the cradle of Pearl S. Buck's growth and the starting point of her success, which is the pride of Zhenjiang. Pearl S. Buck's life actively carry out cultural exchanges between East and West, oppose racial discrimination, fight for equal rights for women, advocate the abolition of the Chinese Exclusion Act, support the Chinese people's war of resistance against Japan, was awarded the Chinese government "collar ribbon Caiyu Medal". In his later years, he founded the "Welcome Home" and engaged in charity work. She has served as the president of the Asia Society of America and the President of the National Writers Association. She has been selected by the American public as "the most influential woman in the world". On the occasion of the 60th anniversary of the founding of New China, Pearl S. Buck was nominated as one of the "Top Ten International Friends" by the Chinese People's Association for Friendship with Foreign Countries and other organizations.
      `,
      audioPath: "",
      imgPath: "",
    },
    // jng_ddzt: {
    //   header: "“大地之土”标本瓶",
    //   info: `这是镇江市赛珍珠文化考察团赴美国宾夕法尼亚州珀可思市青山农场，在赛珍珠故居附近取回的“大地之土”标本瓶。在没有阳光，被抽离了空气和水的标本瓶中，一株小小的绿苗居然破土而出，悄悄生长。它，仿佛告诉我们：赛珍珠回到中国故乡的心愿终于得以实现。`,
    //   audioPath: "",
    //   imgPath: "",
    // },
    jng_szzxjk: {
      header: "Pearl S. Buck School Registration Card",
      info: `
      This is a reproduction of a 1914 biography of Pearl S. Buck from the Macon Randolph College for Women, which clearly states that she is from "Zhenjiang, China.
      `,
      audioPath: "",
      imgPath: "",
    },
    jng_nksyl: {
      header: "Nixon Quotes",
      info: `
      This is the statement issued by U.S. President Richard Nixon and his wife on the occasion of the death of Pearl S. Buck: "A human bridge between Eastern and Western civilizations, a great artist, a sensitive and compassionate human being.
      `,
      audioPath: "",
      imgPath: "",
    },
    jng_szzyl: {
      header: "Pearl S. Buck Quotes",
      info: `
      These are two famous public quotes by Pearl S. Buck:</br>
      "Ah, my dear Chinese people! I say you are dear because I spent my entire childhood in China! Throughout my youth and as a woman, even until I had spent half my life, all my friends were Chinese! I present myself as your lifelong friend."</br>
      "The Chinese are an outstanding people in the history of mankind. Now they are desperately modernizing and industrializing, and you can be sure that they will complete their industrialization and modernization with lightning speed."
      `,
      audioPath: "",
      imgPath: "",
    },
    jng_szzjzxqpxb: {
      header: "Pearl S. Buck Family Genealogy Chart",
      info: `
      In 1921, Pearl S. Buck's mother died in Zhenjiang. In 1921, Pearl S. Buck's mother died in Zhenjiang. Pearl S. Buck, who was teaching in Nanjing, rushed back to Zhenjiang, and buried her mother in the West Overseas Chinese Cemetery near the kraft slope at the foot of Yuntai Mountain. So far, Pearl S. Buck has five relatives sleeping in Zhenjiang land: mother Kaili, two sisters, a brother, a brother.
      `,
      audioPath: "",
      imgPath: "",
    },
    // merge
    jng_xx: {
      header: "Portraits",
      info: `
      Portrait of Mr. Kung</br>
      This is a portrait of Mr. Kong, Pearl S. Buck's teacher, teaching Chinese painting. Mr. Kong was a scholar in the Guangxu period, he was well-read, kind-hearted, spoke Beijing "official language", had experienced the Boxer Rebellion movement in Beijing, and had a strong insight into society. Pearl S. Buck not only received a traditional private school education from Mr. Kong, but also learned the initial philosophy of life from him.</br>
      Portrait of Wang Ma</br>
      This is a portrait photo of Wang Ma, Pearl S. Buck's nanny. Wang's mother lived in Sai's house for 18 years and often told stories to Pearl S. Buck. The first memory of Wang's mother was "the face of a kind Chinese woman, not young, but she symbolized love and dignity to me. It was this Chinese nanny's index finger that I clutched as I took my first steps in life," said Pearl S. Buck. Wang's mother, who was also Pearl S. Buck's initiation teacher, would recount, in exaggerated tones, folk tales that had been passed down through the centuries in China. These stories touched Pearl S. Buck's young heart.</br>
      `,
      audioPath: "",
      imgPath: "",
    },

    // merge
    jng_szzbjc: {
      header: "Pearl S. Buck Award",
      info: `
      Swedish Academy of Arts and Letters Award Speech</br>
      The Swedish Academy of Letters' award statement reads: "The Swedish Academy awarded this year's Nobel Prize in Literature to Pearl S. Buck for her epic description of the life of the Chinese peasants, which is authentic and richly drawn, and for her outstanding achievement in biography. Pearl S. Buck's work paved the way for human compassion to cross distant racial barriers, providing an in-depth study and a great and vivid artistic presentation of the ideal model of humanity. For this reason, the Swedish Academy feels it is in harmony with Alfred Nobel's dreamy aspirations for the future."
      </br>
      Pearl S. Buck Award Speech</br>
      "Today, I would not be true to myself if I did not speak for the Chinese - even though I do so in a completely unofficial capacity - because the life of the Chinese has also been my life for so many years, and really, their lives will surely always be a part of mine.</br>
      It is the people who have always given me the greatest joy and interest. When I lived among the Chinese people, it was the Chinese people who gave me that. People ask me what kind of people they are, and I can't answer. They are neither this nor that, they are people. I describe them as if they were my own family. I was too close to them, I lived too closely with them.</br>
      I belong to the United States, but it is precisely the Chinese novel, not the American novel, that has defined my writing success. My earliest knowledge of fiction, about how to narrate stories and how to write them, was learned in China. Not to acknowledge that today would be, in my case, ungrateful.</br>
      `,
      audioPath: "",
      imgPath: "",
    },

    //merge
    jng_books: {
      header: "Books",
      info: `
      Today and Forever</br>
      This book contains 13 stories. Among them, "The Partisan's Mother" depicts the story of a housewife who leads her fighters in attacking the Japanese and achieving victory.</br>
      The Dragon Seed</br>
      This book reflects on the tremendous devastation that the Japanese invasion brought to rural China, while exposing the American people to the inspiring stories of the Chinese and Asian allies' resistance to the Japanese.</br>
      The Promise</br>
      This book tells the tragic story of the Chinese Expeditionary Force's failed collaboration with the British in the battlefield of Burma.</br>
      The Patriot</br>
      Set against the backdrop of city life from 1926-1938, this book depicts the story before and after the outbreak of the war.</br>
      The Story of the Yunnan-Burma Highway</br>
      This book reveals to the world the miracle of Chinese old people, orphans, women and children who paved roads to fight against the Japanese invaders.</br>
      China Sky</br>
      This book tells the story of the Chinese guerrillas' tenacious and unyielding efforts to stop the Japanese invaders.</br>
        `,
      audioPath: "",
      imgPath: "",
    },

    jng_zgwrzp: {
      header: "Photos of Chinese Literati",
      info: `
      This is a wall of photos of Chinese literary figures who were closely associated with Pearl S. Buck. In November 1945, Guo Moruo, Lao She, Ye Shengtao, Cao Jinghua, Yang Hanshang, Jin Yi, Feng Nechao, Chen Baishen, Mei Lin, Hong Shen, Mao Dun, Sun Fuyuan, Hu Feng, Ma Yanxiang, Song Zhiyi, Feng Xuefeng, Wu Zuguang, and other famous Chinese writers wrote letters to Pearl Sai and all American writers, hoping that Pearl Sai and all American writers could influence the U.S. government to stop the war. The famous Chinese writers, including Feng Xuefeng and Wu Zuguang, wrote to Pearl S. Buck and the All-American Writers, hoping that Pearl S. Buck and the All-American Writers would intervene to influence the American government to stop the outbreak of civil war in China.
      `,
      audioPath: "",
      imgPath: "",
    },
    jng_szzcssy: {
      header: "Pearl S. Buck Philanthropy",
      info: "An ambassador of love and charity, she and her husband adopted seven orphans, and in 1949, she founded the Welcome Home to help adopt abandoned children of Asian descent from the U.S. Over the past 50 years, she has adopted more than 5,000 orphans, half of whom are from Asia. She was awarded the title of 'Honorary Citizen of Seoul' and was met by the President of Korea for her efforts and financial resources to help Korean orphans. In her later years, Pearl S. Buck donated all her wealth to charity and established the Pearl S. Buck Foundation in 1964. She was awarded the 'Special Contribution to Humanity Award' in 1964 for her outstanding contribution to charity. ",
      audioPath: "",
      imgPath: "",
    },
    jng_szzyjcg: {
      header: "Pearl S. Buck Research Results",
      info: `
      Pearl S. Buck's life in literature, Chinese and Western exchanges, racial equality, women's rights, child protection and many other aspects have left a valuable asset to future generations. From the 1970s, the city that a group of research scholars from the collection of historical materials to start, objective and fair evaluation of Pearl S. Buck. Here is a part of the results of the study of the Pearl S. Buck. Since the establishment of Zhenjiang City Pearl S. Buck Research Association in 2003, the editor published 'Pearl S. Buck Memorial Anthology' 6 series. 2021 December, by the Zhenjiang Pearl S. Buck Research Association President Professor Lu Zhangping edited the first full English Sai research collection 'China Pearl S. Buck Anthology' officially published, for China Sai research excellent results to international first.
      `,
      audioPath: "",
      imgPath: "",
    },
    jng_zgysdgjyr: {
      header: "China Edge - Top 10 International Friends",
      info: `
      In 2009, on the occasion of the 60th anniversary of the founding of the People's Republic of China, China Radio International, the Chinese People's Association for Friendship with Foreign Countries and the State Administration of Foreign Experts co-hosted the "Top Ten International Friends" contest, which selected the foreign friends who made the greatest contribution to China, were the most loved by the Chinese people or had the deepest ties with China during the century before and after the founding of New China. The selection of foreign friends who made the greatest contribution to China, were the most loved by the Chinese people or had the deepest ties with China during the century before and after the founding of New China. Pearl S. Buck was nominated for the "Top Ten International Friends" award.
      `,
      audioPath: "",
      imgPath: "",
    },

    // merge
    jng_qhtlh: {
      header: "Items from the former residence",
      info: `
      Lacquer box</br>
      Pearl S. Buck had asked to accompany Nixon to China, but was unable to do so. After Nixon's visit to China, he sent his daughter, Julie, to present Pearl S. Buck with this set of five small and delicate lacquer boxes brought back from China. The lacquer boxes displayed here were copied by Yangzhou Lacquerware Factory.</br>
      Tilting pot</br>
      Pearl S. Buck brought a Zisha Tilang pot from Zhenjiang to the United States. This pot has been with Pearl S. Buck for her whole life and holds her deep thoughts for Zhenjiang. The pot here is a replica of the Tilang pot from the former residence of Pearl S. Buck. The restored space in the Castle Peak residence gives us an immersive experience of Pearl's life in America and her deep longing for her hometown in China. The Chinese culture had penetrated into her bones and influenced her whole life.</br>
        `,
      imgPath: "",
      audioPath: "",
    },

    // jng_qh: {
    //   header: "漆盒",
    //   info: "赛珍珠曾要求随尼克松访华，但未能成行。尼克松回国后，特派女儿朱莉将这套从中国带回的五只小巧精致的漆盒赠送给赛珍珠。这里陈设的漆盒由扬州漆器厂仿制。",
    //   imgPath: "",
    //   audioPath: "",
    // },
    // jng_tlh: {
    //   header: "提梁壶",
    //   info: "赛珍珠将一把提梁壶从镇江带到美国。这把壶与赛珍珠终身相伴，寄托着她对镇江的深切思念。这里陈设的壶是根据赛珍珠青山故居的提梁壶仿制的。复原的赛珍珠青山故居让我们身临其境地感受到赛珍珠当年在美国的生活，以及她对中国故乡深深的眷念。中国文化已经深入她的骨髓，影响了她的一生。",
    //   audioPath: "",
    //   imgPath: "",
    // },
    jng_jsy: {
      header: "Conclusion",
      info: `
      Pearl S. Buck spent her life spreading cross-cultural understanding to people in both the Eastern and Western worlds. Her thoughts and feelings still have universal significance to this day, such as the spirit of upholding justice and opposing aggression; the spirit of compassion and kindness, charity and love; the spirit of peace and harmony, harmony and difference; the spirit of East-West exchange and mutual integration, especially she has a broad vision of one earth and one world, and does not have any prejudice against big and small countries, East and West, race and color, men and women, rich and poor, and spends her life The noble and fraternal spirit of love across borders, nationalities and races is even more relevant today. History has proven that her visionary spirit has a permanent penetrating power in time and space.</br>
      The name is like the person, and the pearl will always be as bright and glittering as a pearl.
      `,
      audioPath: "",
      imgPath: "",
    },
  },
};

export default data;
