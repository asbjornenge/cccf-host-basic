var assert  = require('assert')
var clone   = require('clone')
var cccf    = require('cccf')
var scale   = require('cccf-scale')
var example = require('cccf/example.json')
var ch      = require('../index')

var _config    = clone(example)
_config.scale  = 10
var config     = scale.up(_config)

var hosts  = [
	"192.168.1.2:4243",
	"192.168.1.3:4243",
	"192.168.1.4:4243",
	"/var/run/socket.sock"
]

describe('cccf-host-basic', function() {

	it('add a host field to each container', function() {
		var hosted = ch(config, hosts)
		assert(hosted instanceof Array)
		hosted.forEach(function(container) {
			// console.log(container.host)
			assert(hosts.indexOf(container.host) >=0)
		})
	})

	it('validates the cccf config', function() {
		try { ch({},[]) } catch(e) { assert(e instanceof cccf.exception) }
	})

})