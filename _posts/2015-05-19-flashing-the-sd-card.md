---
layout: post
category : Talks
tagline: ""
tags : [windows 10, IoT, available talks]
---
{% include JB/setup %}

# How to flash you SD card without a dedicated Windows 10 machine

## Goal

Get Windows 10 IoT core on a medium that is capable of booting a raspberry pi 2.

## Requirements

* VM running Windows 10 Preview.
* Micro SD card.  A minimum card is Class 10 with 8GB of storage.
* An account with the [Windows Embedded Pre-Release Program](https://connect.microsoft.com/windowsembeddedIoT)
* The most recent image for the Rasberry Pi from the downloads on the site above.
* A USB SD card reader.
* Install the hardware development tools specifically the [ADK](http://go.microsoft.com/fwlink/p/?LinkId=526740). 
For more on the [Hardware Dev Kits](https://msdn.microsoft.com/en-US/windows/hardware/dn913721(v=vs8.5).aspx#winADK)

## Problem

According to the documentation from Microsoft <insert a link here> there is not currently a way flash 
a SD card to boot your raspberry pi 2 without a dedicated machine.  The problem stems from the 
fact that you need direct access to the SD card reader.  Although most of the VM type products 
on the market say that they do this, I don't believe the integration drivers are there to fully 
support Windows 10.  

I figured there was around this, as you are just flashing an SD card with an image.

# Whats in the embedded download package

* Flash.ffu <- what we really care about
* ReadMe.txt <- for the moment a waste of diskspace
* WindowsDeveloperProgramForIoT.msi <- you will need to install this
* license.rtf <- whatever

Notice that "Flash.ffu" file is not the usual .img.  So all the usualy trick like "dd" and 
other commands are just not gonna work on it.  The ".ffu" extention is apprently used in 
manufacturing of windows phones.  I am sure there is way more to it, but I am not going to 
go into all of that.  If you want to no more [the file format description](https://msdn.microsoft.com/en-us/library/windows/hardware/dn757539%28v=vs.85%29.aspx)
seems like a good place to start.

# Ok get on with it, how do I do this

_Update: this works on Windows 8.1 as well_

1. Insert the SD card in to the USB card reader, and insert that into an available port.
2. Make a copy of the Flash.ffu file to someplace easy to get to ie "c:\Users\<your username>\Desktop"
3. Open an administrator command prompt and issue the following commands:
	
	__diskpart__<br />
	__list disk__<br />
	__exit__
    
	In this case my SD card is disk 1.  The '1' being really important.

4. Now execute the __dism__ command.  This is a bit more difficult than it seems.  You need to find the 
right 'dism' to execute.  
    
	This is the reason for the __ADK__ requirement, as this __dism__ knows how to write
to the SD card.  

    My was locted here: 
	
	C:\Program Files (x86)\Windows Kits\10\Assessment and Deployment Kit\Deployment Tools\x86\DISM\dism.exe

If you are successfull then you screen should look something like this:
![Full Install](/assets/windows-iot/full-sd-run.png)

All that is left todo is eject the SD card and insert it into the raspberry pi 2.  

If you need help with that, I have other blog posts coming your way.

