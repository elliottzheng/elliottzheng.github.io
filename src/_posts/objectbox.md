---
title: Objectbox Box的getAll() 函数返回emptylist() 未判断导致崩溃
date: 2017-12-28 08:07:18
tags: 
- Android
- 数据库
---
　　最近使用了Objectbox作为新项目的数据库后台，Greendao开发团队新力作，但是Objectbox算是比较新的一个东西，现在资料也不多。

　　今天跟大家分享一个关于Box类的getAll()函数的遇到的一点坑。

<!-- more -->
我们首先看一下Box类的getAll函数的说明，

```java
java.util.List getAll()
Returns all stored Objects in this Box.
```
以Lists的形式返回box中的所有对象。
我很自然地加了一个检验是否返回为null的

```java
List<StockInfo> stockInfoList=stockInfoBox.getAll();//getAll函数你要判断是不是一个emptylist
if(stockInfoList!=null)
   return stockInfoList;
return new ArrayList<StockInfo>();
```

结果当表为空的时候，我要往stockInfoList里面添加数据时，程序瞬间崩溃了，其中最关键的log告诉我


```java
java.lang.RuntimeException: Failure delivering result ResultInfo{who=null, request=65537, result=3, data=Intent { (has extras) }} to activity {com.elliott.zheng.xica/com.elliott.zheng.xica.Activity.MainActivity}: 
java.lang.UnsupportedOperationException at android.app.ActivityThread.deliverResults(ActivityThread.java:3769)
```
UnsupportedOperationException 也就是由于不支持的操作导致的异常。

经过一番痛苦的调试，查看下列getAll函数源码，**发现当box为空时，getAll函数返回的不是null而是Collections.emptyList()**

```java
/**
     * Returns all stored Objects in this Box.
     */
    public List<T> getAll() {
        Cursor<T> cursor = getReader();
        try {
            T first = cursor.first();
            if (first == null) {
                return Collections.emptyList();
            } else {
                ArrayList<T> list = new ArrayList<>();
                list.add(first);
                while (true) {
                    T next = cursor.next();
                    if (next != null) {
                        list.add(next);
                    } else {
                        break;
                    }
                }
                return list;
            }
        } finally {
            releaseReader(cursor);
        }
    }
```

这个东西非常神奇，它的长度为空，不支持add操作，而且它不等于null，所以上面我那个语句判断&nbsp;stockInfoList!=null 为true而

直接将这个Collection.emptyList()生成的对象直接返回，而当我试图往里面add元素时，程序直接崩溃，因为这个对象不允许进行add()操作，一旦进行添加操作，会直接抛出异常，

说不支持这种操作，导致程序崩溃。

**解决办法：判断getAll函数返回值是否等于Collections.EMPTY_LIST**(这里判断返回值是否为null，没有用)，即

```java
List<StockInfo> stockInfoList=stockInfoBox.getAll();//getAll函数返回值应判断是不是一个emptylist
if(stockInfoList!=Collections.EMPTY_LIST)
    return stockInfoList;
return new ArrayList<StockInfo>();
```

让我疑惑不解的是，在Collections类的定义中，EMPTY_LIST好像就是定义为null啊。。。。，但是将返回值和null比较又不相等。

```java
public static final List EMPTY_LIST = null;
```

知道的朋友希望能够在评论区指出，如果文章有错误欢迎在评论区讨论，共同进步。
