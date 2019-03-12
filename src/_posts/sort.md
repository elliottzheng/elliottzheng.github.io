---
title:  数据结构复习-十种排序思想及实现
date: 2017-12-31 17:18:53
tags:
- 数据结构
- 算法
---
　　今天是2017年的最后一天，新年快乐啊各位，新的一年也要加油呀！
　　今天复习了一下数据结构关于排序的这块，自己用C++实现了大部分算法,做个记录。唯一辣眼睛的就是树形选择排序算法，我选择死亡。

<!-- more -->

## 分类

---

### 按照排序方式分

- 插入排序
  - 直接插入排序
  - 希尔排序
- 选择排序
  - 简单选择排序
  - 堆排序
  - 树形选择排序
- 交换排序
  - 冒泡排序
  - 快速排序
- 归并排序
- 基数排序
- 计数排序

---

### 按照算法复杂度分

- O(n) 
  - 计数排序     O(n+h)
  - 基数排序     O(n)
- O(n*log(n)) 
  - 归并排序
  - 快速排序 （在最坏情况下会退化为冒泡排序）
  - 堆排序
  - 树形选择排序
  - 希尔排序（下界是O(n*log2n),与增量因子序列的选取有关）
- O(n^2) 
  - 冒泡排序
  - 插入排序
---

### 按稳定性分

　　这边大家看着高兴就好，有人说一种排序方法，如果它不稳定，那么无论你写出什么样的程序来实现它，总会有使之不稳定的实例存在。但是对于稳定的排序，可能有的程序实现算法会不稳定，但是总能写出另一种算法使其稳定。我不保证下面这些是对的，但是大部分应该是对的。

- 稳定排序
  - 基数排序(LSD方法)
  - 直接插入排序
  - 冒泡排序
  - 归并排序
  - 树形选择排序
  - 简单选择排序
- 不稳定排序
  - 快速排序
  - 堆排序
  - 希尔排序
  - 选择排序

---

## 简单解释

---

### 直接插入排序

#### 算法思想

　　实际上是希尔排序增量因子初值为1时的情况。将前面的一部分假设为有序，然后取出有序部分之后的第一个无序元素，那么就会出现一个空位，然后我们将空位前移到有序部分它应该在的地方，然后再将元素插入。（之所以原来要把元素取出来，是为了减少交换元素的操作，取出来可以直接赋值，无需交换）

---

### 希尔排序

#### 算法思想

　　先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录“基本有序”时，再对全体记录进行一次直接插入排序。

---

### 简单选择排序

#### 算法思想

1. 初始无序序列为整个数组

2. 从无序序列中选出一个最小的，将它和无序序列最前端的元素做交换

3. 将原无序序列的最前端的那个元素并入有序序列

4. 重复2,3步骤，直到整个序列均为有序序列

---

### 堆排序

#### 算法思想

1. 建立一个堆（实际上是从下往上，逐个调整子堆）
2. 取出堆顶元素
3. 调整堆
4. 重复2,3步骤直到堆为空

#### 我的想法

　　优雅的算法

---

### 树形选择排序

#### 算法思想

1. 两两比较，将结果存在二叉树当中

2. 然后取出最大的，将其置为无穷大，再从原最大元素所在的子树开始，向上更新二叉树，重新获得最大值。

3. 重复2步骤，直到所有元素均为无穷大

#### 我的想法

　　请你当场去世，谢谢

---

### 归并排序

#### 算法思想

1. 递归地调用归并排序将左右两边分别排好序
2. 合并两个数组

#### 我的想法

　　这玩意儿好蛋疼啊，辅助数组很艰难，归并的时候很体验极差，主要是还要额外申请辅助数组，占用额外空间不说，还容易内存泄露。但是我做错了一个东西就是，辅助数组应该是共用的，现在改过来了

---

### 冒泡排序

#### 算法思想

1. 初始认为整体序列无序

2. 遍历无序序列，将最大值交换到无序序列最后

3. 无序序列缩小

