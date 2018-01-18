"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var vm;
function navigatingTo(args) {
    var page = args.object;
    vm = new main_view_model_1.HelloWorldModel();
    page.bindingContext = vm;
}
exports.navigatingTo = navigatingTo;
function onFocus(args) {
    console.log("onFocus");
    if (vm.get("clr") === "red") {
        vm.set("clr", "blue");
    }
    else {
        vm.set("clr", "red");
    }
}
exports.onFocus = onFocus;
function onBlur(args) {
    console.log("onBlur");
    if (vm.get("clr") === "red") {
        vm.set("clr", "blue");
    }
    else {
        vm.set("clr", "red");
    }
}
exports.onBlur = onBlur;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscURBQW9EO0FBRXBELElBQUksRUFBRSxDQUFDO0FBRVAsc0JBQTZCLElBQWU7SUFDeEMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixFQUFFLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7SUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDN0IsQ0FBQztBQUpELG9DQUlDO0FBRUQsaUJBQXdCLElBQUk7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUd0QixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztBQUNMLENBQUM7QUFURCwwQkFTQztBQUVELGdCQUF1QixJQUFJO0lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7SUFFckIsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7QUFDTCxDQUFDO0FBUkQsd0JBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgSGVsbG9Xb3JsZE1vZGVsIH0gZnJvbSAnLi9tYWluLXZpZXctbW9kZWwnO1xuXG5sZXQgdm07XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICB2bSA9IG5ldyBIZWxsb1dvcmxkTW9kZWwoKTtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkZvY3VzKGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIm9uRm9jdXNcIilcblxuXG4gICAgaWYgKHZtLmdldChcImNsclwiKSA9PT0gXCJyZWRcIikge1xuICAgICAgICB2bS5zZXQoXCJjbHJcIiwgXCJibHVlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZtLnNldChcImNsclwiLCBcInJlZFwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkJsdXIoYXJncykge1xuICAgIGNvbnNvbGUubG9nKFwib25CbHVyXCIpXG5cbiAgICBpZiAodm0uZ2V0KFwiY2xyXCIpID09PSBcInJlZFwiKSB7XG4gICAgICAgIHZtLnNldChcImNsclwiLCBcImJsdWVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdm0uc2V0KFwiY2xyXCIsIFwicmVkXCIpO1xuICAgIH1cbn0iXX0=