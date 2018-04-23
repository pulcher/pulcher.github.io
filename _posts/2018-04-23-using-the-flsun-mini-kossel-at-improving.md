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

### Configure the machine profile 

1. Goto Preferences > Settings and check the __Check all__ box.  This will may overwhelm you, but it will be ok.
1. Goto Printers, Click Add.
1. Select Other > Kossel Mini.  Give it a name if you like, then click __Add Printer__
1. Click __Machine Settings__
1. Use the following setting: 
![Printer](/assets/flsun/printer-settings.png)
![Extruder](/assets/flsun/extruder-settings.png)
1. Use the following for the __Start__ and __End__ gcode:

    Start Gcode:
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

1. Click Close, and Close again

Now you should have the printer profile set correctly.

### Configure the material profile

I normally run either PLA or PETG in this printer.  If you would like to run something else or a different color, contact me and we will work that out.

Currently PETG is loaded and here are the __Custom__ setting that need updated:

	adhesion_type = skirt
	cool_fan_enabled = False
	cool_min_layer_time = 10
	default_material_print_temperature = 245
	infill_pattern = lines
	infill_sparse_density = 15
	layer_height = 0.2
	line_width = 0.42
	material_bed_temperature = 70
	material_bed_temperature_layer_0 = 75
	material_diameter = 1.69
	material_final_print_temperature = 240
	material_flow = 93
	material_initial_print_temperature = 245
	material_print_temperature = 245
	retraction_amount = 2.4
	retraction_extra_prime_amount = 0.064
	retraction_combing = noskin
	retraction_hop = 0.4
	retraction_hop_enabled = True
	retraction_hop_only_when_collides = True
	retraction_speed = 15
	skirt_gap = 2
	skirt_line_count = 8
	speed_print = 30
	speed_layer_0 = 15.0
	speed_topbottom = 15.0
	speed_travel = 140
	support_infill_rate = 20
	top_bottom_thickness = 0.8
	wall_thickness = 1.2

I will update these when I change the filament.

### Prepare your model for printing

1. Load your model into Cura
1. Run through the __layers__ and make sure you are happy with the result.
1. Save your gcode to and SD card

### Start the printer

* If the printer isn't on,  push the red button to turn it on.
![Red Button](/assests/flsun/WP_20180419_21_43_38_Pro.jpg)
* This screen is the __Information Screen__ and is all the information you will be getting during your print:
![Information Screen](/assests/flsun/WP_20180419_21_36_24_Pro.jpg)
The __Silver Knob__ can be rotated and click.  The __reset button__ underneither is your friend.  If something goes wrong or you think something is going wrong, push it.  It will immediately stop all activity.

Since we have PETG loaded you must do the following after every reset/power on of the printer:
1. Click the knob and go to the __Control__ menu:
![Control Menu](/assests/flsun/WP_20180419_21_36_33_Pro.jpg)