4. 重复2,3直到无序序列为空

---

### 快速排序

#### 算法思想

　　每次调整将无序序列的第一个元素放到序列中他应该在的位置，然后递归地对前面一半序列，和后面一个序列进行快速排序。

---



### 基数排序

#### 算法思想

　　基数排序属于“分配式排序”，又称“桶子法”（bucket sort）或bin sort，顾名思义，它是透过键值的部份资讯，将要排序的元素分配至某些“桶”中，藉以达到排序的作用，

#### 我的想法

　　脱离了低级趣味的排序方法，虽然是O（n）的复杂度，但是系数比较大，至于空间的话其实可以用链表来搞定，会提高空间利用率，像我下面这样用二维数组当然是很浪费空间的啦。

---

### 计数排序

#### 算法思想

　　数组A，大小为n，用来存放待排序数组

　　辅助数组C ，大小为K+1（K为数列中最大数的大小），C[i]用来记录比i小的元素的个数。

　　辅助数组B，大小为n，用来暂时存放排好序的数组。

1. 遍历数组A，填充辅助数组C。

2. 再次遍历数组A，对于A中每个元素A[i],将C[A[i]]作为它在数组B的索引然后暂存到B数组中。

3. 对于重复的数 i ，每排好一个 i 则对其C[i] 减一，以此对完成其余相同的数字进行排位。

4. 将B数组拷贝到A数组。

---

## C++实现

---

### 归并排序

```c++
//归并排序
//都是实心的，就是front和rear都是有元素的
void merge_sort(int* arr, int * help, int front, int rear)
{
	if (front == rear)
		return;
	if ((front + 1 == rear) && arr[rear] < arr[front])
	{
		int temp = arr[front];
		arr[front] = arr[rear];
		arr[rear] = temp;
		return;
	}
	merge_sort(arr, help, front, (front + rear) / 2);
	merge_sort(arr, help, (front + rear) / 2 + 1, rear);

	int n = rear - front + 1;
	int first_ptr = front;
	int sec_ptr = (front + rear) / 2 + 1;

	for (int i = 0; i < n; i++)
	{
		if (first_ptr <= (front + rear) / 2 && (arr[first_ptr] < arr[sec_ptr] || sec_ptr>rear))
		{
			help[i] = arr[first_ptr];
			first_ptr++;
		}
		else
		{
			help[i] = arr[sec_ptr];
			sec_ptr++;
		}
	}

	for (int i = 0; i < n; i++)
	{
		arr[i + front] = help[i];
	}

}
//真正在用的时候应该用这个，上面那个函数是递归的，不好调用
void merge_sort_util(int *arr, int n)
{
	int * help = new int[n];
	merge_sort(arr, help, 0, n - 1);
	delete[] help;
}
```

---

### 快速排序



```c++
//快速排序，front和rear这两个都是实心的
void QuickSort(int *arr, int front, int rear)
{
	int standerd = arr[front];
	int i = front;
	int j = rear;
	while (true)
	{
		while (arr[j] >=standerd&&i!=j)
			j--;
		while (arr[i] <= standerd&&i!=j)
			i++;
		if (i == j)
			break;
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	arr[front] = arr[i];
	arr[i] = standerd;
//下面这两个都是递归的，但是就是他们自己来终止
	if(i-1>front)
		QuickSort(arr, front, i - 1);
	if(i+1<rear)
		QuickSort(arr, i+1,rear);
}
```

---

### 基数排序

```c++
//基数排序 lenth为元素的最多位数，这里的DoubleArr是我的自定义二维数组类，
//可以查看我的上一篇博文，我们就把它当做普通的二维数组来用就可以了
void BaseSort(int * arr, int n,int length)
{
	for (int i = 0; i < length; i++)
	{
		DoubleArr<int> help(10, n, INT_MAX);
		DoubleArr<int> count(1, 10, 0);
		int div = pow(10, i);
		for (int j = 0; j < n; j++)
		{
			int temp = (arr[j] / div) % 10;
			help[temp][count[0][temp]] = arr[j];
			count[0][temp]++;
		}
		int index = 0;
		for (int j = 0; j < 10; j++)
		{
			for (int k = 0; k < count[0][j]; k++)
			{
				arr[index] = help[j][k];
				index++;
			}
		}
	}
}
```

