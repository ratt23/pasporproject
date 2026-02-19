import imgReq from '../assets/req_docs.png';
import img1 from '../assets/step1_download.png';
import img2 from '../assets/step2_register.png';
import img3 from '../assets/step3_upload.png';
import img4 from '../assets/step4_schedule.png';
import img5 from '../assets/step5_payment.png';
import img6 from '../assets/step6_visit.png';
import img7 from '../assets/step7_pickup.png';

export const SITE_TITLE = "Panduan Paspor";
// Split the intro title as requested: "Selamat datang di" (small) + "Panduan Membuat Paspor" (big)
// We will handle the splitting in the UI component or adjust here.
// The image shows: "Selamat datang di" on top line, "Panduan Membuat Paspor" on second line.
export const INTRO_PRE = "Selamat datang di";
export const INTRO_MAIN = "Panduan Membuat Paspor";

export const INTRO_SUBTITLE = "Ikuti langkah-langkah berikut, tekan Next untuk lanjut.";

export const STEPS = [
    {
        title: "Syarat Dokumen (Asli & Fotokopi)",
        body: "KTP Elektronik aktif.\n2. Kartu Keluarga (KK).\n3. Akta Lahir/Ijazah/Buku Nikah (pilih satu).\n4. Paspor lama (jika perpanjangan).",
        image: imgReq
    },
    {
        title: "Unduh Aplikasi M-Paspor",
        body: "Dapatkan aplikasi M-Paspor di Google Play Store atau App Store untuk memulai pengajuan.",
        image: img1
    },
    {
        title: "Daftar Akun & Ajukan",
        body: "Buat akun, pilih 'Pengajuan Paspor Baru', dan lengkapi formulir data diri sesuai identitas.",
        image: img2
    },
    {
        title: "Unggah Dokumen",
        body: "Foto dan unggah berkas persyaratan (KTP, KK, Akta/Ijazah/Buku Nikah) di aplikasi.",
        image: img3
    },
    {
        title: "Pilih Kantor & Jadwal",
        body: "Tentukan lokasi kantor imigrasi dan pilih tanggal serta jam kedatangan untuk wawancara.",
        image: img4
    },
    {
        title: "Bayar Biaya Paspor",
        body: "Lakukan pembayaran kode billing via Bank/Pos/Indomaret dalam batas waktu yang ditentukan.",
        image: img5
    },
    {
        title: "Wawancara & Foto",
        body: "Datang sesuai jadwal bawa dokumen ASLI dan bukti bayar. Pakai baju rapi (bukan putih).",
        image: img6
    },
    {
        title: "Pengambilan Paspor",
        body: "Paspor selesai dalam 4-5 hari kerja. Bawa KTP dan bukti pengambilan saat datang.",
        image: img7
    },
    {
        title: "Biaya Pembuatan",
        body: "• Paspor Biasa (48 Hal): Rp350.000\n• Paspor Elektronik (48 Hal): Rp650.000\n\n*Harga estimasi, dapat berubah.",
        image: img5
    }
];
