# cccf-host
[![NPM](https://nodei.co/npm/cccf-host-basic.png)](https://nodei.co/npm/cccf-host-basic/)

Add host to containers in a [cccf](https://github.com/asbjornenge/cccf) config. This module uses a basic spread algorithm
that will attempt to distribute the containers equally among the available hosts. It does NOT take into consideration things
like load, available resource etc. This is a basic example of adding hosts to a cccf config. For a productions setup you will
most likely want use a more sophisticated module, or write one of you own.

## Install

	npm install cccf-host-basic

## Use

	var ch = require('cccf-host-basic')
	var hosts  = require('./hosts.json')
	var containers = require('./cccf.json')

	ch(containers, hosts)

## Changelog

### 1.0.0

* Initial release :tada:

enjoy.