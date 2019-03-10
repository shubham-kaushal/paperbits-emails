/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by a Commercial license that can be found in the LICENSE file and at style-guidehttps://paperbits.io/license/mit.
 */

import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { EmailsWorkshop } from "./emails";
import { EmailDetailsWorkshop } from "./emailDetails";
import { EmailSelector } from "./emailSelector";

export class EmailWorkshopModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bind("emailsWorkshop", EmailsWorkshop);
        injector.bind("emailDetailsWorkshop", EmailDetailsWorkshop);
        injector.bind("emailSelector", EmailSelector);
    }
}