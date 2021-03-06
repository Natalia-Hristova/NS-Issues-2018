"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imagepicker = require("nativescript-imagepicker");
var list;
var imageSrc;
function pageLoaded(args) {
    var page = args.object;
    list = page.getViewById("urls-list");
    imageSrc = page.getViewById("imageSrc");
}
exports.pageLoaded = pageLoaded;
function onSelectMultipleTap(args) {
    var context = imagepicker.create({ mode: "multiple" });
    startSelection(context, false);
}
exports.onSelectMultipleTap = onSelectMultipleTap;
function onSelectSingleTap(args) {
    var context = imagepicker.create({ mode: "single" });
    startSelection(context, true);
}
exports.onSelectSingleTap = onSelectSingleTap;
function startSelection(context, isSingle) {
    context
        .authorize()
        .then(function () {
        list.items = [];
        return context.present();
    })
        .then(function (selection) {
        console.log("Selection done:");
        selection.forEach(function (selected) {
            console.log("----------------");
            console.log("uri: " + selected.uri);
            if (isSingle) {
                selected.getImage({ maxWidth: 200, maxHeight: 200, aspectRatio: 'fill' })
                    .then(function (imageSource) {
                    imageSrc.src = imageSource;
                });
            }
            else {
                imageSrc.visibility = 'hidden';
            }
        });
        list.items = selection;
    }).catch(function (e) {
        console.log(e);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esc0RBQXdEO0FBRXhELElBQUksSUFBSSxDQUFDO0FBQ1QsSUFBSSxRQUFRLENBQUM7QUFFYixvQkFBMkIsSUFBZTtJQUN0QyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzdCLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFKRCxnQ0FJQztBQUVELDZCQUFvQyxJQUFJO0lBQ3BDLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUN2RCxjQUFjLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFIRCxrREFHQztBQUVELDJCQUFrQyxJQUFJO0lBQ2xDLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNyRCxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFIRCw4Q0FHQztBQUVELHdCQUF3QixPQUFPLEVBQUUsUUFBUTtJQUNyQyxPQUFPO1NBQ0YsU0FBUyxFQUFFO1NBQ1gsSUFBSSxDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsVUFBUyxTQUFTO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVMsUUFBUTtZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7cUJBQ3hFLElBQUksQ0FBQyxVQUFDLFdBQVc7b0JBQ2QsUUFBUSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUM7Z0JBQy9CLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLFFBQVEsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ25DLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDLENBQUMsQ0FBQztBQUNYLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XG5cbmxldCBsaXN0O1xubGV0IGltYWdlU3JjO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGxpc3QgPSBwYWdlLmdldFZpZXdCeUlkKFwidXJscy1saXN0XCIpO1xuICAgIGltYWdlU3JjID0gcGFnZS5nZXRWaWV3QnlJZChcImltYWdlU3JjXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25TZWxlY3RNdWx0aXBsZVRhcChhcmdzKSB7XG4gICAgbGV0IGNvbnRleHQgPSBpbWFnZXBpY2tlci5jcmVhdGUoeyBtb2RlOiBcIm11bHRpcGxlXCIgfSk7XG4gICAgc3RhcnRTZWxlY3Rpb24oY29udGV4dCwgZmFsc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25TZWxlY3RTaW5nbGVUYXAoYXJncykge1xuICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHsgbW9kZTogXCJzaW5nbGVcIiB9KTtcbiAgICBzdGFydFNlbGVjdGlvbihjb250ZXh0LCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRTZWxlY3Rpb24oY29udGV4dCwgaXNTaW5nbGUpIHtcbiAgICBjb250ZXh0XG4gICAgICAgIC5hdXRob3JpemUoKVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxpc3QuaXRlbXMgPSBbXTtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnByZXNlbnQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGlvbiBkb25lOlwiKTtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXJpOiBcIiArIHNlbGVjdGVkLnVyaSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzU2luZ2xlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLmdldEltYWdlKHsgbWF4V2lkdGg6IDIwMCwgbWF4SGVpZ2h0OiAyMDAsIGFzcGVjdFJhdGlvOiAnZmlsbCcgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGltYWdlU291cmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVNyYy5zcmMgPSBpbWFnZVNvdXJjZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmMudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGlzdC5pdGVtcyA9IHNlbGVjdGlvbjtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9KTtcbn0iXX0=