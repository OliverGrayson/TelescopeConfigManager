# TelescopeConfigManager
Configuration manager tool for Keck 1 Target of Opportunity planning

Written by Oliver Grayson and based on the KCWI Configuration Manager by Luca Rizzi

This project uses Angular 6 and Python 3.6

## Installation

```
git clone https://github.com/KeckObservatory/TelescopeConfigManager/
./install.sh
```

## Compilation using Angular CLI:

`cd AngularConfManager/frontend/AngularConfManager/`

To compile for the production server,

`ng build --base-href=/inst/PILogin/ObservingTools/ConfigManager/ --prod`

If the path needs to be changed, compile using a different `--base-href` flag.

## Running the Flask server

`cd AngularConfManager/backend`

Nothing special needed here. Run using Python 3.6 or as an executable.

```
python3.6 ConfigManager.sin
./ConfigManager.sin
```

The server will listen on port 5002.

## Modifying settings

Settings for the Python back-end, such as the port, the output directory, and the database name can be found in `AngularConfManager/backend/lib/database_config.py`.

Settings for the front-end are slightly more split up:
* URLs for the links to OOPGUI and ToORT are modifyable from `AngularConfManager/frontend/AngularConfManager/src/app/nav/nav.component.ts`
* The server address can be found in `AngularConfManager/frontend/AngularConfManager/src/app/communication.service.ts`
* Instrument definitions must be changed in both `AngularConfManager/backend/lib/` as their own Python files and in `AngularConfManager/frontend/AngularConfManager/src/app/json/instrumentConfData.json`

## Unfinished to-dos for this project:
* add support for MOSFIRE's multi-keyword selector
  * MOSFIRE's `sampmode_text` selector needs to set multiple values, as described in `sampmode_relation` in InstrumentConfig.json
* route the "save file" button to save .state files in a location more accessible to the instrument (currently they are saved in `AngularConfManager/AngularConfManager/backend/export/`.
