export interface Video {
  name: string;
  title: string;
  icon: string;
  mime: string;
  url: string;
}

export class Video implements Video {
  name: string;
  title: string;
  icon: string;
  mime: string;
  url: string;

  constructor(name: string, title: string, icon: string, mime: string, url: string) {
    this.name = name;
    this.title = title;
    this.icon = icon;
    this.mime = mime;
    this.url = url;
  }
}

