# My Portfolio
Website showcasing stuff I've made - [krthush.com](https://krthush.com/).

Feel free to use it for your work if you wish - give me a holla if you can!

It's a laravel app with a vue frontend - you can choose to just use the frontend on its own (its mostly bootstrap + css, and some basic js logic).

If you just want to quickly edit the links/text:

 - The header links are in [AppHeader.vue](resources/js/components/AppHeader.vue).
 - The welcome text and main content are in [TheWelcomeText.vue](resources/js/components/TheWelcomeText.vue) and [TheWelcomeContent.vue](resources/js/components/TheWelcomeContent.vue).
 - To add file download links use "/download/your_file.example" for the file link and put your_file.example in the /storage/app/files of your website where it is hosted.
 - To add video links use "/videos/your_video.mp4" for the the video link and put your_video.mp4 in the /public/videos of your website where it is hosted, please make sure it is an mp4 video.
