var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "YAN",
    sex: "男",
    age: "26",
    phone: "",
    email: "yyt2017@aliyun.com",
    address: "chengdu",
    qq: "",
    log: "IBike",
    excpect_work: "运维/技术支持",


    // /*在这里配置首页的座右铭集合*/
    // motto: [
    //     "当身体达到极限，意志会带你杀出重围。"
    // ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "当身体达到极限，意志会带你杀出重围。<br>" 
             ,


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>你好！我叫晏远庭，性别男，四川人。我期望的工作岗位是运维工程师。</p>" +
        "<p>我有着充满激情的工作态度，团队协同作战能力强，擅于发现并解决问题。我的执行力强、责任感高、集体荣誉感强、敢于担当。</p>" +
        "<p>十分期待与您的联系!</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["linux", 80, "red"],
        ["数据库", 60, "blue"],
        ["Docker", 75, "#1abc9c"],
        ["Kubernets", 60, "rgba(0,0,0)"],
        ["Shell脚本", 80, "yellow"],
        ["CICD", 70, "pink"],
        ["zabbix",60,"green"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>熟悉centos系列系统安装与使用，接触并使用过国产化操作系统，如银河麒麟(Kylin)、统信(UOS)、欧拉(OpenEuler)。</li>" +
        "     <li>熟悉DevOps工具的使用，如Jenkins、Ansible、Salt-statck。</li>" +
        "     <li>熟练Shell脚本编写，能够使用脚本完成日志分析、产品自动化部署等日常工作。</li>" +
        "     <li>熟悉docker及k8s的部署、使用、故障排查，熟悉Docker-compose容器编排。</li>" +
        "     <li>熟悉MySQL、Redis、StartRock等存储服务，熟悉其集群部署和维护。</li>" +
        "     <li>熟悉常见的中间件的部署和使用，如Nginx、Tomcat、Nacos等。</li>" +
        "     <li>熟悉Zabbix、Grafana、Loki等监控工具的部署和使用。</li>" +
        "     <li>熟悉常见的linux服务的配置及使用，如keepalived、rsync、nfs、ntp等。</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/2.png", "", "服务器密码修改工具", "基于python flask + saltapi 开发的修改服务器密码工具 "],
        ["./images/1.png", "", "数据库备份巡检工具", "基于python flask + bootstrap 开发的数据库备份文件上报检查工具"]
        // ["https://pic3.zhimg.com/80/v2-d9766956d5c85c2780e4c5008fd946ca_1440w.jpg", "https://github.com/happysnaker/StudentsManageSystem", "学生管理系统", "C语言+AVL树+多重双向表实现"]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["2021/7 — 2022/4", "<br>优刻得科技股份有限公司",
            "<p><strong>技术支持工程师</strong></p>" +
            "<p>负责响应客户提交的工单，负责故障的响应升级，日常巡检。</p>" 
        ],

        ["2022/5 — 至今", "<br>成都中科大旗软件股份有限公司",
            "<p><strong>运维工程师</strong></p>" +
            "<p>负责SaaS产品的部署上线、迭代升级，确保系统稳定运行；</p>"+

            "<p>负责项目的前期资源评估，资源申请；</p>"+

            "<p>负责处理项目基础环境搭建、产品部署、服务器监控等工作；</p>"+

            "<p>负责配合项目上对漏洞扫描，基线检查后的修复工作；</p>"+

            "<p>负责项目资料整理，输出项目系统部署方案及部署报告等文档；</p>"+

            "<p>负责公司运维工具维护和运维工具开发；</p>"+

            "<p>负责项目数据库备份巡检，备份文件可用性测试工作；</p>"+

            "<p>负责Kubernetes集群的部署、维护和监控；</p>"
        ]
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    // others: [
    //     ["2021-04-28", "第十二届蓝桥杯大学生A组省三等奖", "大一下学期，我参与第十二届蓝桥杯大学生A组，然比赛一改以往暴力题，半数以上DP，仅取得省级三等奖。"],
    //     ["2021-04-24", "第六届团队程序设计天梯赛个人国家三等奖", "大一下学期，我通过面向全年级的选拔，获得入队名额，在个人赛中获得全国三等奖。"],
    //     ["2021-04-24", "第六届团队程序设计天梯赛团体国家二等奖", "大一下学期，我通过面向全年级的选拔，获得入队名额，跟随团队取得团体国家二等奖的成绩。"],
    //     ["2020-11-14", "2020级南昌大学程序设计正式赛三等奖", "大一上学期，我参与校举办的面向全校程序设计大赛并获得三等奖，"]
    // ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     * https://github.com/happysnaker/Gobang
     */
    icon: [
        ["./svg/LeetCode.svg", "https://leetcode.cn/u/ecstatic-i3anachvyi/", "我的力扣主页"],
        ["./svg/home.svg", "https://www.yytlinux.top", "我的个人博客"]

    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/3.jpg",
        "./images/2.jpg",
        // "./images/work-bk.png",
        // "./images/4.jpg"
    ]

}
