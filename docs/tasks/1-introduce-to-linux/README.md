# #1 - 初识Linux

::: tip 本文维护者

- 龙进 <longjin@dragonos.org>

:::

::: tip 学习目标

- 安装Ubuntu Server 22.04 LTS系统
- 学会使用SSH连接到虚拟机
- 学会Linux的基本命令
- 学会使用VS Code连接到虚拟机并编写第一个C++ Hello World程序

:::

## 目录

[[toc]]

## 1. 什么是Linux

### 1.1 Linux的定义
Linux是一种开源的操作系统内核，它诞生于1991年，由芬兰计算机科学家Linus Torvalds创建。Linux内核被广泛应用于各种设备和系统，包括服务器、桌面电脑、移动设备等。

在Linux内核的基础上，诞生了许多不同的Linux发行版，如Ubuntu、Debian、CentOS等。Linux发行版通常包含Linux内核、软件包管理工具、图形界面等，可以直接安装在计算机上使用。

### 1.2 Linux的特点
- 开源性：Linux的源代码是公开的，任何人都可以查看、修改和重新分发。
- 多用户、多任务：Linux支持多用户同时访问，可以同时运行多个进程。
- 稳定性和安全性：Linux内核设计稳定，对错误和崩溃有较好的容错能力。此外，Linux拥有强大的安全机制。
- 强大的命令行界面：Linux提供丰富的命令行工具和脚本语言，使系统管理和开发更加灵活高效。
- 可定制性：Linux允许用户根据自己的需求进行定制和配置，可以选择不同的桌面环境和软件组合。

对于我们来说，在Linux上写代码的体验非常棒，安装各种开发环境都非常方便，并且对于大型工程的编译，Linux的性能往往比Windows更好。

## 2. 使用vmware安装Ubuntu Server 22.04 LTS

### 为什么选用Ubuntu Server 22.04 LTS？

尽管网络上许多的教程都是基于Ubuntu Desktop的，但是我们更推荐使用Ubuntu Server。因为Ubuntu Server是一个轻量级的操作系统，不包含图形界面，可以更好地利用计算机的资源。
在同学们的电脑上，比较节省资源。16GB内存的电脑如果用于运行Ubuntu Desktop，那么会比较卡。

有的同学可能会问：为啥不用WSL？因为WSL不完全兼容Ubuntu的特性，有些软件需要特殊配置才能在WSL上运行。并且，WSL可能会与VMWare冲突，我们后面学习过程中，可能会需要使用多个虚拟机，因此不建议使用WSL。

### 2.1 准备工作

在安装Ubuntu Server 22.04 LTS之前，需要准备以下工作：
- 安装并配置vmware虚拟机软件。
- 下载Ubuntu Server 22.04 LTS的镜像文件。

#### 安装VMWare

VMWare有Workstation和Player两个版本，Workstation是收费的，Player是免费的。Workstation的功能更加强大.

你可以在官网下载VMWare Workstation Pro 17的安装包：[https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html](https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html)

然后去网上搜索一个激活码，激活VMWare Workstation Pro 17。

#### 下载Ubuntu Server 22.04 LTS的镜像文件

