---
title: OpenCV4android的Android Studio环境配置及项目实例下载
date: 2017-04-11 08:36:56
tags:
- Android
- OpenCV
- 计算机视觉
---

因为软件竞赛的项目会用到OpenCV for Android，所以就研究了一下如何在Android Studio上配置OpenCV4Android
<!-- more -->

环境概述：

1. Android Studio 2.3
2. OpenCV-2.4.11-android-sdk


接下来主要是详细的讲解每一步的配置，然后再最后我会放上我做的一个示例项目

**1.首先是下载OpenCV-2.4.11-android-sdk**

不知道为什么之前上Opencv官网发现Android部分挂了，找了半天没找着下载的地方，最后终于在SourceForge上找到了，所以为了方便大家不用到处找，我把文件传到七牛云了

<https://onhdz331f.bkt.clouddn.com/OpenCV-2.4.11-android-sdk.zip>

如果不放心的话，大家也可以到opencv官网上去下载这个sdk。

**2.依据博友gloomyfish的文章进行配置，博主的视频当中的操作是对的，但是他的文章有些错误，会导致配置失败，或者说的不太清楚的的地方，我下面会补充讲下**

[OpenCV On Android开发 - Android Studio上环境配置](https://blog.csdn.net/jia20003/article/details/53126321)

(1)**错误更正**  **“SDK下面native文件下所有的文件都copy到你创建好的项目libs目录下”这句话有错，应该改为SDK\native\libs文件下所有的文件都copy到项目libs目录下,这样问题解决**

(2)**错误更正**  **最后要加到build.gradle(Module:app)的那句**

```gradle
compile fileTree(dir: "$buildDir/native-libs", include: 'native-libs.jar')
```

**应该是要放到build.gradle(Module:app)中的dependencies{}里面，而且不是像他所说的第一行，而是应该放在第二行，也就是这句**

```gradle
compile fileTree(include: ['*.jar'], dir: 'libs')
```

**的下一行。**

**(3)说得不太清楚的**：要放到build.gradle(Module:app)的这部分代码，是直接加在dependencies{}后面的。

```gradle
task nativeLibsToJar(type: Jar, description: 'create a jar archive of the native libs') {
    destinationDir file("$buildDir/native-libs")
    baseName 'native-libs'
    from fileTree(dir: 'libs', include: '**/*.so')
    into 'lib/'
}

tasks.withType(JavaCompile) {
    compileTask -> compileTask.dependsOn(nativeLibsToJar)
}
```

下面给出完整的build.gradle(Module:app)文件，并加上了注释，表现了应该如何更改

```gradle
apply plugin: 'com.android.application'

android {
    compileSdkVersion 25//在不同的android版本中，sdk版本不同
    buildToolsVersion "25.0.2"
    defaultConfig {
        applicationId "com.example.a18350.opencvtest"
        minSdkVersion 19
        targetSdkVersion 25
        versionCode 1
        versionName "1.0"
        testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner"
    }
    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}

dependencies {
    compile fileTree(include: ['*.jar'], dir: 'libs')
    compile fileTree(dir: "$buildDir/native-libs", include: 'native-libs.jar')//那句话是加在这里的，而不是加在第一行
    androidTestCompile('com.android.support.test.espresso:espresso-core:2.2.2', {
        exclude group: 'com.android.support', module: 'support-annotations'
    })
    compile 'com.android.support:appcompat-v7:25.3.1'
    compile 'com.android.support.constraint:constraint-layout:1.0.2'
    testCompile 'junit:junit:4.12'
    compile project(':openCVLibrary2411')
}
//请将两个task放在这里，也就是dependencies后面
task nativeLibsToJar(type: Jar, description: 'create a jar archive of the native libs') {
    destinationDir file("$buildDir/native-libs")
    baseName 'native-libs'
    from fileTree(dir: 'libs', include: '**/*.so')
    into 'lib/'
}

tasks.withType(JavaCompile) {
    compileTask -> compileTask.dependsOn(nativeLibsToJar)
}
```

**(4)**请注意，**还应该要更新build.gradle(module:OpenCVLibrary2411)信息**，打开build.gradle(module:OpenCVLibrary2411)，修改文件中的


1. compileSdkVersion
2. buildToolsVersion
3. minSdkVersion
4. targetSdkVersion

将**其内容与build.gradle(Module:app)中信息相一致**,这里做的事情其实是调整sdk的版本，使得编译opencv的sdk，构建工具的版本和app相同。

![img](https://s1.ax2x.com/2018/05/16/xbaOR.png)

 大功告成，这里放上运行成功的项目地址

<https://git.oschina.net/ylzheng/opencv4android_example>

