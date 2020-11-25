export interface Link {
  displayName: string;
  href: string;
}

export class Link implements Link {
  displayName: string;
  href: string;

  constructor(displayName: string, href: string) {
    this.displayName = displayName;
    this.href = href;
  }
}
