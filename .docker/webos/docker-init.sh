### Check the list of templates
#ares-generate -l
#ares-generate -t hosted_webapp -p "id=nl.moukafih.webos-mytv" webos-mytv

### List the available DEVICEs
ares-launch --device-list
#ares-launch --device

### Launch an app on the DEVICE
#ares-launch nl.moukafih.my-smart-tv --device emulator

# Close an app on the DEVICE
#ares-launch -c nl.moukafih.my-smart-tv -d emulator

ares-package ./

ares-install -d emulator nl.moukafih.my-smart-tv_1.0.0_all.ipk

tail -f /dev/null