---
title: 使用OpenCV实现自定义卷积
date: 2017-03-25 08:29:17
tags:
- 计算机视觉
- OpenCV
---

对图像进行卷积是图像处理的基本操作，最近在研究图像滤波，经常要用到自定义卷积，所以实现了一下
<!-- more -->
```C++
#include "opencv2/imgproc/imgproc.hpp"
#include "opencv2/highgui/highgui.hpp"

using namespace cv;

Mat get_blur_kernel(int kernel_size);//获得归一化滤波的卷积核

int main(int argc, char ** argv)
{
    Mat src, dst;
    Point anchor;
    double delta;
    int ddepth;
    int kernel_size = 5;
    // 生成一个掩模核 大小为kernel_size*kernel_size,这里我们用归一化块滤波的卷积核做示例
    Mat kernel = get_blur_kernel(kernel_size);
    // 载入一张图片
    src = imread("a.jpg");
    if (!src.data)
        return -1;

    // 创建窗口
    imshow("before",src);
    waitKey(500);
    // 初始化滤波器参数
    anchor = Point(-1, -1);
    delta = 0;
    ddepth = -1;
    //将核设置好之后，使用函数 filter2D 就可以生成滤波器：
    filter2D(src, dst, ddepth, kernel, anchor, delta, BORDER_DEFAULT);

    imshow("after", dst);
    waitKey(0);
    return 0;
}

//生成归一化滤波的卷积核,通过对kernel.ptr(i)[j]的操作来进行
Mat get_blur_kernel(int kernel_size)
{
    Mat kernel = (Mat_<float>(kernel_size, kernel_size));
    for (int i = 0; i < kernel_size; i++)
    {
        for (int j = 0; j < kernel_size; j++)
            kernel.ptr<float>(i)[j] = 1.0 / (kernel_size*kernel_size);
    }
    return kernel;
}
```

卷积核`kernel`其实也是一个`Mat`对象，我们可以通过`kernel.ptr(i)[j]`实现对矩阵元素的直接操作，将核设置好之后，使用OpenCV提供的函数 `filter2D` 就可以生成滤波器：

```c++
filter2D(src, dst, ddepth, kernel, anchor, delta, BORDER_DEFAULT);
```
其中各参数含义如下：
```CPP
src : 源图像
dst : 目标图像
ddepth : dst 的深度。若为负值（如 - 1 ），则表示其深度与源图像相等。
kernel : 用来遍历图像的核
anchor : 核的锚点的相对位置，其中心点默认为(-1, -1) 。
delta : 在卷积过程中，该值会加到每个像素上。默认情况下，这个值为 0 。
BORDER_DEFAULT : 这里我们保持其默认值，更多细节将在其他教程中详解
```
只需改变卷积核，我们就可以使用类似的方法创造自定义滤波了。