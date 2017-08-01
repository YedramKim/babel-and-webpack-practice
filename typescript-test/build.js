var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = (function () {
    function a() {
    }
    return a;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(firstName, middleInitial, lastName) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.middleInitial = middleInitial;
        _this.lastName = lastName;
        _this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
        _this.num = 1;
        return _this;
    }
    return Student;
}(a));
function greater(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student('Jane', 'M.', 'User');
document.body.innerHTML = greater(user);
