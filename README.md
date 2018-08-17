# TelescopeConfigManager
Configuration manager tool for Keck 1 Target of Opportunity planning

Written by Oliver Grayson and based on the KCWI Configuration Manager by Luca Rizzi

This project uses Angular 6 and Python 3.6

## Compilation using Angular CLI:

`cd AngularConfManager/frontend/AngularConfManager/`

To compile for the production server,

`ng build --base-href=/inst/PILogin/ObservingTools/ConfigManager/ --prod`

If the path needs to be changed, compile using a different `--base-href` flag.

## Unfinished to-dos for this project:
* add support for MOSFIRE's multi-keyword selector
  * MOSFIRE's `sampmode_text` selector needs to set multiple values, as described in `sampmode_relation` in InstrumentConfig.json
* route the "save file" button to save .state files in a location more accessible to the instrument (currently they are saved in `AngularConfManager/AngularConfManager/backend/export/`.
* provide working links in `nav.component.html` to ToORT and OOPGUI when all the tools go live
