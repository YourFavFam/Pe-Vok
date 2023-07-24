function hitungSetiapVokal(kalimat) {
    const vokal = ['a', 'i', 'u', 'e', 'o'];
    const hitungVokal = {};
  
    // Inisialisasi hitungan awal untuk setiap huruf vokal dengan nilai 0
    for (let huruf of vokal) {
      hitungVokal[huruf] = 0;
    }
  
    for (let huruf of kalimat.toLowerCase()) {
      if (vokal.includes(huruf)) {
        hitungVokal[huruf]++;
      }
    }
  
    return hitungVokal;
  }
  
  function hitungVokal() {
    const kalimat = document.getElementById('inputKalimat').value;
    const hitungVokalPerHuruf = hitungSetiapVokal(kalimat);
  
    let outputHtml = `<p>Berikut adalah Jumlah Huruf Vokal dari kalimat "${kalimat}":</p><ul>`;
    for (let huruf in hitungVokalPerHuruf) {
      outputHtml += `<li>${huruf}: ${hitungVokalPerHuruf[huruf]}</li>`;
    }
    outputHtml += '</ul>';
  
    document.getElementById('output').innerHTML = outputHtml;
  }
  
  function hapusSemua() {
    document.getElementById('output').innerHTML = '';
  }
  