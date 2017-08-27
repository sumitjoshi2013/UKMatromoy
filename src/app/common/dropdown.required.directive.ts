import { Directive } from '@angular/core';
import { AbstractControl, ValidatorFn, Validator, FormControl, NG_VALIDATORS } from '@angular/forms';

//validation function
function validateDropdownFactory(): ValidatorFn {
    return (c: AbstractControl) => {
        let isValid = c.value !== null;

        if (isValid) {
            return null;
        }
        else {
            return {
                dropdownRequired: {
                    valid: false
                }
            };
        }
    }
}

@Directive({
    selector: '[dropdownRequired][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: DropdownRequired, multi: true }
    ]
})

export class DropdownRequired implements Validator {
    validator: ValidatorFn;

    constructor() {
        this.validator = validateDropdownFactory();
    }

    validate(c: FormControl) {
        return this.validator(c);
    }
}