---

### 计数排序

```c++
//最简单版的计数排序,数组元素的取值范围为0-k
void CountSort(int* arr,int n,int k)
{
	const int length = k + 1;
	int* count = new int[length];
	int *help = new int[n];
	memset(count, 0, sizeof(int)*(length));//初始化数组为0
	int i = 0;
	for (; i < n; i++)
		count[arr[i]]++;
	for (i=1; i < length; i++)
		count[i] += count[i - 1];
	for (i = n-1; i >=0; i--)
	{
		help[count[arr[i]] - 1] = arr[i];
		count[arr[i]]--;
	}
	for (i = 0; i < n; i++)
		arr[i] = help[i];
	delete[] help;
	delete[] count;
}
```

---

### 冒泡排序

```c++
//冒泡排序
void BubbleSort(int * arr, int n)
{
	for (int i=n-1;i>0;i--)
	{
		for (int j = 0; j < i; j++)
		{
			if (arr[j] > arr[j + 1])
			{
				int temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}
```

---

### 插入排序和希尔排序

​	由于希尔排序和直接插入排序实际上只有初始增量因子之间的差别，所以我们在实现的时候只要实现一般形式，当初始增量因子为n/2时，排序为希尔排序，当初始增量因子为1时排序为直接插入排序。

```c++
//希尔插入排序的一般形式,当factcor为1时为直接插入排序
void HillInsertSort(int * arr, int n, int factor)
{
	if (factor < 1)
		return;
	for (int i = 0; i < factor; i++)
	{
		int sorted = i;
		for (sorted = i; sorted < n - factor; sorted += factor)
		{
			int j = sorted + factor;
			int sentinel = arr[j];
			while (sentinel < arr[j - factor] && j >= factor)
			{
				arr[j] = arr[j - factor];
				j -= factor;
			}
			arr[j] = sentinel;
		}
	}
	HillInsertSort(arr, n, factor - 1);
}

//直接插入排序
void InsertSort(int * arr,int n)
{
	HillInsertSort(arr, n, 1);
}


//希尔排序
void HillSort(int *arr, int n)
{
	int inc_factor = n / 2;//初始化增量因子
	HillInsertSort(arr, n, inc_factor);
}
```

---

### 堆排序

```c++
//调整堆，这里做的事情实际上只是把当前索引为parent的节点向下调整，放到它应该在的地方
void HeapAdjust(int* arr, int  parent, int length)//默写出来还行
{
	int temp = arr[parent];//暂存parent节点的值，省的一直交换
	while (parent * 2+1 < length)
	{
		int j = parent * 2+1;
		if (j + 1 < length&&arr[j + 1] > arr[j])//如果右孩子存在，而且还比左孩子大,那么就把j++
			j++;
		//上面这步之后，arr[j]代表的是parent的两个孩子中最大的那个
		if (arr[j] > temp)
		{
			arr[parent] = arr[j];
			parent = j;
		}
		else //这个else的意思就是如果两个孩子最大的都没有它自己大，那就没什么必要换了，这就是他的位置
			break;
	}
	arr[parent] = temp;
}

void HeapSort(int * arr, int length)//堆排序
{
	//初始化大顶堆，才能从小到大
	for (int i = length / 2; i >= 0; i--)
	{
		HeapAdjust(arr, i, length);
	}

	//取出堆顶元素，放到堆长度后面一格，然后将所谓的i--，这里i指的是堆的大小
	for (int i = length - 1; i > 0; i--)
	{
		int temp = arr[i];
		arr[i] = arr[0];
		arr[0] = temp;
		HeapAdjust(arr, 0, i);
	}
}
```

---

### 树形选择排序

　　告辞




