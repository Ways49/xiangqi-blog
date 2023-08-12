---
title: 知识储备
description: 知识储备
---

## 精心准备

在我们开始走上研发象棋算法的道路之前，需要先进行一些很基础的铺垫，希望面前的读者能够预先具备。

### 预先掌握：语言和数据结构

首先，你需要学习一门运行效率很高的语言，不要害怕困难！如果从一开始就选择“蜗牛”语言，那么，你将会在开发的中后期，为引擎那糟糕的计算效率而感到无比的烦恼和头疼。

其次，你需要掌握数据结构方面的知识（尽管在博弈程序中，我们看不到它的“形式”，但你能看到它的“灵魂”）

比如说，树结构。

一棵大树，每一片叶子都代表了一种可能的情况，它们被庞大而繁复的枝干统摄起来，这便是一棵计算机世界中的树。我们可以在这棵树上寻找，企图在受限的目光下，找到合适的位置，并取得鲜美的果实。

类似的结构，在数据结构的教学过程中，往往采用一些很“低效”的方式来存储，比如：先建立一栋由数据构成的完整的大楼，用门牌号来检索目标房间的位置，取出房间中的物品并判断后，最后再进行下一步的查找工作。

虽然这样有点笨拙，但总归是一个办法，而且是最基础的，你必须首先掌握它，否则一切都无从开始。

### 数据结构的“灵魂”

之所以说，数据结构的“教学版本”，只是它的“形式”，而不是它的“灵魂”。是因为，在高性能程序的设计中，我们的计算资源，根本就不允许我们按部就班的那样搜索和计算。

[1] 空间不足 -> 尤其是内存，并不是无限的，即便是在内存白菜价的今天。

[2] 效率不足 -> 或者是博弈程序进行了很多冗余，也就是完全没必要的计算，或者是对整个计算系统的利用程度有限。这在某种意义上讲，闲置，也是一种极大的浪费。

因此，真实的博弈程序，并不是先生成再查找，而是边生成，边计算，然后撤销回到上一个分支状态。期间还会调整搜索的顺序，以期待更好地找到果子。又或者记录以前找到过果子的位置，下次就可以直接去“果园”摘了。

这样就可以只用维护一点点，完全不必重复的数据，或者很多但非常有用的数据，而不必因为分支的不断高速开辟，而出现“数据爆炸”且是无效数据的现象。毕竟，哪怕你开辟之后再销毁，那也很慢了，慢就等于死亡，这在博弈程序中最是如此。

### 一点启发

有了一门高效的语言和相关的数据结构技知识，当然，这不算是正式的讲解，只是攫取了一个后文中的某个例子，来提醒读者一句，你需要用心的关注每一处程序代码，无数的细节，哪怕只是一个static的静态成员符号，都能带来意想不到的好处。

::: tip
  先来看看，如果判断在一个“迷你”象棋棋盘中，一只马的目标位置是超出棋盘界限的
:::

{
  1，0，0，0，1，
  0，0，M，0，0，
  1，0，0，0，1，
  0，1，0，1，0，
  0，0，0，0，0，
}

上面的迷你棋盘，只有5x5的大小，但足以说明问题。马就是棋盘中的M，1表示它能走到的位置。

其实，众所周知，马踏八方，它在没有阻碍的情况下，可以有8个位置，但图中只有6个，因为另外两个超出棋盘的边界了。

但是，如果要在程序中判断它是否超出棋盘界限，用这样的一个棋盘就很麻烦，你要判断它的新位置是否超出数组大小，如果没有超出，又需要判断它是否满足马的走法要求。

::: tip
  换一种思路->新的棋盘
:::

{    
  F，F，F，F，F，F，F，F，F，
  F，F，F，F，F，F，F，F，F，
  F，F，1，0，0，0，1，F，F，
  F，F，0，0，M，0，0，F，F，
  F，F，1，0，0，0，1，F，F，
  F，F，0，1，0，1，0，F，F，
  F，F，F，F，F，F，F，F，F，
  F，F，F，F，F，F，F，F，F，
}

我们可以给棋盘加两圈，这样当马的新位置处，取值为F的时候，它就是不可行的！

::: tip
  新的棋盘->一点优化
:::

既然，我们可以用这样的方式，判断走法是否越界，那么是否可以用同样的方式判断别的事情呢？

比如，单独做一个数组，并把老将所在的九宫，标记为F，则可以判断老将的走法是否初步正确。

比如，单独把棋盘的底线标记为F，就可以判断一个炮是否已经沉底。

比如，在数组的每个位置写入一个分数，就可以粗略的判断，一个棋子在此处的价值。

判断兵是否过河？

走法是否符合特定的步长要求？例如，马二进三，在16x16的棋盘中，可以认为，目标位置 - 初始位置 = -16 * 2 - 1

这些例子，无疑说明了一个要点，很多看似简单的问题，哪怕只是一个很小的部分，小到不起眼的一句代码，一个变量，都可以引申出很多有趣的技巧和思路，并且，研究它们并不是“耍花样”，或者看起来很“Low”，而是蕴藏着巨大的价值，只不过很多人，头仰得那么高，看不到罢了。

### 持续且艰苦的学习

其实根据笔者的经验来看，不说开发什么，就是任何一件事情，想做得很好很好，没有哪怕一件，是轻松的。不仅是困难重重的，而且是无比让人失望的，因为你会遇到各种各样莫名其妙的失败，但最后的结果却依旧糟糕透顶。

其实一个新想法被完美验证的成功率不足十分之一，这很正常。

一个技术路线，就足以研究至少三年的时间，如果你不是真正的热爱这件事情，并不能够持之以恒，不畏艰险的走下去，劝退。果断点，总比犹豫要好，要么现在就放弃，要么就在认真决策的基础上，有点恒心和毅力。