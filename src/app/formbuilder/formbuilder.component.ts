import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.scss']
})
export class FormbuilderComponent {
  fbTemplate!: HTMLElement | null;
  formbuilder: any;

  constructor() {  }

  ngOnInit(): void {
    this.initializeFormBuilder();
  }
 
  initializeFormBuilder() {


    var fields = [{
      label: "Emasil",
      type: "text",
      // subtype: "email",
      icon: "✉"
    }];

    this.fbTemplate = document.getElementById('fb-editor');
    this.formbuilder = $(this.fbTemplate).formBuilder(  {
      controlPosition: 'left',
      editOnAdd: true,
      scrollToFieldOnAdd: true,
      showActionButtons: false,
      fields
    });

   

    // $(this.fbTemplate).formBuilder({fields});
    // var header = function(text: any) {
    //   var h1 = document.createElement('h1');
    //   h1.appendChild(document.createTextNode(text))
    //   return h1;
    // };
  
    // var options = {
    //   prepend: header('Profile for Miss Marple'),
    //   append: '<h2>All information is confidential.</h2>'
    // };
    // $(this.fbTemplate).formBuilder(options);
  }

  submit(){
    console.log(this.formbuilder.formData);
  }
}