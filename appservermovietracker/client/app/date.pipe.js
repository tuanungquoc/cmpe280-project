System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var DatePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let DatePipe = class DatePipe {
                transform(value, args) {
                    var date = value instanceof Date ? value : new Date(value);
                    return date;
                }
            };
            DatePipe = __decorate([
                core_1.Pipe({
                    name: 'dateFormat'
                }), 
                __metadata('design:paramtypes', [])
            ], DatePipe);
            exports_1("DatePipe", DatePipe);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUNJLFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBVztvQkFDN0IsSUFBSSxJQUFJLEdBQUcsS0FBSyxZQUFZLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7WUFDTCxDQUFDO1lBVEQ7Z0JBQUMsV0FBSSxDQUFDO29CQUNGLElBQUksRUFBRSxZQUFZO2lCQUNyQixDQUFDOzt3QkFBQTtZQUVGLCtCQUtDLENBQUEiLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHR1YW51bmcgb24gNS8xMy8xNy5cbiAqL1xuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ2RhdGVGb3JtYXQnXG59KVxuXG5leHBvcnQgY2xhc3MgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJnczogYW55W10pOiBhbnkge1xuICAgICAgICB2YXIgZGF0ZSA9IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IHZhbHVlIDogbmV3IERhdGUodmFsdWUpO1xuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG59Il19
