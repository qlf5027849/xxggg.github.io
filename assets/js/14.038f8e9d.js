(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{493:function(e,t,a){"use strict";a.r(t);var r=a(4),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"删除之前commit的提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除之前commit的提交"}},[e._v("#")]),e._v(" 删除之前commit的提交")]),e._v(" "),a("blockquote",[a("p",[e._v("真是一波未平 一波又起呀！")])]),e._v(" "),a("p",[e._v("如果你之前push提交的时候，文件夹里面有泄露隐私的东西，就算你现在把文件删除重新push覆盖"),a("br"),e._v("\n一样可以从GitHub的历史日志中找到这个文件。 就hin不安全。。。")]),e._v(" "),a("ul",[a("li",[e._v("而办法除了删除这个仓库，重新换一个仓库。")]),e._v(" "),a("li",[e._v("还有一个办法就删除对应commit的提交日志。")])]),e._v(" "),a("blockquote",[a("p",[e._v("或者你要修改/删除之前写错的commit")])]),e._v(" "),a("p",[e._v("所以！！！ 综合了广大人民的智慧结晶！"),a("br"),e._v("\n我！"),a("br"),e._v("\n整理了以下资料！（我自己的实操）")]),e._v(" "),a("h2",{attrs:{id:"git-rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase"}},[e._v("#")]),e._v(" git rebase")]),e._v(" "),a("p",[e._v("没错 像我这样的小白 用git最多的就是"),a("br"),e._v(" "),a("code",[e._v("git add .")]),a("br"),e._v(" "),a("code",[e._v("git commit -m 'xx'")]),a("br"),e._v(" "),a("code",[e._v("git push")]),a("br"),e._v(" "),a("code",[e._v("git pull")])]),e._v(" "),a("p",[a("code",[e._v("git rebase")]),e._v(" 是什么 没听过， 但是字面上的意思 貌似是“重定基础”?")]),e._v(" "),a("p",[e._v("首先 在终端或者vs code编辑器里的终端👇")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("git rebase -i <你要删除的那个commit的前一个的id>\n// 注意 是'前一个' 以它为基础\n")])])]),a("blockquote",[a("p",[e._v("这个历史日志id可以在GitHub的项目里面找到"),a("br"),e._v("\n也可以"),a("code",[e._v("git log")]),e._v("打开看到。"),a("strong",[e._v("退出git log 是按 'Q'")]),a("br"),e._v("\n可以简写 - 只写前7位")])]),e._v(" "),a("p",[e._v("然后它会进入一个类似vim的界面（说实话 我还没用过vim）")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("pick 9d3ea6c test3\npick 4b33d2a test4\npick 6a9f5ff ???\npick 2a42ccc git手册\npick 8461cdd 删除日志\n")])])]),a("p",[e._v("不知道啥代号 | 历史日志id |  commit的信息")]),e._v(" "),a("blockquote",[a("p",[e._v("类似上面👆这样")])]),e._v(" "),a("p",[e._v("然后我们根据它里面的提示 去修改前面的这个pick")]),e._v(" "),a("p",[e._v("那问题就来了 怎么修改??!! 像我没有用过vim的童鞋来说"),a("br"),e._v("\ngoogle了一下  然鹅! 我就在这里总结起来")]),e._v(" "),a("p",[e._v("就是按'i' 对 你可以用英文输入法 或者开启大写来按 'i\""),a("br"),e._v("\n进入所谓的'insert模式' （他会显示什么<-插入->）")]),e._v(" "),a("p",[e._v("然后方向键到pick 这里 把 pick改成drop👇")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("pick 9d3ea6c test3\ndrop 4b33d2a test4\npick 6a9f5ff ???\npick 2a42ccc git手册\npick 8461cdd 删除日志\n")])])]),a("p",[e._v("或者根据它下面的提示简写成 d 也是可以的")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("pick 9d3ea6c test3\nd 4b33d2a test4\npick 6a9f5ff ???\npick 2a42ccc git手册\npick 8461cdd 删除日志\n")])])]),a("p",[a("strong",[e._v('然后按 "ESC" 退出到命令行以后')]),a("br"),e._v(" "),a("strong",[e._v("在命令行直接输入"),a("code",[e._v(":wq")])]),a("br"),e._v("\nw代表保存 q代表退出。(当然还有其他的,可以自行查阅)"),a("br"),e._v('\n注意 输入的时候要前面的 " : "也是要输入的。(我就是直接在查的时候,别人没有说明 我就只输入了 wq 然后一直不行)。(没办法我没用过vim 不是怪人家 嘟嘟嘴~#3#)')]),e._v(" "),a("p",[e._v("这样我们本地仓库的历史日志就修改好了,不过可能需要处理一下合并的问题\n所以我这里没有直接用"),a("code",[e._v("drop")]),e._v("  我是根据提示用了"),a("code",[e._v("fixup")]),e._v(" 就是合并前一个commit 并且删除此历史日志 也就是")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("pick 9d3ea6c test3\nf 3b33d2a test4\npick 6a9f5ff ???\npick 2a42ccc git手册\npick 8461cdd 删除日志\n")])])]),a("blockquote",[a("p",[e._v("👆这样的操作")])]),e._v(" "),a("p",[e._v("那就不用处理合并的问题了"),a("br"),e._v("\ntest4的内容会合并到test3 而test4这个commit会消失")]),e._v(" "),a("h2",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[e._v("#")]),e._v(" 最后")]),e._v(" "),a("p",[e._v("我们可以本地 git log 看一下本地的仓库历史日志 。("),a("strong",[e._v("退出git log 是按 'Q'")]),e._v(")"),a("br"),e._v("\n然后push上我们的github")]),e._v(" "),a("p",[e._v("这里push也是有技巧的")]),e._v(" "),a("p",[e._v("需要"),a("code",[e._v("git push -f")]),a("br"),e._v("\n就是 - 强推")]),e._v(" "),a("p",[e._v("可能它还需要你选一下分支 因为它还存在rebase中")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("git push origin <你分支的名字> --force\n")])])]),a("p",[e._v("如果还在rebase中 貌似要退出一下")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("git rebase --abort\n")])])]),a("p",[e._v("或者")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("git rebase --skip\n")])])]),a("p",[e._v("或者")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("git rebase --continue\n")])])]),a("p",[e._v("戳一下就出来了 en！o(￣▽￣)ｄ")]),e._v(" "),a("h2",{attrs:{id:"最后的最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后的最后"}},[e._v("#")]),e._v(" 最后的最后")]),e._v(" "),a("p",[e._v("感谢您看到这里 希望能帮到您"),a("br"),e._v("\n文中如果出现什么错误，请见谅（我是小白，就记录一下自己的折腾过程）。并反馈给我 #3#")]),e._v(" "),a("p",[e._v("我的GitHub："),a("a",{attrs:{href:"https://github.com/XXGGG",target:"_blank",rel:"noopener noreferrer"}},[e._v("谢夏戈-XXGGG"),a("OutboundLink")],1),a("br"),e._v("\n我的博客："),a("a",{attrs:{href:"https://github.com/XXGGG",target:"_blank",rel:"noopener noreferrer"}},[e._v("谢夏戈的博客（GitHubPages）"),a("OutboundLink")],1),e._v(" ，"),a("a",{attrs:{href:"https://xxggg.gitee.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("谢夏戈的博客（GiteePages）"),a("OutboundLink")],1)]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("参考文章：\n"),a("a",{attrs:{href:"https://blog.csdn.net/qq_37960603/article/details/82814939?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.csdn.net/qq_37960603/article/details/82814939?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/384a945f6e7e",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.jianshu.com/p/384a945f6e7e"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/faithmy509/article/details/81271436?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.csdn.net/faithmy509/article/details/81271436?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);