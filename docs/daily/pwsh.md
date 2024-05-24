# PowerShell升级

> By: Arnold 2024/05/24

## 引子

突发奇想git bash能否像fish bash一样去给用户提示，结果GPT告诉我git bash不支持包管理。又觉得平时用的powershell实在是太丑了，蓝色的背景，也没有提示词，对大部分新手都不是很友好，动不动报一堆开发者错误，下图还是安装了Terminal改变了背景颜色的PowerShell的样子

![P1](https://raw.githubusercontent.com/dotama/pic-storage/master/2024/05/upgit_20240524_1716539875.png)

闲话少说，开始改造：

## 升级PowerShell版本

1. 执行命令` $PSVersionTable`查看当前PowerShell版本：

> Name                           Value
> ----                           -----
> PSVersion                      5.1.22621.2506
> PSEdition                      Desktop
> PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0...}
> BuildVersion                   10.0.22621.2506
> CLRVersion                     4.0.30319.42000
> WSManStackVersion              3.0
> PSRemotingProtocolVersion      2.3
> SerializationVersion           1.1.0.1

2. 安装choco和winget

   ```powershell
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
   choco install powershell-core -y
   
   ```

   安装完关闭Terminal，直接点击新的PowerShell如下图

   ![69b56616bd7751cb67590efef856dc1](https://raw.githubusercontent.com/dotama/pic-storage/master/2024/05/upgit_20240524_1716544579.png)

## 安装[oh-my-posh](https://ohmyposh.dev/)

1. 必须管理员执行`choco install oh-my-posh`

2. 再次关闭Terminal以管理员执行`oh-my-posh font install`安装字体，第一个即可

3. 字体添加进pwsh配置文件

   执行`ctrl+shift+,`打开配置文件，在profiles添加font代码：
   ```json
   "profiles": 
       {
           "defaults": {
               "font": {
                   "face": "0xProto Nerd Font"
               }
           }
   ```

4. 使用oh-my-posh

   ```powershell
   # 鉴于一般会报错没有$PROFILE文件，先执行
   New-Item -Path $PROFILE -Type File -Force
   # 再执行
   notepad $PROFILE
   ```
   这时候在打开的记事本中插入
   
   > oh-my-posh init pwsh | Invoke-Expression
   
   保存退出
   执行`. $PROFILE`加载，完成如下图：


   ![44563d04afcd750b57d71b3b0bdd1f7](https://raw.githubusercontent.com/dotama/pic-storage/master/2024/05/upgit_20240524_1716545754.png)

5. 更换主题

   ```powershell
   #执行下面命令获取全部在线主题
   Get-PoshThemes
   #更换主题
   oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/wholespace.omp.json" | Invoke-Expression
   ```

   但是这样更换主题新开pwsh又是默认主题，所以需要再次打开notepad,把它写入$PROFILE

   ```
   notepad $PROFILE
   ```

   notepad里修改为

   > oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/wholespace.omp.json" | Invoke-Expression
   
   保存退出，再次执行
   ```
   . $PROFILE
   ```
   这样每次打开就是你喜欢的主题了
   
   ![image-20240524183041580](https://raw.githubusercontent.com/dotama/pic-storage/master/2024/05/upgit_20240524_1716546645.png)

  # FIN



