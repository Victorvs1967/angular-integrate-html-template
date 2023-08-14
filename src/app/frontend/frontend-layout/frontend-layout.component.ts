import { Component } from '@angular/core';
import "../../../assets/frontend/js/jquery.js";
import "../../../assets/frontend/js/jquery.easing.1.3.js";
import "../../../assets/frontend/js/bootstrap.min.js";
import "../../../assets/frontend/js/jquery.fancybox.pack.js";
import "../../../assets/frontend/js/jquery.fancybox-media.js";
import "../../../assets/frontend/js/portfolio/jquery.quicksand.js";
import "../../../assets/frontend/js/portfolio/setting.js";
import "../../../assets/frontend/js/jquery.flexslider.js";
import "../../../assets/frontend/js/animate.js";
import "../../../assets/frontend/js/custom.js";
import "../../../assets/frontend/js/owl-carousel/owl.carousel.js";

@Component({
  selector: 'app-frontend-layout',
  templateUrl: './frontend-layout.component.html',
  styleUrls: ['./frontend-layout.component.sass']
})
export class FrontendLayoutComponent {

  loadScripts(path: string) {
    let node = document.createElement('script');
    node.src = path;
    node.type = 'text/javascript';
    node.async = true;
    node.charset ='utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

}
