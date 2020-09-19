# edX-Super-Speed
edX Super Speed plus Video Downloader greasemonkey script

![edX Super Speed Example](https://i.imgur.com/WVdjCrN.png)

## Installation

1. Install [Tampermonkey](https://tampermonkey.net/)
1. Click [edX Super Speed.user.js](https://github.com/EricPryzant/edX-Super-Speed/blob/master/edX%20Super%20Speed.user.js) to view the file
1. Click the _Raw_ button at the top of the file to [view its source](https://github.com/EricPryzant/edX-Super-Speed/raw/master/edX%20Super%20Speed.user.js)
1. It should open Tampermonkey automatically with a button at the top where you can click "Install"
1. Alternatively, copy the source
1. Open Tampermonkey in your browser and click the Add Script tab (icon with a plus symbol)
1. Paste the source into the script window and hit save
1. Viola!


## Configuration

### Speed Options

- The additional speed options that are added by this script can be configured by adding or removing calls to the `addSpeedOption()` function in the main loop of the script.


### Default Speed

- Ths script can also be used to set the default speed for all videos by un-commenting the line `//setDefaultSpeed("2.0", i);` in the main loop of the script and setting the speed value passed to it to any of the default speed options provided by edx or the additional speed options added by this script.
