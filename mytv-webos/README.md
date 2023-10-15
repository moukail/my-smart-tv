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
ares-generate -t hosted_webapp -p "id=nl.moukafih.my-smart-tv" mytv-webos
``

### Package the app
``
ares-package ./mytv-webos
``

### List of Devices
```bash
docker exec -it mytv-webos ares-launch --device-list
```
### Change device IP address
```bash
docker exec -it mytv-webos ares-setup-device
```

### Install the package file to the TV device
```bash
ares-install -d emulator nl.moukafih.my-smart-tv_1.0.0_all.ipk
```

```bash
docker exec -it mytv-webos ares-install -d emulator nl.moukafih.my-smart-tv_1.0.0_all.ipk
```

### Launch the app on the TV device
```bash
ares-launch -d emulator nl.moukafih.webos-mytv
```

### Install App on TV
https://webostv.developer.lge.com/develop/getting-started/developer-mode-app#turning-developer-mode-on
