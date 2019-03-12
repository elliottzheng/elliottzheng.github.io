---
title: 空间长方体长宽高的判定
date: 2018-04-18 16:37:14
tags:
- 计算机视觉
---

​	给定空间长方体的八个顶点坐标，求取长宽高对应向量的方法。

<!-- more -->
## 背景
​	最近有一个需求，给定OBB(Orient Bounding Box,最小包围盒)的八个顶点后，这八个顶点是无序的，我们要找出其长，宽，高对应的向量。
## 算法描述
1. 首先，定义： 
    长为长方体的最长边，宽高为较短的两条边。

2. 算法描述
  1. 随便选取八个顶点中的一个,在本算法，初始顶点的选取并没有什么限制，为了下面表示方便，我们直接选取V<sub>7</sub>。

  2. 令V<sub>7</sub> 与其他七个顶点V<sub>j</sub> (j∈[0,6])分别相差，得到向量 **D<sub>j</sub>**(j∈[0,6]);

  3. 对**D**按照向量模进行升序排序,得到**N**，**N<sub>0</sub>**模最小，**N<sub>6</sub>**模最大。

  4. 那么模最小的两个向量**N<sub>0</sub>**,**N<sub>1</sub>**,这两个向量对应的就是长方体的宽和高。

  5. 设**L**=**N<sub>0</sub>**-**N<sub>1</sub>** (向量减法)，比较**L**和**N<sub>2</sub>**的模,若|**N<sub>2</sub>**<|**L**|(或者差异较大),那么**D<sub>2</sub>** 即为长方体的长，若|**N<sub>2</sub>**|=|**L**|或者是二者非常接近，那么我们认为**D<sub>2</sub>** 和**L**相等，那么**D<sub>3</sub>**就是长方体的长

## 算法实现
```C++
bool compareNorm(Eigen::Vector3d i,Eigen::Vector3d j)
{
    return i.norm() < j.norm();
}
class cuboid
{
    private Eigen::Vector3d length;
    private Eigen::Vector3d height;
    private Eigen::Vector3d width;

    void computeNormals(std::vector<Eigen::Vector3d>& vertices)//八个顶点
    {
        assert(vertices.size() == 8);
        std::vector<Eigen::Vector3d> N;
        for (int i = 0; i < 7; i++)
        {
            N.push_back(vertices[i] - vertices[7]);
        }
        std::sort(tris.begin(), tris.end(), compareNorm);//对这些向量按照模进行升序排序

        width = N[0]; //最短的那两个向量肯定一个是宽，一个是高
        height = N[1];

        //面对角线
        Eigen::Vector3d L = width-height;

        //这边判断第三短的向量到底是面对角线还是长，
        //如果面对角线比第三短的向量长，那么第三短的向量就是 长，如果没有的话 第四短才是 长
        length = L.norm() - tris[2].norm() > 0.01 ? tris[2] : tris[3];
    }
}
```

