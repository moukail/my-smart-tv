### Check the list of templates
#ares-generate -l
#ares-generate -p "id=nl.moukafih.webos-tv" webos_tv
#ares-generate -t hosted_webapp -p "id=nl.moukafih.webos-tv" webos_tv

### List the available DEVICEs
ares-launch --device-list
#ares-launch --device

### Launch an app on the DEVICE
#ares-launch nl.moukafih.webos-tv --device emulator

# Close an app on the DEVICE
#ares-launch -c nl.moukafih.webos-tv -d emulator

#ares-package ./sampleApp

#ares-install -d emulator nl.moukafih.webos-tv_1.0.0_all.ipk


tail -f /dev/null