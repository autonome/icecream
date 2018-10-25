Ice Cream Truck Tracker!
=========================

Everybody loves ice cream.
Share the love by reporting when you see the ice cream truck!


Initialization
--------------

* camera setup: check for camera permissions and tutorialize
* location setup: check for geo permissions and tutorialize
* configuration complete, initialize hardwares
* initialize camera
* request location
* once camera initializated, show button to send report
* once location initializated, reorient map

<pre>
|---------------|
| [=]           | <- menu for options
|               |
|    camera     |
|     view      |
|               |
|   [report!]   | <- button to start a report
|---------------|
|               |
|      map      |
|     view      |
|               |
|            [*]| <- button to recenter location
|---------------|
</pre>

Reporting
---------

* on button click, show report confirmation panel
* panel overlay main screen
* panel contains photo thumbnail, text input
* panel buttons are [cancel][send]

<pre>
|---------------|
| [=]           |
| |-----------| |
| ||---------|| |
| ||  thumb  || |
| ||  nail   || |
| ||---------|| |
|-|           |-|
| |  [send]   | |
| | [cancel]  | |
| |-----------| |
|               |
|            [*]|
|---------------|
</pre>