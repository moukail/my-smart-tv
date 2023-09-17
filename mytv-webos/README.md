### AppImages require FUSE version 2
https://github.com/AppImage/AppImageKit/wiki/FUSE

``
sudo apt install libfuse2
``

https://webostv.developer.lge.com/develop/tools/simulator-installation

``
chmod a+x ./webOS_TV_23_Simulator_1.3.0.appimage
``

``
./webOS_TV_23_Simulator_1.3.0.appimage
``

### Install ares-cli
https://github.com/webosose/ares-cli
https://webostv.developer.lge.com/
https://connectsdk.com/en/latest/index.html

``
npm install -g @webosose/ares-cli
``

### Create an app with CLI
``
ares-generate -t hosted_webapp -p "id=nl.moukafih.webos-mytv" webos-mytv
``

### Package the app
``
ares-package ./webos-mytv
``

### Install the package file to the TV device
``
ares-install -d emulator nl.moukafih.webos-mytv_1.0.0_all.ipk
``

### Launch the app on the TV device
``
ares-launch -d emulator nl.moukafih.webos-mytv
``