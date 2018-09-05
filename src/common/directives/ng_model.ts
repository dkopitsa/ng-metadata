import { Directive } from '../../core/directives/decorators';
import INgModelOptions = ng.INgModelOptions;

@Directive( { selector: '[ng-model]' } )
export abstract class NgModel implements ng.INgModelController {
  $viewValue: any;
  $modelValue: any;
  $parsers: ng.IModelParser[];
  $formatters: ng.IModelFormatter[];
  $viewChangeListeners: ng.IModelViewChangeListener[];
  $error: any;
  $name: string;
  $touched: boolean;
  $untouched: boolean;
  $validators: ng.IModelValidators;
  $asyncValidators: ng.IAsyncModelValidators;
  $pending: any;
  $pristine: boolean;
  $dirty: boolean;
  $valid: boolean;
  $invalid: boolean;

  $render(): void {
  }

  $setValidity( validationErrorKey: string, isValid: boolean ): void {
  }

  $setViewValue( value: any, trigger?: string ): void {
  }

  $setPristine(): void {
  }

  $setDirty(): void {
  }

  $validate(): void {
  }

  $setTouched(): void {
  }

  $setUntouched(): void {
  }

  $rollbackViewValue(): void {
  }

  $commitViewValue(): void {
  }

  $processModelValue(): void {
  }

  $overrideModelOptions(options: INgModelOptions): void {
  }

  $isEmpty( value: any ): boolean {
    return undefined;
  }
}
