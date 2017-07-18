# electron-timebar-clone

After the unfortunate removal of "TimeBar" from the Mac App Store (read about it here)[https://twitter.com/timebar/status/578733783295340544?lang=en], I decided to make my own clone.

This is just a first pass and I use alfred to activate it.

## Instructions

 1. Install yarn globally (or just use npm)
 2. `yarn` or `npm install`
 3. Import the alfred workflow and modify the "bash" portion to point to your copy of the clone
 4. Run alfred, and enter `b 10` for a 10 minute timer.
 
## Contributing

Please please please fork and make changes. I'll try my best to merge these instantly unless they break things for me.

## Known issues

- umm, it's barely working (but it works!)
- yeah cpu is kind of high for the smooth transition. I tried a modified version which updates every 3 seconds, but it's not as sexy and I have cpu to spare on my MBP.
- The notification text isn't accurate

## Wishes

 - I'd love to emulate the original TimeBar functionality of having the menu bar be tinted, but I don't believe this is possible with electron
 - A way to set default colors, heights, etc. from a config file, env vars, or passed in via command line
 - a well-packaged binary
 
 
