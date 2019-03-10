/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by a Commercial license that can be found in the LICENSE file and at style-guidehttps://paperbits.io/license/mit.
 */

import { WidgetModel } from "@paperbits/common/widgets";

export class ColumnModel implements WidgetModel {
    public widgets: WidgetModel[];
    public size: string;
    public alignment: string;
    public styles: Object;

    constructor() {
        this.widgets = [];
        this.alignment = "top left";
    }
}