---
title: opencv构建高斯卷积核
date: 2018-03-25 08:22:34
tags:
- 计算机视觉
- OpenCV
---

<!-- more -->

关于**高斯核函数**可以参见阮一峰老师的日志：[高斯模糊的算法](http://www.ruanyifeng.com/blog/2012/11/gaussian_blur.html)

如何使用高斯核进行**高斯模糊**可以参见我的另一篇日志：[opencv构建自定义卷积](https://hypercube.top/2018/05/16/filter/)

```C++
Mat Gaussian_kernal(int kernel_size, int sigma)
{
    const double PI = 3.14159265358979323846;
    int m = kernel_size / 2;
    Mat kernel(kernel_size, kernel_size, CV_32FC1);
    float s = 2 * sigma*sigma;
    for (int i = 0; i < kernel_size; i++)
    {
        for (int j = 0; j < kernel_size; j++)
        {
            int x = i - m, y=j - m;
            kernel.ptr<float>(i)[j] = exp(-(x*x + y*y) / s) / (PI*s);
        }
    }
    return kernel;
}
```

