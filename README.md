# Steps to Setup ReactApp Environment

> ### 1.1. download Nodejs of version (10.16.0LTS)

> > #### 1.1.1. use this link for (windows / MacOs) : [Nodejs](https://nodejs.org/en/)

> > #### 1.1.2. for linux by terminal.

> > > ##### 1. install wget.


	sudo apt install wget


> > > ##### 2. download NVM using wget.


	wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash


> > > ##### 3. Printout the list of all version of react


	nvm ls-remote


> > > ##### 4. select the version you want for nodejs and run command.

	nvm install 10.16.0

> > > ###### Note: To Check nodejs version run command.

	node -v

	npm -v //(this is a package install with nodejs. It is part of node ecosystem its version is 6.9.0).

> > > ###### Note: To uninstall Nodejs run this command.

	nvm deactivate

	nvm uninstall v10.16.0


> ### 1.2. download Yarn of version (1.16.0)

> > #### 1.2.1. Use this link for (windows/MacOs): [Yarn](https://yarnpkg.com/en/)

> > #### 1.2.2. for linux by terminal.

> > > ##### 1. install yarn using npm

	npm install -g yarn@1.16.0

> > > ##### 2. Check version of yarn

	yarn -v //(it should be 1.16.0 because it is used in this project.)

---

## 2. Creating a workspace

> ## 2.1.

	~ Desktop/react-project/mkdir AppName

	~ Desktop/react-project/cd AppName

> ### Note:
	1. In first command we are creating a workspace
	2. In second command we are nevigating inside workspace


> ## 2.2 Create public folder

	~ Desktop/react-project/AppName/mkdir public

> ### Note:
	public folder will contain all assets of our project.

> ## 2.3 Create index.html inside public folder

	create index.html inside the public folder

		index.html
		---------------------------------------------------

		<!DOCTYPE html>
		<html lang="en" dir="ltr">
    			<head>
        			<meta charset="utf-8">
        			<title>ReservoirApp</title>
    			</head>
    			<body>
					<!--- rendering from here-->
					<div id="root"></div>

					<!--- scripting from here-->
					<script src="/bundle.js"></script>
    			</body>
		</html>

-----

# 3. Developing workspace


> ## 3.1 Creating script folder with app.js

	~ Desktop/react-project/AppName/public/mkdir scripts

	~ Desktop/react-project/AppName/public/cd scripts

	~ Desktop/react-project/AppName/public/scripts

> ### Inside scripts folder create a app.js file

		app.js
		---------------------------------------------------------

			console.log("react is working");

			var template = <p>this is the first jsx</p>

			var approot = document.getElementById('root');

			ReactDOM.render(template,approot);


> > ### Note:
	the above program will cause error in console because the jsx we have used is not understandable by browser.

---

# 4. We are going to install preset we required in React

> ## 4.1 generate package.js file

	yarn init

> > ### Note: This command will ask you some information such as

			1. name(AppName): ReservoirApp
			2. version(1.0.0): 1.0.0
			3. description: live it
			4. entry point(index.js): live it
			5. reposiroty url: live it
			6. author: your name
			7. license (MIT): live it
			8. private: yes

> > ## Special Note: because of this command package.js file will be genrated.


> ## 4.2 genrate node_module in project

	yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

> > ### Note:

	this will download all preset related to babel in your project and yarn.lock file in project.


> # 4.3 create src folder with app.js file

	~ Desktop/react-project/AppName/mkdir src

	~ Desktop/react-project/AppName/src/

> > ### Inside src folder create a app.js file
> > ### Note: Cut the all data from "public/scripts/app.js" and copy to "src/app.js"

---

# 5. Integrating webpack

> ## 5.1 install the babel-cli again as local

	yarn add babel-cli@6.24.1


> ## 5.2 Add scripts object in package.js

		package.js
		-------------------------------------------------------
		{
			  "name": "ReservoirApp",
			  "version": "1.0.0",
			  "main": "index.js",
			  "author": "voiceverso",
			  "license": "MIT",
			  "private": true,

	manually	+	  "scripts":{
	added		+		      
	data		+	  },

			  "dependencies": {
			   "babel-cli": "6.24.1",
			   "babel-preset-env": "1.5.2",
			   "babel-preset-react": "6.24.1",
			   "live-server": "1.2.1"
  			}
		}



