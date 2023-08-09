import { NgModule } from "@angular/core";
import { EnumToArrayPipe, EnumToArrayStringValuePipe } from "./enum-to-array.pipe";
const pipes = [
    EnumToArrayPipe,
    EnumToArrayStringValuePipe
];
@NgModule({
    declarations: [
        ...pipes
    ],
    exports: [
        ...pipes
    ]
})
export class SharedPipeModules { }