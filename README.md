Miiri-Foro, Inc - Keneya Project
=====================================

Get source code
---------------

* Ask/email admin@keneya.com to invite you to the Miiri-Foro Slack team

* Join the Keneya Channel: https://miiri-foro.slack.com/messages/keneya/

* You can install various Desktop or Mobile Apps for Slack here: https://slack.com/downloads

* Create a Github account if you don't already have one: http://github.com

* Ask/email admin@keneya.com to share the Keneya project on Github with you. Provide your Github username

* Once you have been granted access, you should be able to view the [Keneya project](https://github.com/miiri-foro/keneya)

* Test that your Github account is accessible from your local machine
        `ssh -T git@github.com`

* If the GitHub SSH test was successful. You can skip to the step to create your own branch. 

* If the GitHub SSH test was not successful, you probably need to setup your ssh key pair (if you don't already have one). Remember the passphrase that you will define here (provide your actual email address):
	`ssh-keygen -t rsa -C "your_email@example.com"`

* Upload your ssh public key onto Github:
	* Copy your public key to your clipboard: `pbcopy < ~/.ssh/id_rsa.pub`
	* Open your [Github Account Settings](https://github.com/settings)
	* Click "SSH Keys" in the left sidebar
	* Click "Add SSH key"
	* Paste your key into the "Key" field
	* Click "Add key"
	* Confirm the action by entering your GitHub password

* Test that your Github account is accessible from your local machine
        `ssh -T git@github.com`

* Set up Git on your local machine (if Mac OS X - otherwise visit https://help.github.com/articles/set-up-git)
	* Install latest version from http://git-scm.com/downloads
	* Define the default git name: `git config --global user.name "Firstname Lastname"`
	* Define the default git email: `git config --global user.email "your_email@example.com"`
	* Add colors to git: `git config --global color.ui true`
	* Define the default git push action: `git config --global push.default simple`
	* To prevent GitHub from asking you the GitHub username/password multiple times, you can cache these credentials: 
		* If this command prints a "usage" message, nothing else is needed for caching: `git credential-osxkeychain`
		* Otherwise, continue here : 
			* `curl -s -O http://github-media-downloads.s3.amazonaws.com/osx/git-credential-osxkeychain`
			* `chmod u+x git-credential-osxkeychain`
			* `sudo mv git-credential-osxkeychain "$(dirname $(which git))/git-credential-osxkeychain"`
	* Install the Perforce diff/merge tool (not completed yet)
		* Download [P4Merge](http://www.perforce.com/downloads/free/p4merge)
		* ...

* Set up your local Keneya repository (this will point to your personal branch)
	* Checkout the `master` branch of the Keneya project

	```
	$ mkdir -p ~/dev/git
	$ cd ~/dev/git
	$ git clone https://github.com/miiri-foro/keneya.git
	$ cd keneya
	```

	* Create your own branch for the remote Keneya repository (replace `myName` with your actual name): 

	```
	$ git checkout -b keneya-myName
	$ git push --set-upstream origin keneya-myName
	```

Build source code
---------------
* Install the Play framework with Homebrew on Mac OS X (`su` to a non-root user with Administrator privileges)

	* Install Homebrew
	```
	$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
        $ echo 'export PATH="/usr/local/bin:/usr/local/sbin:$PATH"' >> ~/.bash_profile
        $ brew tap homebrew/versions
	```

	* Verify Homebrew installation by running these commands:
	`$ brew doctor` before you install anything
	`$ brew help` to get started
	
	* Install Java
	```
	$ brew install Caskroom/cask/java
	```

	* Install TypeSafe Activator
	`$ brew install typesafe-activator`

	* Verify that TypeSafe Activator is successfully installed

	`$ activator help`

* Install MySQL (make sure that you "tapped" the `homebrew/versions` repository from the previous steps)
    	```
	$ brew install mysql55`
    	$ brew link --force mysql55`
    	```
    * To start MySQL manually: `$ mysql.server start`
    * To configure MySQL to start on systerm startup: `$ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mysql55.plist`
    * To configure the MySQL root password to be "password": `$ mysqladmin -u root password password`

* Launch your local Keneya server: http://localhost:9000

	*

	```
	$ cd  ~/dev/git/keneya/keneya-play
	$ activator clean compile run
	```

	* Bravo! Your local Keneya website is running here: http://localhost:9000. 
	* Click on "Apply this script now!" to create your ephemeral/in-memory database.
	* To run "keneya-play" from the command line, "cd keneya-play" then:
	`keneya-play$ activator run`

	* To run the test for "keneya-play" from the command line:
	`keneya-play$ activator test`

	* To run the Activator UI for "keneya-play" from the command line:
	`keneya-play$ activator ui`


* Install the "ScalaIDE for Eclipse" bundle
	* Download ScalaIDE from http://scala-ide.org/download/sdk.html (64 bit version if possible)
	* Install ScalaIDE inside your dev workspace

	```
	$ cd ~/dev
	$ mv ~/Downloads/scala-SDK-*.zip ~/dev/.
	$ unzip ~/dev/scala-SDK-*.zip
	$ rm ~/dev/scala-SDK-*.zip
	```
	* Open/click the eclipse app from `~/dev/eclipse`
	* Set your initial eclipse workspace to `/Users/<Your local username>/dev/eclipseworkspace`

* Import the Keneya project into Eclipse

        * Add the SBT eclipse plugin to your global plugin definition file (if not already there
        ```
        $ mkdir ~/.sbt/0.13/plugins
        $ echo 'addSbtPlugin("com.typesafe.sbteclipse" % "sbteclipse-plugin" % "4.0.0")' | tee ~/.sbt/0.13/plugins/plugins.sbt
        ```
        
	* Create the Eclipse project files

	```
	$ cd ~/dev/git/keneya/keneya-play
	$ activator clean compile
	$ activator eclipse -Dwith-source=true
	```
	
	* Import the created project files into Eclipse
		* From the Eclipse menu bar, click on *File >> Import ... >> General >> Existing Projects Into Workspace*
		* Click on "Next"
		* Make sure that the the radio button option "Select root directory" is selected
		* Click on "Browse..." then
		* Browse to `/Users/<Your local username>/dev/git/keneya/keneya-play`
		* Click "Open"
		* A new project "keneya-play" should appear in the list of projects in eclipse. Click on "Finish"


Pushing your changes to the repository
--------------------------------------
* Go to the Keneya directory on your computer if you are not already there by (and make sure your changes are saved):

	```
	$ cd ~/dev/git/keneya/keneya-play
	```
* To see the files that you modified in the project:
	```
	$ git status
	```
* To see the difference between your current version and the version before your edits:
	```
	$ git diff
	```
* To add your changes to stage
	* If you want to only add a specific file:
	```
	$ git add <filename>
	```
	* If you want to add all the changes you have made at once:
	```
	$ git add .
	```
* To see the changes you have made to stage
	```
	$ git status
	```
* To commit your changes (make sure to add a brief message explaining your changes)
	```
	$ git commit -m "Here you should write something explaining the changes you made to the project"
	```
	* Use this to see the changes you just committed
	```
	$ git status
	```
* To see a list of all the commits made to your local repository use the below command (then press 'q' to quit the view):
	```
	$ git log
	```
* To send the changes (that you just added and committed to your local repository) to github.com 
	```
	$ git push
	```
* Now, refer to the "How to create a pull request" section below so the admin can review and add your changes


How to create a pull request 
--------------------------------------
* Refresh your 'github.com' page
* Go to your `github.com/miiri-foro/keneya` page
* On the right side of the screen, click on "Pull Requests"
* On the right side of that screen, click "New Pull Request"
* On the left side of the screen, click "Create Pull Request"
* Edit the "Title" section if you will
* Click "Send pull request"
	* If you had multiple commits, you might be asked to merge your pull requests (let the admin do this)

Testing your code
--------------------------------------
* To run a Junit test in ScalaIDE
	* Select the name of the test (in the .scala file)
	* Click `option+Cmd+X` (for mac) and then `T`
* To run all the existing tests from the command line
	```
	$ cd ~/dev/git/keneya/keneya-play
	$ activator clean compile test
	```

Running a local ngrok tunnel to Twilio
--------------------------------
* Installation using Homebrew
	```
	$ brew install ngrok
	```
* Manual installation
	* Download [ngrok](http://ngrok.com) for your specific environment
	* Unzip it: 
		* `$ unzip ~/Downloads/ngrok.zip`
		* `$ sudo cp ngrok /usr/local/bin/.`
		* `$ rm ngrok`
* Start your on-demand tunnel over your local port 9000: `$ ngrok -authtoken lHuMwa3q4i-tbZcBFipl -subdomain Keneya 9000`
* You should see something like this confirming that your local website is accessible from http://keneya.ngrok.com:

	```
	ngrok
	Tunnel Status                 online                                                                                                                                    
	Version                       1.6/1.5                                                                                                                               
	Forwarding                    http://keneya.ngrok.com -> 127.0.0.1:9000
	Forwarding                    https://keneya.ngrok.com -> 127.0.0.1:9000
	Web Interface                 127.0.0.1:4040                                                                                      
	# Conn                        141                                                                                                                               
	Avg Conn Time                 14.50ms
	```

Sources:
--------

* [Create/upload ssh key pairs into Github](https://help.github.com/articles/generating-ssh-keys)

* [Fork a repo](https://help.github.com/articles/fork-a-repo)

* [Pull requests](https://help.github.com/articles/using-pull-requests)

* [LocalTunnel](http://progrium.com/localtunnel)


