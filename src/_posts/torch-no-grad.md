---
title: Torch.no_grad()影响MSE损失
date: 2019-01-28 14:11:00
tags:
- 深度学习
- PyTorch
---

## 相关描述
[https://discuss.pytorch.org/t/torch-no-grad-affecting-outputs-loss/28595/3](https://discuss.pytorch.org/t/torch-no-grad-affecting-outputs-loss/28595/3)

今天在训练网络的时候，发现mseloss在train和test时相差了好几个量级，后来发现是因为`mseloss(input,target)`，并不是对称的，input的应该是网络的输出，而targte是目标，如果颠倒过来，计算就是错的。