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
vagrant up: create or bring the VM up
vagrant halt: shutdown the vm
vagrant ssh: entry into the vm
exit: getting out of vm
vagrant destroy: delete the vm but not Vagrant file
Example command: vagrant init jacobw/fedora35-arm64
```

## VM issues

```
https://github.com/hashicorp/vagrant/issues/12666
```
