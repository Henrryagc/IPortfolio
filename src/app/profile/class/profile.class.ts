export class Profile {

  private static pathIcons = './assets/icons/';
  private static pathProfileIcons = './assets/icons/profile/';


  static getSocialMediaItems(): any {

    return [
      {
        'url': 'https://github.com/Henrryagc',
        'icon': this.pathProfileIcons + 'github-original-wordmark.svg'
      },
      {
        'url': 'https://www.linkedin.com/in/henrryagc/',
        'icon': this.pathProfileIcons + 'linkedin-plain.svg'
      },
      {
        'url': 'https://api.whatsapp.com/send?phone=+51927970759&text=Hola%20Henrry%2C%20te%20contacto%20a%20trav%C3%A9s%20de%20tu%20portafolio',
        'icon': this.pathProfileIcons + 'phone-rounded-svgrepo-com.svg'
      },
      {
        'url': 'mailto:contact@henrryagc.dev',
        'icon': this.pathProfileIcons + 'google-gmail-svgrepo-com.svg'
      }
    ];
  }

  static getInformationItems(): any {
    return [
      {
        category: 'Backend',
        items: [
          { 'icon': this.pathProfileIcons + 'java-plain.svg', 'title': 'Java' },
          { 'icon': this.pathProfileIcons + 'spring-original-wordmark.svg', 'title': 'Spring Boot' },
          { 'icon': this.pathProfileIcons + 'csharp-plain.svg', 'title': 'C#' },
          { 'icon': this.pathProfileIcons + 'dotnetcore-plain.svg', 'title': '.NET Core' },
          { 'icon': this.pathProfileIcons + 'python-plain.svg', 'title': 'Python' },
          { 'icon': this.pathProfileIcons + 'fastapi-plain.svg', 'title': 'FastAPI' },
          { 'icon': this.pathProfileIcons + 'flask-original-wordmark.svg', 'title': 'Flask' },
          { 'icon': this.pathProfileIcons + 'nodejs-plain.svg', 'title': 'Node.js' },
          { 'icon': this.pathProfileIcons + 'bun-line.svg', 'title': 'Bun' }
        ]
      },
      {
        category: 'Frontend',
        items: [
          { 'icon': this.pathProfileIcons + 'angular-plain.svg', 'title': 'Angular' },
          { 'icon': this.pathProfileIcons + 'angularmaterial-plain.svg', 'title': 'Angular Material' },
          { 'icon': this.pathProfileIcons + 'typescript-plain.svg', 'title': 'TypeScript' },
          { 'icon': this.pathProfileIcons + 'javascript-plain.svg', 'title': 'JavaScript' },
          { 'icon': this.pathProfileIcons + 'html5-plain.svg', 'title': 'HTML5' },
          { 'icon': this.pathProfileIcons + 'css3-plain.svg', 'title': 'CSS3' },
          { 'icon': this.pathProfileIcons + 'bootstrap-plain.svg', 'title': 'Bootstrap' },
          { 'icon': this.pathProfileIcons + 'svelte-plain.svg', 'title': 'Svelte' },
          { 'icon': this.pathProfileIcons + 'vitejs-plain.svg', 'title': 'Vite' }
        ]
      },
      {
        category: 'Mobile & Desktop',
        items: [
          { 'icon': this.pathProfileIcons + 'kotlin-plain.svg', 'title': 'Kotlin' },
          { 'icon': this.pathProfileIcons + 'jetpackcompose-line.svg', 'title': 'Jetpack Compose' },
          { 'icon': this.pathProfileIcons + 'android-plain.svg', 'title': 'Android' }
        ]
      },
      {
        category: 'Databases',
        items: [
          { 'icon': this.pathProfileIcons + 'mysql-plain-wordmark.svg', 'title': 'MySQL' },
          { 'icon': this.pathProfileIcons + 'postgresql-plain-wordmark.svg', 'title': 'PostgreSQL' },
          { 'icon': this.pathProfileIcons + 'mariadb-original-wordmark.svg', 'title': 'MariaDB' },
          { 'icon': this.pathProfileIcons + 'sqlite-plain.svg', 'title': 'SQLite' },
          { 'icon': this.pathProfileIcons + 'entityframeworkcore-line.svg', 'title': 'Entity Framework' }
        ]
      },
      {
        category: 'DevOps & Tools',
        items: [
          { 'icon': this.pathProfileIcons + 'docker-plain.svg', 'title': 'Docker' },
          { 'icon': this.pathProfileIcons + 'kubernetes-plain.svg', 'title': 'Kubernetes' },
          { 'icon': this.pathProfileIcons + 'jenkins-line.svg', 'title': 'Jenkins' },
          { 'icon': this.pathProfileIcons + 'git-plain-wordmark.svg', 'title': 'Git' },
          { 'icon': this.pathProfileIcons + 'github-original-wordmark.svg', 'title': 'GitHub' },
          { 'icon': this.pathProfileIcons + 'gitlab-plain-wordmark.svg', 'title': 'GitLab' },
          { 'icon': this.pathProfileIcons + 'bash-original.svg', 'title': 'Bash' },
          { 'icon': this.pathProfileIcons + 'linux-plain.svg', 'title': 'Linux' },
          { 'icon': this.pathProfileIcons + 'nginx-original.svg', 'title': 'Nginx' }
        ]
      },
      {
        category: 'Data Science & Others',
        items: [
          { 'icon': this.pathProfileIcons + 'jupyter-plain-wordmark.svg', 'title': 'Jupyter' },
          { 'icon': this.pathProfileIcons + 'pandas-plain-wordmark.svg', 'title': 'Pandas' },
          { 'icon': this.pathProfileIcons + 'numpy-original.svg', 'title': 'NumPy' },
          { 'icon': this.pathProfileIcons + 'matplotlib-plain.svg', 'title': 'Matplotlib' },
          { 'icon': this.pathProfileIcons + 'rxjs-plain.svg', 'title': 'RxJS' }
        ]
      }
    ];
  }
}