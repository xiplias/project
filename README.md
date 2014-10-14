# Project - Experimental Project Management

__WORK IN PROGRESS__

Based on https://github.com/matteodem/meteor-boilerplate

## How to use

### How to run the project

__Install Meteor__

```sh
curl https://install.meteor.com/ | sh
```

__Run project__

```sh
meteor
```

### Scaffold generator

```sh
node meteor-boilerplate # Lists all possible commands
node meteor-boilerplate create:route # Interactive console for command
node meteor-boilerplate create:route login /login # Executes it immediately
```

### Deployments

Support for [Meteor Up](https://github.com/arunoda/meteor-up) is integrated, use following commands to set up your deployment process.

```sh
node meteor-boilerplate mup:init # walks you through the setup process
node meteor-boilerplate mup:deploy # deploys to server
```

### Packages used

* standard-app-packages
* less
* jquery
* underscore
* handlebar-helpers
* iron-router
* accounts-password
* accounts-ui
* iron-router-progress
* semantic-ui
* collection2
* velocity-html-reporter
* mocha-web-velocity

The "insecure" and "autopublish" packages are removed by default (they make your app vulnerable).

### Folder structure

```
client/ 				# Client folder
    compatibility/      # Libraries which create a global variable
    config/             # Configuration files (on the client)
	lib/                # Library files that get executed first
    routes/             # All routes(*)
    startup/            # Javascript files on Meteor.startup()
    stylesheets         # LESS files
    subscriptions/      # Collection subscriptions(*)
    modules/            # Meant for components, such as form and more(*)
	views/			    # Contains all views(*)
	    common/         # General purpose html templates
model/  				# Model files, for each Meteor.Collection(*)
private/                # Private files
public/                 # Public files
server/					# Server folder
    fixtures/           # Meteor.Collection fixtures defined
    lib/                # Server side library folder
    publications/       # Collection publications(*)
    startup/            # On server startup
tests/					# Velocity test files, can be run with mocha(*)
meteor-boilerplate		# Command line tool
```

