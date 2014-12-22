var cccf = require('cccf')

module.exports = function(config, hosts) {
	config = cccf.validate((config instanceof Array) ? config : [config])
	return config.map(function(container, index) {
		container.host = hosts[index % hosts.length]
		return container
	})
}