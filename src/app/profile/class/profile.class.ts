export class Profile {

    private static pathIcons = './assets/icons/';
    private static pathProfileIcons = './assets/icons/profile/';


    static getSocialMediaItems(): any {

        return [
            {
              'url': '',
              'icon': this.pathIcons + 'iconfinder_github_icon.svg'
            },
            {
              'url': '',
              'icon': this.pathIcons + 'iconfinder_linkedin_icon.svg'
            },
            {
              'url': '',
              'icon': this.pathIcons + 'iconfinder_phone_icon.svg'
            },
            {
              'url': '',
              'icon': this.pathIcons + 'iconfinder_gmail_icon.svg'
            }
          ];
    }

    static getInformationItems(): any {
        return [
            {
              'icon': this.pathProfileIcons + 'java_icon.svg',
              'title': 'Java'
            },
            {
              'icon': this.pathProfileIcons + 'angular_icon.svg',
              'title': 'Angular'
            },
            {
              'icon': this.pathProfileIcons + 'typescript_icon.svg',
              'title': 'Typescript'
            },
            {
              'icon': this.pathProfileIcons + 'html_icon.svg',
              'title': 'HTML'
            },
            {
              'icon': this.pathProfileIcons + 'css_icon.svg',
              'title': 'CSS'
            },
            {
              'icon': this.pathProfileIcons + 'bootstrap_icon.svg',
              'title': 'Bootstrap'
            },
            {
              'icon': this.pathProfileIcons + 'git_icon.svg',
              'title': 'Git'
            },
          ];
        }
}