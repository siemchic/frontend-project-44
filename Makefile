install:
	npm ci install
	node bin/brain-games.js
publish:
	npm publish __dry-run
