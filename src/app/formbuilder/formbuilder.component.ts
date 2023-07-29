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
  formContainer: any;
  fbOptions!: { onSave: () => void; };
  formDynamic!: HTMLElement | null;

  templates: any = {
    user: [
      {
        type: "text",
        label: "Name:",
        subtype: "text",
        className: "form-control",
        name: "text-1475765723950"
      },
      {
        type: "text",
        subtype: "email",
        label: "Email:",
        className: "form-control",
        name: "text-1475765724095"
      },
      {
        type: "text",
        subtype: "tel",
        label: "Phone:",
        className: "form-control",
        name: "text-1475765724231"
      },
      {
        type: "textarea",
        label: "Short Bio:",
        className: "form-control",
        name: "textarea-1475765724583"
      }
    ],
    terms: [
      {
        type: "header",
        subtype: "h2",
        label: "Terms &amp; Conditions",
        className: "header"
      },
      {
        type: "paragraph",
        subtype: "p",
        label:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in libero quis nibh molestie dapibus. Integer pellentesque massa orci, quis posuere velit fermentum nec. Nullam arcu velit, ornare at urna non, viverra finibus lectus. Curabitur a dui non ipsum maximus faucibus. Quisque a justo purus. Donec volutpat sem vel bibendum pretium. Nulla neque ex, posuere semper urna in, molestie molestie tortor. Maecenas nec arcu sit amet nisl laoreet vestibulum. Cras placerat vulputate maximus. Phasellus ultricies, turpis et efficitur tristique, massa nibh sagittis libero, quis fringilla velit nisl eget augue. Praesent metus nibh, fermentum ut interdum at, lacinia sit amet mauris.",
        className: "paragraph"
      },
      {
        type: "checkbox",
        label: "I agree to the terms",
        className: "checkbox",
        name: "checkbox-1475766391803"
      }
    ],
    issue: [
      {
        type: "text",
        label: "Issue:",
        subtype: "text",
        className: "form-control",
        name: "text-1475766502491"
      },
      {
        type: "text",
        label: "Platform:",
        subtype: "text",
        className: "form-control",
        name: "text-1475766502680"
      },
      {
        type: "textarea",
        label: "Steps to Reproduce:",
        className: "form-control",
        name: "textarea-1475766579522"
      },
      {
        type: "file",
        label: "Screenshot:",
        className: "form-control",
        name: "file-1475766594420"
      },
      {
        type: "select",
        label: "Assign Developer:",
        className: "form-control",
        name: "select-1475766623703",
        multiple: true,
        values: [
          {
            label: "Adam",
            value: "option-1",
            selected: true
          },
          {
            label: "Adrian",
            value: "option-2",
            selected: false
          },
          {
            label: "Alexa",
            value: "option-3",
            selected: false
          },
          {
            label: "Amy",
            value: "",
            selected: false
          }
        ]
      }
    ]
  };

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
    this.formbuilder = $(this.fbTemplate).formBuilder({
      controlPosition: 'left',
      editOnAdd: true,
      scrollToFieldOnAdd: true,
      showActionButtons: false,
      fields
    });
    

    this.formContainer = document.getElementById('fb-rendered-form');
  
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
    $(this.fbTemplate).toggle();
    $(this.formContainer).toggle();

    $('form', this.formContainer).formRender({
      formData: this.formbuilder.formData
    });
  } 

  clear() {
    this.formbuilder.actions.clearFields();
  }

  chooseTemplate(e: any) {
    this.formbuilder.actions.setData(
      this.templates[e.target.value]
      );
  }
 
}