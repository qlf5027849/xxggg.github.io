(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{515:function(t,e,a){"use strict";a.r(e);var v=a(4),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("【感觉没写好，晚些重新调整下】")]),t._v(" "),a("h1",{attrs:{id:"删除之前commit的提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除之前commit的提交"}},[t._v("#")]),t._v(" 删除之前commit的提交")]),t._v(" "),a("blockquote",[a("p",[t._v("真是一波未平 一波又起呀！")])]),t._v(" "),a("p",[t._v("如果你之前push提交的时候，文件夹里面有泄露隐私的东西，就算你现在把文件删除重新push覆盖"),a("br"),t._v("\n一样可以从GitHub的历史日志中找到这个文件。 就hin不安全。。。")]),t._v(" "),a("ul",[a("li",[t._v("而办法除了删除这个仓库，重新换一个仓库。")]),t._v(" "),a("li",[t._v("还有一个办法就删除对应commit的提交日志。")])]),t._v(" "),a("blockquote",[a("p",[t._v("或者你要修改/删除之前写错的commit")])]),t._v(" "),a("p",[t._v("所以！！！ 综合了广大人民的智慧结晶！"),a("br"),t._v("\n我！"),a("br"),t._v("\n整理了以下资料！（我自己的实操）")]),t._v(" "),a("h2",{attrs:{id:"git-rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase"}},[t._v("#")]),t._v(" git rebase")]),t._v(" "),a("p",[t._v("没错 像我这样的小白 用git最多的就是"),a("br"),t._v(" "),a("code",[t._v("git add .")]),a("br"),t._v(" "),a("code",[t._v("git commit -m 'xx'")]),a("br"),t._v(" "),a("code",[t._v("git push")]),a("br"),t._v(" "),a("code",[t._v("git pull")])]),t._v(" "),a("p",[a("code",[t._v("git rebase")]),t._v(" 是什么 没听过， 但是字面上的意思 貌似是“重定基础”?")]),t._v(" "),a("p",[t._v("首先 在终端或者vs code编辑器里的终端👇")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("git rebase -i <你要删除的那个commit的前一个的id>\n// 注意 是'前一个' 以它为基础\n")])])]),a("blockquote",[a("p",[t._v("这个历史日志id可以在GitHub的项目里面找到"),a("br"),t._v("\n也可以"),a("code",[t._v("git log")]),t._v("打开看到。"),a("strong",[t._v("退出git log 是按 'Q'")]),a("br"),t._v("\n可以简写 - 只写前7位")])]),t._v(" "),a("p",[t._v("然后它会进入一个类似vim的界面（说实话 我还没用过vim）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("pick 9d3ea6c test3\npick 4b33d2a test4\npick 6a9f5ff ???\npick 2a42ccc git手册\npick 8461cdd 删除日志\n")])])]),a("p",[t._v("不知道啥代号 | 历史日志id |  commit的信息")]),t._v(" "),a("blockquote",[a("p",[t._v("类似上面👆这样")])]),t._v(" "),a("p",[t._v("然后我们根据它里面的提示 去修改前面的这个pick")]),t._v(" "),a("p",[t._v("那问题就来了 怎么修改??!! 像我没有用过vim的童鞋来说"),a("br"),t._v("\ngoogle了一下  然鹅! 我就在这里总结起来")]),t._v(" "),a("p",[t._v("就是按'i' 对 你可以用英文输入法 或者开启大写来按 'i\""),a("br"),t._v("\n进入所谓的'insert模式' （他会显示什么<-插入->）")]),t._v(" "),a("p",[t._v("然后方向键到pick 这里 把 pick改成drop👇")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("pick 9d3ea6c test3\ndrop 4b33d2a test4\npick 6a9f5ff ???\npick 2a42ccc git手册\npick 8461cdd 删除日志\n")])])]),a("p",[t._v("或者根据它下面的提示简写成 d 也是可以的")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("pick 9d3ea6c test3\nd 4b33d2a test4\npick 6a9f5ff ???\npick 2a42ccc git手册\npick 8461cdd 删除日志\n")])])]),a("p",[a("strong",[t._v('然后按 "ESC" 退出到命令行以后')]),a("br"),t._v(" "),a("strong",[t._v("在命令行直接输入"),a("code",[t._v(":wq")])]),a("br"),t._v("\nw代表保存 q代表退出。(当然还有其他的,可以自行查阅)"),a("br"),t._v('\n注意 输入的时候要前面的 " : "也是要输入的。(我就是直接在查的时候,别人没有说明 我就只输入了 wq 然后一直不行)。(没办法我没用过vim 不是怪人家 嘟嘟嘴~#3#)')]),t._v(" "),a("p",[t._v("这样我们本地仓库的历史日志就修改好了,不过可能需要处理一下合并的问题\n所以我这里没有直接用"),a("code",[t._v("drop")]),t._v("  我是根据提示用了"),a("code",[t._v("fixup")]),t._v(" 就是合并前一个commit 并且删除此历史日志 也就是")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("pick 9d3ea6c test3\nf 3b33d2a test4\npick 6a9f5ff ???\npick 2a42ccc git手册\npick 8461cdd 删除日志\n")])])]),a("blockquote",[a("p",[t._v("👆这样的操作")])]),t._v(" "),a("p",[t._v("那就不用处理合并的问题了"),a("br"),t._v("\ntest4的内容会合并到test3 而test4这个commit会消失")]),t._v(" "),a("h2",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),a("p",[t._v("我们可以本地 git log 看一下本地的仓库历史日志 。("),a("strong",[t._v("退出git log 是按 'Q'")]),t._v(")"),a("br"),t._v("\n然后push上我们的github")]),t._v(" "),a("p",[t._v("这里push也是有技巧的")]),t._v(" "),a("p",[t._v("需要"),a("code",[t._v("git push -f")]),a("br"),t._v("\n就是 - 强推")]),t._v(" "),a("p",[t._v("可能它还需要你选一下分支 因为它还存在rebase中")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("git push origin <你分支的名字> --force\n")])])]),a("p",[t._v("如果还在rebase中 貌似要退出一下")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("git rebase --abort\n")])])]),a("p",[t._v("或者")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("git rebase --skip\n")])])]),a("p",[t._v("或者")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("git rebase --continue\n")])])]),a("p",[t._v("戳一下就出来了 en！o(￣▽￣)ｄ")]),t._v(" "),a("h2",{attrs:{id:"参考文章👇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章👇"}},[t._v("#")]),t._v(" 参考文章👇")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_37960603/article/details/82814939?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文章1"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/384a945f6e7e",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文章2"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/faithmy509/article/details/81271436?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.channel_param",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文章3"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=_.exports}}]);