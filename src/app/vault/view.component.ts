import * as template from './view.component.html';

import {
    Component,
    Input,
    OnChanges,
} from '@angular/core';

import { CipherService } from 'jslib/abstractions/cipher.service';

@Component({
    selector: 'app-vault-view',
    template: template,
})
export class ViewComponent implements OnChanges {
    @Input() cipherId: string;
    cipher: any;

    constructor(private cipherService: CipherService) {
    }

    async ngOnChanges() {
        const cipher = await this.cipherService.get(this.cipherId);
        this.cipher = await cipher.decrypt();
    }
}