你可以去Ubuntu官网下载Ubuntu Server 22.04 LTS的镜像文件：[https://ubuntu.com/download/server](https://ubuntu.com/download/server)

#### 2.2 安装Ubuntu Server 22.04 LTS

首先需要在VMWare中创建一个新的虚拟机，然后按照安装向导的提示进行安装。

按照以下步骤安装Ubuntu Server 22.04 LTS：
1. 打开vmware虚拟机软件。
2. 创建一个新的虚拟机，选择Ubuntu Server 22.04 LTS的镜像文件作为安装介质。
3. 配置虚拟机的硬件参数，如内存、硬盘大小等。
4. 启动虚拟机，按照安装向导的提示进行安装，包括选择语言、键盘布局等。
5. 设置用户名和密码，并完成安装过程。

请注意vmware的以下几个地方：

- CPU设置：建议设置为跟你电脑相同的线程数。比如你的电脑是8核16线程的，那么就设置为8核16线程。
- 内存设置：建议设置为你电脑内存的一半。比如你的电脑是16GB内存，那么就设置为8GB内存。
- 硬盘设置：建议设置为80GB。因为后面扩展虚拟机的硬盘比较麻烦，所以建议一开始就设置大一点，反正不会立刻占用这么多空间。
- **开启VT-D/AMD-V：** 在vmware虚拟机的cpu设置中，启用VT-D/AMD-V。这个选项是用来加速虚拟机的，如果不开启，虚拟机的性能会很差。并且，我们后续部分实验需要这个选项才能正常运行。


进入Ubuntu Server 22.04 LTS的安装界面后，使用键盘进行操作。基本都按照默认设置去做就可以了。

需要注意以下几个地方：

- **语言设置问题：** 有2个地方需要设置语言。第一个是安装程序的语言，第二个是系统的语言。安装程序设置为英文，然后系统设置为中文（不然后面你下载软件会很慢）。
- **安装openssh-server：** 一定要勾选安装openssh-server，这样才能使用SSH连接到虚拟机。
- **磁盘分区问题：** 在进入配置磁盘分区的界面时，默认是勾选了LVM的. 好像是叫做`xxxxxxx LVM Group`来着，具体的我忘记了。一定要把这个选项给取消勾选。
尽管LVM很牛，但是我们用不到LVM，它会导致磁盘可用空间变少。

除了上面这两个地方，其他的都按照默认设置就可以了。

## 3. 连接到虚拟机

这个时候大家就会想，我安装好了Ubuntu Server 22.04 LTS，但是我怎么连接到这个虚拟机呢？难不成一直在vmware里面操作？

肯定不是的，我们将来还会接触比如云服务器这些，都是使用终端软件去连接到这些系统的。一般是使用SSH协议去连接的。

### 3.1 什么是SSH？

SSH（Secure Shell）是一种通过网络连接和管理远程计算机的协议。它提供了加密的通信通道，使我们可以安全地在本地计算机上执行命令和操作远程计算机，而无需直接物理接触远程计算机。

SSH协议通过使用公钥加密和身份验证机制，确保了数据传输的机密性和完整性。它还允许我们在不安全的网络中建立安全的远程连接，并远程执行命令、传输文件等操作。

### 3.2 安装SSH客户端

在连接到虚拟机之前，首先需要在本地计算机上安装SSH客户端程序。以下是两个跨平台的推荐SSH客户端：

- **Termius**：Termius是一款功能强大、跨平台的SSH客户端。它支持Windows、MacOS、Linux等操作系统，并提供直观的用户界面和丰富的功能，如多会话管理、文件传输等。您可以从Termius官方网站下载并安装适用于您的操作系统的版本。

- **Tabby**：Tabby是另一个优秀的跨平台SSH客户端。它提供了简洁而直观的界面，支持诸如会话管理、标签页、自动完成功能等功能。您可以从Tabby的官方网站下载适用于您的操作系统的版本进行安装。

根据个人喜好和实际需求，您可以选择其中一个SSH客户端进行安装和使用。

### 3.3 获取虚拟机的IP地址

在连接到虚拟机之前，我们需要获取虚拟机的IP地址。以下是一种获取IP地址的常用方法：

1. 启动虚拟机，并登录到Ubuntu Server 22.04 LTS。

2. 在终端中运行以下命令：

   ```shell
   ifconfig
   ```

   这将显示虚拟机的网络接口配置信息，包括IP地址、子网掩码和网关等。

::: warning 注意
如果上述命令报错，原因是新装的Ubuntu Server 22.04 LTS默认没有安装`ifconfig`命令。可以通过以下命令安装`ifconfig`命令：

```shell
# 更新软件包列表
sudo apt update 
# 安装ifconfig命令
sudo apt install net-tools
```

:::

3. 查找与虚拟机相连的网络接口（通常是以`eth`或`ens`或`eno`开头的接口名称），并查找该接口的IP地址。

   例如，如果您的虚拟机连接的网络接口名称是`eno1`，则可以在输出中找到类似以下的行：

```
eno1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.168.2  netmask 255.255.255.0  broadcast 192.168.168.255
```

   在这个例子中，IP地址是`192.168.168.2`。

请记下虚拟机的IP地址，以便在后续的连接过程中使用。

### 3.4 连接到虚拟机

现在，您已经安装了SSH客户端并获取了虚拟机的IP地址，可以开始连接到虚拟机了。

1. 打开您选择的SSH客户端（例如Termius或Tabby）。

2. 在SSH客户端的连接设置中，输入以下信息：

   - 主机：虚拟机的IP地址。
   - 用户名：您在安装Ubuntu Server 22.04 LTS时设置的用户名。
   - 密码：您在安装Ubuntu Server 22.04 LTS时设置的密码。

3. 点击连接或类似的按钮，启动SSH连接。

4. 如果一切顺利，您将成功连接到虚拟机，并可以在SSH客户端的终端界面上执行命令和操作虚拟机。

通过SSH连接，您可以在本地计算机上轻松访问和管理虚拟机，而无需直接操作虚拟机所在的VMware界面。

请注意，连接到虚拟机的过程中可能会遇到网络配置、防火墙设置或SSH服务器配置等问题。如果遇到连接问题，您可以检查网络设置、防火墙规则和SSH服务器配置，确保它们正确配置和允许连接。此外，您还可以参考SSH客户端和Ubuntu Server的文档，以获取更详细的连接和故障排除指南。

## 4. 基本命令

### 4.1 文件和目录操作
- `ls`：列出当前目录下的文件和子目录。
- `cd`：切换当前工作目录。
- `pwd`：显示当前工作目录的路径。
- `mkdir`：创建新目录。
- `rm`：删除文件或目录。
- `cp`：复制文件或目录。
- `mv`：移动文件或目录。

#### 学习演示：

使用SSH登录到系统，当前用户的工作目录为`~/`。

1. 使用`mkdir`命令创建一个名为`tmp1`的新目录：
```
mkdir tmp1
```

2. 使用`ls`命令列出当前目录下的文件和子目录：
```
ls
```

输出示例：
```
tmp1
```

3. 使用`cd`命令切换到`tmp1`目录：
```
cd tmp1
```

4. 使用`pwd`命令显示当前工作目录的路径：
```
pwd
```

输出示例：
```
/home/user/tmp1
```

请注意，`~`表示当前用户的主目录，`/`表示根目录，要区分它们。并且上面的`/home/user`是示例，实际路径可能不同。


5. 返回上一级目录，使用`cd`命令：
```
cd ..
```

6. 使用`rm`命令删除`tmp1`目录：
```
rm -r tmp1
```

注意：`-r`选项用于递归删除目录及其内容。

7. 使用`ls`命令确认目录已被删除：
```
ls
```

输出示例：
```
(如果看不到tmp1目录，表示目录已被删除)
```

8. 使用`mkdir`命令创建一个名为`tmp1`的新目录，并在`tmp1`目录下创建一个名为`file1.txt`的文件：

```
mkdir tmp1
touch tmp1/file1.txt
```


8. 使用`cp`命令复制`file1.txt`的文件到当前目录：
```
cp tmp1/file1.txt .
```


9. 使用`ls`命令确认文件已复制到当前目录：
```
ls
```

输出示例：
```
file1.txt
```

10. 使用`mv`命令将`file1.txt`文件移动到`tmp1`目录下，并重命名为`file2.txt`：
```
mv file1.txt tmp1/file2.txt
```

11. 使用`ls`命令确认文件已移动到目标目录：
```
ls tmp1
```

输出示例：
```
file1.txt file2.txt
```

这些示例演示了如何在当前工作目录下使用基本的文件和目录操作命令。请根据实际情况替换文件路径和目录名。

### 4.2 文件内容查看与编辑

以下是一些常用的文件内容查看和编辑命令，相信大家在经过上面的学习后，能够很快掌握接下来这些命令的使用方法。
这些命令请大家自行上网搜索学习。

- `cat`：查看文件内容。
- `less`：分页查看文件内容。
- `head`：显示文件的前几行。
- `tail`：显示文件的后几行。
- `vim`：强大的文本编辑器。

值的注意的是，`vim`编辑器需要使用`apt`命令安装：
```
sudo apt install -y vim
```


### 4.4 系统管理
- `sudo`：以超级用户权限执行命令。
- `apt`：包管理工具，用于安装、更新和删除软件包。我们在上面安装`vim`编辑器时，就是使用`apt`命令安装的。
- `systemctl`：管理系统服务。
- `df`：显示磁盘使用情况。
- `reboot`：重启系统。
- `poweroff`：关闭系统。

## 5. 使用VS Code连接到虚拟机并编写第一个C++ Hello World程序

### 5.1 配置ssh免密登录

为了实现SSH免密登录，需要按照以下步骤进行配置：
为了实现SSH免密登录，需要按照以下步骤进行配置：

1. 在本地计算机上生成SSH密钥对。打开终端（对于Windows系统，可以使用Git Bash或类似的终端工具），然后输入以下命令：
```
ssh-keygen
```

接着一直回车就行了。生成的ssh密钥对会保存在windows的`C:\Users\用户名\.ssh`目录下的`id_rsa`和`id_rsa.pub`文件中。
其中，`id_rsa`是私钥，`id_rsa.pub`是公钥。我们需要将公钥复制到虚拟机上。

2. 将公钥复制到虚拟机上的`authorized_keys`文件中。使用以下命令将公钥复制到虚拟机上：
```
ssh-copy-id username@your_server_ip
```
   其中，`username`是虚拟机上的用户名，`your_server_ip`是虚拟机的IP地址或主机名。在执行命令后，会提示输入虚拟机用户的密码。

   如果`ssh-copy-id`命令不可用，可以手动将公钥内容添加到虚拟机上的`~/.ssh/authorized_keys`文件中（如果没有的话就创建它即可）。

3. 验证SSH免密登录是否成功。使用以下命令连接到虚拟机：
```
ssh username@your_server_ip
```
   如果成功连接到虚拟机而无需输入密码，则表示SSH免密登录已配置成功。

### 5.2 在VS Code中安装插件

1. 打开VS Code，并在侧边栏点击扩展（Extensions）图标。

2. 在搜索框中输入"Remote - SSH"，然后选择"Remote - SSH"扩展，点击"安装"按钮进行安装。

### 5.3 连接到虚拟机

1. 点击VS Code左下角的"远程资源管理器"（Remote Explorer）图标。

2. 在远程资源管理器面板中，点击右上角的"连接到主机"（Connect to Host）按钮。

3. 选择"SSH Targets"，然后点击"添加SSH目标"（Add SSH Host）。

4. 在弹出的输入框中输入虚拟机的SSH连接信息，包括用户名和主机名或IP地址。点击"添加"按钮。

5. 选择刚刚添加的SSH目标，点击"连接"按钮。

6. 如果SSH免密登录配置正确，VS Code将自动连接到虚拟机，并在编辑器中显示虚拟机的文件系统。


### 5.4 安装编译工具和git

在终端中输入以下命令安装编译工具和git：
```
sudo apt install -y build-essential git
```


### 5.5 在VS Code中安装需要的插件

在vscode已经连接到虚拟机的情况下，点击左侧的扩展（Extensions）图标，然后搜索并安装以下插件：

- C/C++
- GitLens

### 5.5 编写C++ Hello World程序

1. 在VS Code的编辑器中，创建一个新的文件夹，并且打开这个文件夹。

2. 创建新文件，并将文件保存为`hello.cpp`。

3. 在`hello.cpp`中输入以下C++代码：
```cpp
#include <iostream>
using namespace std;

int main() {
      cout << "Hello, World!" << endl;
      return 0;
}
```

4. 保存文件。

### 5.5 编译和运行程序

1. 保存文件，并按下`Ctrl + F5`，然后选择g++编译器进行编译、运行。
2. 在终端中运行编译生成的可执行文件，即可看到"Hello, World!"的输出。


通过以上章节的介绍，你已经了解了Linux的基本知识，以及如何安装Ubuntu Server、连接到虚拟机，并使用VS Code编写一个简单的C++程序!


## 6. 常见问题

### 6.1 开启VT-D/AMD-V时，vmware提示“此平台不支持虚拟化的Intel VT-x/EPT”

请参考这篇文章的**第3、4、5、6点**进行解决：[https://blog.csdn.net/qq_46499134/article/details/124231658](https://blog.csdn.net/qq_46499134/article/details/124231658)
