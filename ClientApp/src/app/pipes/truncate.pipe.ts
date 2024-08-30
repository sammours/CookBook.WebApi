import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate',
    standalone: true
})
export class TruncatePipe implements PipeTransform {
    transform(value: string, len: number = 50): string {
        if (value === undefined || value === '') {
            return '';
        }

        if (value.length > len) {
            return value.substring(0, len) + '...';
        }

        return value;
    }
}