> ## 5.3 Install webpack localy

	yarn add webpack@4.33.0

> ## 5.4 Add webpack command into the package.js sctipts object

		package.js
		-------------------------------------

			  "scripts":{
	add		+	"build": "webpack --watch"
			  },

> ## 5.5 create a new file webpack.config.js

	~ Desktop/react-project/AppName/

> > ## make a file and put data give below

		webpack.config.js
		-----------------------------------
			const path = require('path');

			module.exports = {
    					mode:"development",
    					entry: './src/app.js',
    					output: {
        					path: path.join(__dirname,'public'),
        					filename: 'bundle.js'
    					}
			};


> ## 5.6 download npm react and react-dom

	yarn add react@16.8.6
	yarn add react-dom@16.8.6

> ##5.7 integrate babel with wabpack

	yarn add babel-core@6.24.1
	yarn add babel-loader@7.1.1

> ## 5.8 edit webpack.config.js


		webpack.config.js
		---------------------------------

			const path = require('path');

			module.exports = {
				    mode:"development",
				    entry: './src/app.js',
				    output: {
				        path: path.join(__dirname,'public'),
				        filename: 'bundle.js'
				    },
	->			    module: {
	->			        rules: [{
	->			            loader: 'babel-loader',
	->			            test: /\.js$/,
	->			            exclude:/node_modules/
	->			        }]
	->			    }
			};


> ## 5.9 Create a new file .babelrc

	~ Desktop/react-project/AppName/

> > ### make .babelrc file

		.babelrc
		--------------------

			{
				"presets":[
					"env",
					"react"
				]
			}

-----

# 6 Setup devlopment server

> ## 6.1 Install development server.

	yarn add webpack-dev-server@3.7.1

> ## 6.2 Configure development server in webpack.config.js file.

	webpack.config.js
	--------------------------------

	const path = require('path');

	module.exports = {
			mode:"development",
			entry: './src/app.js',
			output: {
				path: path.join(__dirname,'public'),
				filename: 'bundle.js'
			},
		    module: {
		        rules: [{
		            loader: 'babel-loader',
		            test: /\.js$/,
		            exclude:/node_modules/
		        }]
		    },
 ->			devServer{
 ->				contentBase:path.join(__dirname,'public')
 ->			}
	};

> ## 6.3 Add a script to run dev server in package.json file.

	Package.json
	---------------------------

	{
	  "name": "IndecisionApp",
	  "version": "1.0.0",
	  "main": "index.js",
	  "author": "rahul singh panwar",
	  "license": "MIT",
	  "private": true,
	  "scripts": {
  	    "build": "webpack",						<-
  		"dev-server": "webpack-dev-server"		<-
	  },
	  "dependencies": {
	    "babel-cli": "6.24.1",
	    "babel-core": "6.24.1",
	    "babel-loader": "7.1.1",
	    "babel-preset-env": "1.5.2",
	    "babel-preset-react": "6.24.1",
	    "react": "16.8.6",
	    "react-dom": "16.8.6",
	    "webpack": "3.1.0",
		"webpack-dev-server": "2.5.1"
	  }
	}

# 7 Integrating scss with React

> ## 7.1 install loaders.

	yarn add style-loader@0.18.2 css-loader@0.28.4

	yarn add sass-loader@6.0.6 node-sass@4.5.3

> ## 7.2 configure scss in webpack.config.js file.

	webpack.config.js
	----------------------
	const path = require('path');

			module.exports = {
				    entry: './src/app.js',
				    output: {
				        path: path.join(__dirname,'public'),
				        filename: 'bundle.js'
				    },
				    module: {
				        rules: [{
				            loader: 'babel-loader',
				            test: /\.js$/,
				            exclude:/node_modules/
				        },
	->						{
	->							test:/\.s?css/,
	->							use:[
	->								'style-loader',
	->								'css-loader',
	->								'sass-loader'
	->							]
	->						}
					  ]
				    },
					devServer:{
						contentBase:path.join(__dirname,'public')
					}
			};


--------

# 8. Command to run dev-server

		yarn run dev-server

# 9. Command to build bundle.js

		yarn run build
