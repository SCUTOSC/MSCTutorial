# #3 - 在Linux上编写冒泡排序算法

::: warning
本网站托管旧的 MSCTutorial，不再更新。
新网址：[https://lab.scutosc.cn/](https://lab.scutosc.cn/)
新的仓库地址：[https://github.com/SCUTOSC/Lab](https://github.com/SCUTOSC/Lab)
:::

::: tip 本文维护者

- 何懿聪 <heyicong@dragonos.org>

:::

[[toc]]

## 1. 任务描述

你需要编写一个程序，实现冒泡排序算法，用于对一组整数进行升序排序。在完成任务之前，我们将逐步介绍排序的概念和相关编程知识。

## 2. 任务一：了解排序

1. 排序是将一组元素按照特定顺序重新排列的过程，常用的排序方式有升序（从小到大）和降序（从大到小）。
2. 冒泡排序是一种简单的排序算法，基本思想是重复地遍历数组，每次比较相邻的两个元素，如果它们的顺序错误就交换位置，直到整个数组排序完成。

## 3. 任务二：交换两个数

1. 在编写冒泡排序之前，我们先来学习如何交换两个变量的值。

2. 例如，如果有两个变量 `a` 和 `b`，我们想要交换它们的值，可以使用一个临时变量 `temp` 来辅助交换。

3. 交换的过程如下：

   - 将变量 `a` 的值赋给 `temp`。
   - 将变量 `b` 的值赋给 `a`。
   - 将 `temp` 的值赋给 `b`。

```c++
void swap(int& a, int& b){
    int tmp = a;
    a = b;
    b = tmp;
}
```

   

## 4. 任务三：循环结构

1. 接下来，我们学习如何使用循环结构来重复执行一段代码。

2. 在编程中，常用的循环结构有 `for` 循环和 `while` 循环。

3. `for` 循环适用于已知重复次数的情况，而 `while` 循环适用于未知重复次数的情况。

4. 循环结构的基本语法如下：

   - for循环：

     ```c++
     for (初始化; 循环条件; 循环表达式) {
         // 循环体代码
     }
     ```

   - while循环：

     ```c++
     while (条件) {
         // 循环体代码
     }
     ```

## 5. 任务四：遍历

1. 现在，我们学习遍历这个概念。

2. 首先，数组是一连串元素的表示，依次对数组（或者其他的数据结构）内的一系列元素均做一次访问叫做**遍历**。

3. 遍历通常会使用循环结构来实现

   - for循环示例

     ```c++
     for(int i = 0; i < length; i++){
         int num = arr[i]; // 假设有arr这样一个数组,获取到数组第i个元素
         // 进行你想要的操作
     }
     ```

   - while循环示例

     ```c++
     int index = 0;
     while(index < length){
         int num = arr[index]; // 假设有arr这样一个数组,获取到数组第i个元素
         // 进行你想要的操作
         // ...
         // 操作完成
         index ++ // 等价于index = index + 1
     }
     ```

## 6. 任务五：冒泡排序

1. 现在，我们可以开始编写冒泡排序算法了。
2. 冒泡排序（Bubble Sort）是一种简单直观的排序算法。它重复遍历要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢"浮"到数列的顶端。
3. 图解:

![Bubble sort](./images/bubbleSort.gif)

## 7. 任务六：编写冒泡排序

### 7.1 题目链接

题目链接：[912. 排序数组 - 力扣（LeetCode）](https://leetcode.cn/problems/sort-an-array/)（只需要测试过即可，因为使用冒泡排序这题会超时，提交会失败）

### 7.2 任务要求
1. 现在，我们可以开始编写冒泡排序算法了。
2. 首先，定义一个函数 `bubbleSort`，接受一个整数数组和数组长度作为参数。
3. 在函数内部，使用嵌套的循环结构来实现冒泡排序：
   - 外层循环控制遍历次数，需要遍历数组的长度减一次。
   - 内层循环进行相邻元素的比较和交换：
     - 对于升序：如果当前元素大于下一个元素，则交换它们的位置。降序相反
     - 每完成一次内循环，对应区间最大（小）的一个元素将会落在最后，就类似气泡在水中上升的过程。
4. 经过多次遍历后，整个数组将按升序（降序）排列。

### 7.3 冒泡排序的性质

#### 稳定性

冒泡排序是一种稳定的排序算法。

#### 时间复杂度

在序列完全有序时，冒泡排序只需遍历一遍数组，不用执行任何交换操作，时间复杂度为O(n)。

在最坏情况下，冒泡排序要执行(n-1)n/2次交换操作，时间复杂度为 O(n^2^)。

冒泡排序的平均时间复杂度为O(n^2^)。

### 7.4 编写代码

```c++
void bubbleSort(int arr[], int length){
    // 排序操作
}
```

#### 输入

- `arr`：一个整数数组，需要排序。
- `length`：数组的长度。

#### 输出

- 无返回值。函数将直接修改输入的数组，将其按升序进行排序。

#### 测试示例

```c++
int arr[] = {5, 2, 8, 1, 3};
int length = sizeof(arr) / sizeof(arr[0]); //计算数组长度
bubbleSort(arr, length);
for (int i = 0; i < length; i++) {
    cout << arr[i] << " ";
}
// 输出: 1 2 3 5 8
```

## 8. 任务提示

- 在编写代码之前，先理解任务书中的每个任务。
- 如果遇到困难，可以查阅相关资料或寻求我们的帮助。
- 在实现代码后，可以自己进行测试，遍历排序后的数组并输出来检查算法正确性，记录接触算法的感受。
