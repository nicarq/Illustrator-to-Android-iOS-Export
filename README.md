Illustrator-to-Android-iOS-Export
================================

Fork by Matthew Porter (http://github.com/M-Porter) from https://github.com/atyndall/phonegap-illustrator-icon-export

##Changes

Illustrator CS6 script to export an AI file and export it to Android and iOS compatible icons.

Script provides support for the following:
- Android
  - mdpi
  - hdpi
  - xhdpi
  - xxhdpi
  - xxxhdpi
- iOS
  - @2x
  - non-@2x

  
The file structor created by the script is as follows:
- [Base Directory]
  - file_nameiOS
    - file_name&#46;png
    - file_name@2x&#46;png
  - drawable-mdpi
    - file_name&#46;png
  - drawable-hdpi
    - file_name&#46;png
  - drawable-xhdpi
    - file_name&#46;png
  - drawable-xxhdpi
    - file_name&#46;png
  - drawable-xxxhdpi
    - file_name&#46;png


----

Credit goes to:
* @herkulano (http://www.herkulano.com)
* @hotappsfactory (http://www.hotappsfactory.com)
* Niels Bosma (niels.bosma@motorola.com)

Based on file sourced from http://www.hotappsfactory.com/the-magic-illustrator-script-ai-to-ios-android/.
