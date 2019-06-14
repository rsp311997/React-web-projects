# Steps to Setup ReactApp Environment
##1. To SettingUp Enviroment for react. (we have to download two tools)
###>1.1. download Nodejs of version (10.16.0LTS)
###>>1.1.1. use this link for (windows / MacOs) : https://nodejs.org/en/

		1.1.2. for linux by terminal.
			1. install wget.

				sudo apt install wget

			2. download NVM using wget.

				wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash


			3. Printout the list of all version of react

				nvm ls-remote

			4. select the version you want for nodejs and run command.

				nvm install 10.16.0

			Note: To Check nodejs version run command.

				node -v

				npm -v //(this is a package install with nodejs. It is part of node ecosystem its version is 6.9.0).

			Note: To uninstall Nodejs run this command.

				nvm deactivate

				nvm uninstall v10.16.0


	1.2. download Yarn of version ()
		1.2.1. Use this link for (windows/MacOs): https://yarnpkg.com/en/

		1.2.2. for linux by terminal.
			1. install yarn using npm

				npm install -g yarn@1.16.0

			2. Check version of yarn

				yarn -v //(it should be 1.16.0 because it is used in this project.)


+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

2. Creating a workspace

	2.1. Into our virtual Enviroment "voiceverso_section2".


		~ Desktop/reservoir/voiceverso_section2/mkdir ReservoirApp

		~ Desktop/reservoir/voiceverso_section2/cd ReservoirApp

	Note:
	1. In first command we are creating a workspace in side virtualEnvironment.
	2. In second command we are nevigating inside workspace "ReservoirApp".


	2.2 Create public folder

		~ Desktop/reservoir/voiceverso_section2/ReservoirApp/mkdir public

		Note: public folder will contain all assets of our project.

	2.3 Create index.html

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
        			this is my first html page.
    			</body>
		</html>


+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

3. SetUp live server for temperory perpose

	3.1 Install live-server using npm tool

		npm install -g live-server@1.2.1

	3.2 To run your server and see output

		~ Desktop/reservoir/voiceverso_section2/ReservoirApp/live-server public

		Note: this live server automatically finds index.html file in public folder and host it at "localhost:8080" or "127.0.0.1:8080".

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

4. Temparory REACT and REACTDOM using cdn intigrity

	4.1 integrating REACT and REACTDOM in index.html

		index.html
		-------------------------------------------------------------
			<!DOCTYPE html>
			<html lang="en" dir="ltr">
				<head>
				        <meta charset="utf-8">
				        <title></title>
			       </head>

			       <body>
			            <!--- rendering from here-->
			            <div id="root"></div>

			            <!--- scripting from here-->
			            <script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
			            <script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
			            <script src="/scripts/app.js"></script>
			     </body>
			</html>

	4.2 Creating script folder with app.js

		~ Desktop/reservoir/voiceverso_section2/ReservoirApp/public/mkdir scripts

		~ Desktop/reservoir/voiceverso_section2/ReservoirApp/public/cd scripts

		~ Desktop/reservoir/voiceverso_section2/ReservoirApp/public/scripts

		Inside scripts folder create a app.js file

		app.js
		---------------------------------------------------------

			console.log("react is working");

			var template = <p>this is the first jsx</p>

			var approot = document.getElementById('root');

			ReactDOM.render(template,approot);


		Note: the above program will cause error in console because the jsx we have used is not understandable by browser.


	4.3 install babel compiler to compile jsx into javascript

		npm install -g babel-cli@6.24.1

		To test command
			babel --help


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

5. We are going to install preset we required in React

	5.1 generate package.js file

		yarn init

		Note: This command will ask you some information such as

			1. name(ReservoirApp): ReservoirApp
			2. version(1.0.0): 1.0.0
			3. description: live it
			4. entry point(index.js): live it
			5. reposiroty url: live it
			6. author: voiceverso
			7. license (MIT): live it
			8. private: yes

		Special Note: because of this command package.js file will be genrated.


	5.2 genrate node_module in project

		yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

		Note: this will download all preset related to babel in your project and yarn.lock file in project.


	5.3 create src folder with app.js file

		~ Desktop/reservoir/voiceverso_section2/ReservoirApp/mkdir src

		~ Desktop/reservoir/voiceverso_section2/ReservoirApp/src/

		Note: In src create a file app.js


		And cut the all data from "public/scripts/app.js" and copy to "src/app.js"

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

6. Run babel and server simultaniously

	6.1 To get the JSX code as input from (src/app.js) and give javascript code as output in (public/scripts/app.js).

		babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

		Note:
		1. This command will provide babel its into file path and output file path.
		2. This command will help babel to use its preset.
		3. This command will guide babel to compile the input code at every change.

	6.2 Open two terminal

		1. terminal first

			live-server public

		2. terminal second

			babel src/app.js --out-file=public/scripts/app.js --preset=env,react --watch

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

7. Integrating webpack

	7.1 uninstall live-server and babel-cli

		npm uninstall -g live-server babel-cli

	7.2 install the babel-cli again as local

		yarn add live-server@1.2.1 babel-cli@6.24.1


	7.3 Add scripts object in package.js

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
added		+		      "server": "live-server public/",
		+		       "build": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"
data		+	  },

			  "dependencies": {
			   "babel-cli": "6.24.1",
			   "babel-preset-env": "1.5.2",
			   "babel-preset-react": "6.24.1",
			   "live-server": "1.2.1"
  			}
		}



	7.4 Install webpack localy

		yarn add webpack@4.33.0

	7.5 Add webpack command into the package.js sctipts object

		package.js
		-------------------------------------

			  "scripts":{
				      "server": "live-server public/",
add		+			"build": "webpack --watch",
update		+		       "build-babel": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"
			  },


	7.6 create a new file webpack.config.js

		~ Desktop/Reservoir/ReservoirApp/

		make a file and put data give below

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




	7.7 Remove script from index.html

		remove:-
		     <script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
            	     <script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>

		update:-
		     <script src="public/bundle.js"></script>



	7.8 download npm react and react-dom

		yarn add react@16.8.6
		yarn add react-dom@16.8.6

	7.9 integrate babel with wabpack

		yarn add babel-core@6.24.1
		yarn add babel-loader@8.0.6

	7.10 edit webpack.config.js


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
				    module: {
				        rules: [{
				            loader: 'babel-loader',
				            test: /\.js$/,
				            exclude:/node_modules/
				        }]
				    }
			};


	7.11 Create a new file .babelrc

		~ Desktop/Reservoir/ReservoirApp/

		make .babelrc file

		.babelrc
		--------------------

			{
				"preset":[
					"env",
					"react"
				]
			}
