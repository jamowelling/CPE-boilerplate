import {Component, OnInit, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { ActivatedRoute } from '@angular/router';
import {ImageContentBlockComponent} from "../image-content-block/image-content-block.component";

@Component({
  selector: 'app-page-component',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  @Input() preview: any;
  @ViewChild("container", { read: ViewContainerRef }) container;

  private page_id: any;
  public page: any;
  constructor(private api: RestApiService, private route: ActivatedRoute, private resolver: ComponentFactoryResolver) {
    if (this.route.snapshot.params) {
      this.page_id = this.route.snapshot.params.id;
    }
  }

  ngOnInit(): void {
    if (this.preview) {
      this.page = this.preview;
      if (this.page.blocks) {
        for (const block of this.page.blocks) {
          let factory = null;
          if (block.blockName) {
            switch (this.pascalCase(block.blockName.replace('cgb/', '')) + 'Component') {
              case 'ImageContentBlockComponent':
                factory = this.resolver.resolveComponentFactory(ImageContentBlockComponent);
                break;
            }
            Object.assign(this.container.createComponent(factory).instance, block.attrs);
          }
        }
      }
    } else {
      this.api.getPageBySlug(this.page_id).subscribe((data) => {
        this.page = data[0];
      });
    }
  }

  pascalCase(str): string {
    return str.replace(/\w+/g, w => w[0].toUpperCase() + w.slice(1)).replaceAll('-', '');
  }
}
