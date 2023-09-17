
### Installing Tizen Studio
#### Using the CLI Installer

https://docs.tizen.org/application/tizen-studio/setup/install-sdk/#using-the-cli-installer

```
wget https://download.tizen.org/sdk/Installer/tizen-studio_5.1/web-cli_Tizen_Studio_5.1_ubuntu-64.bin

chmod a+x ./web-cli_Tizen_Studio_5.1_ubuntu-64.bin
./web-cli_Tizen_Studio_5.1_ubuntu-64.bin --accept-license
export PATH=$PATH:~/tizen-studio/tools/ide/bin
export PATH=$PATH:~/tizen-studio/tools/emulator/bin
tizen cli-config --list
```

#### Display packages with CLI
```
~/tizen-studio/package-manager/package-manager-cli.bin show-pkgs
```

#### Installing Additional Packages with CLI
```
~/tizen-studio/package-manager/package-manager-cli.bin install --accept-license TV-SAMSUNG-Public cert-add-on
```

#### Update installed packages with CLI
```
~/tizen-studio/package-manager/package-manager-cli.bin update
```

#### Uninstall packages with CLI
```
~/tizen-studio/package-manager/package-manager-cli.bin uninstall TV-SAMSUNG-Public
```

### Create TV Web App

```
tizen version
tizen list web-project
tizen create web-project --profile tv-6.5 --template WebBasicapplication --name MyTvProject
```
### Controlling the Emulator Manager

#### Install KVM on Ubuntu

```
sudo apt -y install bridge-utils cpu-checker libvirt-clients libvirt-daemon qemu qemu-kvm
```

#### Lunch the TV emulator

```
em-cli -h
em-cli list-platform
em-cli list-template
em-cli list-vm
em-cli modify --name T-samsung-7.0-x86 --hw-virtualization yes
em-cli launch --name T-samsung-7.0-x86
```
#### Connecting the TV and SDK
https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/tv-device.html#Connecting-the-TV-and-SDK

#### Smart Development Bridge
```
~/tizen-studio/tools/sdb connect 192.168.1.227
~/tizen-studio/tools/sdb devices
```

#### run the tv app

```
tizen package --type wgt
tizen install --name MyTvProject.wgt --serial emulator-26101
tizen install --name MyTvProject.wgt --serial 192.168.1.227:26101
```

### Debugging
https://developer.samsung.com/smarttv/develop/extension-libraries/smart-view-sdk/receiver-apps/debugging.html

```
~/tizen-studio/tools/sdb -s 192.168.1.227 shell 0 applist
~/tizen-studio/tools/sdb -s 192.168.1.227 shell 0 execute 01lVnvGMTp.MyTvProject
~/tizen-studio/tools/sdb -s 192.168.1.227 shell 0 debug 01lVnvGMTp.MyTvProject
```

go to http://192.168.1.227:<port>

### Extra
#### Generate author certificate

```
tizen certificate --alias MyTizen -p meknes79 -c NL -s 'Zuid Holland' -ct Rotterdam --organization Moukail --unit IT --filename moukail
```
##### Add security profile

```
tizen security-profiles list
tizen security-profiles remove --name MyProfile
tizen security-profiles add --name MyProfile --author ~/tizen-studio-data/keystore/author/moukail.p12 \
--password meknes79 --active
tizen security-profiles set-active --name MyProfile
tizen install-permit
tizen package --type wgt --sign moukail
```
