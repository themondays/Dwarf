# Dwarf Redmine Theme
Public Version 1.0.0

### Inception
Hey folks!

Let's say "hello" to my Redmine theme. I developed this theme to fit large screens - screens over 1600 pixels width. I've used this theme for about two years and it's still in development - it's hard to make it pixel-perfect, so all fixes, PR and improvements welcomed. Overall scripts SCSS and JS not really clear.

### How it works?
1. Dwarf theme built responsive and support HD screens between 1600 and 1920.
2. In HD mode theme navigation transforms to a sidebar.

![Dwarf Projects Index](https://www.redmine.org/attachments/download/15177/dwarf-imac-small.png)

### Issues List
Below you can see how's list of issues will looks with Dwarf. Almost everything managed with CSS so there's many pseudo-elements which
contain custom icons, blocks and content also.

![Dwarf Projects Issues Index](https://www.redmine.org/attachments/download/15178/dwarf-theme-issues-view.png)

### Issue Card
I decided to split content inside issue to have two different content areas for input and progression.

![Dwarf Projects Issue Card](https://www.redmine.org/attachments/download/15179/dwarf-theme-issue-card.png)

### Add a New Issue
I've used Chosen jQuery Plugin for transforming dropdowns to something responsive and useful. Hope it will works on your side.

![Dwarf Projects New Issue](https://www.redmine.org/attachments/download/15180/dwarf-theme-new-issue.png)

### Single Project Overview
Well this thing looks typical.

![Dwarf Projects Overview](https://www.redmine.org/attachments/download/15181/dwarf-theme-project-view.png)

### Installation
1. Copy  ```production/dwarf directory``` to the Redmine's ```/public/themes``` directory on your Redmine instance. Basically you should have something like that /public/themes/dwarf
2. Restart Redmine instance.
3. Activate theme inside settings.

If after Redmine instance restart theme didn't appear in your list, please ensure that theme stylesheet available at the following location `/public/themes/dwarf/stylesheets/application.css`

### Settings
At this moment there's no additional settings for theme, so everything you can manage - located inside stylesheets and javascript.

### Additional thanks to:
* [jQuery.Chosen] - by [Harvest]
* [FontAwesome] - by [Dave Gandy]
* [Login Image] - Unsplash

### License
This plugin is available under [CC-BY 3.0]

Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

### Project locations
* [Project page on GitHub]
* [Project page]
* [Bring me a coffee]

In case you find something inappropriate or I forgot to mention someone please touch base with me and we will fix it.

Developed by [Jared Denison] in 2014.

[Project page on GitHub]:https://github.com/themondays/redmine_worktime_log
[Project page]:http://themondays.ca/redmine/plugins/worktimelog/
[Bring me a coffee]:http://themondays.ca/coffee/
[Jared Denison]:http://themondays.ca
[project-manager]:https://github.com/websightdesigns/project-manager/blob/master/README.md
[websightdesigns]:https://github.com/websightdesigns/project-manager/blob/master/README.md
[jQuery.Chosen]:http://harvesthq.github.io/chosen/
[Harvest]:http://www.getharvest.com/
[Dave Gandy]:http://twitter.com/davegandy
[FontAwesome]:http://fontawesome.io
[Login Image]:http://unsplash.com
[CC-BY 3.0]:http://creativecommons.org/licenses/by/3.0/

### Changelog

#### Rev. 1.0.0
* Public release
