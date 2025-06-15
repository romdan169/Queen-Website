<script>
  function pindah(dari, ke) {
    document.getElementById(dari).classList.remove('aktif');
    setTimeout(() => {
      document.getElementById(dari).style.display = 'none';
      const tujuan = document.getElementById(ke);
      tujuan.style.display = 'block';
      setTimeout(() => tujuan.classList.add('aktif'), 10);
    }, 500);
  }

  // Zoom gambar galeri
  function zoomGambar(img) {
[15/6, 09.33] ChatGPT: const overlay = document.getElementById('overlay');
    const imgZoom = document.getElementById('imgZoom');
    imgZoom.src = img.src;
    overlay.style.display = 'flex';
  }
  function tutupZoom() {
    document.getElementById('overlay').style.display = 'none';
  }
</script>
