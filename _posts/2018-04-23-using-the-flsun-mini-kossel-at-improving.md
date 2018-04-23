---
layout: post
category : 3D Printing
tagline: ""
tags : [3D Printing, gcode, delta, FLSUN]
---
{% include JB/setup %}

# How to use the FLSUN Mini Kossel with the currently loaded filament

## Requirements

* A slicer: [Ultimaker Cura](https://ultimaker.com/en/products/ultimaker-cura-software)
* A fullsize SD card, or a micro with a fullsize adpter.  There is one in the printer.  I hope it stays around a while.
* A model to print: [Thingiverse](https://www.thingiverse.com/)
* or if you want to create your own model: [Fusion360](https://www.autodesk.com/products/fusion-360/overview) After the __Free Trial__ is over, you can license it as a __Hobbyiest__ and it is free for that type of use.


## Configuring Cura

After installation you will need to configure Cura to slice the models correctly.  

1. Goto Preferences > Settings and check the __Check all__ box.  This will may overwhelm you, but it will be ok.
1. Goto Printers, Click Add.
1. Select Other > Kossel Mini.  Give it a name if you like, then click __Add Printer__
1. Click __Machine Settings__
1. Use the following setting: 
![Printer](/assets/flsun/printer-settings.png)
![Extruder](/assets/flsun/extruder-settings.png)
1. Use the following for the __Start__ and __End__ gcode:
```Start Gcode:
G21 ;metric values
G92 E0 ;zero the extruded length
G90 ;absolute positioning
M82 ;set extruder to absolute mode
M107 ;start with the fan off
M117 Homing...
G28 ;Home all axes (max endstops)
G29 ; Auto-bed leveling
M117 Auto-Level Activation...
G1 F200 E10 ;extrude 3mm of feed stock
G92 E0 ;zero the extruded length again
G1 F9000
M117 Printing...

End Gcode:
M104 S0 ;extruder heater off
M140 S0 ;heated bed heater off (if you have it)
G91 ;relative positioning
G1 F300 E-10  ;retract the filament a bit before lifting the nozzle, to release some of the pressure
G92 E0;
G28
M84 ;steppers off
G90 ;absolute positioning
```
1. Click Close, and Close again
1. 

If you are successfull then you screen should look something like this:
![Full Install](/assets/windows-iot/full-sd-run.png)