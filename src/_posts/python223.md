---
title: 正则表达式转换python2的print为python3风格
date: 2018-10-17 15:27:00
tags:
- Python
---

直接查找 `print ([^\n\(]*)`替换为 `print($1)`

