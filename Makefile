.PHONY: install build serve clean

build:
	npx webpack

install:
	npm install

serve:
	npx webpack serve

clean:
	rm -rf dist/

