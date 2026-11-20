// Mengisi isi modal sesuai tombol detail produk yang dipilih.
const modalProduk = document.getElementById("modalProduk");

if (modalProduk) {
  modalProduk.addEventListener("show.bs.modal", function (event) {
    const tombol = event.relatedTarget;
    const nama = tombol.getAttribute("data-product");
    const deskripsi = tombol.getAttribute("data-description");

    document.getElementById("namaProduk").textContent = nama;
    document.getElementById("deskripsiProduk").textContent = deskripsi;
  });
}

// Simulasi pengiriman form karena tugas ini tidak menggunakan backend/database.
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    document.getElementById("formSuccess").classList.remove("d-none");
    contactForm.reset();
  });
}
