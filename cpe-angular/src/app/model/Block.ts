export interface Block {
  blockName: string;
  attrs: object;
}

export class Block implements Block {
  blockName: string;
  attrs: object;

  constructor(blockName: string, attrs: object) {
    this.blockName = blockName;
    this.attrs = attrs;
  }
}
