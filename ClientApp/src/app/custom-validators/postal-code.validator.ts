import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function germanPostalCodeValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
        const acceptedPostalCodes = [
            '71000',
            '71100',
        ];

        const value = control.value;
        if (!value) {
            return {postalCode: true };
        }

        const foundCode = acceptedPostalCodes.find(acceptedPostalCode => acceptedPostalCode === value);
        if (foundCode !== undefined) {
            // es wurde gefunden
            return null;
        } else {
            return {postalCode: true };
        }
    }
}