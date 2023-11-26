var popover1 = new bootstrap.Popover(document.getElementById('popoverBtn'), {
    container: 'body',
    placement: 'bottom',
    content: 'Refresh',
  });

  var popover2 = new bootstrap.Popover(document.getElementById('popoverBtn2'), {
    container: 'body',
    placement: 'top',
    content: 'Halaman ini belum dibuat',
  });
  
  document.getElementById('ntfks').addEventListener('click', function() {
  window.location.href = 'ntfks.html'; 
});

  document.getElementById('exp').addEventListener('click', function() {
  window.location.href = 'exp.html'; 
});