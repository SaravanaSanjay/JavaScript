function toggleChildNodes() {
  var parent = document.getElementById("parent");
  var children = parent.getElementsByClassName("child");
  for (var i = 0; i < children.length; i++) {
      var child = children[i];
      if (child.style.display === "none") {
          child.style.display = "block";
      } else {
          child.style.display = "none";
      }
  }
}
// function toggleChildNodes(element) {
//   var childNodes = element.querySelectorAll('.grandchild');
//   for (var i = 0; i < childNodes.length; i++) {
//       var childNode = childNodes[i];
//       if (childNode.style.display === "none") {
//           childNode.style.display = "block";
//       } else {
//           childNode.style.display = "none";
//       }
//   }
// }