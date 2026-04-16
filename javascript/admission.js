document.getElementById("admissionForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let modal = new bootstrap.Modal(document.getElementById('successModal'));
  modal.show();

  this.reset();
});