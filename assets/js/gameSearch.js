document.getElementById('gameSearch').addEventListener('input', function() {
  var filter = this.value.toLowerCase();
  var directories = document.querySelectorAll('#gamesList > .directory');
  var anyDirVisible = false;
  directories.forEach(function(dir) {
    var anyVisible = false;
    var items = dir.querySelectorAll('.game-item');
    items.forEach(function(item) {
      var text = item.textContent.toLowerCase();
      var match = text.indexOf(filter) > -1;
      item.style.display = match ? '' : 'none';
      if (match) anyVisible = true;
    });
    dir.style.display = anyVisible ? '' : 'none';
    if (anyVisible) anyDirVisible = true;
  });
  document.getElementById('noResults').style.display = anyDirVisible ? 'none' : '';
});