> You can use VMWare virtual box and vagrant to create vms in your local machine.


## Vagantfile example

```
Vagrant.configure("2") do |config|
    config.vm.box = "spox/ubuntu-arm"
    config.vm.box_version = "1.0.0"
end
```
 
## Vagant commands
 
```
vagrant up
vagrant ssh
exit
vagrant halt
vagrant destroy
vagrant init jacobw/fedora35-arm64
```
