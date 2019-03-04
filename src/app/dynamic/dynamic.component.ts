import { Component, ComponentFactoryResolver, Input, ReflectiveInjector, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent {

  currentComponent = null;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

  @Input() set componentData(data: { component: any, inputs: any }) {
    if (!data) {
      return;
    }

    let inputProviders = [];
    if (data.inputs) {
      inputProviders = Object.keys(data.inputs)
        .map((inputName) => {
          return {
            provide: inputName,
            useValue: data.inputs[inputName]
          };
        });
    }
    const resolvedInputs = ReflectiveInjector.resolve(inputProviders);

    const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);

    const factory = this.componentFactoryResolver.resolveComponentFactory(data.component);

    const component = factory.create(injector);

    this.dynamicComponentContainer.insert(component.hostView);

    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    this.currentComponent = component;
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

}